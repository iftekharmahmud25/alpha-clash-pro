// function play() {
//   // step 1 - hide the home screen . to hide the screen add the class hidden  to the home section .

//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden')
   
//   // show the play ground 
//   const playGroundSection = document.getElementById('play-ground');
//   playGroundSection.classList.remove('hidden')
// }


function continueGame(){
    // step 1 : generate random Alphabet 
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet is ',alphabet)
    // set rondomly generated alphabet to the screen (showing);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet)
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground')
    continueGame()
}