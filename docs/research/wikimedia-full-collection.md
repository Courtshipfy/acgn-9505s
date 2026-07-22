# Wikimedia 全馆藏补齐研究（54 件）

核验日期：2026-07-22  
范围：`src/data.js` 中尚无 `source` 元数据的全部 54 个 code。现有 8 件试点不重复列入。  
状态说明：本轮已通过英文维基百科 `query + pageprops + revisions` 与 Wikidata `wbsearchentities` 锁定全部 54 件作品身份；中文全文搜索对同名作品产生较多误命中，因此下表把尚未逐条读取 `sitelinks.zhwiki` 的中文标题标为“待由 QID 解析”，禁止凭搜索结果猜测。媒体文件仅有 API 明确返回的 Commons 主图可以先行使用；其余封面、海报、漫画封面和游戏盒绘均按“非自由／资料性引用，待逐文件核验”处理。

## 官方数据入口与判定规则

- 条目身份、修订号、摘要和主图来自 [MediaWiki Action API](https://www.mediawiki.org/wiki/API:Main_page) 的 `query`、`pageprops`、`revisions`、`extracts` 与 `pageimages`。
- QID 与中文站点链接应通过 [Wikidata entity data](https://www.wikidata.org/wiki/Special:EntityData/Q8360.json) 的 `sitelinks.zhwiki` 固定，不使用全文搜索第一名作为身份依据。
- 文件作者、许可与非自由状态必须逐文件调用 [API:Imageinfo](https://www.mediawiki.org/wiki/API:Imageinfo)；没有 `LicenseShortName`、`LicenseUrl`、`Artist` 的文件不得宣称自由授权。
- 专辑封面、商业电影海报、漫画单行本封面、商业游戏盒绘通常是非自由文件。本项目若按用户决定进行资料性引用，应本地保存并显示来源页、权利归属与“不授予再利用权”；这不等于获得版权许可。
- 下表的修订链接采用 `https://en.wikipedia.org/wiki/Special:Redirect/revision/{revisionId}`，可固定到本次核验版本。

## 精确身份、修订与编辑摘要

“中文条目”列为“由 QID 解析”时，实现脚本应先读取实体的 `sitelinks.zhwiki.title`；若不存在，再保留表中的英文条目并显示语言为 `en`。

| code | 作品 | QID | 精确 Wikimedia 条目 / 修订 | 中文条目 | 适合压缩为 80–140 字的事实摘要底稿 |
|---|---|---|---|---|---|
| M-9501 | (What’s the Story) Morning Glory? | Q8360 | [enwiki r1365291600](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365291600) | `(這是什麼故事)晨光榮耀` | Oasis 于 1995 年发行的第二张录音室专辑，是英伦摇滚商业高峰的代表作品，收录 Wonderwall、Don’t Look Back in Anger 等歌曲。 |
| C-9501 | 头文字D | Q164883 | [enwiki r1356541721](https://en.wikipedia.org/wiki/Special:Redirect/revision/1356541721) | `頭文字D` | 重野秀一创作的日本汽车竞速漫画，1995 年开始连载，以藤原拓海和秋名山公路赛为主线，推动漂移与改装车文化传播。 |
| G-9501 | Chrono Trigger | Q761815 | [enwiki r1363780988](https://en.wikipedia.org/wiki/Special:Redirect/revision/1363780988) | `时空之轮` | Square 于 1995 年推出的超级任天堂角色扮演游戏，以跨时代旅行、分支结局和鸟山明角色设计著称。 |
| M-9601 | Endtroducing..... | Q614739 | [enwiki r1363602612](https://en.wikipedia.org/wiki/Special:Redirect/revision/1363602612) | 由 QID 解析；无则用英文 | DJ Shadow 于 1996 年发行的首张录音室专辑，主要以既有唱片采样构成，被视为器乐嘻哈与采样制作的重要作品。 |
| A-9601 | 浪客剑心（1996 TV） | Q11281548 | [enwiki r1364381373](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364381373) | 由 QID 解析 | 1996 年开播的电视动画，改编自和月伸宏漫画，讲述明治时期剑客绯村剑心以逆刃刀践行不杀誓言。 |
| C-9601 | 游戏王（漫画） | Q4023139 | [Wikidata](https://www.wikidata.org/wiki/Q4023139) | 由 QID 解析 | 高桥和希创作、1996 年开始连载的漫画，早期围绕各种黑暗游戏展开，后来以决斗怪兽卡牌为核心并衍生全球媒体与卡牌体系。 |
| M-9701 | OK Computer | Q202996 | [enwiki r1364917089](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364917089) | 由 QID 解析 | Radiohead 于 1997 年发行的第三张录音室专辑，以实验摇滚编曲讨论科技异化、消费社会和现代生活焦虑。 |
| A-9701 | 幽灵公主 | Q186572 | [enwiki r1364269139](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364269139) | `幽灵公主` | 宫崎骏编剧执导、吉卜力工作室制作的 1997 年动画电影，通过人类聚落与森林神灵冲突讨论工业、生存和自然关系。 |
| G-9701 | Final Fantasy VII | Q214232 | [enwiki r1364918197](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364918197) | 由 QID 解析 | Square 于 1997 年为 PlayStation 推出的角色扮演游戏，采用 3D 角色与预渲染背景，围绕克劳德和神罗公司的冲突展开。 |
| M-9801 | The Miseducation of Lauryn Hill | Q945926 | [enwiki r1365335673](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365335673) | 由 QID 解析 | Lauryn Hill 于 1998 年发行的个人录音室专辑，融合嘻哈、灵魂乐和雷鬼，以爱情、家庭、信仰与自我认识为主题。 |
| A-9801 | 星际牛仔 | Q101244908 | [enwiki r1365392637](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365392637) | `星际牛仔`（需复核 QID 类型） | Sunrise 制作、渡边信一郎执导的 1998 年电视动画，以太空赏金猎人为主角，融合爵士、黑色电影和西部片语法。 |
| C-9801 | HUNTER×HUNTER（漫画） | Q696071 | [Wikidata](https://www.wikidata.org/wiki/Q696071) | 由 QID 解析 | 富坚义博自 1998 年开始连载的少年漫画，讲述小杰成为猎人并寻找父亲的旅程，以复杂能力规则和策略战斗著称。 |
| G-9801 | Metal Gear Solid（1998） | Q6582527 | [Wikidata](https://www.wikidata.org/wiki/Q6582527) | 由 QID 解析 | Konami 于 1998 年推出的潜行动作游戏，小岛秀夫担任制作与导演，以潜入玩法、电影化演出和核威慑主题闻名。 |
| M-9901 | The Battle of Los Angeles | Q754834 | [enwiki r1363537259](https://en.wikipedia.org/wiki/Special:Redirect/revision/1363537259) | 由 QID 解析 | Rage Against the Machine 于 1999 年发行的第三张录音室专辑，把说唱金属、吉他噪声和政治批判结合。 |
| A-9901 | 数码宝贝大冒险（1999 TV） | Q689114 | [enwiki r1364153405](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364153405) | `數碼寶貝大冒險` | 东映动画于 1999 年首播的电视动画，讲述被选召的孩子与搭档数码兽进入数码世界并共同成长。 |
| C-9901 | 火影忍者（漫画） | Q26971382 | [enwiki r1364768763](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364768763) | `火影忍者` | 岸本齐史自 1999 年开始连载的少年漫画，以漩涡鸣人成为火影的目标为主线，描绘忍者世界、战争创伤与同伴关系。 |
| G-9901 | Counter-Strike（1999） | Q163628 | [enwiki r1364458682](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364458682) | 由 QID 解析 | 由 Minh Le 和 Jess Cliffe 制作、源自 Half-Life 模组的团队射击游戏，1999 年公开测试，建立反恐方与恐怖方回合竞技模式。 |
| A-0001 | FLCL | Q92572 | [enwiki r1364577328](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364577328) | 由 QID 解析 | Gainax 与 Production I.G 制作的六集原创动画录像，2000 年起发行，以青春成长、机器人和高速实验影像结合。 |
| C-0001 | 异兽魔都 | Q92554 | [enwiki r1365307658](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365307658) | `異獸魔都` | 林田球创作的漫画，2000 年开始连载，在“洞穴”和魔法师世界之间展开，以失忆蜥蜴头主角、黑色幽默和工业幻想见长。 |
| G-0001 | The Sims（2000 游戏） | **待纠正** | 当前 `The Sims` 查询落到系列 Q4897444；应改查 `The Sims (video game)` | 由正确 QID 解析 | Maxis 开发、Electronic Arts 于 2000 年发行的生活模拟游戏，让玩家建造住宅并管理虚拟人物的需求、工作和社交关系。 |
| M-0101 | Discovery | Q1901313 | [enwiki r1357759483](https://en.wikipedia.org/wiki/Special:Redirect/revision/1357759483) | 由 QID 解析 | Daft Punk 于 2001 年发行的第二张录音室专辑，融合浩室、迪斯科和流行音乐，并与动画电影 Interstella 5555 形成视听项目。 |
| C-0101 | 钢之炼金术师（漫画） | Q189562 | [enwiki r1363580523](https://en.wikipedia.org/wiki/Special:Redirect/revision/1363580523) | `鋼之鍊金術師` | 荒川弘自 2001 年开始连载的漫画，讲述爱德华与阿尔冯斯兄弟寻找恢复身体的方法，围绕炼金术、战争和国家权力展开。 |
| G-0101 | Halo: Combat Evolved | Q276217 | [enwiki r1362842800](https://en.wikipedia.org/wiki/Special:Redirect/revision/1362842800) | 由 QID 解析 | Bungie 开发、2001 年随 Xbox 发行的第一人称射击游戏，以士官长、环带世界和星盟战争为核心，确立主机 FPS 控制范式。 |
| M-0201 | The Eminem Show | Q155339 | [enwiki r1365160694](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365160694) | 由 QID 解析 | Eminem 于 2002 年发行的第四张录音室专辑，由本人主导制作，内容涉及名声、家庭、美国政治与媒体争议。 |
| A-0201 | 攻壳机动队 S.A.C. | Q1776982 | [enwiki r1364008047](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364008047) | 由 QID 解析 | Production I.G 制作、神山健治执导的 2002 年电视动画，以公安九课案件讨论网络社会、义体化、恐怖主义与个体意识。 |
| C-0201 | 光速蒙面侠21 | Q696941 | [enwiki r1353437784](https://en.wikipedia.org/wiki/Special:Redirect/revision/1353437784) | `光速蒙面俠21` | 稻垣理一郎原作、村田雄介作画的美式橄榄球漫画，2002 年开始连载，围绕小早川濑那和泥门恶魔蝙蝠队成长。 |
| G-0201 | GTA: Vice City | Q94671 | [enwiki r1363234821](https://en.wikipedia.org/wiki/Special:Redirect/revision/1363234821) | 由 QID 解析 | Rockstar North 开发、2002 年发行的开放世界动作游戏，以虚构的 1980 年代罪恶都市和汤米·维赛迪的犯罪崛起为主线。 |
| M-0301 | Elephant | Q580496 | [enwiki r1364699944](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364699944) | 由 QID 解析 | The White Stripes 于 2003 年发行的第四张录音室专辑，以简化的吉他鼓编制和模拟录音延续车库摇滚、蓝调风格。 |
| A-0301 | 钢之炼金术师（2003 TV） | Q711257 | [enwiki r1362632570](https://en.wikipedia.org/wiki/Special:Redirect/revision/1362632570) | 由 QID 解析 | Bones 制作、2003 年首播的电视动画，改编荒川弘漫画；因原作尚未完结，后半段发展为独立故事路线。 |
| C-0301 | 死亡笔记（漫画） | Q1834 | [enwiki r1364932784](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364932784) | `死亡筆記` | 大场鸫原作、小畑健作画的漫画，2003 年开始连载，以夜神月获得可杀人的笔记后与侦探 L 的智力对抗为中心。 |
| G-0301 | Prince of Persia: The Sands of Time | Q715292 | [enwiki r1362705833](https://en.wikipedia.org/wiki/Special:Redirect/revision/1362705833) | 由 QID 解析 | Ubisoft Montreal 开发、2003 年发行的动作冒险游戏，把跑墙攀爬、机关解谜和时间倒流机制结合。 |
| M-0401 | American Idiot | Q151714 | [enwiki r1358118990](https://en.wikipedia.org/wiki/Special:Redirect/revision/1358118990) | 由 QID 解析 | Green Day 于 2004 年发行的第七张录音室专辑，以朋克摇滚歌剧形式讲述“郊区耶稣”，回应战争年代的美国社会。 |
| A-0401 | 混沌武士 | Q143276 | [enwiki r1351775992](https://en.wikipedia.org/wiki/Special:Redirect/revision/1351775992) | `混沌武士` | Manglobe 制作、渡边信一郎执导的 2004 年电视动画，把江户时代公路故事、剑斗与嘻哈音乐及现代视觉语言结合。 |
| C-0401 | 银魂（漫画） | Q764135 | [enwiki r1364013649](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364013649) | `銀魂` | 空知英秋自 2003 年底开始连载的漫画，设定在外星人统治的架空江户，以万事屋人物串联喜剧、戏仿和严肃长篇。 |
| M-0501 | Demon Days | Q834418 | [enwiki r1364262382](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364262382) | 由 QID 解析 | Gorillaz 于 2005 年发行的第二张录音室专辑，由 Danger Mouse 主要制作，以虚拟乐队叙事融合另类、嘻哈、电子和流行音乐。 |
| A-0501 | 虫师（2005 TV） | Q1055370 | [enwiki r1365391902](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365391902) | `蟲師`（需确认条目涵盖漫画还是动画） | Artland 制作、长滨博史执导的电视动画，2005 年开播，讲述虫师银古调查“虫”与人类、自然之间的异常现象。 |
| C-0501 | 绝望先生（漫画） | Q844599 | [enwiki r1352791882](https://en.wikipedia.org/wiki/Special:Redirect/revision/1352791882) | 由 QID 解析 | 久米田康治自 2005 年开始连载的漫画，以教师糸色望和学生群像展开，通过文字游戏、社会观察和黑色幽默讽刺日本日常。 |
| G-0501 | Shadow of the Colossus | Q846051 | [enwiki r1365105826](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365105826) | 由 QID 解析 | Team Ico 开发、索尼于 2005 年发行的动作冒险游戏，玩家在禁忌之地逐一攀爬并击败巨像，以极简叙事讨论牺牲与代价。 |
| C-9502 | Preacher | Q653255 | [enwiki r1349049046](https://en.wikipedia.org/wiki/Special:Redirect/revision/1349049046) | 由 QID 解析；可能无中文 | Garth Ennis 编剧、Steve Dillon 主要绘制的 Vertigo 漫画，1995 年开始出版，以德州牧师寻找上帝的公路旅程展开宗教讽刺。 |
| C-9602 | Kingdom Come | Q1726645 | [enwiki r1362799912](https://en.wikipedia.org/wiki/Special:Redirect/revision/1362799912) | 由 QID 解析；可能无中文 | Mark Waid 编剧、Alex Ross 绘制的 1996 年 DC 四期迷你系列，以年老英雄回归讨论超级力量、责任与代际冲突。 |
| M-9702 | 王菲（1997 专辑） | Q3067687 | [enwiki r1358967678](https://en.wikipedia.org/wiki/Special:Redirect/revision/1358967678) | 由 QID 解析 | 王菲于 1997 年发行的国语录音室专辑，是她加盟 EMI 后的首张专辑，融合华语流行、另类摇滚与电子化制作。 |
| A-9702 | South Park | Q16538 | [enwiki r1365116286](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365116286) | `南方公园` | Trey Parker 与 Matt Stone 创作的美国成人动画，1997 年在 Comedy Central 首播，以剪纸式视觉、粗俗喜剧和时事讽刺著称。 |
| C-9802 | Priest | Q562405 | [enwiki r1363623522](https://en.wikipedia.org/wiki/Special:Redirect/revision/1363623522) | 由 QID 解析；可能无中文 | 邢民友创作的韩国漫画，1998 年开始出版，以美国西部为背景融合哥特恐怖、宗教冲突和复仇故事。 |
| G-9802 | StarCraft（1998） | Q165929 | [enwiki r1363801223](https://en.wikipedia.org/wiki/Special:Redirect/revision/1363801223) | `星际争霸` | Blizzard Entertainment 于 1998 年发行的即时战略游戏，以人类、异虫和星灵三族战争为核心，推动职业电竞与网络对战发展。 |
| A-9902 | The Iron Giant | Q867283 | [enwiki r1365023629](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365023629) | 由 QID 解析 | Brad Bird 执导、Warner Bros. 于 1999 年发行的动画电影，讲述冷战时期男孩霍加斯与外星巨型机器人的友谊。 |
| C-0003 | Blacksad | Q29626 | [enwiki r1362236295](https://en.wikipedia.org/wiki/Special:Redirect/revision/1362236295) | 由 QID 解析；可能无中文 | Juan Díaz Canales 编剧、Juanjo Guarnido 绘制的欧洲漫画系列，2000 年首卷出版，以拟人动物世界讲述美国黑色侦探故事。 |
| C-0102 | 火凤燎原 | Q844470 | [enwiki r1363801829](https://en.wikipedia.org/wiki/Special:Redirect/revision/1363801829) | `火鳳燎原` | 陈某创作的香港漫画，2001 年开始连载，以汉末三国为背景重构历史人物和事件，突出多线谋略、政治与战争。 |
| M-0202 | Moffou | Q3318222 | [enwiki r1104188996](https://en.wikipedia.org/wiki/Special:Redirect/revision/1104188996) | 由 QID 解析；可能无中文 | 马里歌手 Salif Keita 于 2002 年发行的专辑，以更偏原声的编制结合曼丁传统、非洲流行音乐与其高音声线。 |
| C-0202 | Y: The Last Man | Q46689 | [enwiki r1364938696](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364938696) | 由 QID 解析；可能无中文 | Brian K. Vaughan 编剧、Pia Guerra 主要绘制的 Vertigo 漫画，2002 年开始出版，描写全球雄性哺乳动物骤死后的社会重建。 |
| G-0202 | Ragnarok Online | Q475628 | [enwiki r1355680307](https://en.wikipedia.org/wiki/Special:Redirect/revision/1355680307) | `仙境传说` | Gravity 开发、2002 年推出的大型多人在线角色扮演游戏，改编自韩国漫画，以二维角色、三维场景、职业与公会系统著称。 |
| C-0302 | Blankets | Q881642 | [enwiki r1364838309](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364838309) | 由 QID 解析；可能无中文 | Craig Thompson 创作、2003 年出版的自传体图像小说，以黑白线条回忆宗教家庭、兄弟关系、初恋与成长。 |
| C-0402 | Scott Pilgrim | Q1199291 | [enwiki r1364287139](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364287139) | 由 QID 解析；可能无中文 | Bryan Lee O’Malley 创作的图像小说系列，2004 年首卷出版，把多伦多青年生活、独立音乐与电子游戏规则结合。 |
| M-0502 | Arular | Q610043 | [enwiki r1364759819](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364759819) | `Arular` | M.I.A. 于 2005 年发行的首张录音室专辑，融合电子、嘻哈、舞厅和世界音乐，歌词涉及战争、移民与政治暴力。 |
| A-0502 | Avatar: The Last Airbender | Q11572 | [enwiki r1364764764](https://en.wikipedia.org/wiki/Special:Redirect/revision/1364764764) | `降世神通：最後的氣宗` | DiMartino 与 Konietzko 创作的美国电视动画，2005 年首播，以四元素世界、亚洲文化灵感和安结束战争的旅程为主线。 |

## 媒体候选与权利状态

### API 已明确返回的 Commons 候选

这些文件仍须在实现前调用 `imageinfo.extmetadata` 保存作者、许可名称、许可 URL 与署名文本；“位于 Commons”不应被简化成“无版权”。

| code | 文件页 | 直接媒体 URL | 类型 | 当前判定 |
|---|---|---|---|---|
| G-0001 | [File:The Sims series logo.webp](https://commons.wikimedia.org/wiki/File:The_Sims_series_logo.webp) | [原文件](https://upload.wikimedia.org/wikipedia/commons/6/69/The_Sims_series_logo.webp) | 系列 Logo，非 2000 游戏盒绘 | `review`；仅适合作为标志替代素材 |
| A-0301 | [File:Fullmetal Alchemist 2003 logo.png](https://commons.wikimedia.org/wiki/File:Fullmetal_Alchemist_2003_logo.png) | [原文件](https://upload.wikimedia.org/wikipedia/commons/a/a9/Fullmetal_Alchemist_2003_logo.png) | 动画 Logo | `review`；核验许可后可作标志，不冒充海报 |
| G-0202 | [File:RO icon file.png](https://commons.wikimedia.org/wiki/File:RO_icon_file.png) | [原文件](https://upload.wikimedia.org/wikipedia/commons/f/fb/RO_icon_file.png) | 游戏图标／Logo | `review`；核验许可与商标限制 |
| A-0502 | [File:Avatar The Last Airbender logo.svg](https://commons.wikimedia.org/wiki/File:Avatar_The_Last_Airbender_logo.svg) | [原文件](https://upload.wikimedia.org/wikipedia/commons/a/a9/Avatar_The_Last_Airbender_logo.svg) | 电视动画 Logo | `review`；核验许可后可作标志，不冒充海报 |

### 其余 50 件的对应媒体策略

- 音乐专辑：选择对应专辑英文或中文条目 infobox 使用的官方专辑封面。
- 动画电影：选择原始院线海报；电视动画／OVA：选择首发主视觉、DVD 封面或条目 Logo，并准确标注素材类型。
- 漫画：优先选择第 1 卷或首期封面；若条目只有 Logo，则标注为 Logo。
- 游戏：选择作品首发地区盒绘；若只有系列 Logo，不用系列标志冒充单作封面。
- 这些商业素材在维基百科上通常依赖当地站点的非自由内容政策，不能继承成本站许可。实现状态统一为 `referenced`，并显示：“非自由素材，仅用于作品识别与资料说明；版权归原权利人，不授予转载或再利用权。”
- 文件页与直链必须由实际条目的 `pageimages`／infobox 文件名再调用相同 wiki 的 `imageinfo` 获得。当前批量 API 没有为这些非自由文件返回 `original`，因此本报告不捏造文件名、直链、作者或许可。

## 实现前必须处理的复核项

1. `G-0001` 当前英文标题查询命中了系列 Q4897444，必须用 `The Sims (video game)` 重新固定 2000 年单作 QID。
2. `A-9801` 的 Q101244908 与 `A-0501` 的 Q1055370 需检查 `instance of`，确认分别是电视动画而不是整个媒体系列／原作漫画。
3. 对每个 QID 读取 `Special:EntityData/{QID}.json`，优先使用 `sitelinks.zhwiki`；没有中文条目时才使用本报告的英文修订。
4. 对全部非自由封面逐文件保存 `descriptionurl`、原文件 URL、作者／权利方、`NonFree`、核验日期；许可不明确时不要填写自由许可名称。
5. 维基百科摘要按对应修订导入本地后，再人工编辑为 80–140 个中文字符，并显示“内容改编自维基百科，已压缩和编辑”、原条目、修订号和 CC BY-SA 4.0。

## 覆盖校验

本报告身份表共 54 行，对应所有缺少 `source` 的本地 code；其中 53 个已给出作品 QID，`G-0001` 明确标记为待纠正而不是错误绑定。后续自动化应以本表 code 集合与 `archiveItems.filter(item => !item.source)` 做双向差集，差集必须为空。
