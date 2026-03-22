function openEnvelope(){

  document.getElementById("music").play();

  document.getElementById("step1").style.display="none";
  document.getElementById("step2").style.display="block";

  setTimeout(()=>{
    document.getElementById("step2").style.display="none";
    showLetter();
  },2000);
}

function showLetter(){

  document.getElementById("step3").style.display="block";

  let text = "Happy Birthday 💖\nYou are very special 😊\nStay happy always 💕";
  let i=0;

  let typing = setInterval(()=>{
    document.getElementById("letter").innerText += text[i];
    i++;
    if(i>=text.length){
      clearInterval(typing);
      showFinal();
    }
  },50);
}

function showFinal(){
  setTimeout(()=>{
    document.getElementById("step3").style.display="none";
    document.getElementById("step4").style.display="block";
  },2000);
}
