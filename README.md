# THE 9505s

一个收录 1995—2005 年音乐、动漫、漫画、游戏与小说文化的互动档案网站。

快速浏览当前馆藏：[馆藏索引](./docs/collection/README.md)

## 当前版本

- 1995—2005 年份时间轴筛选
- 音乐、动漫、漫画、游戏、小说五类频道筛选
- 96 条代表性文化档案，完整覆盖 1995—2005 每一年与五个频道；小说频道每年收录 2 部
- 26 种地区标记，包含华语、非洲、韩国、欧美、日本、拉美、南亚与西亚文化样本
- 支持作品、作者、地区、媒介与标签搜索
- 支持年份、频道、地区筛选和多种排序方式
- 随机接收文化信号与作品详情弹层
- 可直接访问的作品深链接
- 十一年文化信号统计图谱
- 基于年份、类型与标签的相关作品推荐
- 作品链接一键复制
- 可安装的 PWA 应用清单与原创应用图标
- 同源资源离线缓存和实时网络状态提示
- 使用 Node 内置测试框架覆盖筛选、排序、深链接、推荐与数据完整性
- 全部 96 件馆藏均包含 Wikidata QID、Wikipedia 修订号和 80—140 字中文馆藏简介
- 每件馆藏均展示文本来源、许可、封面状态与核验日期
- `Persepolis` 使用许可明确的 Commons 图片；没有可用百科缩略图的作品使用项目原创 CC0 题签，其余作品以资料性引用方式展示本地保存的识别素材
- 所有封面和页面字体均不需要在运行时向第三方网站请求；外部地址仅作为用户主动点击的来源记录
- 界面使用 1996 年发布的 Verdana，并以 1995 年发布的 Andale Mono 呈现档案标签；均从访客本机加载

## Wikimedia 内容同步

```bash
npm run sync:wikimedia
npm run expand:wikimedia
```

`sync:wikimedia` 刷新原有试点快照；`expand:wikimedia` 可重新核验本轮 33 件扩充馆藏并更新本地识别素材。网站使用 [collection-metadata.js](./src/collection-metadata.js) 组合后的审核数据。生产环境运行同步前，应通过 `WIKIMEDIA_USER_AGENT` 提供包含真实项目地址或联系方式的 User-Agent。

完整核验记录见 [wikimedia-full-collection.md](./docs/research/wikimedia-full-collection.md) 与 [wikimedia-pilot.md](./docs/research/wikimedia-pilot.md)。

本轮扩充的选择依据与小说核验附录见 [collection-expansion-2026-07.md](./docs/research/collection-expansion-2026-07.md) 与 [novel-expansion-sources-2026-07.md](./docs/research/novel-expansion-sources-2026-07.md)。
- 响应式桌面与移动端布局
- 融合 CRT 扫描线、早期数字界面、唱片与印刷档案风格的视觉系统

当前内容是可交互的数字博物馆馆藏首页。后续可继续加入独立作品页面、授权封面素材与内容管理系统。
