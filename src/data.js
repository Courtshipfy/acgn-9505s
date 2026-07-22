import { collectionMetadata } from './collection-metadata.js'

const entry = (year, type, title, creator, region, code, accent, format, tags, note) => ({
  year, type, title, creator, region, code, accent, format, tags, note,
})

const baseArchiveItems = [
  entry(1995, '原声', 'Neon Genesis Evangelion', '鹭巢诗郎', '日本', 'M-9501', '#8f63ff', 'ANIME OST / CD', ['Anime OST', '机甲'], '电视动画《新世纪福音战士》的首张官方原声专辑，以交响、合唱、爵士与流行歌曲共同建立机甲战斗和心理独白之间的声音张力。'),
  entry(1995, '动漫', '新世纪福音战士', 'GAINAX', '日本', 'A-9501', '#8f63ff', 'TV / 26 EP.', ['机甲', '心理'], '机甲、心理分析与世纪末情绪在电视动画中发生了一次无法复制的碰撞。'),
  entry(1995, '漫画', '头文字D', '重野秀一', '日本', 'C-9501', '#e8b936', 'SERIAL / YOUNG MAGAZINE', ['竞速', '青年'], '山路、欧陆节拍与改装文化共同塑造了跨越国界的汽车浪漫。'),
  entry(1995, '游戏', 'Chrono Trigger', 'Square', '日本', 'G-9501', '#53a9c7', 'SNES / RPG', ['时空', '角色扮演'], '时间旅行结构、像素美术与梦幻制作阵容留下了十六位机时代的高峰。'),

  entry(1996, '原声', 'Rurouni Kenshin Original Soundtrack', '朝仓纪行', '日本', 'M-9601', '#cf5947', 'ANIME OST / CD', ['Anime OST', '时代剧'], '电视动画《浪客剑心》的官方原声，以尺八、三味线、摇滚节奏和电子音色连接明治时代背景与少年动画的快速动作场面。'),
  entry(1996, '动漫', '浪客剑心', 'Studio Gallop', '日本', 'A-9601', '#cf5947', 'TV / 94 EP.', ['时代剧', '剑客'], '明治时代的历史余波与少年漫画式动作在电视荧幕上相遇。'),
  entry(1996, '漫画', '游戏王', '高桥和希', '日本', 'C-9601', '#c39a3b', 'SERIAL / SHONEN JUMP', ['卡牌', '冒险'], '从黑暗游戏发展出全球卡牌文化，纸面规则进入现实社交空间。'),
  entry(1996, '游戏', '宝可梦 红／绿', 'Game Freak', '日本', 'G-9601', '#f1c638', 'GAME BOY / RPG', ['收集', '交换'], '把交换、收集与携带式冒险带进一代人的口袋。'),

  entry(1997, '原声', 'Princess Mononoke Soundtrack', '久石让', '日本', 'M-9701', '#70895b', 'ANIME FILM OST / CD', ['Anime OST', '史诗'], '动画电影《幽灵公主》的官方原声以管弦乐、主题动机和人声曲目构建森林神祇、工业聚落与战争冲突之间的史诗尺度。'),
  entry(1997, '动漫', '幽灵公主', '宫崎骏 / 吉卜力', '日本', 'A-9701', '#70895b', 'FILM / 134 MIN.', ['自然', '史诗'], '自然与工业没有简单答案，动画电影由此获得了更辽阔的道德尺度。'),
  entry(1997, '漫画', 'ONE PIECE', '尾田荣一郎', '日本', 'C-9701', '#ed6b45', 'SERIAL / SHONEN JUMP', ['冒险', '友情'], '从东海起航的漫长浪漫主义冒险，逐渐成为全球共同阅读经验。'),
  entry(1997, '游戏', 'Final Fantasy VII', 'Square', '日本', 'G-9701', '#51a7ff', 'PLAYSTATION / RPG', ['科幻', '叙事'], '电影化叙事、预渲染背景与三维角色共同定义了新一代 RPG。'),

  entry(1998, '原声', 'Cowboy Bebop', '菅野洋子 / The Seatbelts', '日本', 'M-9801', '#d95449', 'ANIME OST / CD', ['Anime OST', '爵士'], '电视动画《星际牛仔》的首张官方原声专辑，以大乐队爵士、布鲁斯和跨类型演奏直接参与角色塑造与太空西部片节奏。'),
  entry(1998, '动漫', '星际牛仔', 'SUNRISE', '日本', 'A-9801', '#d95449', 'TV / 26 EP.', ['太空歌剧', '爵士'], '爵士、太空西部片和成年人世界，以单元故事拼出失去与告别。'),
  entry(1998, '漫画', 'HUNTER×HUNTER', '富坚义博', '日本', 'C-9801', '#58a777', 'SERIAL / SHONEN JUMP', ['冒险', '策略'], '不断改写规则的能力系统，让少年漫画的智斗与世界构造抵达新高度。'),
  entry(1998, '游戏', 'Metal Gear Solid', 'Konami', '日本', 'G-9801', '#87956f', 'PLAYSTATION / STEALTH', ['潜行', '电影化'], '潜入玩法与电影镜头语言融合，也开始直接讨论玩家与角色的关系。'),

  entry(1999, '原声', 'Pokémon 2.B.A. Master', '多位艺人', '美国／日本企划', 'M-9901', '#e99931', 'MEDIA MIX ALBUM / CD', ['Media Mix', '宝可梦'], '面向英语电视动画《Pokémon》发行的官方音乐专辑，把主题曲、角色歌曲与游戏世界观组合成动画和游戏跨媒体传播的重要载体。'),
  entry(1999, '动漫', '数码宝贝大冒险', '东映动画', '日本', 'A-9901', '#e99931', 'TV / 54 EP.', ['异世界', '成长'], '电子世界的冒险不仅关乎升级，也关乎儿童面对家庭和自我的成长。'),
  entry(1999, '漫画', '火影忍者', '岸本齐史', '日本', 'C-9901', '#f29335', 'SERIAL / SHONEN JUMP', ['忍者', '成长'], '孤独、认可与代际创伤让热血少年漫画成为全球共同语言。'),
  entry(1999, '游戏', 'Counter-Strike', 'Minh Le / Jess Cliffe', '全球', 'G-9901', '#d7b457', 'PC / FPS', ['竞技', '联机'], '网吧时代最清晰的一声开局倒计时，团队竞技由模组走向全球。'),

  entry(2000, '原声', 'FLCL No.1: Addict', 'the pillows / 光宗信吉', '日本', 'M-0001', '#e86079', 'ANIME OST / CD', ['Anime OST', '青春'], 'OVA《FLCL》的首张官方原声以 the pillows 的吉他摇滚为核心，音乐不只是背景，而是推动青春躁动、剪辑速度和角色情绪的叙事部件。'),
  entry(2000, '动漫', 'FLCL', 'GAINAX / Production I.G', '日本', 'A-0001', '#e86079', 'OVA / 6 EP.', ['青春', '实验'], '吉他、机器人和青春期焦虑被压缩进六集高速运转的视听实验。'),
  entry(2000, '漫画', '异兽魔都', '林田球', '日本', 'C-0001', '#8d9c58', 'SERIAL / MONTHLY IKKI', ['奇幻', '黑色幽默'], '粗粝工业城市、魔法与荒诞日常构成独一无二的混沌世界。'),
  entry(2000, '游戏', 'The Sims', 'Maxis', '美国', 'G-0001', '#60a990', 'PC / SIMULATION', ['生活模拟', '沙盒'], '电子游戏第一次如此大众化地把日常生活、建筑和社会关系变成玩具。'),

  entry(2001, '原声', 'Final Fantasy X Original Soundtrack', '植松伸夫 / 滨涡正志 / 仲野顺也', '日本', 'M-0101', '#6f83a7', 'GAME OST / 4 CD', ['Game OST', '角色扮演'], '游戏《Final Fantasy X》的四碟官方原声，以多位作曲家的主题变奏连接斯皮拉世界、召唤仪式、旅行节奏与角色告别。'),
  entry(2001, '动漫', '千与千寻', '宫崎骏 / 吉卜力', '日本', 'A-0101', '#79b99c', 'FILM / 125 MIN.', ['奇幻', '成长'], '穿越隧道进入神灵世界，也进入全球动画史最广为人知的一页。'),
  entry(2001, '漫画', '钢之炼金术师', '荒川弘', '日本', 'C-0101', '#ad5550', 'SERIAL / SHONEN GANGAN', ['炼金术', '战争'], '以等价交换为起点，将家庭、战争伦理与国家机器织进少年冒险。'),
  entry(2001, '游戏', 'Halo: Combat Evolved', 'Bungie', '美国', 'G-0101', '#89a85f', 'XBOX / FPS', ['科幻', '主机'], '双摇杆控制、护盾循环和开放战场建立了主机第一人称射击范式。'),

  entry(2002, '原声', 'Kingdom Hearts Original Soundtrack', '下村阳子 / 宇多田光', '日本／美国企划', 'M-0201', '#596f9d', 'GAME OST / 2 CD', ['Game OST', '跨媒体'], '游戏《Kingdom Hearts》的官方原声将原创角色主题、迪士尼世界旋律和主题歌统一进跨公司冒险，使音乐成为不同世界切换的识别系统。'),
  entry(2002, '动漫', '攻壳机动队 STAND ALONE COMPLEX', 'Production I.G', '日本', 'A-0201', '#4898a2', 'TV / 26 EP.', ['赛博朋克', '政治'], '网络社会、恐怖主义与个体意识通过程序化案件展开严密讨论。'),
  entry(2002, '漫画', '光速蒙面侠21', '稻垣理一郎 / 村田雄介', '日本', 'C-0201', '#d7aa32', 'SERIAL / SHONEN JUMP', ['体育', '团队'], '美式橄榄球被转译成速度、战术与团队成长兼具的少年漫画。'),
  entry(2002, '游戏', 'Grand Theft Auto: Vice City', 'Rockstar North', '英国', 'G-0201', '#e35f9a', 'PS2 / OPEN WORLD', ['开放世界', '犯罪'], '霓虹、广播与八十年代流行文化让城市本身成为开放世界的主角。'),

  entry(2003, '原声', 'Naruto Original Soundtrack', '增田俊郎', '日本', 'M-0301', '#f29335', 'ANIME OST / CD', ['Anime OST', '忍者'], '电视动画《火影忍者》的首张官方原声，以和乐器、摇滚吉他与节奏型主题强化忍者世界、战斗升级和角色孤独感。'),
  entry(2003, '动漫', '钢之炼金术师', 'BONES', '日本', 'A-0301', '#ae5e54', 'TV / 51 EP.', ['炼金术', '冒险'], '电视动画以独立路线扩展原作主题，成为全球动画传播的重要节点。'),
  entry(2003, '漫画', '死亡笔记', '大场鸫 / 小畑健', '日本', 'C-0301', '#85857d', 'SERIAL / SHONEN JUMP', ['悬疑', '心理'], '规则、推理与道德困境组成黑色棋局，主角与反派的边界不断反转。'),
  entry(2003, '游戏', 'Prince of Persia: The Sands of Time', 'Ubisoft Montreal', '加拿大', 'G-0301', '#c69a5b', 'MULTI / ACTION', ['跑酷', '时间'], '流畅攀爬与时间倒流机制，让失误也成为叙事和操作的一部分。'),

  entry(2004, '原声', 'Samurai Champloo Music Record: Departure', 'Nujabes / Fat Jon', '日本／美国', 'M-0401', '#cf733a', 'ANIME OST / CD', ['Anime OST', 'Hip-Hop'], '电视动画《混沌武士》的官方原声专辑，以爵士采样和嘻哈节拍重新组织江户公路故事，音乐与作品的时代混搭从立项起便不可分割。'),
  entry(2004, '动漫', '混沌武士', 'manglobe', '日本', 'A-0401', '#cf733a', 'TV / 26 EP.', ['时代剧', 'Hip-Hop'], '江户时代与嘻哈文化进行采样式混合，历史被重新剪辑成节拍。'),
  entry(2004, '漫画', '银魂', '空知英秋', '日本', 'C-0401', '#6f9ead', 'SERIAL / SHONEN JUMP', ['喜剧', '时代剧'], '科幻江户、戏仿与严肃长篇自由切换，形成异常顽强的喜剧宇宙。'),
  entry(2004, '游戏', 'World of Warcraft', 'Blizzard Entertainment', '美国', 'G-0401', '#d89835', 'PC / MMORPG', ['在线世界', '社群'], '数百万人在持续运转的世界中组队、交易，也建立了第二套社会生活。'),

  entry(2005, '原声', 'Final Fantasy VII Advent Children Original Soundtrack', '植松伸夫等', '日本', 'M-0501', '#596d82', 'CG FILM OST / 2 CD', ['Anime OST', 'Game Media Mix'], 'CG 动画电影《Final Fantasy VII: Advent Children》的官方原声重新编排游戏主题，并以摇滚、电子和管弦乐连接游戏续作叙事。'),
  entry(2005, '动漫', '虫师', 'ARTLAND', '日本', 'A-0501', '#779c76', 'TV / 26 EP.', ['自然', '幽玄'], '在自然、幽玄与静默之间缓慢呼吸，奇异生命并不服从人的善恶。'),
  entry(2005, '漫画', '绝望先生', '久米田康治', '日本', 'C-0501', '#79777b', 'SERIAL / SHONEN MAGAZINE', ['讽刺', '黑色喜剧'], '以密集文字、社会观察和绝望口号解剖千禧年代的日本日常。'),
  entry(2005, '游戏', 'Shadow of the Colossus', 'Team Ico', '日本', 'G-0501', '#9ca58f', 'PS2 / ACTION', ['巨像', '极简叙事'], '辽阔、孤独，以及胜利之后的沉默，让动作游戏拥有罕见的道德余韵。'),

  // 全球补充馆藏：让“95—05”不只是一条英美与日本文化轴线。
  entry(1995, '漫画', 'Preacher', 'Garth Ennis / Steve Dillon', '美国', 'C-9502', '#b84a35', 'SERIAL / VERTIGO', ['公路', '黑色幽默'], '公路片、西部片与宗教寓言被装进一部锋利、粗粝的成人漫画。'),
  entry(1996, '漫画', 'Kingdom Come', 'Mark Waid / Alex Ross', '美国', 'C-9602', '#526d91', 'LIMITED SERIES / DC', ['超级英雄', '寓言'], '以绘画般的写实画面追问超级英雄老去之后，力量应当向谁负责。'),
  entry(1997, '原声', 'Final Fantasy VII Original Soundtrack', '植松伸夫', '日本', 'M-9702', '#51a7ff', 'GAME OST / 4 CD', ['Game OST', '角色扮演'], '游戏《Final Fantasy VII》的四碟官方原声以角色主题、环境循环与战斗音乐塑造米德加和星球危机，成为游戏音乐传播的重要节点。'),
  entry(1997, '动漫', 'South Park', 'Trey Parker / Matt Stone', '美国', 'A-9702', '#73a8bb', 'TV / ANIMATION', ['讽刺', '成人动画'], '看似粗糙的剪纸风格成为快速回应新闻、政治与大众文化的高效语言。'),
  entry(1998, '漫画', 'Priest', '邢民友', '韩国', 'C-9802', '#6d625d', 'SERIAL / MANHWA', ['西部', '黑暗奇幻'], '韩国漫画以哥特、西部与宗教恐怖的混合风格进入国际读者视野。'),
  entry(1998, '游戏', 'StarCraft', 'Blizzard Entertainment', '美国／韩国文化圈', 'G-9802', '#687d9c', 'PC / RTS', ['即时战略', '电竞'], '三个种族的精密平衡在韩国发展出职业联赛，并推动电子竞技成为大众观看活动。'),
  entry(1999, '动漫', 'The Iron Giant', 'Brad Bird / Warner Bros.', '美国', 'A-9902', '#76909a', 'FILM / 87 MIN.', ['科幻', '成长'], '冷战阴影下，一个男孩与巨大机器人的友谊讨论了武器能否选择不成为武器。'),
  entry(2000, '原声', 'Jet Set Radio Original Sound Tracks', '长沼英树等', '日本', 'M-0002', '#d08c3f', 'GAME OST / CD', ['Game OST', '街头文化'], '游戏《Jet Set Radio》的官方原声以放克、嘻哈、电子和采样拼贴匹配涂鸦滑行，让声音、动作与卡通渲染共同构成街头世界。'),
  entry(2000, '漫画', 'Persepolis', 'Marjane Satrapi', '法国／伊朗', 'C-0002', '#55514d', 'GRAPHIC MEMOIR', ['回忆录', '历史'], '极简黑白画面以个人成长穿过革命、战争、迁徙与身份认同。'),
  entry(2000, '漫画', 'Blacksad', 'Juan Díaz Canales / Juanjo Guarnido', '西班牙／法国', 'C-0003', '#9b7044', 'ALBUM / DARGAUD', ['黑色侦探', '拟人'], '欧洲漫画的精细水彩与美国黑色电影语法在动物侦探世界中结合。'),
  entry(2001, '漫画', '火凤燎原', '陈某', '中国香港', 'C-0102', '#b34f3a', 'SERIAL / COMIC WORLD', ['历史', '谋略'], '三国叙事被重组为多线政治谋略，以现代漫画节奏重新解释熟悉历史。'),
  entry(2002, '原声', '.hack//SIGN Original Sound & Song Track 1', '梶浦由记', '日本', 'M-0202', '#6f7894', 'MEDIA MIX OST / CD', ['Anime OST', 'Media Mix'], '电视动画《.hack//SIGN》的官方原声属于游戏与动画共同展开的 `.hack` 企划，以人声、电子和世界音乐建立虚拟世界的神秘感。'),
  entry(2002, '漫画', 'Y: The Last Man', 'Brian K. Vaughan / Pia Guerra', '美国', 'C-0202', '#69816a', 'SERIAL / VERTIGO', ['末日', '性别'], '以最后一名男性的公路旅程展开末日政治、性别结构与社会重建。'),
  entry(2002, '游戏', 'Ragnarok Online', 'Gravity', '韩国', 'G-0202', '#7fa1bd', 'PC / MMORPG', ['在线世界', '社群'], '二维角色与三维场景的混合风格，连接了亚洲网吧、工会与长期在线社群。'),
  entry(2003, '漫画', 'Blankets', 'Craig Thompson', '美国', 'C-0302', '#6687a5', 'GRAPHIC NOVEL', ['成长', '自传'], '流动黑白线条把初恋、信仰与家庭记忆写成长篇私人图像小说。'),
  entry(2004, '漫画', 'Scott Pilgrim', 'Bryan Lee O’Malley', '加拿大', 'C-0402', '#d85f67', 'GRAPHIC NOVEL SERIES', ['青春', '游戏文化'], '独立漫画、电玩规则与乐队生活融合，恋爱被表现成一连串可见的关卡。'),
  entry(2005, '原声', 'Wander and the Colossus: Roar of the Earth', '大谷幸', '日本', 'M-0502', '#8a927d', 'GAME OST / CD', ['Game OST', '巨像'], '游戏《Shadow of the Colossus》的官方原声以寂静探索和宏大管弦乐形成强烈反差，让每次攀爬巨像都获得悲剧性的仪式感。'),
  entry(2005, '动漫', 'Avatar: The Last Airbender', 'Michael Dante DiMartino / Bryan Konietzko', '美国', 'A-0502', '#5b91ae', 'TV / ANIMATION', ['奇幻', '成长'], '亚洲文化灵感、连续叙事与角色成长推动美国电视动画进入新的长篇阶段。'),

  // 小说馆藏：每年两部，以类型文学、严肃文学与跨区域写作为主要选择轴线。
  entry(1995, '小说', 'Parasite Eve', '濑名秀明', '日本', 'N-9501', '#7b5a64', 'SCIENCE HORROR NOVEL', ['科幻恐怖', '游戏改编'], '线粒体意识觉醒引发人体异变的科学恐怖小说，后来直接衍生 Square 的电子游戏系列，形成从 Novel 通往 Games 的明确改编链。'),
  entry(1995, '小说', 'Northern Lights', 'Philip Pullman', '英国', 'N-9502', '#6f87a8', 'FANTASY NOVEL', ['奇幻', '跨媒体'], '平行世界、守护精灵与神学寓言开启《黑暗物质》三部曲，作品后来进入图像小说、游戏和影像改编链，是类型小说的代表。'),
  entry(1996, '小说', 'Neverwhere', 'Neil Gaiman', '英国', 'N-9601', '#657c67', 'URBAN FANTASY NOVEL', ['都市奇幻', '漫画改编'], '伦敦地下被重写为由门、市场和失落者构成的隐秘世界，小说与电视企划直接关联，后来又改编为漫画，具有清晰跨媒体身份。'),
  entry(1996, '小说', 'A Game of Thrones', 'George R. R. Martin', '美国', 'N-9602', '#695279', 'NOVEL / EPIC FANTASY', ['史诗奇幻', '政治'], '多视角叙事把王位争夺、家族伦理和漫长季节组织成残酷政治棋局，重新扩大商业奇幻的现实感与跨媒体传播规模。'),
  entry(1997, '小说', 'Harry Potter and the Philosopher’s Stone', 'J. K. Rowling', '英国', 'N-9701', '#7654a2', 'NOVEL / FANTASY', ['魔法', '成长'], '霍格沃茨、学院制度与完整魔法社会迅速成为全球共享的阅读语言，并推动儿童文学、类型出版与跨媒体系列进入新规模。'),
  entry(1997, '小说', 'The Subtle Knife', 'Philip Pullman', '英国', 'N-9702', '#596f91', 'FANTASY NOVEL', ['奇幻', '跨世界'], '《黑暗物质》第二卷以可切开世界边界的神秘短刀扩展多重宇宙，将儿童冒险、科学想象和宗教寓言推进到更大的跨媒体世界。'),
  entry(1998, '小说', 'Boogiepop and Others', '上远野浩平', '日本', 'N-9801', '#596579', 'LIGHT NOVEL', ['轻小说', '都市怪谈'], '电击文库轻小说以碎片视角讲述校园失踪、都市传说与神秘人格，后来改编为漫画、动画和真人电影，是轻小说史的重要节点。'),
  entry(1998, '小说', 'Maria-sama ga Miteru', '今野绪雪', '日本', 'N-9802', '#8c657c', 'LIGHT NOVEL SERIES', ['轻小说', '校园'], '以莉莉安女子学园的姐妹制度和细密关系为核心的轻小说系列，后来形成漫画、电视动画与游戏，建立稳定的跨媒体读者共同体。'),
  entry(1999, '小说', 'Battle Royale', '高见广春', '日本', 'N-9901', '#a63d36', 'NOVEL / DYSTOPIA', ['反乌托邦', '生存'], '被迫互相残杀的中学生将国家暴力、媒介奇观和青春信任推到极端，后来深刻影响生存竞赛题材的漫画、电影与电子游戏。'),
  entry(1999, '小说', 'Gardens of the Moon', 'Steven Erikson', '加拿大', 'N-9902', '#6e6655', 'EPIC FANTASY NOVEL', ['史诗奇幻', '桌面角色扮演'], '《马拉兹英灵录》首卷来自作者共同参与的桌面角色扮演世界设定，以庞大阵营、魔法体系和军事冲突保持 Novel 与 Games 的直接渊源。'),
  entry(2000, '小说', 'Kino’s Journey: The Beautiful World', '时雨泽惠一', '日本', 'N-0001', '#5d7c7b', 'LIGHT NOVEL SERIES', ['轻小说', '旅行'], '旅行者奇诺与会说话的摩托车逐国停留，以短篇寓言观察制度和人性；系列后来改编为动画、漫画和游戏，形成完整媒体链。'),
  entry(2000, '小说', 'The Amber Spyglass', 'Philip Pullman', '英国', 'N-0002', '#6c7894', 'FANTASY NOVEL', ['奇幻', '多重宇宙'], '《黑暗物质》终卷把多重世界、灵魂形态和宇宙战争汇合，作为系列小说的一部分持续进入图像小说、游戏和影像改编。'),
  entry(2001, '小说', 'American Gods', 'Neil Gaiman', '英国／美国', 'N-0101', '#667052', 'FANTASY NOVEL', ['现代神话', '漫画改编'], '古老神祇与现代崇拜对象在美国公路上争夺信仰，小说后来由 Dark Horse 改编为漫画，类型设定和 Comics 关系都十分明确。'),
  entry(2001, '小说', 'Mortal Engines', 'Philip Reeve', '英国', 'N-0102', '#865f49', 'SCIENCE-FANTASY NOVEL', ['蒸汽朋克', '冒险'], '移动城市互相吞噬资源的未来世界把机械奇观、追逐与成长冒险结合，形成适合图像化和游戏化延伸的鲜明类型小说。'),
  entry(2002, '小说', 'Shakugan no Shana', '高桥弥七郎', '日本', 'N-0201', '#b35242', 'LIGHT NOVEL SERIES', ['轻小说', '战斗奇幻'], '电击文库轻小说以红世使徒、存在之力和契约战斗构成长期世界观，后来改编为漫画、电视动画和电子游戏。'),
  entry(2002, '小说', 'Coraline', 'Neil Gaiman', '英国', 'N-0202', '#5f6a83', 'NOVELLA / DARK FANTASY', ['黑暗奇幻', '儿童文学'], '一扇门后的“另一个家”把儿童对理想父母的渴望变成恐怖陷阱，短小篇幅以精确意象讨论勇气、自主与家庭关系。'),
  entry(2003, '小说', 'The Melancholy of Haruhi Suzumiya', '谷川流', '日本', 'N-0301', '#5276a0', 'LIGHT NOVEL', ['轻小说', '科幻校园'], '角川 Sneaker 文库轻小说以社团日常包裹外星人、未来人和超能力者设定，后来形成动画、漫画、游戏与角色音乐等大型跨媒体企划。'),
  entry(2003, '小说', 'Brave Story', '宫部美幸', '日本', 'N-0302', '#6c835c', 'FANTASY NOVEL', ['奇幻', '游戏改编'], '少年进入幻界寻找改变命运的方法，类型冒险后来改编为漫画、动画电影和电子游戏，使小说与 A、C、G 三端形成直接联系。'),
  entry(2004, '小说', 'All You Need Is Kill', '樱坂洋', '日本', 'N-0401', '#6c6870', 'LIGHT NOVEL / MILITARY SF', ['轻小说', '时间循环'], '士兵在外星战争中反复经历同一天的军事科幻轻小说，后来改编为漫画，并成为跨国电影改编的原作，时间循环结构影响广泛。'),
  entry(2004, '小说', 'Jonathan Strange & Mr Norrell', 'Susanna Clarke', '英国', 'N-0402', '#5e7186', 'NOVEL / ALTERNATE HISTORY', ['奇幻', '另类历史'], '两位魔法师在拿破仑战争时期复兴英国魔法，仿十九世纪文体、脚注与仙境传统共同搭建出严密而幽暗的另类历史。'),
  entry(2005, '小说', 'Never Let Me Go', 'Kazuo Ishiguro', '英国', 'N-0501', '#75819a', 'NOVEL / SPECULATIVE FICTION', ['记忆', '生命伦理'], '寄宿学校回忆逐渐显露克隆人制度的真相，小说用平静克制的声音讨论爱、顺从、死亡与被社会规定的人生价值。'),
  entry(2005, '小说', 'The Lightning Thief', 'Rick Riordan', '美国', 'N-0502', '#5a78a1', 'FANTASY ADVENTURE NOVEL', ['神话', '漫画与游戏改编'], '现代少年发现自己是海神之子，希腊神话被重构为公路冒险；作品后来改编为 graphic novel 和电子游戏，跨媒体关系明确。'),

  // 其他频道增补：优先填补女性创作者、华语动画、欧洲游戏与非洲图像小说等结构缺口。
  entry(1995, '原声', 'Chrono Trigger Original Sound Version', '光田康典 / 植松伸夫 / 松枝贺子', '日本', 'M-9502', '#53a9c7', 'GAME OST / 3 CD', ['Game OST', '时空'], '游戏《Chrono Trigger》的三碟官方原声以跨时代主题、环境音乐和角色动机对应时间旅行结构，成为十六位机角色扮演配乐的代表。'),
  entry(1996, '游戏', 'Tomb Raider', 'Core Design / Eidos', '英国', 'G-9602', '#718389', 'PLAYSTATION / ACTION ADVENTURE', ['3D 探索', '女性主角'], '三维遗迹探索、平台跳跃与劳拉·克劳馥的媒介形象共同定义早期动作冒险，也让欧洲主机开发进入全球大众视野。'),
  entry(1997, '动漫', '小倩', '徐克 / 电影工作室', '中国香港', 'A-9703', '#a7545a', 'FILM / 84 MIN.', ['聊斋', '香港动画'], '《聊斋》故事、港产片速度与 CGI 和传统动画混合技术结合，留下九十年代香港长篇动画极具地方辨识度的一次实验。'),
  entry(1998, '漫画', '浪客行', '井上雄彦', '日本', 'C-9803', '#806746', 'SERIAL / MORNING', ['武士', '青年'], '宫本武藏传说经由水墨感笔触、身体动作与哲学追问重新展开，在少年漫画主流之外代表更沉静成熟的青年漫画路线。'),
  entry(1999, '游戏', 'The Longest Journey', 'Funcom', '挪威', 'G-9902', '#526f8a', 'PC / ADVENTURE', ['图形冒险', '女性主角'], '女学生艾普丽尔往返科技与魔法双世界，以大量对话、谜题和完整世界观延续欧洲图形冒险传统，并把女性成长置于中心。'),
  entry(2000, '漫画', 'Jimmy Corrigan: The Smartest Kid on Earth', 'Chris Ware', '美国', 'C-0004', '#8d6c4b', 'GRAPHIC NOVEL', ['版式实验', '家族记忆'], '几何化版式、视觉符号和跨代家庭创伤组成一部需要被“观看着阅读”的图像小说，把孤独经验转化为精密的页面建筑。'),
  entry(2001, '动漫', '麦兜故事', '袁建滔 / 谢立文 / 麦家碧', '中国香港', 'A-0102', '#d79045', 'FILM / 75 MIN.', ['城市生活', '成长'], '儿童视角、粤语幽默和香港城市日常包裹着经济转型中的温柔失落，让地方饮食、家庭愿望与失败经验进入动画长片。'),
  entry(2002, '漫画', 'The Rabbi’s Cat', 'Joann Sfar', '法国／阿尔及利亚', 'C-0203', '#bd7840', 'BANDE DESSINÉE', ['信仰', '北非'], '会说话的猫在殖民时期阿尔及尔追问犹太教、语言与身份，以轻盈对话连接法语漫画传统、北非城市和宗教哲思。'),
  entry(2003, '游戏', 'Beyond Good & Evil', 'Ubisoft Montpellier', '法国', 'G-0302', '#5c8c7d', 'MULTI / ACTION ADVENTURE', ['调查', '媒体'], '摄影调查、潜入与动作冒险围绕宣传机器展开，女记者 Jade 的抵抗旅程展示欧洲作者型商业游戏兼顾主题和可玩性的路径。'),
  entry(2004, '原声', 'Katamari Fortissimo Damacy', '三宅优等', '日本', 'M-0402', '#7ea064', 'GAME OST / CD', ['Game OST', '实验流行'], '游戏《块魂》的官方原声邀请多位作曲人与歌手，把爵士、涩谷系和广告歌式旋律嵌入滚动物体的荒诞机制，形成鲜明互动节奏。'),
  entry(2005, '漫画', 'Aya of Yop City', 'Marguerite Abouet / Clément Oubrerie', '科特迪瓦／法国', 'C-0502', '#c4773f', 'GRAPHIC NOVEL', ['日常生活', '非洲'], '阿比让少女的家庭、友情与恋爱以明亮日常展开，主动抵抗非洲只被战争和贫困定义的单一图像，也补入非洲女性编剧视角。'),
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
