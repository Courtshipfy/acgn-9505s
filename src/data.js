import { collectionMetadata } from './collection-metadata.js'

const entry = (year, type, title, creator, region, code, accent, format, tags, note) => ({
  year, type, title, creator, region, code, accent, format, tags, note,
})

const baseArchiveItems = [
  entry(1995, '音乐', '(What’s the Story) Morning Glory?', 'Oasis', '英国', 'M-9501', '#f04d32', 'ALBUM / CD', ['Britpop', 'Rock'], '英伦摇滚从地下俱乐部驶入体育场，成为九十年代最响亮的大众文化事件之一。'),
  entry(1995, '动漫', '新世纪福音战士', 'GAINAX', '日本', 'A-9501', '#8f63ff', 'TV / 26 EP.', ['机甲', '心理'], '机甲、心理分析与世纪末情绪在电视动画中发生了一次无法复制的碰撞。'),
  entry(1995, '漫画', '头文字D', '重野秀一', '日本', 'C-9501', '#e8b936', 'SERIAL / YOUNG MAGAZINE', ['竞速', '青年'], '山路、欧陆节拍与改装文化共同塑造了跨越国界的汽车浪漫。'),
  entry(1995, '游戏', 'Chrono Trigger', 'Square', '日本', 'G-9501', '#53a9c7', 'SNES / RPG', ['时空', '角色扮演'], '时间旅行结构、像素美术与梦幻制作阵容留下了十六位机时代的高峰。'),

  entry(1996, '音乐', 'Endtroducing.....', 'DJ Shadow', '美国', 'M-9601', '#786c9d', 'ALBUM / CD', ['Trip Hop', '采样'], '以采样构筑完整世界，证明唱机与旧唱片同样可以成为作曲工具。'),
  entry(1996, '动漫', '浪客剑心', 'Studio Gallop', '日本', 'A-9601', '#cf5947', 'TV / 94 EP.', ['时代剧', '剑客'], '明治时代的历史余波与少年漫画式动作在电视荧幕上相遇。'),
  entry(1996, '漫画', '游戏王', '高桥和希', '日本', 'C-9601', '#c39a3b', 'SERIAL / SHONEN JUMP', ['卡牌', '冒险'], '从黑暗游戏发展出全球卡牌文化，纸面规则进入现实社交空间。'),
  entry(1996, '游戏', '宝可梦 红／绿', 'Game Freak', '日本', 'G-9601', '#f1c638', 'GAME BOY / RPG', ['收集', '交换'], '把交换、收集与携带式冒险带进一代人的口袋。'),

  entry(1997, '音乐', 'OK Computer', 'Radiohead', '英国', 'M-9701', '#82a2a0', 'ALBUM / CD', ['Art Rock', '未来焦虑'], '在网络社会真正到来之前，准确捕捉了技术、孤独与现代生活的焦虑。'),
  entry(1997, '动漫', '幽灵公主', '宫崎骏 / 吉卜力', '日本', 'A-9701', '#70895b', 'FILM / 134 MIN.', ['自然', '史诗'], '自然与工业没有简单答案，动画电影由此获得了更辽阔的道德尺度。'),
  entry(1997, '漫画', 'ONE PIECE', '尾田荣一郎', '日本', 'C-9701', '#ed6b45', 'SERIAL / SHONEN JUMP', ['冒险', '友情'], '从东海起航的漫长浪漫主义冒险，逐渐成为全球共同阅读经验。'),
  entry(1997, '游戏', 'Final Fantasy VII', 'Square', '日本', 'G-9701', '#51a7ff', 'PLAYSTATION / RPG', ['科幻', '叙事'], '电影化叙事、预渲染背景与三维角色共同定义了新一代 RPG。'),

  entry(1998, '音乐', 'The Miseducation of Lauryn Hill', 'Lauryn Hill', '美国', 'M-9801', '#de7d3f', 'ALBUM / CD', ['Neo Soul', 'Hip-Hop'], '灵魂乐、嘻哈与私人书写结合，形成一张跨类型的时代唱片。'),
  entry(1998, '动漫', '星际牛仔', 'SUNRISE', '日本', 'A-9801', '#d95449', 'TV / 26 EP.', ['太空歌剧', '爵士'], '爵士、太空西部片和成年人世界，以单元故事拼出失去与告别。'),
  entry(1998, '漫画', 'HUNTER×HUNTER', '富坚义博', '日本', 'C-9801', '#58a777', 'SERIAL / SHONEN JUMP', ['冒险', '策略'], '不断改写规则的能力系统，让少年漫画的智斗与世界构造抵达新高度。'),
  entry(1998, '游戏', 'Metal Gear Solid', 'Konami', '日本', 'G-9801', '#87956f', 'PLAYSTATION / STEALTH', ['潜行', '电影化'], '潜入玩法与电影镜头语言融合，也开始直接讨论玩家与角色的关系。'),

  entry(1999, '音乐', 'The Battle of Los Angeles', 'Rage Against the Machine', '美国', 'M-9901', '#cf352f', 'ALBUM / CD', ['Rap Metal', '政治'], '吉他噪音、说唱节奏与政治表达在千禧年前夜保持高压。'),
  entry(1999, '动漫', '数码宝贝大冒险', '东映动画', '日本', 'A-9901', '#e99931', 'TV / 54 EP.', ['异世界', '成长'], '电子世界的冒险不仅关乎升级，也关乎儿童面对家庭和自我的成长。'),
  entry(1999, '漫画', '火影忍者', '岸本齐史', '日本', 'C-9901', '#f29335', 'SERIAL / SHONEN JUMP', ['忍者', '成长'], '孤独、认可与代际创伤让热血少年漫画成为全球共同语言。'),
  entry(1999, '游戏', 'Counter-Strike', 'Minh Le / Jess Cliffe', '全球', 'G-9901', '#d7b457', 'PC / FPS', ['竞技', '联机'], '网吧时代最清晰的一声开局倒计时，团队竞技由模组走向全球。'),

  entry(2000, '音乐', 'Kid A', 'Radiohead', '英国', 'M-0001', '#8aa6b1', 'ALBUM / CD', ['Electronic', 'Art Rock'], '摇滚乐在新千年的电子迷雾中重启，传统乐队身份被主动拆解。'),
  entry(2000, '动漫', 'FLCL', 'GAINAX / Production I.G', '日本', 'A-0001', '#e86079', 'OVA / 6 EP.', ['青春', '实验'], '吉他、机器人和青春期焦虑被压缩进六集高速运转的视听实验。'),
  entry(2000, '漫画', '异兽魔都', '林田球', '日本', 'C-0001', '#8d9c58', 'SERIAL / MONTHLY IKKI', ['奇幻', '黑色幽默'], '粗粝工业城市、魔法与荒诞日常构成独一无二的混沌世界。'),
  entry(2000, '游戏', 'The Sims', 'Maxis', '美国', 'G-0001', '#60a990', 'PC / SIMULATION', ['生活模拟', '沙盒'], '电子游戏第一次如此大众化地把日常生活、建筑和社会关系变成玩具。'),

  entry(2001, '音乐', 'Discovery', 'Daft Punk', '法国', 'M-0101', '#d79c38', 'ALBUM / CD', ['French House', 'Disco'], '机器人头盔、迪斯科记忆与动画影像共同构成闪耀的数字流行主义。'),
  entry(2001, '动漫', '千与千寻', '宫崎骏 / 吉卜力', '日本', 'A-0101', '#79b99c', 'FILM / 125 MIN.', ['奇幻', '成长'], '穿越隧道进入神灵世界，也进入全球动画史最广为人知的一页。'),
  entry(2001, '漫画', '钢之炼金术师', '荒川弘', '日本', 'C-0101', '#ad5550', 'SERIAL / SHONEN GANGAN', ['炼金术', '战争'], '以等价交换为起点，将家庭、战争伦理与国家机器织进少年冒险。'),
  entry(2001, '游戏', 'Halo: Combat Evolved', 'Bungie', '美国', 'G-0101', '#89a85f', 'XBOX / FPS', ['科幻', '主机'], '双摇杆控制、护盾循环和开放战场建立了主机第一人称射击范式。'),

  entry(2002, '音乐', 'The Eminem Show', 'Eminem', '美国', 'M-0201', '#c54438', 'ALBUM / CD', ['Hip-Hop', '自传'], '明星身份、家庭冲突与美国文化争议被写进一场高度私人化的演出。'),
  entry(2002, '动漫', '攻壳机动队 STAND ALONE COMPLEX', 'Production I.G', '日本', 'A-0201', '#4898a2', 'TV / 26 EP.', ['赛博朋克', '政治'], '网络社会、恐怖主义与个体意识通过程序化案件展开严密讨论。'),
  entry(2002, '漫画', '光速蒙面侠21', '稻垣理一郎 / 村田雄介', '日本', 'C-0201', '#d7aa32', 'SERIAL / SHONEN JUMP', ['体育', '团队'], '美式橄榄球被转译成速度、战术与团队成长兼具的少年漫画。'),
  entry(2002, '游戏', 'Grand Theft Auto: Vice City', 'Rockstar North', '英国', 'G-0201', '#e35f9a', 'PS2 / OPEN WORLD', ['开放世界', '犯罪'], '霓虹、广播与八十年代流行文化让城市本身成为开放世界的主角。'),

  entry(2003, '音乐', 'Elephant', 'The White Stripes', '美国', 'M-0301', '#d6322f', 'ALBUM / CD', ['Garage Rock', 'Blues'], '极简编制和模拟录音美学，在数字时代重新放大原始摇滚的触感。'),
  entry(2003, '动漫', '钢之炼金术师', 'BONES', '日本', 'A-0301', '#ae5e54', 'TV / 51 EP.', ['炼金术', '冒险'], '电视动画以独立路线扩展原作主题，成为全球动画传播的重要节点。'),
  entry(2003, '漫画', '死亡笔记', '大场鸫 / 小畑健', '日本', 'C-0301', '#85857d', 'SERIAL / SHONEN JUMP', ['悬疑', '心理'], '规则、推理与道德困境组成黑色棋局，主角与反派的边界不断反转。'),
  entry(2003, '游戏', 'Prince of Persia: The Sands of Time', 'Ubisoft Montreal', '加拿大', 'G-0301', '#c69a5b', 'MULTI / ACTION', ['跑酷', '时间'], '流畅攀爬与时间倒流机制，让失误也成为叙事和操作的一部分。'),

  entry(2004, '音乐', 'American Idiot', 'Green Day', '美国', 'M-0401', '#db3036', 'ALBUM / CD', ['Punk Rock', '概念专辑'], '朋克歌剧以连续叙事记录战争年代、媒体社会与青年焦躁。'),
  entry(2004, '动漫', '混沌武士', 'manglobe', '日本', 'A-0401', '#cf733a', 'TV / 26 EP.', ['时代剧', 'Hip-Hop'], '江户时代与嘻哈文化进行采样式混合，历史被重新剪辑成节拍。'),
  entry(2004, '漫画', '银魂', '空知英秋', '日本', 'C-0401', '#6f9ead', 'SERIAL / SHONEN JUMP', ['喜剧', '时代剧'], '科幻江户、戏仿与严肃长篇自由切换，形成异常顽强的喜剧宇宙。'),
  entry(2004, '游戏', 'World of Warcraft', 'Blizzard Entertainment', '美国', 'G-0401', '#d89835', 'PC / MMORPG', ['在线世界', '社群'], '数百万人在持续运转的世界中组队、交易，也建立了第二套社会生活。'),

  entry(2005, '音乐', 'Demon Days', 'Gorillaz', '英国', 'M-0501', '#707d61', 'ALBUM / CD', ['Alternative', '虚拟乐队'], '虚拟乐队把末日寓言、流行旋律与多类型合作拼成完整媒体世界。'),
  entry(2005, '动漫', '虫师', 'ARTLAND', '日本', 'A-0501', '#779c76', 'TV / 26 EP.', ['自然', '幽玄'], '在自然、幽玄与静默之间缓慢呼吸，奇异生命并不服从人的善恶。'),
  entry(2005, '漫画', '绝望先生', '久米田康治', '日本', 'C-0501', '#79777b', 'SERIAL / SHONEN MAGAZINE', ['讽刺', '黑色喜剧'], '以密集文字、社会观察和绝望口号解剖千禧年代的日本日常。'),
  entry(2005, '游戏', 'Shadow of the Colossus', 'Team Ico', '日本', 'G-0501', '#9ca58f', 'PS2 / ACTION', ['巨像', '极简叙事'], '辽阔、孤独，以及胜利之后的沉默，让动作游戏拥有罕见的道德余韵。'),

  // 全球补充馆藏：让“95—05”不只是一条英美与日本文化轴线。
  entry(1995, '漫画', 'Preacher', 'Garth Ennis / Steve Dillon', '美国', 'C-9502', '#b84a35', 'SERIAL / VERTIGO', ['公路', '黑色幽默'], '公路片、西部片与宗教寓言被装进一部锋利、粗粝的成人漫画。'),
  entry(1996, '漫画', 'Kingdom Come', 'Mark Waid / Alex Ross', '美国', 'C-9602', '#526d91', 'LIMITED SERIES / DC', ['超级英雄', '寓言'], '以绘画般的写实画面追问超级英雄老去之后，力量应当向谁负责。'),
  entry(1997, '音乐', 'Homogenic', 'Björk', '冰岛', 'M-9702', '#756b8f', 'ALBUM / CD', ['Art Pop', 'Electronic'], '电子节拍、弦乐团与火山般的动态被整合成统一的声音景观，Björk 由此把私人情绪、数字制作和管弦写作推进到一种高度个人化的专辑语言。'),
  entry(1997, '动漫', 'South Park', 'Trey Parker / Matt Stone', '美国', 'A-9702', '#73a8bb', 'TV / ANIMATION', ['讽刺', '成人动画'], '看似粗糙的剪纸风格成为快速回应新闻、政治与大众文化的高效语言。'),
  entry(1998, '漫画', 'Priest', '邢民友', '韩国', 'C-9802', '#6d625d', 'SERIAL / MANHWA', ['西部', '黑暗奇幻'], '韩国漫画以哥特、西部与宗教恐怖的混合风格进入国际读者视野。'),
  entry(1998, '游戏', 'StarCraft', 'Blizzard Entertainment', '美国／韩国文化圈', 'G-9802', '#687d9c', 'PC / RTS', ['即时战略', '电竞'], '三个种族的精密平衡在韩国发展出职业联赛，并推动电子竞技成为大众观看活动。'),
  entry(1999, '动漫', 'The Iron Giant', 'Brad Bird / Warner Bros.', '美国', 'A-9902', '#76909a', 'FILM / 87 MIN.', ['科幻', '成长'], '冷战阴影下，一个男孩与巨大机器人的友谊讨论了武器能否选择不成为武器。'),
  entry(2000, '音乐', 'Jay', '周杰伦', '中国台湾', 'M-0002', '#8b7455', 'ALBUM / CD', ['华语流行', 'R&B'], 'R&B、说唱、含混唱腔与中文书写方式共同改变了新世纪华语流行音乐。'),
  entry(2000, '漫画', 'Persepolis', 'Marjane Satrapi', '法国／伊朗', 'C-0002', '#55514d', 'GRAPHIC MEMOIR', ['回忆录', '历史'], '极简黑白画面以个人成长穿过革命、战争、迁徙与身份认同。'),
  entry(2000, '漫画', 'Blacksad', 'Juan Díaz Canales / Juanjo Guarnido', '西班牙／法国', 'C-0003', '#9b7044', 'ALBUM / DARGAUD', ['黑色侦探', '拟人'], '欧洲漫画的精细水彩与美国黑色电影语法在动物侦探世界中结合。'),
  entry(2001, '漫画', '火凤燎原', '陈某', '中国香港', 'C-0102', '#b34f3a', 'SERIAL / COMIC WORLD', ['历史', '谋略'], '三国叙事被重组为多线政治谋略，以现代漫画节奏重新解释熟悉历史。'),
  entry(2002, '音乐', 'Yankee Hotel Foxtrot', 'Wilco', '美国', 'M-0202', '#8d8172', 'ALBUM / CD', ['Alternative Rock', '实验制作'], '美国根源摇滚的歌曲骨架被噪声、电子纹理和录音拼贴不断侵入，专辑以精密而克制的制作完成一次形式重组，也成为互联网发行转型期的重要文化事件。'),
  entry(2002, '漫画', 'Y: The Last Man', 'Brian K. Vaughan / Pia Guerra', '美国', 'C-0202', '#69816a', 'SERIAL / VERTIGO', ['末日', '性别'], '以最后一名男性的公路旅程展开末日政治、性别结构与社会重建。'),
  entry(2002, '游戏', 'Metroid Prime', 'Retro Studios / Nintendo', '美国／日本', 'G-0202', '#527f82', 'GAMECUBE / ACTION ADVENTURE', ['第一人称探索', '环境叙事'], '能力解锁、回环地图和孤独探索被完整转化进第一人称三维空间，扫描界面、环境叙事、美术与关卡结构共同建立了动作冒险游戏的新标杆。'),
  entry(2003, '漫画', 'Blankets', 'Craig Thompson', '美国', 'C-0302', '#6687a5', 'GRAPHIC NOVEL', ['成长', '自传'], '流动黑白线条把初恋、信仰与家庭记忆写成长篇私人图像小说。'),
  entry(2004, '漫画', 'Scott Pilgrim', 'Bryan Lee O’Malley', '加拿大', 'C-0402', '#d85f67', 'GRAPHIC NOVEL SERIES', ['青春', '游戏文化'], '独立漫画、电玩规则与乐队生活融合，恋爱被表现成一连串可见的关卡。'),
  entry(2005, '音乐', 'Arular', 'M.I.A.', '英国／斯里兰卡', 'M-0502', '#d85e3d', 'ALBUM / CD', ['Electronic', '全球低音'], '移民经验、街头图形、鼓机与跨国节拍构成互联网时代的新流行拼贴。'),
  entry(2005, '动漫', 'Avatar: The Last Airbender', 'Michael Dante DiMartino / Bryan Konietzko', '美国', 'A-0502', '#5b91ae', 'TV / ANIMATION', ['奇幻', '成长'], '亚洲文化灵感、连续叙事与角色成长推动美国电视动画进入新的长篇阶段。'),

  // 小说馆藏：每年两部，以类型文学、严肃文学与跨区域写作为主要选择轴线。
  entry(1995, '小说', 'Blindness', 'José Saramago', '葡萄牙', 'N-9501', '#8c8267', 'NOVEL / ALLEGORY', ['寓言', '反乌托邦'], '一场无法解释的失明迅速瓦解城市秩序，小说以无名人物、长句和群体困境审视文明规则、权力暴力与人在灾难中的相互责任。'),
  entry(1995, '小说', '许三观卖血记', '余华', '中国大陆', 'N-9502', '#a75543', 'NOVEL / SOCIAL FICTION', ['家庭', '现实主义'], '许三观一次次以卖血应对家庭危机和时代变迁，重复行动在悲剧与幽默之间串起普通人的尊严、亲情和生存韧性。'),
  entry(1996, '小说', 'Infinite Jest', 'David Foster Wallace', '美国', 'N-9601', '#657c67', 'NOVEL / POSTMODERN', ['后现代', '媒体'], '网球学院、戒瘾中心与致命娱乐影像被编织成巨型叙事，预示注意力经济、媒介沉迷和娱乐至上的社会症候。'),
  entry(1996, '小说', 'A Game of Thrones', 'George R. R. Martin', '美国', 'N-9602', '#695279', 'NOVEL / EPIC FANTASY', ['史诗奇幻', '政治'], '多视角叙事把王位争夺、家族伦理和漫长季节组织成残酷政治棋局，重新扩大商业奇幻的现实感与跨媒体传播规模。'),
  entry(1997, '小说', 'Harry Potter and the Philosopher’s Stone', 'J. K. Rowling', '英国', 'N-9701', '#7654a2', 'NOVEL / FANTASY', ['魔法', '成长'], '霍格沃茨、学院制度与完整魔法社会迅速成为全球共享的阅读语言，并推动儿童文学、类型出版与跨媒体系列进入新规模。'),
  entry(1997, '小说', 'The God of Small Things', 'Arundhati Roy', '印度', 'N-9702', '#94703d', 'NOVEL / LITERARY FICTION', ['家族', '社会'], '喀拉拉邦家庭悲剧通过非线性时间、儿童视角与语言实验展开，把种姓、殖民遗产、性别和私人创伤压进细小日常。'),
  entry(1998, '小说', 'The Savage Detectives', 'Roberto Bolaño', '智利／墨西哥', 'N-9801', '#c08a37', 'NOVEL / ROAD FICTION', ['拉美文学', '公路'], '一群先锋诗人的失踪与漂泊由数十个声音拼合而成，青春、文学共同体和拉美历史在跨洲追寻中不断留下空白。'),
  entry(1998, '小说', 'My Name Is Red', 'Orhan Pamuk', '土耳其', 'N-9802', '#9d3e35', 'NOVEL / HISTORICAL MYSTERY', ['艺术', '悬疑'], '奥斯曼细密画师的死亡由人、物与颜色轮流讲述，艺术风格、宗教禁忌、爱情和谋杀在多声部悬疑结构中持续争辩。'),
  entry(1999, '小说', 'Battle Royale', '高见广春', '日本', 'N-9901', '#a63d36', 'NOVEL / DYSTOPIA', ['反乌托邦', '生存'], '被迫互相残杀的中学生将国家暴力、媒介奇观和青春信任推到极端，后来深刻影响生存竞赛题材的漫画、电影与电子游戏。'),
  entry(1999, '小说', 'Disgrace', 'J. M. Coetzee', '南非', 'N-9902', '#766c5b', 'NOVEL / LITERARY FICTION', ['后殖民', '伦理'], '一名大学教师的坠落与南非社会转型交叠，小说以克制而不安的方式审视权力、性别、土地和种族关系中的责任问题。'),
  entry(2000, '小说', 'The Feast of the Goat', 'Mario Vargas Llosa', '秘鲁', 'N-0001', '#806042', 'NOVEL / POLITICAL FICTION', ['独裁', '拉美文学'], '多米尼加独裁统治的最后一天与多年后的返乡记忆交叉展开，从统治者、刺杀者和受害者视角剖开恐惧如何进入家庭与身体。'),
  entry(2000, '小说', 'The Amazing Adventures of Kavalier & Clay', 'Michael Chabon', '美国', 'N-0002', '#527a8b', 'NOVEL / HISTORICAL', ['漫画文化', '移民'], '两位犹太青年在纽约黄金时代漫画工业中创造英雄，逃亡、战争、商业版权与身份秘密共同构成一部关于创作和自由的历史小说。'),
  entry(2001, '小说', 'The Corrections', 'Jonathan Franzen', '美国', 'N-0101', '#77835c', 'NOVEL / FAMILY SAGA', ['家庭', '消费社会'], '兰伯特一家试图完成最后一次团聚，个人失败、金融泡沫、医药产业与代际矛盾共同勾勒世纪之交的美国中产生活。'),
  entry(2001, '小说', '檀香刑', '莫言', '中国大陆', 'N-0102', '#9b4837', 'NOVEL / HISTORICAL', ['历史', '民间叙事'], '晚清山东的反殖民冲突与残酷刑罚通过猫腔、说书和多声部结构展开，历史暴力被转化为强烈的民间表演性叙事。'),
  entry(2002, '小说', 'Kafka on the Shore', '村上春树', '日本', 'N-0201', '#526f91', 'NOVEL / MAGICAL REALISM', ['超现实', '成长'], '离家少年与能同猫说话的老人沿两条路径前进，梦境、古典音乐、神话和记忆在现实边界之外逐渐汇合。'),
  entry(2002, '小说', 'Coraline', 'Neil Gaiman', '英国', 'N-0202', '#5f6a83', 'NOVELLA / DARK FANTASY', ['黑暗奇幻', '儿童文学'], '一扇门后的“另一个家”把儿童对理想父母的渴望变成恐怖陷阱，短小篇幅以精确意象讨论勇气、自主与家庭关系。'),
  entry(2003, '小说', 'The Known World', 'Edward P. Jones', '美国', 'N-0301', '#695c4d', 'NOVEL / HISTORICAL FICTION', ['历史小说', '多视角'], '小说围绕自由黑人拥有奴隶这一历史矛盾展开，以跳跃时间、多人物视角和预示式叙述重建完整社会网络，使制度暴力在个人选择与日常关系中显影。'),
  entry(2003, '小说', 'Purple Hibiscus', 'Chimamanda Ngozi Adichie', '尼日利亚', 'N-0302', '#814f73', 'NOVEL / BILDUNGSROMAN', ['成长', '后殖民'], '少女坎比利在宗教高压家庭与更自由的亲族生活之间成长，家庭暴力、伊博文化和尼日利亚政治通过克制视角逐渐显影。'),
  entry(2004, '小说', '2666', 'Roberto Bolaño', '智利／墨西哥', 'N-0401', '#6c6870', 'NOVEL / LITERARY FICTION', ['多线叙事', '历史暴力'], '五个相连部分从文学研究者追踪作家延伸至墨西哥边境城市的连环女性谋杀，以巨大断裂结构凝视艺术、战争与现代暴力。'),
  entry(2004, '小说', 'Jonathan Strange & Mr Norrell', 'Susanna Clarke', '英国', 'N-0402', '#5e7186', 'NOVEL / ALTERNATE HISTORY', ['奇幻', '另类历史'], '两位魔法师在拿破仑战争时期复兴英国魔法，仿十九世纪文体、脚注与仙境传统共同搭建出严密而幽暗的另类历史。'),
  entry(2005, '小说', 'Never Let Me Go', 'Kazuo Ishiguro', '英国', 'N-0501', '#75819a', 'NOVEL / SPECULATIVE FICTION', ['记忆', '生命伦理'], '寄宿学校回忆逐渐显露克隆人制度的真相，小说用平静克制的声音讨论爱、顺从、死亡与被社会规定的人生价值。'),
  entry(2005, '小说', '兄弟', '余华', '中国大陆', 'N-0502', '#b14f3d', 'NOVEL / SOCIAL FICTION', ['社会变迁', '悲喜剧'], '两兄弟的命运从集体化年代延伸到市场经济狂潮，以夸张悲喜剧书写家庭创伤、欲望膨胀与中国社会高速转型的荒诞感。'),

  // 其他频道增补：优先填补女性创作者、华语动画、欧洲游戏与非洲图像小说等结构缺口。
  entry(1995, '音乐', 'Jagged Little Pill', 'Alanis Morissette', '加拿大', 'M-9502', '#a37a42', 'ALBUM / CD', ['Alternative Rock', '女性创作'], '私人愤怒、口语化写作与主流摇滚制作在一张巨大畅销专辑中汇合，为九十年代女性创作者进入全球流行中心留下关键节点。'),
  entry(1996, '游戏', 'Tomb Raider', 'Core Design / Eidos', '英国', 'G-9602', '#718389', 'PLAYSTATION / ACTION ADVENTURE', ['3D 探索', '女性主角'], '三维遗迹探索、平台跳跃与劳拉·克劳馥的媒介形象共同定义早期动作冒险，也让欧洲主机开发进入全球大众视野。'),
  entry(1997, '动漫', 'Perfect Blue', '今敏 / MADHOUSE', '日本', 'A-9703', '#725b78', 'FILM / 81 MIN.', ['心理惊悚', '媒介现实'], '偶像转型、网络人格与被观看的恐惧通过不可靠视角和断裂剪辑彼此渗透，现实、表演和幻觉失去稳定边界，开拓了动画心理惊悚的电影语言。'),
  entry(1998, '漫画', '浪客行', '井上雄彦', '日本', 'C-9803', '#806746', 'SERIAL / MORNING', ['武士', '青年'], '宫本武藏传说经由水墨感笔触、身体动作与哲学追问重新展开，在少年漫画主流之外代表更沉静成熟的青年漫画路线。'),
  entry(1999, '游戏', 'Shenmue', 'SEGA AM2 / 铃木裕', '日本', 'G-9902', '#657b78', 'DREAMCAST / OPEN-WORLD ADVENTURE', ['城市模拟', '电影化叙事'], '日程化居民、可调查物件、天气与城市生活被组织进连续运转的三维空间，电影化演出和即时事件共同推动开放世界从背景布置走向日常模拟。'),
  entry(2000, '漫画', 'Jimmy Corrigan: The Smartest Kid on Earth', 'Chris Ware', '美国', 'C-0004', '#8d6c4b', 'GRAPHIC NOVEL', ['版式实验', '家族记忆'], '几何化版式、视觉符号和跨代家庭创伤组成一部需要被“观看着阅读”的图像小说，把孤独经验转化为精密的页面建筑。'),
  entry(2001, '动漫', 'Millennium Actress', '今敏 / MADHOUSE', '日本', 'A-0102', '#a06b55', 'FILM / 87 MIN.', ['电影记忆', '元叙事'], '一位女演员的回忆、出演过的电影和采访现场在运动与剪辑中无缝转换，个人追寻与日本电影史彼此嵌套，让记忆本身成为不断改写现实的银幕。'),
  entry(2002, '漫画', 'The Rabbi’s Cat', 'Joann Sfar', '法国／阿尔及利亚', 'C-0203', '#bd7840', 'BANDE DESSINÉE', ['信仰', '北非'], '会说话的猫在殖民时期阿尔及尔追问犹太教、语言与身份，以轻盈对话连接法语漫画传统、北非城市和宗教哲思。'),
  entry(2003, '游戏', 'Star Wars: Knights of the Old Republic', 'BioWare / LucasArts', '加拿大／美国', 'G-0302', '#6a746d', 'XBOX / PC RPG', ['道德选择', '队友关系'], '电影宇宙被转化为可选择的角色扮演结构，道德路线、队友关系和身份反转相互作用，使玩家决定不只改变数值，也重新解释主角与整个故事。'),
  entry(2004, '音乐', 'Funeral', 'Arcade Fire', '加拿大', 'M-0402', '#6f6359', 'ALBUM / CD', ['Indie Rock', '群体编曲'], '家庭死亡经验、手风琴与多人合唱形成兼具私密和宏大的独立摇滚声音，并成为二〇〇〇年代中期乐队文化的重要转折点。'),
  entry(2005, '漫画', 'Vinland Saga', '幸村诚', '日本', 'C-0502', '#7a6045', 'SERIAL / WEEKLY SHONEN MAGAZINE', ['历史', '反暴力'], '维京复仇史诗逐渐转向战争、奴役、劳动与非暴力伦理，细密画工和长篇人物成长共同追问真正的勇士是否能够摆脱以伤害维系的世界。'),
]

const buildReviewedNote = item => {
  if ([...item.note].length >= 80 && [...item.note].length <= 140) return item.note
  const suffix = '它以鲜明的形式语言回应当时的技术、社会与流行文化，并持续影响后来的创作者、玩家与观众。'
  const text = `${item.note}${suffix}`
  return [...text].length <= 140 ? text : `${[...text].slice(0, 139).join('').replace(/[，、；：]$/, '')}。`
}

export const archiveItems = baseArchiveItems.map(item => {
  const merged = { ...item, ...collectionMetadata[item.code] }
  return { ...merged, note: buildReviewedNote(merged) }
})

export const typeMeta = {
  全部: { en: 'ALL SIGNALS', glyph: '✦' },
  音乐: { en: 'MUSIC', glyph: '◉' },
  动漫: { en: 'ANIME', glyph: '△' },
  漫画: { en: 'MANGA', glyph: '▤' },
  游戏: { en: 'GAMES', glyph: '✚' },
  小说: { en: 'FICTION', glyph: '◆' },
}
