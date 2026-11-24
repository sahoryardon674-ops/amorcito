
const startButton = document.getElementById("startButton");
const letterSection = document.getElementById("letterSection");
const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");
const loveLetter = document.getElementById("loveLetter");
const memories = document.getElementById("memories");
const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

// Mostrar la sección de la carta
startButton.addEventListener("click", () => {
    letterSection.classList.remove("hidden");

    letterSection.scrollIntoView({
        behavior: "smooth"
    });
});

// Abrir el sobre
function revealLetter() {
    if (envelope.classList.contains("opened")) return;

    envelope.classList.add("opened");
    openLetter.textContent = "Tu cartita está abierta ♡";

    setTimeout(() => {
        loveLetter.classList.remove("hidden");
        memories.classList.remove("hidden");

        loveLetter.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 900);
}

envelope.addEventListener("click", revealLetter);
openLetter.addEventListener("click", revealLetter);

// Mostrar la última sorpresa
surpriseButton.addEventListener("click", () => {
    surpriseMessage.classList.remove("hidden");
    surpriseButton.style.display = "none";

    surpriseMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createHearts(25);
});

// Crear corazones flotantes
function createHearts(amount = 1) {
    const container = document.getElementById("hearts");

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("span");

        heart.classList.add("floating-heart");
        heart.innerHTML = Math.random() > 0.5 ? "♥" : "♡";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (12 + Math.random() * 20) + "px";
        heart.style.animationDuration = (5 + Math.random() * 7) + "s";

        container.appendChild(heart);

        heart.addEventListener("animationend", () => {
            heart.remove();
        });
    }
}

// Corazones de fondo
setInterval(() => {
    createHearts(2);
}, 900);
