
document.querySelector("#submit").addEventListener("click", function(evt) {
    //evt.preventDefault();
    var mark = 0;
    var trueAnswer = new TrueAnswer();
    trueAnswer.socore();
    document.getElementsByName('score')[0].value = trueAnswer.number;
});
