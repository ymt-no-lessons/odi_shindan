const questions = [
  // 💌 恋愛・依存系
  {
    id: 1,
    text: "既読がついたのに返信がないと、脳内で100通りのシナリオが再生される",
    effects: { dependence: 2 }
  },
  
  {
    id: 2,
    text: "1人飯・1人旅・1人ゲーム、だいたい全部ソロでイケる",
    effects: { independence: 2 }
  },

  // 💸 金銭・搾取耐性
  {
    id: 3,
    text: "“これは推し活！”と思えば財布が自動で開く",
    effects: { spendthrift: 2 }
  },
  {
    id: 4,
    text: "レシートは即チェック、¥1の誤差も見逃さない",
    effects: { frugal: 2 }
  },

  // 👑 支配・対等
  {
    id: 5,
    text: "『自由にしていいよ』と言いつつ、心の中でGPSを起動してる",
    effects: { control: 2 }
  },

  
  {
    id: 6,
    text: "対等な関係じゃないと、息が詰まるし疲れる",
    effects: { equality: 2 }
  },

  // 🧠 思い込み・客観性
  {
    id: 7,
    text: "初対面5秒で『あ、コイツ無理』と決めがち",
    effects: { bias: 2 }
  },
  {
    id: 8,
    text: "自分の感情は一回冷蔵庫に入れてから確認する派",
    effects: { objectivity: 2 }
  },

  // 💣 執着・暴走予備軍
  {
    id: 9,
    text: "好きになったら、通知音が鳴るだけで心臓が走り出す",
    effects: { dependence: 1.5, control: 1 }
  },
  {
    id: 10,
    text: "相手が返信くれないと、自分が悪いのかと反省会を開催してしまう",
    effects: { bias: 1.5 }
  },

  // 🪤 騙されやすさ
  {
    id: 11,
    text: "好きだよと言われるとプレゼントあげたりやごちそうしたくなる",
    effects: { spendthrift: 1.5, dependence: 1, bias: 1 }
  },
  {
    id: 12,
    text: "脳内BGMがラブソングになる",
    effects: { bias: 2 }
  },

  // 🧊 騙されにくさ
  {
    id: 13,
    text: "褒められたら“何か企んでる？”と思う",
    effects: { objectivity: 2 }
  },

  // 🧘‍♀️ 自己肯定感
  {
    id: 14,
    text: "誰が何と言おうと、自分は自分、人は人",
    effects: { independence: 2, objectivity: 1 }
  },

  // 💬 情動系
  {
    id: 15,
    text: "既読無視されると3時間スマホを見つめる修行に入る",
    effects: { dependence: 1.5, bias: 1 }
  },

  // 🎁 見返り期待
  {
    id: 16,
    text: "プレゼントして無言だったら、なんで？って思う",
    effects: { control: 1.5, bias: 1 }
  },

  // 🐶 動物と過ごしたい
  {
    id: 17,
    text: "正直、人間より猫や犬と分かり合える気がしてる",
    effects: { independence: 1.5, objectivity: 1.5 }
  },

  // 😎 主導権
  {
    id: 18,
    text: "采配は基本自分が握りたい",
    effects: { control: 2 }
  },
  {
    id: 19,
    text: "沼る前に“この人ヤバくないか”のセンサーが作動する",
    effects: { objectivity: 2, frugal: 1 }
  },

  // 🔄 中立調整
  {
    id: 20,
    text: "恋愛は、信頼・お金・タイミング、全部大事だよね",
    effects: {
      dependence: 0.5, independence: 0.5,
      spendthrift: 0.5, frugal: 0.5,
      control: 0.5, equality: 0.5,
      bias: 0.5, objectivity: 0.5
    }
  }
]
