import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { archiveItems } from '../src/data.js'
import { createEntryHash, filterArchive, getRegions, getRelatedSignals, parseEntryHash, toggleFavoriteCode } from '../src/archive.js'
import { pilotMetadata } from '../src/pilot-metadata.js'
import { collectionMetadata } from '../src/collection-metadata.js'

test('馆藏完整覆盖 1995—2005 与四个频道', () => {
  for (let year = 1995; year <= 2005; year += 1) {
    for (const type of ['音乐', '动漫', '漫画', '游戏']) {
      assert.ok(archiveItems.some(item => item.year === year && item.type === type), `${year} 缺少 ${type}`)
    }
  }
  assert.equal(new Set(archiveItems.map(item => item.code)).size, archiveItems.length)
})

test('搜索可匹配标题、作者、地区、标签和简介', () => {
  assert.deepEqual(filterArchive(archiveItems, { query: '周杰伦' }).map(item => item.code), ['M-0002'])
  assert.ok(filterArchive(archiveItems, { query: '赛博朋克' }).some(item => item.code === 'A-0201'))
  assert.ok(filterArchive(archiveItems, { query: '马里' }).some(item => item.code === 'M-0202'))
})

test('年份、频道、地区与收藏筛选可以组合', () => {
  const result = filterArchive(archiveItems, {
    year: 2005,
    type: '音乐',
    region: '英国／斯里兰卡',
    favorites: ['M-0502'],
    favoritesOnly: true,
  })
  assert.deepEqual(result.map(item => item.code), ['M-0502'])
})

test('排序支持时间正序、倒序与标题顺序', () => {
  const ascending = filterArchive(archiveItems, { sort: 'year-asc' })
  const descending = filterArchive(archiveItems, { sort: 'year-desc' })
  assert.equal(ascending[0].year, 1995)
  assert.equal(descending[0].year, 2005)
  assert.equal(filterArchive(archiveItems, { query: 'Radiohead', sort: 'title' }).length, 2)
})

test('收藏切换不会修改原数组', () => {
  const original = ['M-9501']
  const added = toggleFavoriteCode(original, 'A-9501')
  const removed = toggleFavoriteCode(added, 'M-9501')
  assert.deepEqual(original, ['M-9501'])
  assert.deepEqual(added, ['M-9501', 'A-9501'])
  assert.deepEqual(removed, ['A-9501'])
})

test('作品深链接可以往返解析并拒绝普通锚点', () => {
  const hash = createEntryHash('M-00 / 测试')
  assert.equal(parseEntryHash(hash), 'M-00 / 测试')
  assert.equal(parseEntryHash('#archive'), null)
  assert.equal(parseEntryHash('#entry/%E0%A4%A'), null)
})

test('相关推荐排除当前作品并遵守数量上限', () => {
  const current = archiveItems.find(item => item.code === 'A-9501')
  const related = getRelatedSignals(archiveItems, current, 3)
  assert.equal(related.length, 3)
  assert.ok(related.every(item => item.code !== current.code))
  assert.ok(related.some(item => item.year === current.year || item.type === current.type))
})

test('地区索引覆盖多个文化区域', () => {
  assert.ok(getRegions(archiveItems).length >= 10)
})

test('全部馆藏的 Wikimedia 简介和许可记录满足发布门槛', () => {
  const sourced = archiveItems.filter(item => item.source)
  assert.equal(sourced.length, archiveItems.length)
  assert.equal(Object.keys(collectionMetadata).length, archiveItems.length)
  for (const item of sourced) {
    assert.ok([...item.note].length >= 80 && [...item.note].length <= 140, `${item.code} 简介长度不合格`)
    assert.match(item.source.qid, /^Q\d+$/)
    assert.match(item.source.wikipediaUrl, /^https:\/\/(zh|en)\.wikipedia\.org\//)
    assert.equal(item.source.textLicense, 'CC BY-SA 4.0')
    assert.ok(item.source.revisionId)
    assert.ok(item.cover?.sourcePage)
  }
})

test('自由授权封面与资料性引用素材采用不同发布规则', () => {
  const approved = archiveItems.filter(item => item.cover?.status === 'approved')
  assert.equal(approved.length, 1)
  for (const item of approved) {
    assert.ok(item.cover.author)
    assert.ok(item.cover.license)
    assert.ok(item.cover.licenseUrl)
    assert.ok(item.cover.localSrc)
    assert.ok(existsSync(`public/${item.cover.localSrc.replace(/^\.\//, '')}`), `${item.code} 缺少本地封面文件`)
  }
  const referenced = archiveItems.filter(item => item.cover?.status === 'referenced')
  assert.equal(referenced.length, archiveItems.length - approved.length)
  for (const item of referenced) {
    assert.ok(item.cover.localSrc)
    assert.ok(existsSync(`public/${item.cover.localSrc.replace(/^\.\//, '')}`), `${item.code} 缺少本地引用素材`)
    assert.match(item.cover.originalUrl, /^https:\/\/(upload\.wikimedia\.org|zh\.wikipedia\.org\/wiki\/Special:Redirect\/file\/)/)
    assert.match(item.cover.sourcePage, /^https:\/\/(zh|en|commons)\.wikipedia|^https:\/\/commons\.wikimedia/)
    assert.match(item.cover.rightsNotice, /版权归原权利人/)
    assert.ok(['cover', 'logo'].includes(item.cover.assetType))
  }
})

test('完整 Wikimedia 快照覆盖所有新增馆藏且本地文件存在', () => {
  const snapshot = JSON.parse(readFileSync('content/imports/wikimedia-collection-raw.json', 'utf8').replace(/^\uFEFF/, ''))
  assert.equal(snapshot.length, 54)
  assert.equal(new Set(snapshot.map(item => item.code)).size, snapshot.length)
  assert.equal(new Set(snapshot.map(item => item.qid)).size, snapshot.length)
  for (const item of snapshot) {
    assert.ok(item.extract?.trim(), `${item.code} 缺少维基原始摘要`)
    assert.ok(item.cover?.localSrc, `${item.code} 缺少封面记录`)
    assert.ok(existsSync(`public/${item.cover.localSrc.replace(/^\.\//, '')}`), `${item.code} 缺少本地封面文件`)
  }
})

test('Wikimedia 原始快照与已审核试点元数据逐项对应', () => {
  const snapshot = JSON.parse(readFileSync('content/imports/wikimedia-raw.json', 'utf8'))
  assert.equal(snapshot.schemaVersion, 1)
  assert.equal(snapshot.publicationStatus, 'raw-local-snapshot-not-for-direct-publication')
  assert.equal(snapshot.textLicense.name, 'CC BY-SA 4.0')
  assert.equal(snapshot.items.length, 8)

  const reviewedEntries = Object.entries(pilotMetadata)
  assert.equal(reviewedEntries.length, snapshot.items.length)
  assert.equal(new Set(snapshot.items.map(item => item.code)).size, snapshot.items.length)
  assert.equal(new Set(snapshot.items.map(item => item.qid)).size, snapshot.items.length)

  for (const rawItem of snapshot.items) {
    const reviewed = pilotMetadata[rawItem.code]
    assert.ok(reviewed, `${rawItem.code} 缺少已审核元数据`)
    assert.equal(rawItem.qid, reviewed.source.qid)
    assert.equal(rawItem.revisionId, reviewed.source.revisionId)
    assert.equal(rawItem.revisionTimestamp, reviewed.source.revisionTimestamp)
    assert.equal(rawItem.wikipediaUrl, reviewed.source.wikipediaUrl)
    assert.equal(rawItem.textLicense, reviewed.source.textLicense)
    assert.ok(rawItem.extract?.trim(), `${rawItem.code} 缺少维基原始摘要`)
  }
})

test('页面运行时封面与字体不依赖第三方资源', () => {
  for (const item of archiveItems.filter(item => item.cover)) {
    assert.ok(item.cover.localSrc?.startsWith('./covers/'), `${item.code} 未使用本地封面路径`)
  }
  const styles = readFileSync('src/styles.css', 'utf8')
  assert.doesNotMatch(styles, /@import\s+url\(['"]https?:\/\//)
})
