import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const collectionPath = path.join(root, 'content', 'wikimedia-collection.json')
const rawPath = path.join(root, 'content', 'imports', 'wikimedia-collection-raw.json')
const coverDir = path.join(root, 'public', 'covers')
const userAgent = process.env.WIKIMEDIA_USER_AGENT || 'ACGN-9505s/1.0 (https://github.com/Courtshipfy/acgn-9505s)'

const additions = [
  ['M-9501', 'Music of Neon Genesis Evangelion'],
  ['M-9502', 'Music of Chrono Trigger'],
  ['M-9601', 'List of Rurouni Kenshin soundtracks'],
  ['M-9701', 'Princess Mononoke'],
  ['M-9702', 'Music of Final Fantasy VII'],
  ['M-9801', 'Cowboy Bebop (album)'],
  ['M-9901', 'Pokémon 2.B.A. Master'],
  ['M-0001', 'Music of FLCL'],
  ['M-0002', 'Jet Set Radio'],
  ['M-0101', 'Music of Final Fantasy X'],
  ['M-0201', 'Music of Kingdom Hearts'],
  ['M-0202', '.hack//Sign'],
  ['M-0301', 'List of Naruto soundtracks'],
  ['M-0401', 'Music of Samurai Champloo'],
  ['M-0402', 'Music of the Katamari Damacy series'],
  ['M-0501', 'Music of the Final Fantasy VII series'],
  ['M-0502', 'Shadow of the Colossus'],
  ['N-9501', 'Parasite Eve (novel)'],
  ['N-9502', 'Northern Lights (Pullman novel)'],
  ['N-9601', 'Neverwhere (novel)'],
  ['N-9602', 'A Game of Thrones'],
  ['N-9701', "Harry Potter and the Philosopher's Stone"],
  ['N-9702', 'The Subtle Knife'],
  ['N-9801', 'Boogiepop and Others'],
  ['N-9802', 'Maria-sama ga Miteru'],
  ['N-9901', 'Battle Royale (novel)'],
  ['N-9902', 'Gardens of the Moon'],
  ['N-0001', "Kino's Journey"],
  ['N-0002', 'The Amber Spyglass'],
  ['N-0101', 'American Gods'],
  ['N-0102', 'Mortal Engines'],
  ['N-0201', 'Shakugan no Shana'],
  ['N-0202', 'Coraline'],
  ['N-0301', 'Haruhi Suzumiya'],
  ['N-0302', 'Brave Story'],
  ['N-0401', 'All You Need Is Kill'],
  ['N-0402', 'Jonathan Strange & Mr Norrell'],
  ['N-0501', 'Never Let Me Go (novel)'],
  ['N-0502', 'The Lightning Thief'],
]

const fetchJson = async url => {
  const response = await fetch(url, { headers: { 'Api-User-Agent': userAgent, 'User-Agent': userAgent } })
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`)
  return response.json()
}

const fetchPage = async title => {
  const params = new URLSearchParams({
    action: 'query', format: 'json', formatversion: '2', redirects: '1',
    prop: 'pageprops|pageimages|info|revisions|extracts', titles: title,
    piprop: 'name|original', pilicense: 'any', inprop: 'url',
    rvprop: 'ids|timestamp', exintro: '1', explaintext: '1',
  })
  const data = await fetchJson(`https://en.wikipedia.org/w/api.php?${params}`)
  const page = data.query?.pages?.[0]
  if (!page || page.missing || !page.pageprops?.wikibase_item) throw new Error(`No verified page for ${title}`)
  return page
}

const fetchCover = async (page, code) => {
  let filename = page.pageimage
  if (!filename) {
    const imageParams = new URLSearchParams({
      action: 'query', format: 'json', formatversion: '2', prop: 'images',
      titles: page.title, imlimit: 'max',
    })
    const imageData = await fetchJson(`https://en.wikipedia.org/w/api.php?${imageParams}`)
    const candidates = (imageData.query?.pages?.[0]?.images || []).map(item => item.title.replace(/^File:/, ''))
    filename = candidates.find(name => /cover|box|poster|logo|album|jacket/i.test(name))
  }
  if (!filename) {
    const localName = `${code.toLowerCase()}.svg`
    const safeTitle = page.title.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character])
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="960" viewBox="0 0 720 960"><rect width="720" height="960" fill="#d8d0c2"/><rect x="42" y="42" width="636" height="876" fill="none" stroke="#171613" stroke-width="4"/><text x="70" y="115" font-family="monospace" font-size="28" fill="#171613">THE 9505s / ${code}</text><text x="70" y="760" font-family="sans-serif" font-size="52" font-weight="700" fill="#171613">${safeTitle}</text><text x="70" y="850" font-family="monospace" font-size="22" fill="#6f675d">ORIGINAL ARCHIVE TITLE CARD</text></svg>`
    await writeFile(path.join(coverDir, localName), svg, 'utf8')
    return {
      filename: null,
      sourcePage: page.fullurl,
      originalUrl: null,
      localSrc: `./covers/${localName}`,
      license: 'CC0 1.0',
      licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
      artist: 'THE 9505s Archive',
      generated: true,
    }
  }
  const params = new URLSearchParams({
    action: 'query', format: 'json', formatversion: '2', prop: 'imageinfo',
    titles: `File:${filename}`, iiprop: 'url|extmetadata',
  })
  const data = await fetchJson(`https://en.wikipedia.org/w/api.php?${params}`)
  const info = data.query?.pages?.[0]?.imageinfo?.[0]
  if (!info?.url) throw new Error(`No image URL for ${code} / ${filename}`)

  const extension = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg']
    .includes(path.extname(new URL(info.url).pathname).toLowerCase())
    ? path.extname(new URL(info.url).pathname).toLowerCase()
    : '.jpg'
  const localName = `${code.toLowerCase()}${extension}`
  const response = await fetch(info.url, { headers: { 'User-Agent': userAgent } })
  if (!response.ok) throw new Error(`${response.status} downloading ${info.url}`)
  await writeFile(path.join(coverDir, localName), Buffer.from(await response.arrayBuffer()))

  return {
    filename,
    sourcePage: info.descriptionurl,
    originalUrl: info.url,
    localSrc: `./covers/${localName}`,
    license: info.extmetadata?.LicenseShortName?.value || 'Wikipedia identification image; reuse status not independently granted',
    licenseUrl: info.extmetadata?.LicenseUrl?.value || null,
    artist: String(info.extmetadata?.Artist?.value || '').replace(/<[^>]+>/g, '').trim(),
  }
}

await mkdir(coverDir, { recursive: true })
const collection = JSON.parse((await readFile(collectionPath, 'utf8')).replace(/^\uFEFF/, ''))
const raw = JSON.parse((await readFile(rawPath, 'utf8')).replace(/^\uFEFF/, ''))
const collectionByCode = new Map(collection.map(item => [item.code, item]))
const rawByCode = new Map(raw.map(item => [item.code, item]))

for (const [code, requestedTitle] of additions) {
  const page = await fetchPage(requestedTitle)
  const cover = await fetchCover(page, code)
  const record = {
    code,
    qid: page.pageprops.wikibase_item,
    wikipediaTitle: page.title,
    wikipediaUrl: page.fullurl,
    revisionId: page.revisions?.[0]?.revid,
    revisionTimestamp: page.revisions?.[0]?.timestamp,
    sourcePage: cover.sourcePage,
    originalUrl: cover.originalUrl,
    localSrc: cover.localSrc,
    license: cover.license,
    assetType: cover.generated ? 'title-card' : 'cover',
  }
  collectionByCode.set(code, record)
  rawByCode.set(code, {
    code, requestedTitle, title: page.title, qid: record.qid,
    wikipediaUrl: record.wikipediaUrl, revisionId: record.revisionId,
    revisionTimestamp: record.revisionTimestamp, extract: page.extract || '',
    cover, retrievedAt: new Date().toISOString().slice(0, 10),
  })
  console.log(`${code} ${page.title} ${record.qid}`)
}

await writeFile(collectionPath, `${JSON.stringify([...collectionByCode.values()], null, 2)}\n`, 'utf8')
await writeFile(rawPath, `${JSON.stringify([...rawByCode.values()], null, 2)}\n`, 'utf8')
console.log(`Saved ${additions.length} additions; collection now has ${collectionByCode.size} imported records.`)
