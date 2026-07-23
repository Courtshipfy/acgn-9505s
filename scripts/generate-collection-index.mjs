import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { archiveItems } from '../src/data.js'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDir, '..')
const outputPath = resolve(projectRoot, 'docs', 'collection', 'README.md')
const typeOrder = ['音乐', '动漫', '漫画', '游戏', '小说']
const years = [...new Set(archiveItems.map(item => item.year))].sort((a, b) => a - b)

const escapeCell = value => String(value ?? '')
  .replaceAll('|', '\\|')
  .replaceAll('\n', ' ')

const link = (label, url) => url ? `[${escapeCell(label)}](${url})` : escapeCell(label)
const inlineTags = tags => tags.map(tag => `\`${escapeCell(tag)}\``).join(' ')

const countsByType = Object.fromEntries(typeOrder.map(type => [
  type,
  archiveItems.filter(item => item.type === type).length,
]))

const lines = [
  '# 馆藏索引',
  '',
  `> 当前共 **${archiveItems.length}** 件馆藏，覆盖 **${years[0]}—${years.at(-1)}** 年。索引由 \`src/data.js\` 自动生成。`,
  '',
  '## 快速概览',
  '',
  '| 类别 | 数量 | 年份范围 |',
  '| --- | ---: | --- |',
  ...typeOrder.map(type => {
    const items = archiveItems.filter(item => item.type === type)
    const itemYears = items.map(item => item.year)
    return `| [${type}](#${type}) | ${items.length} | ${Math.min(...itemYears)}—${Math.max(...itemYears)} |`
  }),
  `| **合计** | **${archiveItems.length}** | **${years[0]}—${years.at(-1)}** |`,
  '',
  '### 年份分布',
  '',
  '| 年份 | 音乐 | 动漫 | 漫画 | 游戏 | 小说 | 合计 |',
  '| ---: | ---: | ---: | ---: | ---: | ---: | ---: |',
  ...years.map(year => {
    const counts = typeOrder.map(type => archiveItems.filter(item => item.year === year && item.type === type).length)
    return `| ${year} | ${counts.join(' | ')} | ${counts.reduce((sum, count) => sum + count, 0)} |`
  }),
  '',
  '## 馆藏清单',
  '',
  '点击作品名可打开其资料来源；点击“封面”可查看仓库内保存的识别图。',
  '',
]

for (const type of typeOrder) {
  const items = archiveItems
    .filter(item => item.type === type)
    .sort((a, b) => a.year - b.year || a.code.localeCompare(b.code))

  lines.push(
    `### ${type}`,
    '',
    `共 ${countsByType[type]} 件。`,
    '',
    '| 年份 | 编号 | 馆藏 / 创作者 | 地区 | 形式 | 标签 | 图像 |',
    '| ---: | --- | --- | --- | --- | --- | --- |',
  )

  for (const item of items) {
    const coverPath = item.cover?.localSrc?.replace(/^\.\/covers\//, '../../public/covers/')
    lines.push(`| ${item.year} | \`${escapeCell(item.code)}\` | ${link(item.title, item.source?.wikipediaUrl)}<br>${escapeCell(item.creator)} | ${escapeCell(item.region)} | ${escapeCell(item.format)} | ${inlineTags(item.tags)} | ${coverPath ? `[封面](${coverPath})` : '—'} |`)
  }

  lines.push('')
}

lines.push(
  '## 维护说明',
  '',
  '- 馆藏主数据：[`src/data.js`](../../src/data.js)',
  '- 来源与封面元数据：[`content/wikimedia-collection.json`](../../content/wikimedia-collection.json)',
  '- 重新生成索引：`npm run generate:index`',
  '- 本文件为自动生成文件；馆藏变化后请重新运行生成命令，不要手工维护清单行。',
  '',
)

await mkdir(dirname(outputPath), { recursive: true })
await writeFile(outputPath, `${lines.join('\n')}\n`, 'utf8')

console.log(`Generated ${outputPath} (${archiveItems.length} items)`)
