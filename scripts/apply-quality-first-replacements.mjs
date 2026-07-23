import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const collectionPath = path.join(root, 'content', 'wikimedia-collection.json')
const rawPath = path.join(root, 'content', 'imports', 'wikimedia-collection-raw.json')
const coverDir = path.join(root, 'public', 'covers')
const retrievedAt = '2026-07-23'

const replacements = [
  {
    code: 'M-9702', requestedTitle: 'Homogenic', wikipediaTitle: 'Homogenic',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Homogenic', qid: 'Q617046',
    revisionId: 1364184535, revisionTimestamp: '2026-07-15T01:13:00Z',
    extract: 'Homogenic is the third studio album by Icelandic recording artist Björk. It was released on 20 September 1997 by One Little Indian Records. Produced by Björk and several collaborators, the album marked a stylistic change by combining electronic beats and string instruments.',
    titleLines: ['HOMOGENIC'], subtitle: 'BJÖRK / 1997', accent: '#756b8f',
  },
  {
    code: 'A-9703', requestedTitle: 'Perfect Blue', wikipediaTitle: 'Perfect Blue',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Perfect_Blue', qid: 'Q1205051',
    revisionId: 1365290863, revisionTimestamp: '2026-07-21T13:25:00Z',
    extract: 'Perfect Blue is a 1997 Japanese animated psychological horror film directed by Satoshi Kon. It follows a former idol pursuing an acting career while stalking, murders and a destabilized sense of reality blur fantasy and reality.',
    titleLines: ['PERFECT', 'BLUE'], subtitle: 'SATOSHI KON / 1997', accent: '#725b78',
  },
  {
    code: 'M-0202', requestedTitle: 'Yankee Hotel Foxtrot', wikipediaTitle: 'Yankee Hotel Foxtrot',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Yankee_Hotel_Foxtrot', qid: 'Q1091995',
    revisionId: 1361031216, revisionTimestamp: '2026-06-25T05:11:00Z',
    extract: 'Yankee Hotel Foxtrot is the fourth studio album by American rock band Wilco. It was first streamed on the band website in 2001 and received a retail release through Nonesuch Records in 2002, presenting a more atmospheric and experimental sound.',
    titleLines: ['YANKEE HOTEL', 'FOXTROT'], subtitle: 'WILCO / 2002', accent: '#8d8172',
  },
  {
    code: 'G-0202', requestedTitle: 'Metroid Prime', wikipediaTitle: 'Metroid Prime',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Metroid_Prime', qid: 'Q1765733',
    revisionId: 1364267283, revisionTimestamp: '2026-07-15T15:15:00Z',
    extract: 'Metroid Prime is a 2002 action-adventure game developed by Retro Studios and published by Nintendo for the GameCube. It was the first Metroid game to use three-dimensional computer graphics and a first-person perspective.',
    titleLines: ['METROID', 'PRIME'], subtitle: 'RETRO STUDIOS / 2002', accent: '#527f82',
  },
  {
    code: 'N-0301', requestedTitle: 'The Known World', wikipediaTitle: 'The Known World',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/The_Known_World', qid: 'Q7744892',
    revisionId: 1357986606, revisionTimestamp: '2026-06-05T21:48:00Z',
    extract: 'The Known World is a 2003 historical novel by Edward P. Jones. Set in Virginia during the antebellum era, it examines the ownership of Black slaves by both White and Black Americans.',
    titleLines: ['THE KNOWN', 'WORLD'], subtitle: 'EDWARD P. JONES / 2003', accent: '#695c4d',
  },
  {
    code: 'C-0502', requestedTitle: 'Vinland Saga (manga)', wikipediaTitle: 'Vinland Saga (manga)',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Vinland_Saga_(manga)', qid: 'Q930990',
    revisionId: 1364850480, revisionTimestamp: '2026-07-18T22:06:00Z',
    extract: 'Vinland Saga is a Japanese manga series written and illustrated by Makoto Yukimura. It began serialization in 2005 and follows a fictionalized Thorfinn as he changes from a revenge-driven teenager into a pacifistic young man.',
    titleLines: ['VINLAND', 'SAGA'], subtitle: 'MAKOTO YUKIMURA / 2005', accent: '#7a6045',
  },
  {
    code: 'G-9902', requestedTitle: 'Shenmue (video game)', wikipediaTitle: 'Shenmue (video game)',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Shenmue_(video_game)', qid: 'Q654354',
    revisionId: 1364856567, revisionTimestamp: '2026-07-18T23:01:00Z',
    extract: 'Shenmue is a 1999 action-adventure game developed and published by Sega for the Dreamcast. Its detailed open world includes interactive objects, day and night, changing weather, scheduled non-player characters and quick-time events.',
    titleLines: ['SHENMUE'], subtitle: 'SEGA AM2 / 1999', accent: '#657b78',
  },
  {
    code: 'A-0102', requestedTitle: 'Millennium Actress', wikipediaTitle: 'Millennium Actress',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Millennium_Actress', qid: 'Q939736',
    revisionId: 1361996976, revisionTimestamp: '2026-07-01T09:13:00Z',
    extract: 'Millennium Actress is a 2001 Japanese animated drama film co-written and directed by Satoshi Kon and produced by Madhouse. As a retired actress recounts her life, the boundary between cinema and reality gradually becomes blurred.',
    titleLines: ['MILLENNIUM', 'ACTRESS'], subtitle: 'SATOSHI KON / 2001', accent: '#a06b55',
  },
  {
    code: 'G-0302', requestedTitle: 'Star Wars: Knights of the Old Republic (video game)',
    wikipediaTitle: 'Star Wars: Knights of the Old Republic (video game)',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Star_Wars:_Knights_of_the_Old_Republic_(video_game)', qid: 'Q725902',
    revisionId: 1364988818, revisionTimestamp: '2026-07-19T17:49:00Z',
    extract: 'Star Wars: Knights of the Old Republic is a role-playing video game developed by BioWare and published by LucasArts. It was released for Xbox and Windows in 2003 and became the first installment of the Knights of the Old Republic series.',
    titleLines: ['STAR WARS:', 'KNIGHTS OF THE', 'OLD REPUBLIC'], subtitle: 'BIOWARE / 2003', accent: '#6a746d',
  },
]

const escapeXml = value => value.replace(/[&<>'"]/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&apos;', '"': '&quot;',
})[character])

const createTitleCard = item => {
  const title = item.titleLines.map((line, index) =>
    `<text x="72" y="${590 + index * 76}" font-family="Arial, sans-serif" font-size="58" font-weight="700" fill="#171613">${escapeXml(line)}</text>`
  ).join('')
  return `<svg xmlns="http://www.w3.org/2000/svg" width="720" height="960" viewBox="0 0 720 960"><rect width="720" height="960" fill="#d8d0c2"/><rect x="42" y="42" width="636" height="876" fill="none" stroke="#171613" stroke-width="4"/><rect x="72" y="120" width="576" height="260" fill="${item.accent}"/><circle cx="360" cy="250" r="88" fill="none" stroke="#f4efe6" stroke-width="6"/><path d="M272 250h176M360 162v176" stroke="#f4efe6" stroke-width="4"/><text x="72" y="92" font-family="monospace" font-size="25" fill="#171613">THE 9505s / ${item.code}</text>${title}<text x="72" y="855" font-family="monospace" font-size="22" fill="#4f4942">${escapeXml(item.subtitle)}</text><text x="72" y="892" font-family="monospace" font-size="18" fill="#6f675d">ORIGINAL ARCHIVE TITLE CARD / CC0</text></svg>`
}

await mkdir(coverDir, { recursive: true })
const collection = JSON.parse((await readFile(collectionPath, 'utf8')).replace(/^\uFEFF/, ''))
const raw = JSON.parse((await readFile(rawPath, 'utf8')).replace(/^\uFEFF/, ''))
const collectionByCode = new Map(collection.map(item => [item.code, item]))
const rawByCode = new Map(raw.map(item => [item.code, item]))

for (const item of replacements) {
  const localName = `${item.code.toLowerCase()}.svg`
  const localSrc = `./covers/${localName}`
  const cover = {
    filename: null,
    sourcePage: item.wikipediaUrl,
    originalUrl: null,
    localSrc,
    license: 'CC0 1.0',
    licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/',
    artist: 'THE 9505s Archive',
    generated: true,
  }
  collectionByCode.set(item.code, {
    code: item.code,
    qid: item.qid,
    wikipediaTitle: item.wikipediaTitle,
    wikipediaUrl: item.wikipediaUrl,
    revisionId: item.revisionId,
    revisionTimestamp: item.revisionTimestamp,
    sourcePage: item.wikipediaUrl,
    originalUrl: null,
    localSrc,
    license: 'CC0 1.0',
    assetType: 'title-card',
  })
  rawByCode.set(item.code, {
    code: item.code,
    requestedTitle: item.requestedTitle,
    title: item.wikipediaTitle,
    qid: item.qid,
    wikipediaUrl: item.wikipediaUrl,
    revisionId: item.revisionId,
    revisionTimestamp: item.revisionTimestamp,
    extract: item.extract,
    cover,
    retrievedAt,
  })
  await writeFile(path.join(coverDir, localName), createTitleCard(item), 'utf8')
}

await writeFile(collectionPath, `${JSON.stringify([...collectionByCode.values()], null, 2)}\n`, 'utf8')
await writeFile(rawPath, `${JSON.stringify([...rawByCode.values()], null, 2)}\n`, 'utf8')
console.log(`Applied ${replacements.length} confirmed replacements with verified Wikipedia identities and CC0 title cards.`)
