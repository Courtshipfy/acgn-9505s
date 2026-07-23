import { access, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const collectionPath = path.join(root, 'content', 'wikimedia-collection.json')
const rawPath = path.join(root, 'content', 'imports', 'wikimedia-collection-raw.json')
const localSrc = './covers/g-9803.jpg'

const record = {
  code: 'G-9803',
  qid: 'Q279744',
  wikipediaTitle: 'Half-Life (video game)',
  wikipediaUrl: 'https://en.wikipedia.org/wiki/Half-Life_(video_game)',
  revisionId: 1364967271,
  revisionTimestamp: '2026-07-19T15:17:00Z',
  sourcePage: 'https://en.wikipedia.org/wiki/File:Half-Life_Cover_Art.jpg',
  originalUrl: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Half-Life_Cover_Art.jpg',
  localSrc,
  license: 'Fair use; Wikipedia identification image',
  assetType: 'cover',
}

const rawRecord = {
  code: record.code,
  requestedTitle: 'Half-Life (video game)',
  title: record.wikipediaTitle,
  qid: record.qid,
  wikipediaUrl: record.wikipediaUrl,
  revisionId: record.revisionId,
  revisionTimestamp: record.revisionTimestamp,
  extract: "Half-Life is a 1998 first-person shooter game developed by Valve Corporation and published by Sierra Studios for Windows. It was Valve's debut product and the first game in the Half-Life series. The player controls theoretical physicist Gordon Freeman as he escapes the Black Mesa Research Facility after a disastrous scientific experiment.",
  cover: {
    filename: 'Half-Life_Cover_Art.jpg',
    sourcePage: record.sourcePage,
    originalUrl: record.originalUrl,
    localSrc,
    license: record.license,
    licenseUrl: null,
    artist: '',
    generated: false,
  },
  retrievedAt: '2026-07-23',
}

await access(path.join(root, 'public', localSrc.replace(/^\.\//, '')))

const collection = JSON.parse((await readFile(collectionPath, 'utf8')).replace(/^\uFEFF/, ''))
const raw = JSON.parse((await readFile(rawPath, 'utf8')).replace(/^\uFEFF/, ''))
const collectionByCode = new Map(collection.map(item => [item.code, item]))
const rawByCode = new Map(raw.map(item => [item.code, item]))

collectionByCode.set(record.code, record)
rawByCode.set(rawRecord.code, rawRecord)

await writeFile(collectionPath, `${JSON.stringify([...collectionByCode.values()], null, 2)}\n`, 'utf8')
await writeFile(rawPath, `${JSON.stringify([...rawByCode.values()], null, 2)}\n`, 'utf8')

console.log(`Added ${record.code} ${record.wikipediaTitle} (${record.qid}).`)
