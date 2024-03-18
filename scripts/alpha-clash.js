function handleKeyboardKeyupEvent(event) {
  const playerPressed = event.key;
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  if (playerPressed === expectedAlphabet) {
    console.log("you won");

    const currentScoreElement = document.getElementById("current-score");
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;
    
    removeBackgroundColorById(expectedAlphabet);

    // const finalScoreElement = document.getElementById('final');
    // const finalScoreText = finalScoreElement.innerText;
    // const finalScore = parseInt(finalScoreText)
    // finalScore.innerText = newScore;

    const finalScoreElement = document.getElementById('final'); 
    const finalScoreText = finalScoreElement.innerText;
    const finalScore = parseInt(finalScoreText);
    finalScoreElement.innerText = newScore;

    continueGame();

  } else {
    console.log("you lose");
    const currentLifeElement = document.getElementById("current-life");
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
    
    if(newLife === 0){
       gameOver()
      
       
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyupEvent);

function continueGame() {
  // step 1 : generate random Alphabet
  const alphabet = getARandomAlphabet();
  console.log("Your Random Alphabet is ", alphabet);
  // set randomly generated alphabet to the screen (showing);
  const currentAlphabetElement = document.getElementById("current-alphabet");
  currentAlphabetElement.innerText = alphabet;
  setBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  continueGame();
}

function gameOver(){
   hideElementById('play-ground');
   showElementById('final-score');
}