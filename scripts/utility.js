function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getARandomAlphabet(){
    //Create a alphabets array
    const alphabetStrings = 'abcdefghijklmnopqustuvwxyz';
    const alphabets = alphabetStrings.split('');
    // get random index from 0 t0 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index]
    //console.log(index,alphabet)
    return alphabet;
}
