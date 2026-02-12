// ===== Grab interactive elements =====
const card = document.getElementById("valentineCard");
const yesButton = document.getElementById("yesButton");
const celebrationLayer = document.getElementById("celebrationLayer");
const recipientName = document.getElementById("recipientName");

// ===== Apply customizable name from data-name attribute if provided =====
const customName = recipientName.dataset.name?.trim();
if (customName) {
  recipientName.textContent = customName;
}

// ===== Utility to get a random number in range =====
function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

// ===== Create floating heart/confetti particles for celebration =====
function launchCelebration() {
  const icons = ["💖", "💘", "💕", "💞", "✨", "🎉"];

  for (let i = 0; i < 30; i += 1) {
    const particle = document.createElement("span");
    particle.className = "particle";
    particle.textContent = icons[Math.floor(Math.random() * icons.length)];
    particle.style.left = `${randomInRange(5, 95)}%`;
    particle.style.top = `${randomInRange(55, 88)}%`;
    particle.style.fontSize = `${randomInRange(1, 1.8)}rem`;
    particle.style.animationDelay = `${randomInRange(0, 0.24)}s`;

    celebrationLayer.appendChild(particle);
    setTimeout(() => particle.remove(), 2200);
  }
}

// ===== Replace card content with a celebratory success view =====
function showSuccessMessage() {
  const name = recipientName.textContent.trim() || "love";

  card.innerHTML = `
    <h2 class="success-message">I knew you'd say YES ❤️</h2>
    <p class="success-subtext">You make every day sweeter, ${name}. Happy Valentine's Day! 💌</p>
    <div id="celebrationLayer" class="celebration-layer" aria-hidden="true"></div>
  `;

  // Rebind layer reference after replacing card content.
  const newLayer = card.querySelector("#celebrationLayer");
  if (newLayer) {
    for (let i = 0; i < 2; i += 1) {
      setTimeout(() => {
        const burstIcons = ["💖", "💘", "✨", "🎉"];
        for (let j = 0; j < 18; j += 1) {
          const particle = document.createElement("span");
          particle.className = "particle";
          particle.textContent = burstIcons[Math.floor(Math.random() * burstIcons.length)];
          particle.style.left = `${randomInRange(6, 94)}%`;
          particle.style.top = `${randomInRange(55, 90)}%`;
          particle.style.fontSize = `${randomInRange(1, 1.75)}rem`;
          newLayer.appendChild(particle);
          setTimeout(() => particle.remove(), 2100);
        }
      }, i * 280);
    }
  }
}

// ===== Handle Yes click interaction =====
yesButton.addEventListener("click", () => {
  launchCelebration();
  card.classList.add("success");

  // Delay content swap slightly so initial button click animation is visible.
  setTimeout(() => {
    showSuccessMessage();
  }, 350);
});
