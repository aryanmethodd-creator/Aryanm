const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "";

function start() {

    // MUSIC
    document.getElementById("bgMusic").play();

    // PHOTO SHOW
    setTimeout(() => {
        document.querySelector(".photo").style.opacity = "1";
    }, 500);

    // CANDLE GLOW
    setTimeout(() => {
        document.querySelector(".candle").innerText = "🕯️✨";
    }, 1500);

    // CAKE SHOW
    setTimeout(() => {
        document.querySelector(".cake").style.display = "block";
    }, 2500);

    // CAKE CUT
    setTimeout(() => {
        document.querySelector(".cake").innerText = "🍰";
    }, 4000);

    // LETTER SHOW
    setTimeout(() => {
        let msg = "🎂 Happy Birthday " + name + " 💖\n\n"
        + "You are very special to me 😊\n"
        + "Stay happy always 💕\n"
        + "Keep smiling ❤️";

        let letter = document.getElementById("letter");
        letter.innerText = msg;
        letter.style.opacity = "1";
    }, 5500);
}
