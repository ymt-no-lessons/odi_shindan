// ✅ 最終版 script.js（8軸診断対応 + バグ修正 + バランスコメント + チャート）

let current = 0;
let answers = [];

const axisMap = {
  dependence: ["D", "I"],
  frugal: ["F", "S"],
  control: ["C", "E"],
  bias: ["B", "O"]
};

document.addEventListener("DOMContentLoaded", () => {
  shuffle(questions);
  renderQuestion();

  document.getElementById("prevBtn").onclick = () => {
    if (current > 0) {
      saveAnswer(current);
      current--;
      renderQuestion();
    }
  };

  document.getElementById("nextBtn").onclick = () => {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
      alert("選択肢を選んでください");
      return;
    }

    saveAnswer(current); // ✅ ここで毎回保存！

    if (current < questions.length - 1) {
      current++;
      renderQuestion();
    } else {
      showResult();
    }
  };
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderQuestion() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("question-box").style.display = "block";
  document.querySelector(".controls").style.display = "flex";

  const q = questions[current];
  document.getElementById("question-text").textContent = `${current + 1}. ${q.text}`;

  const options = ["全く違う", "やや違う", "どちらでもない", "やや当てはまる", "非常に当てはまる"];
  const html = `<div class="radio-group">` +
    options.map((opt, i) => `
      <label>
        <input type="radio" name="option" value="${i}" ${answers[current] === i ? "checked" : ""}/>
        <span class="radio-label">${opt}</span>
      </label>
    `).join("") + `</div>`;

  document.getElementById("options").innerHTML = html;
  document.getElementById("progress").value = current;
  document.getElementById("progress").max = questions.length;
}

function saveAnswer(index) {
  const selectedOption = document.querySelector('input[name="option"]:checked');
  if (selectedOption) {
    answers[index] = parseInt(selectedOption.value);
  }
}

function showResult() {
  const scores = { D: 0, I: 0, S: 0, F: 0, C: 0, E: 0, B: 0, O: 0 };

  questions.forEach((q, i) => {
    const val = answers[i] - 2;
    if (val === 0) return;
    for (let key in q.effects) {
      const axisPair = axisMap[key];
      if (!axisPair) continue; // ✅ 安全チェック
      const [pos, neg] = axisPair;
      const effect = q.effects[key];
      if (val * effect > 0) {
        scores[effect > 0 ? pos : neg] += Math.abs(effect * val);
      } else {
        scores[effect > 0 ? neg : pos] += Math.abs(effect * val);
      }
    }
  });

  let type = "";
  type += scores.D >= scores.I ? "D" : "I";
  type += scores.S >= scores.F ? "S" : "F";
  type += scores.C >= scores.E ? "C" : "E";
  type += scores.B >= scores.O ? "B" : "O";

  const desc = typeDescriptions[type] || {
    name: "不明なタイプ", 
    description: "診断結果に問題が発生しました。" 
  };
  //画像の設定
  const resultImage = document.getElementById("result-image"); // 画像を表示する要素
  if (resultImage) {
  resultImage.alt = `${desc.name}のイラスト`;
  resultImage.src = `assets/${type}.png`;

  // エラー時のフォールバック（画像がなかった場合）
  resultImage.onerror = () => {
    resultImage.src = "assets/default.png";
    resultImage.alt = "イラストが見つかりませんでした";
  };
}

  document.getElementById("type").textContent = `${desc.name}（${type}）`;
  document.getElementById("description").innerHTML = `${desc.description}<br><br><strong>補足分析：</strong><br>${getBalanceComment(scores)}`;

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("question-box").style.display = "none";
  document.querySelector(".controls").style.display = "none";



// チャートの描画
  const ctx = document.getElementById('resultChart');
  if (ctx) {
    if (window.myRadarChart instanceof Chart) {
      window.myRadarChart.destroy();
    }
    window.myRadarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["依存", "自立", "浪費家", "倹約家", "支配", "対等", "勘違い", "客観的"],
        datasets: [{
          label: "あなたの傾向",
          data: [
            scores.D, scores.I,
            scores.S, scores.F,
            scores.C, scores.E,
            scores.B, scores.O
          ],
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: 'rgba(75,192,192,1)'
        }]
      },
      options: {
        maintainAspectRatio: false,  // ← 親のheightを優先する
        responsive: true,
        indexAxis: 'y', // 横向きのグラフにする
        scales: {
          y: {
            min: 0,
            max: 16,
            beginAtZero: true,
           
          }
        }
      }
    });
  }
}

function getBalanceComment(s) {
  const c = [];
if (s.D >= 7 && s.I <= 2) {
  c.push("甘えたい気持ちが強めで、恋愛になるとつい相手に頼りがち。LINEの既読がつかないだけでソワソワしたり、ちょっとした態度にも一喜一憂するタイプ。人を信じる力は強いけど、そのぶん振り回されることも多いかも。");
}

if (s.I >= 7 && s.D <= 2) {
  c.push("とにかくマイペースで自立心が高め。他人に頼るより、自分で決めて自分で動くのが好きなタイプ。恋愛にのめり込むことも少なくて、ちょっとクールに見られがちだけど、それがあなたの自然体。");
}

if (s.S >= 7 && s.F <= 2) {
  c.push("財布のひもはわりとゆるめ。“これ欲しい！”と思ったら、あまり迷わずお金を出すタイプ。推しや恋人に使うのも好きだけど、気づけば出費が重なってることもあるので、たまに振り返ってみるのも大事かも。");
}

if (s.F >= 7 && s.S <= 2) {
  c.push("節約意識が高くて、無駄はきらい！日常の小さな出費にもちゃんと計算が入るタイプ。恋愛でも“コスパ”をつい意識しちゃうところがあって、理性的すぎて相手に冷たく映ることも。");
}

if (s.C >= 7 && s.E <= 2) {
  c.push("つい仕切りたくなる、指示出しタイプ。自分のやり方が一番！と思ってる節があって、相手を“導いてるつもり”が、ちょっと押し付けになっちゃうことも。愛情深いぶん、期待値も高めです。");
}

if (s.E >= 7 && s.C <= 2) {
  c.push("対等な関係を何より大事にする平和主義者タイプ。上下とか主従とか、そういうのがとにかく苦手。でもあまりに相手を優先しすぎると、“自分はどうしたいの？”って思われることもあるのでバランス大事。");
}

if (s.B >= 7 && s.O <= 2) {
  c.push("思い込みがちょっと強め。“きっとこう思ってるんでしょ？”って決めつけちゃうところがあるかも。相手のちょっとした行動や言葉を深読みしすぎて、空回りしちゃうこともあるので、深呼吸大事です。");
}

if (s.O >= 7 && s.B <= 2) {
  c.push("超冷静で現実派。感情よりも“事実ベース”で判断することが多くて、恋愛でもブレにくいタイプ。相手からは“ちょっと冷たい？”と思われるかもだけど、そのぶん騙されにくく、落ち着いた関係が築けます。");
}

if (c.length === 0) {
  return "どの傾向にも大きく偏らない、バランス型タイプ。感情に流されすぎず、でもちゃんと人の気持ちも考えられるちょうどいい感覚の持ち主。恋愛でも、安心感を与えられる存在になりやすいです。";
}

return c.join("<br>");
}

//画像を表示させるところ
const resultImage = document.getElementById("result-image");
resultImage.src = `assets/${type}.png`; // ← assets フォルダにある画像を読み込む
resultImage.alt = `${desc.name}のイラスト`;

console.log(document.getElementById("result-image")) 

// 万が一画像がなかったときのフォールバック
resultImage.onerror = () => {
  resultImage.src = "assets/default.png"; // ← 予備画像を入れておくと安心
  resultImage.alt = "診断画像が見つかりませんでした";
  
};



// SNS共有
function shareResult() {
    const text = document.getElementById("type").textContent;
    const url = encodeURIComponent(window.location.href);
    const shareURL = `https://twitter.com/intent/tweet?text=私は${text}でした！%20#おぢ診断&url=${url}`;
    window.open(shareURL, "_blank");
}

function restart() {
    current = 0;
    answers = []; // Clear answers
    document.getElementById("result").classList.add("hidden"); // Hide result
    document.getElementById("question-box").style.display = "block"; // Show question box
    document.querySelector(".controls").style.display = "flex"; // Show controls

    // Destroy Chart.js instance on restart
    if (window.myRadarChart instanceof Chart) {
        window.myRadarChart.destroy();
    }

    shuffle(questions); // 質問を再度シャッフル
    renderQuestion(); // Render the first question
}