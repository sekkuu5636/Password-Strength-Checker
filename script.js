const password = document.getElementById("password");
const strengthBar = document.getElementById("strength-bar");
const strengthText = document.getElementById("strength-text");
const scoreText = document.getElementById("score-text");
const suggestionList = document.getElementById("suggestion-list");
const historyList = document.getElementById("history-list");

const toggleBtn = document.getElementById("toggleBtn");
const analyzeBtn = document.getElementById("analyzeBtn");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const themeToggle = document.getElementById("themeToggle");
const voiceBtn = document.getElementById("voiceBtn");

const historyPanel = document.getElementById("historyPanel");
const historyBtn = document.getElementById("historyBtn");
const closeHistory = document.getElementById("closeHistory");
const clearHistory = document.getElementById("clearHistory");

// Toggle Password
toggleBtn.onclick = () => {
    password.type = password.type === "password" ? "text" : "password";
};

// Analyze
analyzeBtn.onclick = () => checkStrength(password.value);

// Generate
generateBtn.onclick = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let pass = "";
    for (let i = 0; i < 12; i++) {
        pass += chars[Math.floor(Math.random() * chars.length)];
    }
    password.value = pass;
    checkStrength(pass);
    addHistory(pass);
};

// Copy
copyBtn.onclick = () => {
    if (!password.value) return alert("No password!");
    navigator.clipboard.writeText(password.value);
    alert("Copied!");
};

// DARK MODE WITH ICON + TOOLTIP CHANGE
themeToggle.onclick = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("data-tooltip", "Light Mode");
    } else {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("data-tooltip", "Dark Mode");
    }
};

// Voice Input
voiceBtn.onclick = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.start();
    recognition.onresult = (event) => {
        password.value = event.results[0][0].transcript;
        checkStrength(password.value);
    };
};

// History Panel
historyBtn.onclick = () => historyPanel.classList.add("active");
closeHistory.onclick = () => historyPanel.classList.remove("active");

// Clear History
clearHistory.onclick = () => {
    historyList.innerHTML = "";
    localStorage.removeItem("history");
};

// Strength Check
function checkStrength(value) {
    let score = 0;
    let suggestions = [];

    if (value.length >= 8) score += 20;
    else suggestions.push("Use 8+ characters");

    if (/[A-Z]/.test(value)) score += 20;
    else suggestions.push("Add uppercase");

    if (/[a-z]/.test(value)) score += 20;
    else suggestions.push("Add lowercase");

    if (/[0-9]/.test(value)) score += 20;
    else suggestions.push("Add number");

    if (/[\W]/.test(value)) score += 20;
    else suggestions.push("Add symbol");

    updateUI(score, suggestions);
}

// Update UI
function updateUI(score, suggestions) {
    let color = "red";
    let text = "Weak";

    if (score > 40) {
        color = "orange";
        text = "Medium";
    }
    if (score > 80) {
        color = "green";
        text = "Strong";
    }

    strengthBar.style.width = score + "%";
    strengthBar.style.background = color;

    strengthText.textContent = "Strength: " + text;
    scoreText.textContent = "Score: " + score + "%";

    suggestionList.innerHTML = suggestions.length
        ? suggestions.map(s => `<li>${s}</li>`).join("")
        : "<li>Perfect password 💪</li>";
}

// History
function addHistory(pass) {
    let li = document.createElement("li");
    li.textContent = pass;
    historyList.prepend(li);

    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.unshift(pass);
    localStorage.setItem("history", JSON.stringify(history));
}

// Load History
window.onload = () => {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history.forEach(pass => {
        let li = document.createElement("li");
        li.textContent = pass;
        historyList.appendChild(li);
    });
};