# 1995—2005 文化档案扩充研究：小说补齐与第二批馆藏

核验日期：2026-07-22  
研究目标：为现有 1995—2005 档案补齐“小说”频道，并以较小的第二批条目扩大音乐、动漫、漫画、游戏的地区与媒介覆盖。  
建议规模：小说 22 件（每年 2 件）＋其他频道 11 件（每年 1 件），合计新增 33 件。

## 结论

现有 `src/data.js` 已做到每年各有音乐、动漫、漫画、游戏的基础条目，但完全没有小说；而漫画、动漫和游戏仍明显集中于日本，音乐主要集中于英美。最有效的扩容方式不是继续堆同一文化轴线上的热门作品，而是：

1. 先以每年两本小说建立完整时间轴；每年一本作为“主选”，一本作为类型或地区补充。
2. 小说主选刻意覆盖中国、美国、印度、土耳其、南非、拉美、日本、尼日利亚与英国，并纳入后殖民文学、历史小说、反乌托邦、奇幻、恐怖、青少年文学和科幻。
3. 其他频道每年只加一件高辨识度作品，优先补香港动画、欧洲游戏、北美之外的图像小说和女性创作者，而不是再次增加日本少年漫画。

## 核验方法与口径

- 条目身份通过 [MediaWiki Action API](https://www.mediawiki.org/wiki/API:Main_page) 的 `query`、`pageprops`、`extracts` 核验；表中给出的 QID 来自 API 返回的 `pageprops.wikibase_item`。
- 出版年份、作者、原始语言和原产国优先交叉检查 [Wikidata API](https://www.wikidata.org/w/api.php) 的 `P577`（出版日期）、`P50`（作者）、`P407`（作品语言）、`P495`（原产国）声明。Wikidata 声明的参考质量不一，因此年份与作品简介同时链接到对应百科条目，落库前仍应固定 revision id。
- “地区”表示作品与作者的主要文化/出版语境，不等同于作者单一国籍。跨国、移民和离散写作采用复合标签更准确。
- 年份按原语言首版/首次正式出版计算，不按英译本或中译本年份计算。

## 小说频道：22 件完整时间轴

“主选”优先保证地理和文学传统的覆盖；“补充”负责类型、大众传播或另一个地区。若首批只能做 11 件，直接采用主选列即可。

| 年份 | 层级 | 作品 | 作者 | 建议地区 | 类型标签 | 选择依据与核验 |
|---|---|---|---|---|---|---|
| 1995 | 主选 | 《许三观卖血记》 | 余华 | 中国 | 家庭、历史、现实主义 | 以卖血串联普通家庭跨越数十年的生活史，是九十年代华语小说不可替代的一席。Wikidata [Q5114035](https://www.wikidata.org/wiki/Q5114035) 的 `P577` 为 1995、`P50` 为余华；[中文条目](https://zh.wikipedia.org/wiki/%E8%A8%B1%E4%B8%89%E8%A7%80%E8%B3%A3%E8%A1%80%E8%A8%98)。 |
| 1995 | 补充 | *Blindness*（《失明症漫记》） | José Saramago | 葡萄牙 | 寓言、反乌托邦 | 以集体失明写社会秩序崩解，补足南欧与诺奖作家。API 摘要明确为 1995 年葡萄牙小说；Wikidata [Q826428](https://www.wikidata.org/wiki/Q826428)，[条目](https://en.wikipedia.org/wiki/Blindness_(novel))。 |
| 1996 | 主选 | *Infinite Jest*（《无尽的玩笑》） | David Foster Wallace | 美国 | 后现代、百科全书式小说 | 非线性结构和大量尾注把娱乐成瘾、媒体与机构生活组成千禧年前的美国切片。Wikidata [Q1077445](https://www.wikidata.org/wiki/Q1077445)，[条目](https://en.wikipedia.org/wiki/Infinite_Jest)。 |
| 1996 | 补充 | *A Game of Thrones*（《权力的游戏》） | George R. R. Martin | 美国 | 史诗奇幻、政治 | 1996 年出版的系列首卷，以多视角政治叙事改写商业奇幻，并连接后来的全球电视文化。Wikidata [Q1751870](https://www.wikidata.org/wiki/Q1751870)，[条目](https://en.wikipedia.org/wiki/A_Game_of_Thrones)。 |
| 1997 | 主选 | *The God of Small Things*（《微物之神》） | Arundhati Roy | 印度 | 后殖民、家庭 | 以喀拉拉邦家庭写种姓、殖民遗产与“微小事物”，补齐南亚文学。Wikidata [Q378786](https://www.wikidata.org/wiki/Q378786)，[条目](https://en.wikipedia.org/wiki/The_God_of_Small_Things)。 |
| 1997 | 补充 | *Harry Potter and the Philosopher’s Stone*（《哈利·波特与魔法石》） | J. K. Rowling | 英国 | 儿童文学、奇幻 | 1997 年由 Bloomsbury 首版，代表儿童出版、跨媒体系列与全球阅读共同体。Wikidata [Q43361](https://www.wikidata.org/wiki/Q43361)，[条目](https://en.wikipedia.org/wiki/Harry_Potter_and_the_Philosopher%27s_Stone)。 |
| 1998 | 主选 | *My Name Is Red*（《我的名字叫红》） | Orhan Pamuk | 土耳其 | 历史、悬疑、元小说 | 以奥斯曼细密画师与谋杀谜案讨论观看方式、传统和西方影响，补足土耳其/西亚。Wikidata [Q470464](https://www.wikidata.org/wiki/Q470464)，[条目](https://en.wikipedia.org/wiki/My_Name_Is_Red)。 |
| 1998 | 补充 | *The Savage Detectives*（《荒野侦探》） | Roberto Bolaño | 智利／墨西哥 | 公路、诗人小说、多声部 | 1998 年西语首版，以跨国证词和漂泊诗人连接墨西哥城与拉美文学网络。Wikidata [Q898056](https://www.wikidata.org/wiki/Q898056)，[条目](https://en.wikipedia.org/wiki/The_Savage_Detectives)。 |
| 1999 | 主选 | *Disgrace*（《耻》） | J. M. Coetzee | 南非 | 后种族隔离、伦理 | 以个人失势映照后种族隔离时代的权力、暴力与责任，补齐南部非洲。Wikidata [Q958560](https://www.wikidata.org/wiki/Q958560)，[条目](https://en.wikipedia.org/wiki/Disgrace)。 |
| 1999 | 补充 | *Battle Royale*（《大逃杀》） | 高见广春 | 日本 | 反乌托邦、恐怖、青春 | 1999 年正式出版，把青少年竞争、国家暴力和生存游戏推向极端，后续类型影响显著。Wikidata [Q3761739](https://www.wikidata.org/wiki/Q3761739)，[条目](https://en.wikipedia.org/wiki/Battle_Royale_(novel))。 |
| 2000 | 主选 | *The Feast of the Goat*（《公羊的节日》） | Mario Vargas Llosa | 秘鲁／多米尼加题材 | 历史、独裁政治 | 2000 年小说以三条叙事线重访特鲁希略独裁及其余波，是拉美政治小说的重要代表。Wikidata [Q650314](https://www.wikidata.org/wiki/Q650314)，[条目](https://en.wikipedia.org/wiki/The_Feast_of_the_Goat)。 |
| 2000 | 补充 | *The Amazing Adventures of Kavalier & Clay*（《卡瓦利与克雷的神奇冒险》） | Michael Chabon | 美国／犹太移民经验 | 历史、漫画工业、移民 | 以两名表兄弟进入美国漫画黄金时代的经历连接移民、战争、商业艺术与酷儿身份。Wikidata [Q2705230](https://www.wikidata.org/wiki/Q2705230)，[固定修订](https://en.wikipedia.org/wiki/Special:Redirect/revision/1365217030)。 |
| 2001 | 主选 | 《檀香刑》 | 莫言 | 中国 | 历史、民间叙事、酷刑 | 以晚清山东为背景，把地方戏曲式叙述、殖民冲突和国家暴力结合。Wikidata [Q3227457](https://www.wikidata.org/wiki/Q3227457) 的 `P577` 为 2001、`P50` 为莫言；[中文条目](https://zh.wikipedia.org/wiki/%E6%AA%80%E9%A6%99%E5%88%91)。 |
| 2001 | 补充 | *The Corrections*（《纠正》） | Jonathan Franzen | 美国 | 家庭、社会讽刺 | 以一个中西部家庭的团聚计划折射消费、金融、照护与世纪之交的美国生活。Wikidata [Q335645](https://www.wikidata.org/wiki/Q335645)，[固定修订](https://en.wikipedia.org/wiki/Special:Redirect/revision/1358047843)。 |
| 2002 | 主选 | 《海边的卡夫卡》 | 村上春树 | 日本 | 成长、魔幻现实、梦境 | 2002 年日文出版，以两条交错叙事结合命运、音乐、潜意识和俄狄浦斯主题。Wikidata [Q579744](https://www.wikidata.org/wiki/Q579744)，[条目](https://en.wikipedia.org/wiki/Kafka_on_the_Shore)。 |
| 2002 | 补充 | *Coraline*（《鬼妈妈》） | Neil Gaiman | 英国 | 儿童文学、奇幻恐怖 | 2002 年出版的儿童中篇，以“另一位母亲”把家庭焦虑转成哥特式成长故事。Wikidata [Q475125](https://www.wikidata.org/wiki/Q475125)，[条目](https://en.wikipedia.org/wiki/Coraline)。 |
| 2003 | 主选 | *Purple Hibiscus*（《紫木槿》） | Chimamanda Ngozi Adichie | 尼日利亚 | 成长、家庭、后殖民 | 2003 年首作，以少女视角写家庭宗教暴力、伊博文化和尼日利亚社会，补足西非与女性写作。Wikidata [Q7261426](https://www.wikidata.org/wiki/Q7261426)，[条目](https://en.wikipedia.org/wiki/Purple_Hibiscus)。 |
| 2003 | 补充 | *The Kite Runner*（《追风筝的人》） | Khaled Hosseini | 阿富汗／美国离散 | 家庭、战争、救赎 | 2003 年由 Riverhead Books 出版，以父子、友谊和赎罪串联阿富汗政局与难民经验。Wikidata [Q637839](https://www.wikidata.org/wiki/Q637839)，[条目](https://en.wikipedia.org/wiki/The_Kite_Runner)。 |
| 2004 | 主选 | *2666* | Roberto Bolaño | 智利／墨西哥／西班牙 | 多线、犯罪、边境 | 2004 年遗作以五部分结构连接文学研究、欧洲历史与墨西哥边境女性谋杀，扩大拉美小说的形式尺度。Wikidata [Q219437](https://www.wikidata.org/wiki/Q219437)，[条目](https://en.wikipedia.org/wiki/2666)。 |
| 2004 | 补充 | *Jonathan Strange & Mr Norrell*（《英伦魔法师》） | Susanna Clarke | 英国 | 另类历史、奇幻 | 2004 年出版，以十九世纪文体、拿破仑战争和魔法复兴重构历史奇幻；亦补入女性类型作家。Wikidata [Q1474920](https://www.wikidata.org/wiki/Q1474920)，[条目](https://en.wikipedia.org/wiki/Jonathan_Strange_%26_Mr_Norrell)。 |
| 2005 | 主选 | *Never Let Me Go*（《别让我走》） | Kazuo Ishiguro | 英国／日裔离散 | 科幻、记忆、伦理 | 2005 年科幻小说以寄宿学校记忆缓慢揭示克隆制度，连接生命伦理、阶级和人之定义。Wikidata [Q951587](https://www.wikidata.org/wiki/Q951587)，[条目](https://en.wikipedia.org/wiki/Never_Let_Me_Go_(novel))。 |
| 2005 | 补充 | 《兄弟》 | 余华 | 中国 | 社会史、悲喜剧、市场化转型 | 小说从小城家庭创伤写到市场化年代的欲望与荒诞，补强华语世纪转型叙事。Wikidata [Q4975657](https://www.wikidata.org/wiki/Q4975657)，[固定修订](https://en.wikipedia.org/wiki/Special:Redirect/revision/1363870873)。 |

### 可替换的华语加码项

- 1996《丰乳肥臀》—莫言，中国；Wikidata [Q1769011](https://www.wikidata.org/wiki/Q1769011) 的出版年份声明为 1996。若希望华语权重更高，可替换 1996 的补充项。
- 1999《上海宝贝》—卫慧，中国；[中文条目](https://zh.wikipedia.org/wiki/%E4%B8%8A%E6%B5%B7%E5%AE%9D%E8%B4%9D)明确记载中文版于 1999 年出版。其文化史价值在于都市消费、女性身体书写及出版审查争议，但选用时说明文字应避免猎奇化。
- 2004《狼图腾》—姜戎，中国；适合作为畅销书、生态政治和草原想象的案例，但本轮 Wikimedia API 遭遇限流，尚未固定 QID 与首版声明，暂列“复核后采用”，不应直接落库。
- 2001 *Life of Pi*（《少年派的奇幻漂流》）可作为更偏大众传播的替换项；但 Wikidata [Q374204](https://www.wikidata.org/wiki/Q374204) 当前 `P407` 机器值与英文原作事实冲突，自动导入前须用 Knopf Canada 等出版社资料二次核验。
- *White Teeth* 与 *The Book Thief* 的百科正文分别常记为 2000、2005，但本轮读取到的 Wikidata `P577` 分别出现 2001、2006。它们仍有策展价值，却不适合作为无需人工复核的年度首批数据。

## 其他频道：每年 1 件的优先扩容清单

这 11 件不是简单的“历史最佳”，而是针对当前馆藏的结构性缺口：女性音乐人、香港动画、欧洲游戏、欧美之外的图像小说，以及更广的独立制作传统。

| 年份 | 频道 | 作品 | 创作者／厂牌 | 地区 | 为什么适合加入 | 身份来源 |
|---|---|---|---|---|---|---|
| 1995 | 音乐 | *Jagged Little Pill* | Alanis Morissette | 加拿大 | 女性创作、另类摇滚与主流流行交汇，可平衡现有 Oasis 的英伦男性乐队视角。 | [Wikipedia](https://en.wikipedia.org/wiki/Jagged_Little_Pill) / [Wikidata](https://www.wikidata.org/wiki/Special:Search?search=Jagged+Little+Pill) |
| 1996 | 游戏 | *Tomb Raider* | Core Design / Eidos | 英国 | 早期 3D 动作冒险、关卡探索与劳拉·克劳馥的全球媒介形象，补足欧洲主机开发。 | [Wikipedia](https://en.wikipedia.org/wiki/Tomb_Raider_(1996_video_game)) |
| 1997 | 动漫 | 《小倩》 | 徐克／电影工作室 | 中国香港 | 香港首部重要 CGI/传统动画混合长片之一，把《聊斋》、港产片节奏与动画技术结合。 | [Wikipedia](https://en.wikipedia.org/wiki/A_Chinese_Ghost_Story:_The_Tsui_Hark_Animation) |
| 1998 | 漫画 | 《浪客行》 | 井上雄彦 | 日本 | 虽仍为日本作品，但水墨式笔触与哲学化武士叙事可补出现有少年 Jump 系谱之外的青年漫画。 | [Wikipedia](https://en.wikipedia.org/wiki/Vagabond_(manga)) |
| 1999 | 游戏 | *The Longest Journey* | Funcom | 挪威 | 以双世界叙事和女性主角代表欧洲图形冒险复兴，地区与玩法均是现有馆藏空白。 | [Wikipedia](https://en.wikipedia.org/wiki/The_Longest_Journey) |
| 2000 | 漫画 | *Jimmy Corrigan: The Smartest Kid on Earth* | Chris Ware | 美国 | 以严密版式、家族记忆和孤独经验展示文学图像小说路线，区别于超级英雄与日漫连载。 | [Wikipedia](https://en.wikipedia.org/wiki/Jimmy_Corrigan,_the_Smartest_Kid_on_Earth) |
| 2001 | 动漫 | 《麦兜故事》 | 袁建滔／谢立文／麦家碧 | 中国香港 | 粤语城市生活、儿童视角与经济转型中的温柔失落，能显著增加华语动画的地方性。 | [Wikipedia](https://en.wikipedia.org/wiki/My_Life_as_McDull) |
| 2002 | 漫画 | *The Rabbi’s Cat* | Joann Sfar | 法国／阿尔及利亚犹太文化 | 以会说话的猫讨论信仰、殖民城市和身份，补足法语漫画与北非文化语境。 | [Wikipedia](https://en.wikipedia.org/wiki/The_Rabbi%27s_Cat) |
| 2003 | 游戏 | *Beyond Good & Evil* | Ubisoft Montpellier | 法国 | 摄影、调查、宣传机器与动作冒险结合，是欧洲作者型商业游戏的代表。 | [Wikipedia](https://en.wikipedia.org/wiki/Beyond_Good_%26_Evil_(video_game)) |
| 2004 | 音乐 | *Funeral* | Arcade Fire | 加拿大 | 独立摇滚、家庭死亡经验和群体式编曲共同成为 2000 年代中期乐队文化节点。 | [Wikipedia](https://en.wikipedia.org/wiki/Funeral_(Arcade_Fire_album)) |
| 2005 | 漫画 | *Aya of Yop City*（《阿娅》） | Marguerite Abouet / Clément Oubrerie | 科特迪瓦／法国 | 以阿比让普通少女的生活抵抗“非洲只等于战争贫困”的单一图像，且补入非洲女性编剧。首卷 2005 年出版。 | [Wikipedia](https://en.wikipedia.org/wiki/Aya_of_Yop_City) |

## 建议的数据与产品调整

1. 新增类型 `小说`，英文标签可用 `FICTION` 或更直观的 `NOVELS`，不要把图像小说并入该频道；现有 `漫画` 已承担 comics/graphic novel。
2. 小说编号建议使用 `N-YYNN`，例如 1995 主选 `N-9501`、补充 `N-9502`，避免与音乐 `M` 混淆。
3. `format` 建议使用 `NOVEL / {原始语言}`；中篇如 *Coraline* 可标 `NOVELLA / ENGLISH`，而不是虚构出版社或装帧。
4. `region` 允许复合值，例如“英国／加勒比与南亚离散”“智利／墨西哥”，不要把作者出生地机械等同于作品地区。
5. 首批实现推荐一次加入 22 本小说和 11 件其他作品。若素材准备量有限，先上 11 本“主选”小说，再补第二列；不要只加入英美畅销书，否则新增频道会立即复制既有偏差。
6. 封面大多属于非自由商业图像。沿用项目现有策略：逐文件记录来源页、权利方和非自由资料性引用说明；没有 `imageinfo.extmetadata` 或出版方页面支持时，不宣称自由许可。

## 实施前复核清单

- 为 33 件候选逐一固定 QID、Wikipedia revision id 和首版日期；小说的固定修订与额外备选见同目录的 `novel-expansion-sources-2026-07.md`。
- 对《丰乳肥臀》注意常见资料存在 1995/1996 差异；本轮 Wikidata `P577` 返回 1996，因此若落到 1995 必须另有出版社一手来源。
- 《狼图腾》尚未完成 API 身份固定，暂不进入首批数据。
- 《兄弟》分卷出版跨度需要在落库说明中写清楚；本清单按首卷始于 2005 归档，不把后续卷误写成同年完成。
- 对《小倩》《麦兜故事》在 UI 中标为“动漫/动画电影”，避免被理解为日本 anime。
- 对跨国作者使用“作品语境”说明，不用单一国旗替代复杂身份。
