const questions = [
   
   {
    "id": 1,
    text:" 実年齢より若く見られると嬉しくなってしまう",
    effects: { "bias": 1, "dependence": 0.25 }
  },
  {
    "id": 2,
    text: "相手の年齢に関係なく、敬意は大事",
    effects: { "bias": 0.5 }
  },

  {
    "id": 3,
    text: "相手のSNSのアイコンが変わったり投稿したらすぐ気づく",
    effects: { "dependence": 1.25}
  },
  {
    "id": 4,
    text: "連絡はお互いのペースでよく、既読無視も気にしない",
    effects: { "dependence": -1.5 }
  },
  {
    "id": 5,
    text: "ご飯をごちそうしたら『ありがとう』と言ってほしい",
    effects: { "frugal": 1, "control": 0.75 }
  },
  {
    "id": 6,
    text: "プレゼントしたりおごったりすると相手は嬉しいだろうと思う",
    effects: { "frugal": -1.5, "control": 0.5 }
  },
  {
    "id": 7,
    text: "話を最後まで聞けずに途中で遮ったり割り込みがちだ",
    effects: { "control": 1.25 }
  },
  {
    "id": 8,
    text: "相手の話す内容がどうであれ、まず肯定から入るようにしている",
    effects: { "control": -1 }
  },
  {
    "id": 9,
    text: "相手のことは理解できていると思う",
    effects: { "bias": 0.75, "control": 0.5 }
  },
  {
    "id": 10,
    text: "年齢や立場に関係なく対等なのが一番だよねッ",
    effects: { "control": -1 }
  },
  {
    "id": 11,
    text: "既読スルーされると、気にしないようにしても気になってしまう",
    effects: { "dependence": 1.5 }
  },
  {
    "id": 12,
    text: "相手から返事が来なくても『何か理由があるんだな』と気にならない",
    effects: { "dependence": -1.25 }
  },
  {
    "id": 13,
    text: "何かしてあげたら、相手から感謝の反応がないとちょっとモヤる",
    effects: { "control": 1, "frugal": 0.5 }
  },
  {
    "id": 14,
    text: "よく相手のために「こうしたほうがいいよ」とアドバイスをする",
    effects: { "control": 1 }
  },
  {
    "id": 15,
    text: "周りと比べて自分は騙されにくい方だと思う",
    effects: { "bias": 0.75 }
  },
  {
    "id": 16,
    text: "言葉よりも相手の行動を見て判断するタイプだ",
    effects: { "bias": -1 }
  },
  {
    "id": 17,
    text: "『自由にしていいよ』とは言うけど、ホントは不安でざわざわしがち",
    effects: { "dependence": 1.5, "control": 0.5 }
  },
  {
    "id": 18,
    text: "お互いの自由を大事にして、束縛はしないようにしている",
    effects: { "control": -1.25 }
  },
  {
    "id": 19,
    text: "好意を持ってると、ついメッセージ多めになってしまう",
    effects: { "dependence": 1.5, "control": 1 }
  },
  {
    "id": 20,
    text: "相手との距離感を大切にし、適度な関係を保つようにしている",
    effects: { "dependence": -1.25, "control": -0.25 }
  },
  {
    "id": 21,
    text: "自分が関係をリードした方がうまくいくと思う",
    effects: { "bias": 1, "control": 1 }
  },
  {
    "id": 22,
    text: "相手が主導してくれる方がラクだと思っちゃう",
    effects: { "control": -0.25 }
  },
  {
    "id": 23,
    text: "プレゼントや食事などで相手に気に入られたら嬉しい",
    effects: { "frugal": -1.5, "dependence": 1 }
  },
  {
    "id": 24,
    text: "、他人より自分のためにお金を使うべきだと思う",
    effects: { "frugal":1.5 }
  },
  {
    "id": 25,
    text: "SNSで相手が何か投稿すると気になってあれこれ考える",
    effects: { "dependence": 1.5 }
  },
  {
    "id": 26,
    text: "本当は人よりも犬や猫など動物と過ごしたい",
    effects: { "bias": -1, "dependence": -1.75 }
  }
]