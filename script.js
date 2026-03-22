  function start() {

    // MUSIC
    document.getElementById("bgMusic").play();

    // SHOW SCENE
    document.getElementById("scene").style.display = "block";
    document.getElementById("startText").style.display = "none";

    // PHOTO
    setTimeout(() => {
        document.querySelector(".photo").style.opacity = "1";
    }, 500);

    // CANDLE
    setTimeout(() => {
        document.querySelector(".candle").innerText = "🕯️✨";
    }, 1500);

    // CAKE
    setTimeout(() => {
        document.querySelector(".cake").style.display = "block";
    }, 2500);

    // CAKE CUT
    setTimeout(() => {
        document.querySelector(".cake").innerText = "🍰";
    }, 4000);

    // LETTER
    setTimeout(() => {
        document.getElementById("letter").innerText =
        "🎂 Happy Birthday 💖\n\nYou are very special 😊\nStay happy always 💕";
        document.getElementById("letter").style.opacity = "1";
    }, 5500);
}
