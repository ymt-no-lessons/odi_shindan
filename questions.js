// 💡おぢ診断用設問 25問

const questions = [
  // 💌 恋愛・依存系
  {
    "id": 1,
    text: "既読がついたのに返信がないとソワソワして不安になる",
    effects: { dependence: 2 }
  },
  {
    "id": 2,
    text: "恋人や好きな人が自分抜きで出かけると、つい気になってしまう",
    effects: { dependence: 1.5, control: 1 }
  },
  {
    "id": 3,
    text: "好きな人のSNSで、『いいね』やコメントの相手まで気になってしまう",
    effects: { dependence: 1.5, bias: 1 }
  },
  {
    "id": 4,
    text: "相手が返信くれないと、自分が悪いのかと反省会を開催してしまう",
    effects: { bias: 1.5 }
  },
  {
    "id": 5,
    text: "誰かを好きになったら、通知音が鳴るだけでドッキドキ",
    effects: { dependence: 1.5, control: 1 }
  },

  // 🧠 思い込み・客観性
  {
    "id": 6,
    text: "お店やSNSで優しくされたら、“もしかして脈アリ？”と考える",
    effects: { bias: 2, dependence: 1 }
  },
  {
    "id": 7,
    text: "自分より相手の考えが正しいと思ったことはあまりない",
    effects: { control: 1.5, bias: 1 }
  },
  {
    "id": 8,
    text: "自分の意見に反対されると、ついイラッとしてしまう",
    effects: { control: 1.5, equality: -1 }
  },
  {
    "id": 9,
    text: "初対面で「あ、コイツ無理」ってなることがある",
    effects: { bias: 2 }
  },
  {
    "id": 10,
    text: "自分があげたプレゼントやお金への『お返し』がないとガッカリする",
    effects: { control: 1.5, dependence: 1 }
  },

  // 💸 金銭・搾取耐性
  {
    "id": 11,
    text: "推しにはケチケチしたくない！出すときは出す",
    effects: { spendthrift: 2 }
  },
  {
    "id": 12,
    text: "困ってると言われると、ついお金や物を出してあげたくなる",
    effects: { spendthrift: 1.5, dependence: 1 }
  },
  {
    "id": 13,
    text: "“また来てね！”と言われると、本気で自分を待ってる気がしてしまう",
    effects: { bias: 2, dependence: 1 }
  },
  {
    "id": 14,
    text: "計算は早い方、計算が合っているかレシートは必ずチェック",
    effects: { frugal: 2 }
  },

  // 👑 支配・対等
  {
    "id": 15,
    text: "『自由にしていいよ』と言いつつ、心の中でGPSを起動してる",
    effects: { control: 2 }
  },
  {
    "id": 16,
    text: "自分の思い通りに相手が動かないと、不安やイライラが増してしまう",
    effects: { control: 2, dependence: 1 }
  },
  {
    "id": 17,
    text: "主導権は自分が握りたい。相手をリードしてあげたい",
    effects: { control: 2 }
  },
  {
    "id": 18,
    text: "喧嘩したときは、絶対に自分から謝りたくない",
    effects: { control: 2 }
  },

  // 🧊 騙されにくさ・自己肯定感
  {
    "id": 19,
    text: "褒められたらありがとうと言いつつも「エッ…何か企んでるかも…」と思う",
    effects: { objectivity: 2 }
  },
  {
    "id": 20,
    text: "誰が何と言おうと、自分は自分、人は人",
    effects: { independence: 2, objectivity: 1 }
  },
  {
    "id": 21,
    text: "正直、人間より猫や犬といる方が落ち着く",
    effects: { independence: 2, objectivity: 1.5 }
  },

  // 🪤 騙されやすさ・見返り
  {
    "id": 22,
    text: "ラブソングを聴くと「あー自分のことじゃん！」って思いがち",
    effects: { bias: 2 }
  },
  {
    "id": 23,
    text: "“自分だけには心を開いてくれてる”と感じると、つい特別扱いしちゃう",
    effects: { dependence: 1.5, bias: 1.5 }
  },
  {
    "id": 24,
    text: "プレゼントして無言だったら、「あれ？お礼は？」って思う",
    effects: { control: 1.5, dependence: 1 }
  },

  // 🔄 バランス系・ニュートラル
  {
    "id": 25,
    text: "恋愛は、信頼・お金・タイミング、どれも大事だよねッ",
    effects: {
      dependence: 0.5, independence: 0.5,
      spendthrift: 0.5, frugal: 0.5,
      control: 0.5, equality: 0.5,
      bias: 0.5, objectivity: 0.5
    }
  }
]
