import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { archiveItems, typeMeta } from './data.js'
import { createEntryHash, filterArchive, getRegions, getRelatedSignals, parseEntryHash, toggleFavoriteCode } from './archive.js'

const years = Array.from({ length: 11 }, (_, index) => 1995 + index)
const regions = getRegions(archiveItems)
const getCoverSrc = item => ['approved', 'referenced'].includes(item.cover?.status) ? item.cover.localSrc : null

function Header() {
  const [isOnline, setIsOnline] = useState(() => typeof navigator === 'undefined' || typeof navigator.onLine !== 'boolean' ? true : navigator.onLine)
  useEffect(() => {
    const updateConnection = () => setIsOnline(navigator.onLine)
    window.addEventListener('online', updateConnection)
    window.addEventListener('offline', updateConnection)
    return () => {
      window.removeEventListener('online', updateConnection)
      window.removeEventListener('offline', updateConnection)
    }
  }, [])

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="THE 9505s 首页">
        <span className="brand-mark">95</span><span className="brand-slash">/</span><span className="brand-mark">05</span>
      </a>
      <nav className="main-nav" aria-label="主要导航">
        <a href="#top">首页</a>
        <a href="#archive">馆藏</a>
        <a href="#sources">来源</a>
      </nav>
      <div className={`header-status ${isOnline ? '' : 'offline'}`}><i /> {isOnline ? 'ARCHIVE ONLINE' : 'OFFLINE CACHE'}</div>
    </header>
  )
}

function Hero({ onExplore, onRandom }) {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="museum-hero-top"><span>THE 9505s ARCHIVE</span><span>1995—2005</span></div>
      <h1><span>1995</span><i>—</i><span className="outline">2005</span></h1>
      <div className="museum-hero-meta">
        <div><small>COLLECTION</small><strong>{archiveItems.length} 件馆藏</strong></div>
        <div><small>CATEGORIES</small><strong>音乐 / 动漫 / 漫画 / 游戏</strong></div>
        <div><small>PERIOD</small><strong>1995.01—2005.12</strong></div>
        <div className="museum-hero-actions"><button onClick={onExplore}>查看馆藏 ↓</button><button onClick={onRandom}>随机作品 ↗</button></div>
      </div>
    </section>
  )
}

function CategoryTabs({ active, setActive }) {
  return (
    <div className="category-tabs" role="tablist" aria-label="内容类型">
      {Object.entries(typeMeta).map(([type, meta]) => (
        <button key={type} className={active === type ? 'active' : ''} onClick={() => setActive(type)} role="tab" aria-selected={active === type} aria-controls="archive-results">
          <span className="tab-glyph">{meta.glyph}</span><span>{type}<small>{meta.en}</small></span>
        </button>
      ))}
    </div>
  )
}

function ArchiveCard({ item, index, onOpen, isFavorite, onFavorite }) {
  const coverSrc = getCoverSrc(item)
  return (
    <article className="archive-card" role="listitem" style={{ '--accent': item.accent, '--delay': `${Math.min(index, 11) * 40}ms` }}>
      <button className={`favorite-button ${isFavorite ? 'saved' : ''}`} onClick={() => onFavorite(item.code)} aria-label={`${isFavorite ? '取消收藏' : '收藏'} ${item.title}`}>{isFavorite ? '★' : '☆'}</button>
      <button className="card-open" onClick={() => onOpen(item)} aria-label={`查看 ${item.title} 详情`}>
        <div className="card-visual">
          <span className="card-year">{item.year}</span><span className="card-type">{item.type}</span>
          {coverSrc
            ? <img className={`cover-image ${item.cover.status === 'referenced' ? 'referenced-cover' : ''}`} src={coverSrc} alt="" referrerPolicy="no-referrer" />
            : <div className="cover-art" aria-hidden="true"><span>{item.code.slice(0, 1)}</span><i /><i /><i /></div>}
          {item.cover?.status === 'referenced' && <span className="reference-badge">引用</span>}
          <span className="card-code">CAT. {item.code}</span>
        </div>
        <div className="card-body">
          <p>{item.year} / {item.type} / {item.region}</p><h3>{item.title}</h3>
          <div className="card-note"><span>{item.creator}</span><em className="card-format">{item.format}</em><b>↗</b></div>
        </div>
      </button>
    </article>
  )
}

function DetailDialog({ item, onClose, onOpen, isFavorite, onFavorite }) {
  const [copyStatus, setCopyStatus] = useState('COPY LINK / 复制链接')
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const relatedItems = useMemo(() => getRelatedSignals(archiveItems, item), [item])

  useEffect(() => {
    if (!item) return undefined
    const previousFocus = document.activeElement
    const appShell = document.querySelector('#app-shell')
    const handleKeyDown = event => {
      if (event.key === 'Escape') onClose()
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = [...dialogRef.current.querySelectorAll('button, a, input, select, [tabindex]:not([tabindex="-1"])')].filter(element => !element.disabled)
      if (!focusable.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('dialog-open')
    appShell?.setAttribute('inert', '')
    closeButtonRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('dialog-open')
      appShell?.removeAttribute('inert')
      if (previousFocus instanceof HTMLElement) previousFocus.focus()
    }
  }, [item, onClose])

  useEffect(() => setCopyStatus('COPY LINK / 复制链接'), [item])

  if (!item) return null
  const coverSrc = getCoverSrc(item)
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopyStatus('COPIED / 已复制')
    } catch { setCopyStatus('COPY FAILED / 复制失败') }
  }
  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}>
      <section ref={dialogRef} className="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detail-title" aria-describedby="detail-description" style={{ '--accent': item.accent }}>
        <button ref={closeButtonRef} className="dialog-close" onClick={onClose} aria-label="关闭详情">CLOSE ×</button>
        <div className="detail-poster">
          <span className="detail-index">CATALOG / {item.code}</span>
          {coverSrc
            ? <img className={`detail-cover-image ${item.cover.status === 'referenced' ? 'referenced-cover' : ''}`} src={coverSrc} alt={`${item.title}${item.cover.assetType === 'logo' ? '标志素材' : '封面'}`} referrerPolicy="no-referrer" />
            : <div className="poster-letter" aria-hidden="true">{item.code[0]}</div>}
          {item.cover?.status === 'referenced' && <span className="detail-reference-badge">REFERENCE / 资料性引用</span>}
          <span className="detail-year">{item.year}</span>
        </div>
        <div className="detail-content">
          <p className="eyebrow dark"><span>{item.type} / {typeMeta[item.type].en}</span></p>
          <h2 id="detail-title">{item.title}</h2>
          <p className="detail-creator">{item.creator} · {item.region}</p>
          <p className="detail-section-label">COLLECTION NOTE / 馆藏说明</p>
          <p className="detail-note" id="detail-description">{item.note}</p>
          <dl>
            <div><dt>RELEASE</dt><dd>{item.year}</dd></div>
            <div><dt>FORMAT</dt><dd>{item.format}</dd></div>
            <div><dt>REGION</dt><dd>{item.region}</dd></div>
          </dl>
          <div className="detail-tags">{item.tags.map(tag => <span key={tag}>#{tag}</span>)}</div>
          <div className="detail-actions">
            <button className={`detail-favorite ${isFavorite ? 'saved' : ''}`} onClick={() => onFavorite(item.code)}>{isFavorite ? '★ 已收藏 / SAVED' : '☆ 加入收藏 / SAVE'}</button>
            <button className="copy-link" onClick={copyLink}>{copyStatus}</button>
          </div>
          <div className="related-signals">
            <p>RELATED SIGNALS / 相关信号</p>
            {relatedItems.map(related => <button key={related.code} onClick={() => onOpen(related)}><span>{related.year} · {related.type}</span><strong>{related.title}</strong><b>↗</b></button>)}
          </div>
          {item.source && (
            <div className="source-record">
              <p>SOURCES &amp; RIGHTS / 来源与许可</p>
              <dl>
                <div><dt>TEXT</dt><dd>内容改编自 <a href={item.source.wikipediaUrl} target="_blank" rel="noreferrer">中文维基百科 ↗</a>，已压缩和编辑</dd></div>
                <div><dt>ENTITY</dt><dd><a href={item.source.wikidataUrl} target="_blank" rel="noreferrer">{item.source.qid} ↗</a> · REV. {item.source.revisionId}</dd></div>
                <div><dt>LICENSE</dt><dd><a href={item.source.textLicenseUrl} target="_blank" rel="noreferrer">{item.source.textLicense} ↗</a></dd></div>
                <div><dt>COVER</dt><dd>{item.cover?.status === 'approved' ? <><a href={item.cover.sourcePage} target="_blank" rel="noreferrer">{item.cover.author} ↗</a> · <a href={item.cover.licenseUrl} target="_blank" rel="noreferrer">{item.cover.license} ↗</a></> : <><a href={item.cover?.sourcePage} target="_blank" rel="noreferrer">{item.cover?.statusLabel || '尚未核验'} ↗</a>{item.cover?.rightsNotice && <small className="rights-notice">{item.cover.rightsNotice}</small>}</>}</dd></div>
                <div><dt>REVIEWED</dt><dd>{item.source.reviewedAt}</dd></div>
              </dl>
            </div>
          )}
          <p className="detail-disclaimer">本档案提供基础文化史索引与资料说明，不代表价值排名。</p>
        </div>
      </section>
    </div>
  )
}

function Sources() {
  const sourcedItems = archiveItems.filter(item => item.source)
  return (
    <section className="sources-section" id="sources">
      <div className="sources-heading">
        <div><p className="eyebrow dark"><span>SOURCES &amp; RIGHTS</span></p><h2>来源与许可</h2></div>
        <p>试点馆藏 {sourcedItems.length} 件<br />文本本地保存并经人工审核</p>
      </div>
      <div className="license-summary">
        <p>维基百科文字依据 CC BY-SA 4.0 使用。封面分为自由授权与资料性引用两类：引用素材仅用于作品识别和历史说明，版权归原权利人，不授予转载或再利用权。展示文件保存在本地，来源链接仅用于权利与出处追溯。</p>
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0 ↗</a>
      </div>
      <div className="sources-table" role="table" aria-label="试点馆藏来源清单">
        <div className="sources-row sources-table-head" role="row"><span>编号</span><span>作品</span><span>文本来源</span><span>封面状态</span><span>核验日期</span></div>
        {sourcedItems.map(item => (
          <div className="sources-row" role="row" key={item.code}>
            <span>{item.code}</span><strong>{item.title}</strong>
            <span><a href={item.source.wikipediaUrl} target="_blank" rel="noreferrer">Wikipedia ↗</a> / <a href={item.source.wikidataUrl} target="_blank" rel="noreferrer">{item.source.qid} ↗</a></span>
            <span><a href={item.cover?.sourcePage} target="_blank" rel="noreferrer">{item.cover?.statusLabel || '尚未核验'} ↗</a></span><span>{item.source.reviewedAt}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function Archive({ onSelect, favorites, onFavorite }) {
  const [activeType, setActiveType] = useState('全部')
  const [activeYear, setActiveYear] = useState('全部')
  const [activeRegion, setActiveRegion] = useState('全部')
  const [favoritesOnly, setFavoritesOnly] = useState(false)
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('year-asc')
  const [viewMode, setViewMode] = useState('grid')

  const filtered = useMemo(() => {
    return filterArchive(archiveItems, {
      type: activeType, year: activeYear, region: activeRegion,
      favorites, favoritesOnly, query, sort,
    })
  }, [activeType, activeYear, activeRegion, favorites, favoritesOnly, query, sort])

  const reset = () => { setActiveType('全部'); setActiveYear('全部'); setActiveRegion('全部'); setFavoritesOnly(false); setQuery(''); setSort('year-asc') }

  return (
    <section className="archive-section" id="archive">
      <div className="section-heading">
        <div><p className="eyebrow dark"><span>COLLECTION INDEX</span></p><h2>馆藏目录</h2></div>
        <p>{archiveItems.length} 件馆藏 / 1995—2005<br />按类型、年份、地区或关键词检索</p>
      </div>
      <CategoryTabs active={activeType} setActive={setActiveType} />
      <div className="archive-tools">
        <label className="search-box"><span>SEARCH / 搜索</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="作品、作者、标签……" aria-label="搜索馆藏" /><b aria-hidden="true">⌕</b></label>
        <label className="sort-box"><span>SORT / 排序</span><select value={sort} onChange={event => setSort(event.target.value)}><option value="year-asc">年份：旧 → 新</option><option value="year-desc">年份：新 → 旧</option><option value="title">标题：A → Z</option></select></label>
        <label className="region-box"><span>REGION / 地区</span><select value={activeRegion} onChange={event => setActiveRegion(event.target.value)}>{regions.map(region => <option value={region} key={region}>{region}</option>)}</select></label>
      </div>
      <div className="timeline" id="timeline" role="group" aria-label="按年份筛选">
        <button className={activeYear === '全部' ? 'selected' : ''} onClick={() => setActiveYear('全部')}>ALL</button>
        {years.map(year => <button key={year} className={activeYear === year ? 'selected' : ''} onClick={() => setActiveYear(year)} aria-label={`${year} 年`}><span>{String(year).slice(2)}</span></button>)}
      </div>
      <div className="results-meta">
        <span aria-live="polite">RESULT / {String(filtered.length).padStart(2, '0')}</span>
        <div className="results-actions">
          <button className={favoritesOnly ? 'favorites-filter active' : 'favorites-filter'} onClick={() => setFavoritesOnly(value => !value)}>★ MY ARCHIVE / {String(favorites.length).padStart(2, '0')}</button>
          <div className="view-switch" role="group" aria-label="馆藏显示方式">
            <button className={viewMode === 'grid' ? 'active' : ''} onClick={() => setViewMode('grid')} aria-pressed={viewMode === 'grid'}>GRID</button>
            <button className={viewMode === 'list' ? 'active' : ''} onClick={() => setViewMode('list')} aria-pressed={viewMode === 'list'}>LIST</button>
          </div>
        </div>
        <span>{activeYear === '全部' ? '1995—2005' : activeYear} · {typeMeta[activeType].en}</span>
      </div>
      <div className={`card-grid ${viewMode === 'list' ? 'list-view' : ''}`} id="archive-results" role="list">{filtered.map((item, index) => <ArchiveCard item={item} index={index} onOpen={onSelect} isFavorite={favorites.includes(item.code)} onFavorite={onFavorite} key={item.code} />)}</div>
      {filtered.length === 0 && <div className="empty-state"><span>NO SIGNAL FOUND</span><p>没有找到匹配的文化信号。</p><button onClick={reset}>RESET FILTERS / 重置</button></div>}
    </section>
  )
}

function Footer() {
  return (
    <footer id="about">
      <div className="footer-copy"><p className="eyebrow"><span>THE 9505s ARCHIVE</span></p><h2>1995—2005</h2></div>
      <div className="footer-note">
        <p>音乐、动漫、漫画与游戏数字馆藏。当前收录 {archiveItems.length} 件作品，内容持续维护。</p>
        <span>DIGITAL COLLECTION / MUSIC · ANIMATION · COMICS · GAMES</span>
      </div>
      <div className="footer-bottom"><b>95—05</b><span>© 2026 CULTURE ARCHIVE</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  )
}

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [favorites, setFavorites] = useState(() => {
    if (typeof window === 'undefined') return []
    try { return JSON.parse(window.localStorage.getItem('9505-favorites') || '[]') }
    catch { return [] }
  })

  useEffect(() => {
    const syncFromHash = () => {
      const code = parseEntryHash(window.location.hash)
      if (code) setSelectedItem(archiveItems.find(item => item.code === code) || null)
      else setSelectedItem(null)
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [])

  useEffect(() => { window.localStorage.setItem('9505-favorites', JSON.stringify(favorites)) }, [favorites])

  const scrollToArchive = useCallback(() => document.querySelector('#archive')?.scrollIntoView({ behavior: 'smooth' }), [])
  const openItem = useCallback(item => {
    setSelectedItem(item)
    window.location.hash = createEntryHash(item.code).slice(1)
  }, [])
  const closeItem = useCallback(() => {
    setSelectedItem(null)
    if (window.location.hash.startsWith('#entry/')) window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#archive`)
  }, [])
  const toggleFavorite = useCallback(code => setFavorites(current => toggleFavoriteCode(current, code)), [])
  const openRandom = useCallback(() => {
    const next = archiveItems[Math.floor(Math.random() * archiveItems.length)]
    openItem(next)
  }, [openItem])
  return (
    <>
      <a className="skip-link" href="#archive">跳至馆藏目录</a>
      <div id="app-shell">
        <Header />
        <main id="main-content"><Hero onExplore={scrollToArchive} onRandom={openRandom} /><Archive onSelect={openItem} favorites={favorites} onFavorite={toggleFavorite} /><Sources /></main>
        <Footer />
      </div>
      <DetailDialog item={selectedItem} onClose={closeItem} onOpen={openItem} isFavorite={selectedItem ? favorites.includes(selectedItem.code) : false} onFavorite={toggleFavorite} />
    </>
  )
}
