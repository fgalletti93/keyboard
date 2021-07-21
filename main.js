//get all keys
const keys = document.querySelectorAll('.key')

// play notes
function playNote(event){
   let audioKeyCode = getKeyCode(event);

   //type of key pressed
   const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
   
   //if key exists
   const keyNotFound = !key

   if (keyNotFound) {
       return;
   }
   addPlayingClass(key)
   playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    let keyCode;

    const isKeyboard = event.type === "keydown" //true or false
    if(isKeyboard){
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }
    return keyCode;
    // fundamental para retornar o valor da função
}

function playAudio(audioKeyCode) {
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0;
    audio.play()
}

function removePlayingClass(event) {
    event.target.classList.remove('playing')
}

function registerEvents() {
    // play with mouse 
    keys.forEach( function (key) {
        key.addEventListener("click", playNote)
        key.addEventListener("transitionend", removePlayingClass)
    })

    // play with keyboard keys
    window.addEventListener("keydown", playNote)
}

window.addEventListener("load", registerEvents)