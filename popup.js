const bubble = document.getElementById("novaBubble");
const popup = document.getElementById("novaPopup");
const introText = document.getElementById("intro-text");

// Toggle popup
bubble.addEventListener("click", () => {
  if (popup.style.display === "flex") {
    popup.style.animation = "fadeOut 0.3s ease forwards";
    setTimeout(() => popup.style.display = "none", 300);
  } else {
    popup.style.display = "flex";
    popup.style.animation = "fadeIn 0.3s ease forwards";
    document.getElementById('help-menu').style.display = 'none';
    document.getElementById('main-buttons').style.display = 'flex';
    introText.style.display = 'block'; // show intro initially
  }
});

function goToProduct(type) {
  if (type === 'green') location.href = "movegreen.html";
  if (type === 'power') location.href = "movesmarter.html";
  if (type === 'comfort') location.href = "movesmarter2.html";
  if (type === 'subscription') location.href = "movesmartest.html";
}

function showHelpMenu() {
  document.getElementById('main-buttons').style.display = 'none';
  document.getElementById('help-menu').style.display = 'flex';
  introText.style.display = 'none'; // hide intro
}

function backToMain() {
  document.getElementById('help-menu').style.display = 'none';
  document.getElementById('main-buttons').style.display = 'flex';
  introText.style.display = 'block'; // show intro again
}