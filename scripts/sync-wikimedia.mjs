import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const configPath = path.join(root, 'content', 'wikimedia-pilot.json')
const outputPath = path.join(root, 'content', 'imports', 'wikimedia-raw.json')
const userAgent = process.env.WIKIMEDIA_USER_AGENT || 'The9505s/0.1 (local cultural archive; contact: project maintainer)'

const config = JSON.parse(await readFile(configPath, 'utf8'))

if (!Array.isArray(config) || config.some(item => !item.code || !item.qid || !item.wikiTitle)) {
  throw new Error('content/wikimedia-pilot.json must contain code, qid, and wikiTitle for every entry')
}

async function fetchJson(url, attempt = 0) {
  try {
    const response = await fetch(url, {
      headers: {
        'Api-User-Agent': userAgent,
        'User-Agent': userAgent,
      },
    })
    if ((response.status === 429 || response.status === 503) && attempt < 3) {
      await new Promise(resolve => setTimeout(resolve, 1000 * (2 ** attempt)))
      return fetchJson(url, attempt + 1)
    }
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}: ${url}`)
    return response.json()
  } catch (error) {
    if (attempt >= 3) throw error
    await new Promise(resolve => setTimeout(resolve, 1000 * (2 ** attempt)))
    return fetchJson(url, attempt + 1)
  }
}

function suggestDescription(text, maxLength = 140) {
  const normalized = text.replace(/\s+/g, ' ').trim()
  if (normalized.length <= maxLength) return normalized
  const candidate = normalized.slice(0, maxLength + 1)
  const boundary = Math.max(candidate.lastIndexOf('。'), candidate.lastIndexOf('；'), candidate.lastIndexOf('，'))
  return `${candidate.slice(0, boundary > 80 ? boundary + 1 : maxLength).trim()}…`
}

const imported = []

for (const item of config) {
  const params = new URLSearchParams({
    action: 'query',
    format: 'json',
    formatversion: '2',
    redirects: '1',
    prop: 'extracts|info|revisions',
    exintro: '1',
    explaintext: '1',
    exchars: '1000',
    inprop: 'url',
    rvprop: 'ids|timestamp',
    titles: item.wikiTitle,
  })
  const wikiApiUrl = `https://zh.wikipedia.org/w/api.php?${params}`
  const wiki = await fetchJson(wikiApiUrl)
  const entity = await fetchJson(`https://www.wikidata.org/wiki/Special:EntityData/${item.qid}.json`)
  const page = wiki.query?.pages?.[0]
  if (!page || page.missing) throw new Error(`Wikipedia page not found: ${item.wikiTitle}`)
  if (!entity.entities?.[item.qid]) throw new Error(`Wikidata entity not found: ${item.qid}`)

  imported.push({
    code: item.code,
    qid: item.qid,
    requestedTitle: item.wikiTitle,
    resolvedTitle: page.title,
    wikipediaUrl: page.fullurl,
    wikidataUrl: `https://www.wikidata.org/wiki/${item.qid}`,
    rawExtract: page.extract || '',
    suggestedDescription: suggestDescription(page.extract || ''),
    revisionId: page.revisions?.[0]?.revid || null,
    revisionTimestamp: page.revisions?.[0]?.timestamp || null,
    fetchedAt: new Date().toISOString(),
    textLicense: 'CC BY-SA 4.0',
    textLicenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
    apiUrl: wikiApiUrl,
  })
}

await mkdir(path.dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${JSON.stringify(imported, null, 2)}\n`, 'utf8')
console.log(`Saved ${imported.length} Wikimedia snapshots to ${path.relative(root, outputPath)}`)
