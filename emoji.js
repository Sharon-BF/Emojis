let $emoji = document.querySelector("#emoji-btn")

const listEmojis = ["🤣","😅","😁","😁","😋","😎","🤑"]

$emoji.addEventListener(
  "mouseover",
  changeEmoji
)

function changeEmoji(){
  $emoji.innerHTML = listEmojis[getRandomInt(0,listEmojis.length)];
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }