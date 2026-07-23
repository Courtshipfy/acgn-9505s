import { access, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

const root = process.cwd()
const collectionPath = path.join(root, 'content', 'wikimedia-collection.json')
const rawPath = path.join(root, 'content', 'imports', 'wikimedia-collection-raw.json')
const retrievedAt = '2026-07-23'

const replacements = [
  {
    code: 'M-9702', requestedTitle: 'Homogenic', wikipediaTitle: 'Homogenic',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Homogenic', qid: 'Q617046',
    revisionId: 1364184535, revisionTimestamp: '2026-07-15T01:13:00Z',
    extract: 'Homogenic is the third studio album by Icelandic recording artist Björk. It was released on 20 September 1997 by One Little Indian Records. Produced by Björk and several collaborators, the album marked a stylistic change by combining electronic beats and string instruments.',
  },
  {
    code: 'A-9703', requestedTitle: 'Perfect Blue', wikipediaTitle: 'Perfect Blue',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Perfect_Blue', qid: 'Q1205051',
    revisionId: 1365290863, revisionTimestamp: '2026-07-21T13:25:00Z',
    extract: 'Perfect Blue is a 1997 Japanese animated psychological horror film directed by Satoshi Kon. It follows a former idol pursuing an acting career while stalking, murders and a destabilized sense of reality blur fantasy and reality.',
  },
  {
    code: 'M-0202', requestedTitle: 'Yankee Hotel Foxtrot', wikipediaTitle: 'Yankee Hotel Foxtrot',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Yankee_Hotel_Foxtrot', qid: 'Q1091995',
    revisionId: 1361031216, revisionTimestamp: '2026-06-25T05:11:00Z',
    extract: 'Yankee Hotel Foxtrot is the fourth studio album by American rock band Wilco. It was first streamed on the band website in 2001 and received a retail release through Nonesuch Records in 2002, presenting a more atmospheric and experimental sound.',
  },
  {
    code: 'G-0202', requestedTitle: 'Metroid Prime', wikipediaTitle: 'Metroid Prime',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Metroid_Prime', qid: 'Q1765733',
    revisionId: 1364267283, revisionTimestamp: '2026-07-15T15:15:00Z',
    extract: 'Metroid Prime is a 2002 action-adventure game developed by Retro Studios and published by Nintendo for the GameCube. It was the first Metroid game to use three-dimensional computer graphics and a first-person perspective.',
  },
  {
    code: 'N-0301', requestedTitle: 'The Known World', wikipediaTitle: 'The Known World',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/The_Known_World', qid: 'Q7744892',
    revisionId: 1357986606, revisionTimestamp: '2026-06-05T21:48:00Z',
    extract: 'The Known World is a 2003 historical novel by Edward P. Jones. Set in Virginia during the antebellum era, it examines the ownership of Black slaves by both White and Black Americans.',
  },
  {
    code: 'C-0502', requestedTitle: 'Vinland Saga (manga)', wikipediaTitle: 'Vinland Saga (manga)',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Vinland_Saga_(manga)', qid: 'Q930990',
    revisionId: 1364850480, revisionTimestamp: '2026-07-18T22:06:00Z',
    extract: 'Vinland Saga is a Japanese manga series written and illustrated by Makoto Yukimura. It began serialization in 2005 and follows a fictionalized Thorfinn as he changes from a revenge-driven teenager into a pacifistic young man.',
  },
  {
    code: 'G-9902', requestedTitle: 'Shenmue (video game)', wikipediaTitle: 'Shenmue (video game)',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Shenmue_(video_game)', qid: 'Q654354',
    revisionId: 1364856567, revisionTimestamp: '2026-07-18T23:01:00Z',
    extract: 'Shenmue is a 1999 action-adventure game developed and published by Sega for the Dreamcast. Its detailed open world includes interactive objects, day and night, changing weather, scheduled non-player characters and quick-time events.',
  },
  {
    code: 'A-0102', requestedTitle: 'Millennium Actress', wikipediaTitle: 'Millennium Actress',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Millennium_Actress', qid: 'Q939736',
    revisionId: 1361996976, revisionTimestamp: '2026-07-01T09:13:00Z',
    extract: 'Millennium Actress is a 2001 Japanese animated drama film co-written and directed by Satoshi Kon and produced by Madhouse. As a retired actress recounts her life, the boundary between cinema and reality gradually becomes blurred.',
  },
  {
    code: 'G-0302', requestedTitle: 'Star Wars: Knights of the Old Republic (video game)',
    wikipediaTitle: 'Star Wars: Knights of the Old Republic (video game)',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Star_Wars:_Knights_of_the_Old_Republic_(video_game)', qid: 'Q725902',
    revisionId: 1364988818, revisionTimestamp: '2026-07-19T17:49:00Z',
    extract: 'Star Wars: Knights of the Old Republic is a role-playing video game developed by BioWare and published by LucasArts. It was released for Xbox and Windows in 2003 and became the first installment of the Knights of the Old Republic series.',
  },
]

const realCovers = {
  'M-9702': ['https://en.wikipedia.org/wiki/File:Bj%C3%B6rk_-_Homogenic.png', 'https://upload.wikimedia.org/wikipedia/en/a/af/Bj%C3%B6rk_-_Homogenic.png', './covers/m-9702.png'],
  'A-9703': ['https://en.wikipedia.org/wiki/File:Perfectblueposter.png', 'https://upload.wikimedia.org/wikipedia/en/2/2a/Perfectblueposter.png', './covers/a-9703.png'],
  'M-0202': ['https://en.wikipedia.org/wiki/File:Yankee_Hotel_Foxtrot_(Front_Cover).png', 'https://upload.wikimedia.org/wikipedia/en/1/1c/Yankee_Hotel_Foxtrot_%28Front_Cover%29.png', './covers/m-0202.png'],
  'G-0202': ['https://en.wikipedia.org/wiki/File:MetroidPrimebox.jpg', 'https://upload.wikimedia.org/wikipedia/en/b/ba/MetroidPrimebox.jpg', './covers/g-0202.jpg'],
  'N-0301': ['https://en.wikipedia.org/wiki/File:EdwardPJones_TheKnownWorld.jpg', 'https://upload.wikimedia.org/wikipedia/en/6/60/EdwardPJones_TheKnownWorld.jpg', './covers/n-0301.jpg'],
  'C-0502': ['https://en.wikipedia.org/wiki/File:Vinland_Saga_volume_01_cover.jpg', 'https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg', './covers/c-0502.jpg'],
  'G-9902': ['https://en.wikipedia.org/wiki/File:ShenmueDCbox.jpg', 'https://upload.wikimedia.org/wikipedia/en/e/e2/ShenmueDCbox.jpg', './covers/g-9902.jpg'],
  'A-0102': ['https://en.wikipedia.org/wiki/File:Sennenyoyu.jpg', 'https://upload.wikimedia.org/wikipedia/en/e/ee/Sennenyoyu.jpg', './covers/a-0102.jpg'],
  'G-0302': ['https://en.wikipedia.org/wiki/File:Kotorbox.jpg', 'https://upload.wikimedia.org/wikipedia/en/1/11/Kotorbox.jpg', './covers/g-0302.jpg'],
}

const collection = JSON.parse((await readFile(collectionPath, 'utf8')).replace(/^\uFEFF/, ''))
const raw = JSON.parse((await readFile(rawPath, 'utf8')).replace(/^\uFEFF/, ''))
const collectionByCode = new Map(collection.map(item => [item.code, item]))
const rawByCode = new Map(raw.map(item => [item.code, item]))

for (const item of replacements) {
  const [sourcePage, originalUrl, localSrc] = realCovers[item.code]
  await access(path.join(root, 'public', localSrc.replace(/^\.\//, '')))
  const cover = {
    filename: decodeURIComponent(new URL(originalUrl).pathname.split('/').pop()),
    sourcePage,
    originalUrl,
    localSrc,
    license: 'Fair use; Wikipedia identification image',
    licenseUrl: null,
    artist: '',
    generated: false,
  }
  collectionByCode.set(item.code, {
    code: item.code,
    qid: item.qid,
    wikipediaTitle: item.wikipediaTitle,
    wikipediaUrl: item.wikipediaUrl,
    revisionId: item.revisionId,
    revisionTimestamp: item.revisionTimestamp,
    sourcePage,
    originalUrl,
    localSrc,
    license: cover.license,
    assetType: 'cover',
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
}

await writeFile(collectionPath, `${JSON.stringify([...collectionByCode.values()], null, 2)}\n`, 'utf8')
await writeFile(rawPath, `${JSON.stringify([...rawByCode.values()], null, 2)}\n`, 'utf8')
console.log(`Applied ${replacements.length} confirmed replacements with verified Wikipedia identities and real identification covers.`)
