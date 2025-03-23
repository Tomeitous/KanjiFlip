export interface KanjiData {
    id: number;
    character: string;
    meaning: string;
    onReading: string[];
    kunReading: string[];
    example: {
      japanese: string;
      meaning: string;
    };
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  }
  
  export const kanjiList: KanjiData[] = [
    // N5 Level Kanji
    {
      id: 1,
      character: '水',
      meaning: 'water',
      onReading: ['スイ'],
      kunReading: ['みず'],
      example: {
        japanese: '水を飲みます',
        meaning: 'I drink water'
      },
      level: 'N5'
    },
    {
      id: 2,
      character: '火',
      meaning: 'fire',
      onReading: ['カ'],
      kunReading: ['ひ'],
      example: {
        japanese: '火が消えた',
        meaning: 'The fire went out'
      },
      level: 'N5'
    },
    {
      id: 3,
      character: '山',
      meaning: 'mountain',
      onReading: ['サン'],
      kunReading: ['やま'],
      example: {
        japanese: '山に登ります',
        meaning: 'I climb a mountain'
      },
      level: 'N5'
    },
    {
      id: 4,
      character: '木',
      meaning: 'tree',
      onReading: ['モク', 'ボク'],
      kunReading: ['き'],
      example: {
        japanese: '木を植えました',
        meaning: 'I planted a tree'
      },
      level: 'N5'
    },
    {
      id: 5,
      character: '土',
      meaning: 'earth, soil',
      onReading: ['ド', 'ト'],
      kunReading: ['つち'],
      example: {
        japanese: '土の上に座った',
        meaning: 'I sat on the ground'
      },
      level: 'N5'
    },
    {
      id: 6,
      character: '日',
      meaning: 'day, sun',
      onReading: ['ニチ', 'ジツ'],
      kunReading: ['ひ', 'か'],
      example: {
        japanese: '日本語を勉強しています',
        meaning: 'I am studying Japanese'
      },
      level: 'N5'
    },
    {
      id: 7,
      character: '月',
      meaning: 'moon, month',
      onReading: ['ゲツ', 'ガツ'],
      kunReading: ['つき'],
      example: {
        japanese: '月が綺麗ですね',
        meaning: 'The moon is beautiful, isn\'t it?'
      },
      level: 'N5'
    },
    {
      id: 8,
      character: '人',
      meaning: 'person',
      onReading: ['ジン', 'ニン'],
      kunReading: ['ひと'],
      example: {
        japanese: '人が多いです',
        meaning: 'There are many people'
      },
      level: 'N5'
    },
    {
      id: 9,
      character: '口',
      meaning: 'mouth',
      onReading: ['コウ', 'ク'],
      kunReading: ['くち'],
      example: {
        japanese: '口を開けて',
        meaning: 'Open your mouth'
      },
      level: 'N5'
    },
    {
      id: 10,
      character: '車',
      meaning: 'car',
      onReading: ['シャ'],
      kunReading: ['くるま'],
      example: {
        japanese: '車を運転しています',
        meaning: 'I am driving a car'
      },
      level: 'N5'
    },
    {
      id: 11,
      character: '金',
      meaning: 'gold, money',
      onReading: ['キン', 'コン'],
      kunReading: ['かね', 'かな'],
      example: {
        japanese: 'お金がありません',
        meaning: 'I don\'t have money'
      },
      level: 'N5'
    },
    {
      id: 12,
      character: '川',
      meaning: 'river',
      onReading: ['セン'],
      kunReading: ['かわ'],
      example: {
        japanese: '川で泳ぎます',
        meaning: 'I swim in the river'
      },
      level: 'N5'
    },
    {
      id: 13,
      character: '田',
      meaning: 'rice field',
      onReading: ['デン'],
      kunReading: ['た'],
      example: {
        japanese: '田んぼで働いています',
        meaning: 'I work in the rice field'
      },
      level: 'N5'
    },
    {
      id: 14,
      character: '気',
      meaning: 'spirit, mind',
      onReading: ['キ', 'ケ'],
      kunReading: [],
      example: {
        japanese: '気をつけてください',
        meaning: 'Please be careful'
      },
      level: 'N5'
    },
    {
      id: 15,
      character: '生',
      meaning: 'life, birth',
      onReading: ['セイ', 'ショウ'],
      kunReading: ['い', 'う', 'は', 'なま'],
      example: {
        japanese: '生まれた国はどこですか',
        meaning: 'What country were you born in?'
      },
      level: 'N5'
    },
    
    // N4 Level Kanji
    {
      id: 16,
      character: '花',
      meaning: 'flower',
      onReading: ['カ'],
      kunReading: ['はな'],
      example: {
        japanese: '花を贈りました',
        meaning: 'I gave flowers as a gift'
      },
      level: 'N4'
    },
    {
      id: 17,
      character: '海',
      meaning: 'sea, ocean',
      onReading: ['カイ'],
      kunReading: ['うみ'],
      example: {
        japanese: '海に行きたいです',
        meaning: 'I want to go to the sea'
      },
      level: 'N4'
    },
    {
      id: 18,
      character: '語',
      meaning: 'language, word',
      onReading: ['ゴ'],
      kunReading: ['かた'],
      example: {
        japanese: '英語を話せますか',
        meaning: 'Can you speak English?'
      },
      level: 'N4'
    },
    {
      id: 19,
      character: '時',
      meaning: 'time, hour',
      onReading: ['ジ'],
      kunReading: ['とき'],
      example: {
        japanese: '時間がないです',
        meaning: 'I don\'t have time'
      },
      level: 'N4'
    },
    {
      id: 20,
      character: '魚',
      meaning: 'fish',
      onReading: ['ギョ'],
      kunReading: ['さかな', 'うお'],
      example: {
        japanese: '魚を食べます',
        meaning: 'I eat fish'
      },
      level: 'N4'
    },
    {
      id: 21,
      character: '注',
      meaning: 'pour,注意/attention',
      onReading: ['チュウ'],
      kunReading: ['そそ'],
      example: {
        japanese: '注意してください',
        meaning: 'Please be careful'
      },
      level: 'N4'
    },
    {
      id: 22,
      character: '場',
      meaning: 'place, location',
      onReading: ['ジョウ'],
      kunReading: ['ば'],
      example: {
        japanese: '駐車場はどこですか',
        meaning: 'Where is the parking lot?'
      },
      level: 'N4'
    },
    {
      id: 23,
      character: '通',
      meaning: 'pass through, commute',
      onReading: ['ツウ', 'ツ'],
      kunReading: ['とお', 'かよ'],
      example: {
        japanese: '学校に通っています',
        meaning: 'I commute to school'
      },
      level: 'N4'
    },
    {
      id: 24,
      character: '会',
      meaning: 'meeting, society',
      onReading: ['カイ', 'エ'],
      kunReading: ['あ'],
      example: {
        japanese: '会議は何時からですか',
        meaning: 'What time does the meeting start?'
      },
      level: 'N4'
    },
    {
      id: 25,
      character: '風',
      meaning: 'wind, style',
      onReading: ['フウ', 'フ'],
      kunReading: ['かぜ'],
      example: {
        japanese: '風が強いです',
        meaning: 'The wind is strong'
      },
      level: 'N4'
    },
    
    // N3 Level Kanji
    {
      id: 26,
      character: '味',
      meaning: 'taste, flavor',
      onReading: ['ミ'],
      kunReading: ['あじ'],
      example: {
        japanese: '美味しい味がします',
        meaning: 'It has a delicious taste'
      },
      level: 'N3'
    },
    {
      id: 27,
      character: '放',
      meaning: 'release, set free',
      onReading: ['ホウ'],
      kunReading: ['はな'],
      example: {
        japanese: '鳥を放しました',
        meaning: 'I released the bird'
      },
      level: 'N3'
    },
    {
      id: 28,
      character: '空',
      meaning: 'sky, empty',
      onReading: ['クウ'],
      kunReading: ['そら', 'あ', 'から'],
      example: {
        japanese: '空を見上げる',
        meaning: 'Look up at the sky'
      },
      level: 'N3'
    },
    {
      id: 29,
      character: '港',
      meaning: 'harbor, port',
      onReading: ['コウ'],
      kunReading: ['みなと'],
      example: {
        japanese: '船が港に着きました',
        meaning: 'The ship arrived at the port'
      },
      level: 'N3'
    },
    {
      id: 30,
      character: '歌',
      meaning: 'song',
      onReading: ['カ'],
      kunReading: ['うた'],
      example: {
        japanese: '歌を歌いました',
        meaning: 'I sang a song'
      },
      level: 'N3'
    },
    {
      id: 31,
      character: '能',
      meaning: 'ability, talent',
      onReading: ['ノウ'],
      kunReading: [],
      example: {
        japanese: '彼は能力が高いです',
        meaning: 'He has high ability'
      },
      level: 'N3'
    },
    {
      id: 32,
      character: '島',
      meaning: 'island',
      onReading: ['トウ'],
      kunReading: ['しま'],
      example: {
        japanese: '小さな島に住んでいます',
        meaning: 'I live on a small island'
      },
      level: 'N3'
    },
    {
      id: 33,
      character: '期',
      meaning: 'period, time',
      onReading: ['キ', 'ゴ'],
      kunReading: [],
      example: {
        japanese: '期間はどのくらいですか',
        meaning: 'How long is the period?'
      },
      level: 'N3'
    },
    {
      id: 34,
      character: '政',
      meaning: 'politics, government',
      onReading: ['セイ', 'ショウ'],
      kunReading: ['まつりごと'],
      example: {
        japanese: '政治に興味があります',
        meaning: 'I am interested in politics'
      },
      level: 'N3'
    },
    {
      id: 35,
      character: '議',
      meaning: 'discussion, deliberation',
      onReading: ['ギ'],
      kunReading: [],
      example: {
        japanese: 'この問題について議論しましょう',
        meaning: 'Let\'s discuss this issue'
      },
      level: 'N3'
    },
    
    // N2 Level Kanji
    {
      id: 36,
      character: '競',
      meaning: 'compete',
      onReading: ['キョウ', 'ケイ'],
      kunReading: ['きそ', 'せ'],
      example: {
        japanese: '彼らは競争しています',
        meaning: 'They are competing'
      },
      level: 'N2'
    },
    {
      id: 37,
      character: '営',
      meaning: 'business, manage',
      onReading: ['エイ'],
      kunReading: ['いとな'],
      example: {
        japanese: '営業中です',
        meaning: 'We are open for business'
      },
      level: 'N2'
    },
    {
      id: 38,
      character: '術',
      meaning: 'technique, art',
      onReading: ['ジュツ'],
      kunReading: ['すべ'],
      example: {
        japanese: '彼は素晴らしい技術を持っています',
        meaning: 'He has amazing techniques'
      },
      level: 'N2'
    },
    {
      id: 39,
      character: '供',
      meaning: 'offer, provide',
      onReading: ['キョウ', 'ク'],
      kunReading: ['そな', 'とも'],
      example: {
        japanese: '食べ物を提供します',
        meaning: 'We provide food'
      },
      level: 'N2'
    },
    {
      id: 40,
      character: '結',
      meaning: 'tie, bind, join',
      onReading: ['ケツ'],
      kunReading: ['むす', 'ゆ'],
      example: {
        japanese: '結婚しました',
        meaning: 'I got married'
      },
      level: 'N2'
    },
    {
      id: 41,
      character: '革',
      meaning: 'leather, reform',
      onReading: ['カク'],
      kunReading: ['かわ'],
      example: {
        japanese: '革の財布を買いました',
        meaning: 'I bought a leather wallet'
      },
      level: 'N2'
    },
    {
      id: 42,
      character: '編',
      meaning: 'compile, edit',
      onReading: ['ヘン'],
      kunReading: ['あ'],
      example: {
        japanese: '本を編集しています',
        meaning: 'I am editing a book'
      },
      level: 'N2'
    },
    {
      id: 43,
      character: '製',
      meaning: 'manufacture',
      onReading: ['セイ'],
      kunReading: [],
      example: {
        japanese: '日本製の製品です',
        meaning: 'It is a Japanese-made product'
      },
      level: 'N2'
    },
    {
      id: 44,
      character: '益',
      meaning: 'benefit, profit',
      onReading: ['エキ', 'ヤク'],
      kunReading: [],
      example: {
        japanese: '健康に良い効益があります',
        meaning: 'It has good benefits for health'
      },
      level: 'N2'
    },
    {
      id: 45,
      character: '提',
      meaning: 'present, propose',
      onReading: ['テイ'],
      kunReading: ['さ'],
      example: {
        japanese: '新しいアイデアを提案しました',
        meaning: 'I proposed a new idea'
      },
      level: 'N2'
    },
    
    // N1 Level Kanji
    {
      id: 46,
      character: '鬱',
      meaning: 'depression, gloom',
      onReading: ['ウツ'],
      kunReading: ['うっ'],
      example: {
        japanese: '鬱病になりました',
        meaning: 'I became depressed'
      },
      level: 'N1'
    },
    {
      id: 47,
      character: '憂',
      meaning: 'worry, grief',
      onReading: ['ユウ'],
      kunReading: ['うれ', 'う'],
      example: {
        japanese: '憂鬱な気分です',
        meaning: 'I\'m in a melancholy mood'
      },
      level: 'N1'
    },
    {
      id: 48,
      character: '滅',
      meaning: 'destroy, perish',
      onReading: ['メツ'],
      kunReading: ['ほろ'],
      example: {
        japanese: '文明が滅びました',
        meaning: 'The civilization perished'
      },
      level: 'N1'
    },
    {
      id: 49,
      character: '璃',
      meaning: 'glass, glassy',
      onReading: ['リ'],
      kunReading: [],
      example: {
        japanese: '琉璃色の空',
        meaning: 'A lapis lazuli colored sky'
      },
      level: 'N1'
    },
    {
      id: 50,
      character: '瞬',
      meaning: 'blink, moment',
      onReading: ['シュン'],
      kunReading: ['またた'],
      example: {
        japanese: '一瞬で消えました',
        meaning: 'It disappeared in an instant'
      },
      level: 'N1'
    },
    {
      id: 51,
      character: '漆',
      meaning: 'lacquer, varnish',
      onReading: ['シツ'],
      kunReading: ['うるし'],
      example: {
        japanese: '漆器は伝統工芸です',
        meaning: 'Lacquerware is a traditional craft'
      },
      level: 'N1'
    },
    {
      id: 52,
      character: '遡',
      meaning: 'go upstream, retrace',
      onReading: ['ソ'],
      kunReading: ['さかのぼ'],
      example: {
        japanese: '歴史を遡って調査します',
        meaning: 'I\'ll research by going back through history'
      },
      level: 'N1'
    },
    {
      id: 53,
      character: '需',
      meaning: 'demand, request',
      onReading: ['ジュ'],
      kunReading: [],
      example: {
        japanese: '需要が高まっています',
        meaning: 'The demand is increasing'
      },
      level: 'N1'
    },
    {
      id: 54,
      character: '淑',
      meaning: 'graceful, modest',
      onReading: ['シュク'],
      kunReading: [],
      example: {
        japanese: '淑やかな女性です',
        meaning: 'She is a graceful woman'
      },
      level: 'N1'
    },
    {
      id: 55,
      character: '穿',
      meaning: 'wear, put on (lower body)',
      onReading: ['セン'],
      kunReading: ['は'],
      example: {
        japanese: '新しいズボンを穿きました',
        meaning: 'I put on new pants'
      },
      level: 'N1'
    }
  ]; 
  