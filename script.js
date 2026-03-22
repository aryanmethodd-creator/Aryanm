const params = new URLSearchParams(window.location.search);
const name = params.get("name") || "";

function start() {
    document.getElementById("bgMusic").play();
    document.getElementById("startText").style.display = "none";
    document.getElementById("scene").style.display = "block";

    // Step 1: Photo show
    setTimeout(() => {
        document.querySelector(".photo").style.opacity = "1";
    }, 500);

    // Step 2: Candle glow
    setTimeout(() => {
        document.querySelector(".candle").innerText = "🕯️✨";
    }, 1500);

    // Step 3: Cake appear
    setTimeout(() => {
        document.querySelector(".cake").style.display = "block";
    }, 2500);

    // Step 4: Cake cut
    setTimeout(() => {
        document.querySelector(".cake").innerText = "🍰";
    }, 4000);

    // Step 5: Final message
    setTimeout(() => {
        let text = "🎂 Happy Birthday " + Diya + " 💖\nYou are my favorite person 😊";
        let final = document.getElementById("finalText");
        final.innerText = text;
        final.style.opacity = "1";
    }, 5500);
}
