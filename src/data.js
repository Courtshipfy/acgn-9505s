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
  entry(1997, '音乐', '王菲', '王菲', '中国香港', 'M-9702', '#bc5a72', 'ALBUM / CD', ['华语流行', 'Alternative'], '华语流行、另类摇滚气质与极具个人辨识度的声音在世纪末汇合。'),
  entry(1997, '动漫', 'South Park', 'Trey Parker / Matt Stone', '美国', 'A-9702', '#73a8bb', 'TV / ANIMATION', ['讽刺', '成人动画'], '看似粗糙的剪纸风格成为快速回应新闻、政治与大众文化的高效语言。'),
  entry(1998, '漫画', 'Priest', '邢民友', '韩国', 'C-9802', '#6d625d', 'SERIAL / MANHWA', ['西部', '黑暗奇幻'], '韩国漫画以哥特、西部与宗教恐怖的混合风格进入国际读者视野。'),
  entry(1998, '游戏', 'StarCraft', 'Blizzard Entertainment', '美国／韩国文化圈', 'G-9802', '#687d9c', 'PC / RTS', ['即时战略', '电竞'], '三个种族的精密平衡在韩国发展出职业联赛，并推动电子竞技成为大众观看活动。'),
  entry(1999, '动漫', 'The Iron Giant', 'Brad Bird / Warner Bros.', '美国', 'A-9902', '#76909a', 'FILM / 87 MIN.', ['科幻', '成长'], '冷战阴影下，一个男孩与巨大机器人的友谊讨论了武器能否选择不成为武器。'),
  entry(2000, '音乐', 'Jay', '周杰伦', '中国台湾', 'M-0002', '#8b7455', 'ALBUM / CD', ['华语流行', 'R&B'], 'R&B、说唱、含混唱腔与中文书写方式共同改变了新世纪华语流行音乐。'),
  entry(2000, '漫画', 'Persepolis', 'Marjane Satrapi', '法国／伊朗', 'C-0002', '#55514d', 'GRAPHIC MEMOIR', ['回忆录', '历史'], '极简黑白画面以个人成长穿过革命、战争、迁徙与身份认同。'),
  entry(2000, '漫画', 'Blacksad', 'Juan Díaz Canales / Juanjo Guarnido', '西班牙／法国', 'C-0003', '#9b7044', 'ALBUM / DARGAUD', ['黑色侦探', '拟人'], '欧洲漫画的精细水彩与美国黑色电影语法在动物侦探世界中结合。'),
  entry(2001, '漫画', '火凤燎原', '陈某', '中国香港', 'C-0102', '#b34f3a', 'SERIAL / COMIC WORLD', ['历史', '谋略'], '三国叙事被重组为多线政治谋略，以现代漫画节奏重新解释熟悉历史。'),
  entry(2002, '音乐', 'Moffou', 'Salif Keita', '马里', 'M-0202', '#bf8138', 'ALBUM / CD', ['非洲流行', 'Acoustic'], '曼丁传统、原声编制与世界音乐制作让宏亮歌声回到更亲密的空间。'),
  entry(2002, '漫画', 'Y: The Last Man', 'Brian K. Vaughan / Pia Guerra', '美国', 'C-0202', '#69816a', 'SERIAL / VERTIGO', ['末日', '性别'], '以最后一名男性的公路旅程展开末日政治、性别结构与社会重建。'),
  entry(2002, '游戏', 'Ragnarok Online', 'Gravity', '韩国', 'G-0202', '#7fa1bd', 'PC / MMORPG', ['在线世界', '社群'], '二维角色与三维场景的混合风格，连接了亚洲网吧、工会与长期在线社群。'),
  entry(2003, '漫画', 'Blankets', 'Craig Thompson', '美国', 'C-0302', '#6687a5', 'GRAPHIC NOVEL', ['成长', '自传'], '流动黑白线条把初恋、信仰与家庭记忆写成长篇私人图像小说。'),
  entry(2004, '漫画', 'Scott Pilgrim', 'Bryan Lee O’Malley', '加拿大', 'C-0402', '#d85f67', 'GRAPHIC NOVEL SERIES', ['青春', '游戏文化'], '独立漫画、电玩规则与乐队生活融合，恋爱被表现成一连串可见的关卡。'),
  entry(2005, '音乐', 'Arular', 'M.I.A.', '英国／斯里兰卡', 'M-0502', '#d85e3d', 'ALBUM / CD', ['Electronic', '全球低音'], '移民经验、街头图形、鼓机与跨国节拍构成互联网时代的新流行拼贴。'),
  entry(2005, '动漫', 'Avatar: The Last Airbender', 'Michael Dante DiMartino / Bryan Konietzko', '美国', 'A-0502', '#5b91ae', 'TV / ANIMATION', ['奇幻', '成长'], '亚洲文化灵感、连续叙事与角色成长推动美国电视动画进入新的长篇阶段。'),
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
}
