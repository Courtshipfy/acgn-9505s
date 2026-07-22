const textLicense = {
  textLicense: 'CC BY-SA 4.0',
  textLicenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/',
  reviewedAt: '2026-07-22',
  modified: true,
}

const referenced = (sourcePage, originalUrl, localSrc, reason, assetType = 'cover') => ({
  status: 'referenced',
  statusLabel: assetType === 'cover' ? '资料性引用封面' : '资料性引用标志',
  sourcePage,
  originalUrl,
  localSrc,
  assetType,
  verifiedAt: '2026-07-22',
  reason,
  rightsNotice: '非自由素材，仅用于作品识别与资料说明；版权归原权利人，不授予转载或再利用权。',
})

export const pilotMetadata = {
  'M-0001': {
    note: '《Kid A》是英国乐队 Radiohead 的第四张录音室专辑，于 2000 年 10 月发行。专辑没有发行官方单曲，却成为乐队首张空降美国专辑榜冠军的作品，发行首周亦在英国获得白金唱片认证。',
    source: { ...textLicense, qid: 'Q220726', wikipediaTitle: '一號複製人', wikipediaUrl: 'https://zh.wikipedia.org/wiki/%E4%B8%80%E8%99%9F%E8%A4%87%E8%A3%BD%E4%BA%BA', wikidataUrl: 'https://www.wikidata.org/wiki/Q220726', revisionId: 88099467, revisionTimestamp: '2025-07-05T02:25:49Z' },
    cover: referenced('https://zh.wikipedia.org/wiki/File:Kid_A.jpg', 'https://zh.wikipedia.org/wiki/Special:Redirect/file/Kid_A.jpg', './covers/kid-a.jpg', 'Fair use; NonFree=true'),
  },
  'M-0002': {
    note: '《杰倫》是台湾歌手周杰伦的首张录音室专辑，由博德曼音乐于 2000 年 11 月 7 日发行。专辑获得第 12 届台湾金曲奖最佳流行音乐演唱专辑奖，并获选为 2001 年香港十大销量国语唱片之一。',
    source: { ...textLicense, qid: 'Q221115', wikipediaTitle: '杰倫 (專輯)', wikipediaUrl: 'https://zh.wikipedia.org/wiki/%E6%9D%B0%E5%80%AB_(%E5%B0%88%E8%BC%AF)', wikidataUrl: 'https://www.wikidata.org/wiki/Q221115', revisionId: 92029836, revisionTimestamp: '2026-03-25T00:28:59Z' },
    cover: referenced('https://zh.wikipedia.org/wiki/File:B24-jay-chou-jay1.jpg', 'https://zh.wikipedia.org/wiki/Special:Redirect/file/B24-jay-chou-jay1.jpg', './covers/jay.jpg', 'Fair use; NonFree=true'),
  },
  'A-9501': {
    note: '《新世纪福音战士》是庵野秀明执导、GAINAX 与龙之子制作公司制作的日本科幻电视动画。作品于 1995 年 10 月至 1996 年 3 月在东京电视台首播，是本馆 1995 年动画类馆藏。',
    source: { ...textLicense, qid: 'Q662', wikipediaTitle: '新世纪福音战士', wikipediaUrl: 'https://zh.wikipedia.org/wiki/%E6%96%B0%E4%B8%96%E7%BA%AA%E7%A6%8F%E9%9F%B3%E6%88%98%E5%A3%AB', wikidataUrl: 'https://www.wikidata.org/wiki/Q662', revisionId: 93208542, revisionTimestamp: '2026-06-26T07:07:03Z' },
    cover: referenced('https://zh.wikipedia.org/wiki/File:Eva0_.jpg', 'https://zh.wikipedia.org/wiki/Special:Redirect/file/Eva0_.jpg', './covers/evangelion.jpg', '合理使用; NonFree=true'),
  },
  'A-0101': {
    note: '《千与千寻》是吉卜力工作室制作、宫崎骏编剧并执导的日本动画电影，于 2001 年 7 月 20 日上映。影片讲述十岁女孩千寻误入神灵世界后，为帮助父母并返回人类世界而经历的成长。',
    source: { ...textLicense, qid: 'Q155653', wikipediaTitle: '千与千寻', wikipediaUrl: 'https://zh.wikipedia.org/wiki/%E5%8D%83%E4%B8%8E%E5%8D%83%E5%AF%BB', wikidataUrl: 'https://www.wikidata.org/wiki/Q155653', revisionId: 93270653, revisionTimestamp: '2026-07-01T07:10:15Z' },
    cover: referenced('https://zh.wikipedia.org/wiki/File:Spirited_away_poster.jpg', 'https://zh.wikipedia.org/wiki/Special:Redirect/file/Spirited_away_poster.jpg', './covers/spirited-away.jpg', 'Fair use; NonFree=true'),
  },
  'C-9701': {
    note: '《ONE PIECE》是尾田荣一郎创作的少年漫画，自 1997 年 7 月起在集英社《周刊少年 Jump》连载，同年 12 月发行首册单行本。作品后来衍生出电视动画、电影、小说和电子游戏等媒体产品。',
    source: { ...textLicense, qid: 'Q28667972', wikipediaTitle: 'ONE PIECE', wikipediaUrl: 'https://zh.wikipedia.org/wiki/ONE_PIECE', wikidataUrl: 'https://www.wikidata.org/wiki/Q28667972', revisionId: 93445571, revisionTimestamp: '2026-07-13T11:15:31Z' },
    cover: referenced('https://zh.wikipedia.org/wiki/File:ONE_PIECE_Logo.svg', 'https://zh.wikipedia.org/wiki/Special:Redirect/file/ONE_PIECE_Logo.svg', './covers/one-piece-logo.svg', '条目仅提供非自由商标 Logo，并非封面', 'logo'),
  },
  'C-0002': {
    note: '《波斯波利斯》，又译《我在伊朗长大》，是玛嘉·莎塔碧创作的自传体图像小说，叙述作者在伊斯兰革命时期于伊朗成长的经历。作品最初以法语出版，后来被翻译成多种语言发行。',
    source: { ...textLicense, qid: 'Q756604', wikipediaTitle: '波斯波利斯 (漫畫)', wikipediaUrl: 'https://zh.wikipedia.org/wiki/%E6%B3%A2%E6%96%AF%E6%B3%A2%E5%88%A9%E6%96%AF_(%E6%BC%AB%E7%95%AB)', wikidataUrl: 'https://www.wikidata.org/wiki/Q756604', revisionId: 92993224, revisionTimestamp: '2026-06-08T13:05:09Z' },
    cover: {
      status: 'approved', statusLabel: '已批准公开展示', localSrc: './covers/persepolis-hu-i-ii.jpg',
      sourcePage: 'https://commons.wikimedia.org/wiki/File:Persepolis_(k%C3%A9preg%C3%A9ny)_I_%C3%A9s_II_bor%C3%ADt%C3%B3.jpg',
      originalUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Persepolis_%28k%C3%A9preg%C3%A9ny%29_I_%C3%A9s_II_bor%C3%ADt%C3%B3.jpg',
      author: 'Nyitott Könyvműhely Kiadó', license: 'CC BY-SA 3.0', licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
      attributionRequired: true, verifiedAt: '2026-07-22', modified: false,
    },
  },
  'G-9601': {
    note: '《寶可夢 紅／綠》是 GAME FREAK 开发、任天堂发行的 Game Boy 角色扮演游戏，于 1996 年 2 月 27 日在日本发售，是寶可夢系列首批作品；随后推出蓝版及面向海外的红／蓝版本。',
    source: { ...textLicense, qid: 'Q637137', wikipediaTitle: '寶可夢 紅／綠', wikipediaUrl: 'https://zh.wikipedia.org/wiki/%E5%AF%B6%E5%8F%AF%E5%A4%A2_%E7%B4%85%EF%BC%8F%E7%B6%A0', wikidataUrl: 'https://www.wikidata.org/wiki/Q637137', revisionId: 93142733, revisionTimestamp: '2026-06-20T15:52:34Z' },
    cover: referenced('https://zh.wikipedia.org/wiki/File:Pok%C3%A9monbox_art_-_Red_Version.png', 'https://zh.wikipedia.org/wiki/Special:Redirect/file/Pok%C3%A9monbox_art_-_Red_Version.png', './covers/pokemon-red-green.png', '合理使用; NonFree=true'),
  },
  'G-0401': {
    note: '《World of Warcraft》是暴雪娱乐制作的大型多人在线角色扮演游戏，中文通常称《魔兽世界》。游戏的故事起点承接《魔兽争霸 III：冰封王座》结束后的世界，是本馆 2004 年游戏类馆藏。',
    source: { ...textLicense, qid: 'Q131007', wikipediaTitle: '魔兽世界', wikipediaUrl: 'https://zh.wikipedia.org/wiki/%E9%AD%94%E5%85%BD%E4%B8%96%E7%95%8C', wikidataUrl: 'https://www.wikidata.org/wiki/Q131007', revisionId: 91984967, revisionTimestamp: '2026-03-21T16:00:45Z' },
    cover: referenced('https://zh.wikipedia.org/wiki/File:WoW_Box_Art1.jpg', 'https://zh.wikipedia.org/wiki/Special:Redirect/file/WoW_Box_Art1.jpg', './covers/world-of-warcraft.jpg', 'Fair use; NonFree=true'),
  },
}
