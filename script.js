const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");
const hearts = document.querySelector(".hearts");

const noTexts = [
  "Are you suuure? 🥺",
  "Pretty please? 💗",
  "Don't break my heart 😢",
  "One more chance? 💞",
  "I'll bring snacks forever 🍫",
];

let noClickCount = 0;

function burstHearts() {
  for (let i = 0; i < 16; i += 1) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = ["💖", "💘", "💕", "💗"][Math.floor(Math.random() * 4)];
    heart.style.left = `${8 + Math.random() * 84}%`;
    heart.style.top = `${50 + Math.random() * 35}%`;
    heart.style.animationDelay = `${Math.random() * 0.35}s`;
    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}

yesBtn.addEventListener("click", () => {
  response.hidden = false;
  response.textContent = "YAYYY! You just made me the happiest person alive 💞";
  burstHearts();
  noBtn.disabled = true;
  noBtn.style.opacity = "0.4";
  noBtn.style.cursor = "not-allowed";
});

noBtn.addEventListener("click", () => {
  noBtn.textContent = noTexts[Math.min(noClickCount, noTexts.length - 1)];
  noClickCount += 1;
  yesBtn.style.transform = `scale(${1 + Math.min(noClickCount * 0.08, 0.5)})`;
});
