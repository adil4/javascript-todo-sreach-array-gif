function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;

    var correct = 0;

    if(question1 == "adil"){
        correct++;
    }
    if(question2 == "adil"){
        correct++;
    }
    if(question3 == "ammar"){
        correct++;
    }

    var messages = ["Not Good", "Good", "Very Good"];
    var pictures = ["./img/asaur.gif", "./img/hen.gif", "./img/poo.gif"];

    var range;

    if(correct == 1){
        range = 0;
    }
    if(correct == 2){
        range = 1;
    }
    if(correct == 3){
        range = 2;
    }

    //document.getElementById("after_submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "you got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}