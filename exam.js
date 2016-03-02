/**
 * Created by JordanMavrogeorge on 2/26/16.
 */
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What is 20 + 60?", "79", "80", "90", "B" ],
    [ "What is 50 - 11?", "40", "36", "39", "C" ],
    [ "What is 11 x 10?", "110", "120", "121", "A" ],
    [ "What is 30 / 2?", "12", "14", "15", "C" ]
];
function _(x){
    return document.getElementById(x);
}
function renderQuestion(){
    test = _("test");
    if(pos >= questions.length){
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
        _("test_status").innerHTML = "Test Completed";
        pos = 0;
        correct = 0;
        return false;
    }
    _("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
    question = questions[pos][0];
    chA = questions[pos][1];
    chB = questions[pos][2];
    chC = questions[pos][3];
    test.innerHTML = "<h3>"+question+"</h3>";
    test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
    test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
        if(choices[i].checked){
            choice = choices[i].value;
        }
    }
    if(choice == questions[pos][4]){
        correct++;
    }
    pos++;
    renderQuestion();
}
window.addEventListener("load", renderQuestion, false);