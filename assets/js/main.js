const keys = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

function getRandomNumber(Min,Max) {
    Min= Math.ceil(Min);
    Max = Math.floor(Max);

    return Math.floor(Math.random()*(Max-Min+1))+Min;
}

function getRandomKey() {
  return keys[getRandomNumber(0,keys.length-1)]
}

function targetRandomKey () {
    const key = document.getElementById(getRandomKey())
    key.classList.add("selected")
}

document.addEventListener("keyup", event=> {
    const keyPressed= String.fromCharCode(event.keyCode);
    const keyElement = document.getElementById(keyPressed);
    const hightedKey = document.querySelector(".selected")
    keyElement.classList.add("hit")

    keyElement.addEventListener("animationend", ()=> {
        keyElement.classList.remove("hit");
    })

    if(keyPressed===hightedKey.innerHTML){
        hightedKey.classList.remove("selected");
        targetRandomKey()
    }
});

targetRandomKey()