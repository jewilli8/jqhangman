$(document).ready(() => {
  $('#continue').preventDefault();
  $('#blankRow').hide();
  $('#letterInputform').hide();
  $('#lettersInRow').hide();
  function getWord (){
  const words = [ "business", "object", "kale", "pineapple", "friend", "penguin"];
  let randomNum = Math.floor(Math.random() * words.length);
  let randomWord = words[randomNum];
  return randomWord
}
let currWord = getWord();
let currWordArray = currWord.split("")
let answerArray = []

function drawBlanks(){

let blanks = "";
for(let i = 1; i <= currWord.length; i++){
  blanks += " _"
}
$(blankRow).html(blanks);
}



console.log(currWordArray)
console.log(answerArray)

$('#getstarted').hide();
$('#name').on('mouseenter',() =>{
$('#getstarted').show();
});
$('#continue').on('click', ()=> {

    $('#nameForm').hide();
    const inputValue = $('#name').val();
    $('#greeting').html('Hello, '+ inputValue);
    drawBlanks();
    $('#blankRow').show();
    $('#letterInputform').show();
    $('#lettersInRow').show();


});
$('#submitGuess').on('click', () => {
  let currGuess = $('#guessInput').val();
  let numberCheck = Number(currGuess);
  if ((Number.isNaN(numberCheck)) && (currGuess.length === 1)){
    if (currWord.includes(currGuess)){
    let letterPosition = currWordArray.indexOf(currGuess)
     answerArray[letterPosition] = currGuess;
     console.log(answerArray)

    } else {
      alert('letter not included')
    }

  }
  else {
    $('<div class="alert alert\-danger " role="alert"> Please enter a single letter to continue.</div>')
    .insertBefore('#letterInputform')
  }
});



});
