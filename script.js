$(document).ready(() => {
  $('#blankRow').hide();
  function getWord (){
  const words = [ "dom", "object", "method", "array", "traverse", "value"];
  let randomNum = Math.floor(Math.random() * words.length);
  let randomWord = words[randomNum];
  return randomWord
}
let currWord = getWord();
let blanks = "";
for(let i = 1; i <= currWord.length; i++){
  blanks += " _"
}
$(blankRow).html(blanks);

$('#getstarted').hide();
$('#name').on('keyup',() =>{
$('#getstarted').show();
});
$('#continue').on('click', ()=> {

    $('#nameForm').hide();
    const inputValue = $('#name').val();
    $('#greeting').html('Hello, '+ inputValue)
    $('#blankRow').show();
})


});
