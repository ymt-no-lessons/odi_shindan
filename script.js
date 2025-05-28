let current = 0;
let answers = []; // Stores the selected option index for each question

// questions と typeDescriptions は questions.js および typeDescriptions.js から直接読み込まれるため、
// ここでの宣言は不要になります。ただし、グローバルスコープにあることを前提とします。

document.addEventListener("DOMContentLoaded", () => {
    // データがすでに読み込まれていることを確認（scriptタグの順序に依存）

    // 質問をシャッフル
    shuffle(questions);

    // 最初の質問をレンダリング
    renderQuestion();

    document.getElementById("prevBtn").onclick = () => {
        if (current > 0) {
            saveAnswer(current); // Save current answer before moving
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

        saveAnswer(current); // Save the answer for the current question

        current++;
        if (current < questions.length) {
            renderQuestion();
        } else {
            showResult();
        }
    };

    // Add event listeners for PDF, Share, and Restart buttons
    document.querySelector('button[onclick="generatePDF()"]').onclick = generatePDF;
    document.querySelector('button[onclick="shareResult()"]').onclick = shareResult;
    document.querySelector('button[onclick="restart()"]').onclick = restart;

    // Initially hide the result section
    document.getElementById("result").classList.add("hidden");
});

// シャッフル関数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderQuestion() {
    // Hide result section if it's visible
    document.getElementById("result").classList.add("hidden");
    document.getElementById("question-box").style.display = "block";
    document.querySelector(".controls").style.display = "flex";

    const q = questions[current];
    document.getElementById("question-text").textContent = `${current + 1}. ${q.text}`;

    const options = [
        "全く違う",
        "やや違う",
        "どちらでもない",
        "やや当てはまる",
        "非常に当てはまる"
    ];

    // Generate radio buttons with custom styling structure
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

function saveAnswer(questionIndex) {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        answers[questionIndex] = parseInt(selectedOption.value);
    }
}

function showResult() {
    const score = { dependence: 0, control: 0, frugal: 0, bias: 0 };

    questions.forEach((q, i) => {
        if (answers[i] !== undefined) {
            const val = answers[i] - 2; // Adjust score: 0 (全く違う) = -2, 2 (どちらでもない) = 0, 4 (非常に当てはまる) = +2
            for (let k in q.effects) {
                if (q.effects.hasOwnProperty(k)) {
                    score[k] += q.effects[k] * val;
                }
            }
        }
    });

    // Score to Type mapping
    // 依存傾向については「Dependence」「Independence」 (D/I)
    // 浪費家については「Frugal」「Spendthrift」 (F/S)
    // 支配欲については「Control」「Equality 」 (C/E)
    // 勘違い度については「Bias」「Objectivity」 (B/O)
    const type =
        (score.dependence >= 0 ? "D" : "I") +
        (score.frugal >= 0 ? "F" : "S") + // 倹約はFrugal (F)、浪費はSpendthrift (S)
        (score.control >= 0 ? "C" : "E") +
        (score.bias >= 0 ? "B" : "O");

    const desc = typeDescriptions[type] || { name: "不明なタイプ", description: "診断結果に問題が発生しました。" };

    document.getElementById("type").textContent = `${desc.name}（${type}）`;
    document.getElementById("description").textContent = desc.description;

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("question-box").style.display = "none";
    document.querySelector(".controls").style.display = "none";

    // Chart.js
    const ctx = document.getElementById('resultChart');
    if (ctx) {
        // Destroy existing chart instance if any to prevent duplicates on restart
        if (window.myRadarChart instanceof Chart) {
            window.myRadarChart.destroy();
        }

        window.myRadarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ["依存おぢ", "浪費おぢ", "支配のおぢ", "勘違いおぢ"], // 質問とスコアの順序に合わせて調整
                datasets: [{
                    label: "あなたのスコア",
                    data: [score.dependence, score.frugal, score.control, score.bias], // 順序をlabelsと合わせる
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: 'rgba(75,192,192,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(75,192,192,1)'
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: {
                            display: false
                        },
                        suggestedMin: -8,
                        suggestedMax: 8,
                        ticks: {
                            beginAtZero: true
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true
                    }
                }
            }
        });
    }
}


// PDF出力
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("おぢ診断結果", 20, 20);
    doc.text(document.getElementById("type").textContent, 20, 40);
    doc.text(document.getElementById("description").textContent, 20, 60, { maxWidth: 170 });
    doc.save("odhi_result.pdf");
}

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