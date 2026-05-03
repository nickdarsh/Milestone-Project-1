/* External JS file for Quiz logic */

function processQuiz() {
    const form = document.getElementById('quizForm');
    let score = 0;
    const results = document.getElementById('results-area');

    // Q1: Fill-in-the-blank (Tim Berners-Lee)
    const q1 = form.q1.value.toLowerCase();
    if (q1.includes("tim berners-lee")) score++;

    // Q2: Radio Button (HTTP 1.1)
    if (form.q2.value === "1.1") score++;

    // Q3: Radio Button (SPDY)
    if (form.q3.value === "SPDY") score++;

    // Q4: Radio Button (HTTP 1.0)
    if (form.q4.value === "1.0") score++;

    // Q5: Checkbox (Multiplexing and Binary Framing)
    const q5Mux = document.getElementById('c1').checked;
    const q5Bin = document.getElementById('c2').checked;
    const q5Get = document.getElementById('c3').checked;
    if (q5Mux && q5Bin && !q5Get) score++;

    // Display Results
    results.style.display = "block";
    results.innerHTML = `<h3>Your Score: ${score}/5</h3>`;
    if (score >= 4) {
        results.innerHTML += "<p style='color: green;'>Pass! Great job.</p>";
    } else {
        results.innerHTML += "<p style='color: red;'>Fail. Review the content and try again.</p>";
    }
    results.scrollIntoView();
}