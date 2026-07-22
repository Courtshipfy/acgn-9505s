export function getRegions(items) {
  return ['全部', ...new Set(items.map(item => item.region))]
}

export function filterArchive(items, options = {}) {
  const {
    type = '全部',
    year = '全部',
    region = '全部',
    favorites = [],
    favoritesOnly = false,
    query = '',
    sort = 'year-asc',
  } = options
  const normalized = query.trim().toLocaleLowerCase()
  const result = items.filter(item => {
    const searchable = [item.title, item.creator, item.region, item.type, item.format, item.note, ...item.tags].join(' ').toLocaleLowerCase()
    return (type === '全部' || item.type === type) &&
      (year === '全部' || item.year === year) &&
      (region === '全部' || item.region === region) &&
      (!favoritesOnly || favorites.includes(item.code)) &&
      (!normalized || searchable.includes(normalized))
  })

  return [...result].sort((a, b) => {
    if (sort === 'year-desc') return b.year - a.year || a.title.localeCompare(b.title)
    if (sort === 'title') return a.title.localeCompare(b.title, 'zh-CN')
    return a.year - b.year || a.title.localeCompare(b.title)
  })
}

export function getRelatedSignals(items, item, limit = 3) {
  if (!item) return []
  return items
    .filter(candidate => candidate.code !== item.code)
    .map(candidate => ({
      candidate,
      score: (candidate.year === item.year ? 3 : 0) +
        (candidate.type === item.type ? 1 : 0) +
        candidate.tags.filter(tag => item.tags.includes(tag)).length * 2,
    }))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || Math.abs(a.candidate.year - item.year) - Math.abs(b.candidate.year - item.year))
    .slice(0, limit)
    .map(result => result.candidate)
}

export function toggleFavoriteCode(favorites, code) {
  return favorites.includes(code) ? favorites.filter(item => item !== code) : [...favorites, code]
}

export function createEntryHash(code) {
  return `#entry/${encodeURIComponent(code)}`
}

export function parseEntryHash(hash) {
  if (!hash.startsWith('#entry/')) return null
  try { return decodeURIComponent(hash.slice('#entry/'.length)) }
  catch { return null }
}
