const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "";

function start() {
    document.getElementById("bgMusic").play();
    document.getElementById("startText").style.display = "none";
    document.getElementById("scene").style.display = "block";

    // Step 1: Candle
    setTimeout(() => {
        document.querySelector(".candle").innerText = "🕯️✨";
    }, 1000);

    // Step 2: Cake appear
    setTimeout(() => {
        document.querySelector(".cake").style.display = "block";
    }, 2000);

    // Step 3: Cake cut effect
    setTimeout(() => {
        document.querySelector(".cake").innerText = "🍰";
    }, 3500);

    // Step 4: Final message
    setTimeout(() => {
        let text = "🎂 Happy Birthday " + name + " 💖🎉";
        let final = document.getElementById("finalText");
        final.innerText = text;
        final.style.opacity = "1";
    }, 5000);
}
