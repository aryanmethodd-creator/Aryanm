const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "";

function start() {
    document.getElementById("bgMusic").play();
    document.getElementById("startText").style.display = "none";
    document.getElementById("scene").style.display = "block";

    // Photo show
    setTimeout(() => {
        document.querySelector(".photo").style.opacity = "1";
    }, 500);

    // Candle glow
    setTimeout(() => {
        document.querySelector(".candle").innerText = "🕯️✨";
    }, 1500);

    // Cake appear
    setTimeout(() => {
        document.querySelector(".cake").style.display = "block";
    }, 2500);

    // Cake cut
    setTimeout(() => {
        document.querySelector(".cake").innerText = "🍰";
    }, 4000);

    // Letter show
    setTimeout(() => {
        let message = "🎂 Happy Birthday " + Diya + " 💖\n\n"
        + "You are very special to me 😊\n"
        + "May your day be full of happiness 💕\n"
        + "Keep smiling always ❤️";

        let letter = document.getElementById("letter");
        letter.innerText = message;
        letter.style.opacity = "1";
    }, 5500);
}
