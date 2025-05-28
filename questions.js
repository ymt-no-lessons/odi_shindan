const questions = [
  {
    "id": 1,
    text:" 実年齢より若く見られると嬉しくなってしまう",
    effects: { "bias": 1.5, "dependence": 0.5 }
  },
  {
    "id": 2,
    text: "相手の年齢に関係なく、敬意は大事",
    effects: { "bias": 0.5 }
  },
  {
    "id": 3,
    text: "相手のSNSのアイコンの変化や投稿にはすぐ気づく",
    effects: { "dependence": 2 }
  },
  {
    "id": 4,
    text: "連絡はお互いのペースでよく、既読無視も気にしない",
    effects: { "dependence": -1.5 }
  },
  {
    "id": 5,
    text: "ご飯をごちそうしたら『ありがとう』と言ってほしい",
    effects: { "frugal": 1, "control": 1 }
  },
  {
    "id": 6,
    text: "相手の喜ぶ顔を見たいからプレゼントしたりおごったりする",
    effects: { "frugal": -2, "control": -1 }
  },
  {
    "id": 7,
    text: "話を最後まで聞けずに途中で遮ったり割り込みがちだ",
    effects: { "control": 2 }
  },
  {
    "id": 8,
    text: "相手の話す内容がどうであれ、まず肯定から入るようにしている",
    effects: { "control": -2 }
  },
  {
    "id": 9,
    text: "年上のアドバイスなんだから一応聞いておいてほしい",
    effects: { "bias": 0.5, "control": 1 }
  },
  {
    "id": 10,
    text: "年齢や立場に関係なくフラットな関係でいたい",
    effects: { "control": -1 }
  },
  {
    "id": 11,
    text: "既読スルーされると、気にしないようにしてもつい気になってしまう",
    effects: { "dependence": 2 }
  },
  {
    "id": 12,
    text: "相手から返事が来なくても『何か理由があるんだな』と気にならない",
    effects: { "dependence": -2 }
  },
  {
    "id": 13,
    text: "何かしてあげたら、相手から感謝の反応がないとちょっとモヤる",
    effects: { "control": 2, "frugal": 1 }
  },
  {
    "id": 14,
    text: "よく相手のために「こうしたほうがいいよ」とアドバイスをする",
    effects: { "control": 2 }
  },
  {
    "id": 15,
    text: "自分は騙されない方だと思う",
    effects: { "bias": 0.75 }
  },
  {
    "id": 16,
    text: "表情や言葉より、相手の行動を見て判断するタイプだ",
    effects: { "bias": -1 }
  },
  {
    "id": 17,
    text: "『自由にしていいよ』とは言うけど、内心ちょっと不安になることも",
    effects: { "control": 1.5 }
  },
  {
    "id": 18,
    text: "お互いの自由を大事にして、束縛はしないようにしている",
    effects: { "control": -2 }
  },
  {
    "id": 19,
    text: "好意を持ってると、ついメッセージ多めになってしまう",
    effects: { "dependence": 2, "control": 1 }
  },
  {
    "id": 20,
    text: "相手との距離感を大切にし、適度な関係を保つようにしている",
    effects: { "dependence": -2 }
  },
  {
    "id": 21,
    text: "自分が関係をリードした方がうまくいくと思う",
    effects: { "bias": 2, "control": 1 }
  },
  {
    "id": 22,
    text: "相手が主導してくれるのは割と好き",
    effects: { "control": -1 }
  },
  {
    "id": 23,
    text: "プレゼントや食事などで相手に気に入られようとしたことがある",
    effects: { "frugal": -1.5, "dependence": 1 }
  },
  {
    "id": 24,
    text: "自分のためにお金を使うべきだ",
    effects: { "frugal": 2 }
  },
  {
    "id": 25,
    text: "SNSで相手が何か投稿すると『誰に向けて？』と気になってしまう",
    effects: { "dependence": 1.5 }
  },
  {
    "id": 26,
    text: "実は犬や猫など動物と過ごす方が好きだったりする",
    effects: { "bias": -1.5, "dependence": -1.5 }
  },
 
]