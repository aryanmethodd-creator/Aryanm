const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "";

function start() {
    // Music play
    const music = document.getElementById("bgMusic");
    if (music) music.play();

    // Hide start text
    const startText = document.getElementById("startText");
    if (startText) startText.style.display = "none";

    // Show main scene
    const scene = document.getElementById("scene");
    if (scene) scene.style.display = "block";

    // PHOTO SHOW
    setTimeout(() => {
        const photo = document.querySelector(".photo");
        if (photo) photo.style.opacity = "1";
    }, 500);

    // CANDLE GLOW
    setTimeout(() => {
        const candle = document.querySelector(".candle");
        if (candle) candle.innerText = "🕯️✨";
    }, 1500);

    // CAKE SHOW
    setTimeout(() => {
        const cake = document.querySelector(".cake");
        if (cake) cake.style.display = "block";
    }, 2500);

    // CAKE CUT
    setTimeout(() => {
        const cake = document.querySelector(".cake");
        if (cake) cake.innerText = "🍰";
    }, 4000);

    // LETTER SHOW
    setTimeout(() => {
        const letter = document.getElementById("letter");
        if (letter) {
            let message = "🎂 Happy Birthday " + Diya + " 💖\n\n"
                + "You are very special to me 😊\n"
                + "May your day be full of happiness 💕\n"
                + "Keep smiling always ❤️";

            letter.innerText = message;
            letter.style.opacity = "1";
        }
    }, 5500);
}
