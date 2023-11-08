const answerbtn1 = document.getElementById('answerbtn1');
const answerbtn2 = document.getElementById('answerbtn2');
const answerbtn3 = document.getElementById('answerbtn3');
const answerbtn4 = document.getElementById('answerbtn4');
const answerbtn5 = document.getElementById('answerbtn5');
const answerbtn6 = document.getElementById('answerbtn6');
const questionBox = document.getElementById('questionBox');


const strikeBtn = document.getElementById('strikeBtn');
const strike1 = document.getElementById('strike1');
const strike2 = document.getElementById('strike2');
const strike3 = document.getElementById('strike3');
const xbox = document.getElementById('xbox');

const team1card = document.getElementById('team1card');
const team2card = document.getElementById('team2card');

const audioCorrect = document.getElementById('correctAudio');
const audioIncorrect = document.getElementById('incorrectAudio');
const audioSwitch = document.getElementById('audioSwitch');
const newQuestionAudio = document.getElementById('newQuestionAudio');

const showAnswersEl = document.getElementById('showAnswers'); //points to the show answers button in the DOM

let strikeTotal = 0; //keeps track of how many strikes the active team has
let questionIndex = 0; //indicates which question we are on
let whichTeam = 1;

function removeStrikes() { //Removes strike for new turn
    xbox.style.display = 'none';
    strike1.style.display = 'none';
    strike2.style.display = 'none';
    strike3.style.display = 'none';
    strikeTotal = 0;
}

function clearCard() {
    questionBox.innerHTML = '';
    answerbtn1.classList.remove('btn-light');
    answerbtn2.classList.remove('btn-light');
    answerbtn3.classList.remove('btn-light');
    answerbtn4.classList.remove('btn-light');
    answerbtn5.classList.remove('btn-light');
    answerbtn6.classList.remove('btn-light');

    answerbtn1.innerHTML = '1';
    answerbtn2.innerHTML = '2';
    answerbtn3.innerHTML = '3';
    answerbtn4.innerHTML = '4';
    answerbtn5.innerHTML = '5';
    answerbtn6.innerHTML = '6';

}

function nextQuestion() {
    removeStrikes();
    clearCard();
    currentQuestion = cardData[questionIndex];
    questionBox.innerHTML = currentQuestion.phrase;
    newQuestion();
    team1card.style.backgroundColor = 'white';
    team2card.style.backgroundColor = 'white';


    questionIndex++;
}



function answer1() {
    console.log('answer1 is clicked')

    answerbtn1.classList.add('btn-light');
    answerbtn1.innerHTML = currentQuestion.answers[0].answer;
    playCorrect();


}

function answer2() {
    console.log('answer2 is clicked')

    answerbtn2.classList.add('btn-light');
    answerbtn2.innerHTML = currentQuestion.answers[1].answer;
    playCorrect();

}

function answer3() {
    console.log('answer3 is clicked')

    answerbtn3.classList.add('btn-light');
    answerbtn3.innerHTML = currentQuestion.answers[2].answer;
    playCorrect();

}

function answer4() {
    console.log('answer4 is clicked')

    answerbtn4.classList.add('btn-light');
    answerbtn4.innerHTML = currentQuestion.answers[3].answer;
    playCorrect();

}

function answer5() {
    console.log('answer5 is clicked')

    answerbtn5.classList.add('btn-light');
    answerbtn5.innerHTML = currentQuestion.answers[4].answer;
    playCorrect();

}
function answer6() {
    console.log('answer6 is clicked')

    answerbtn6.classList.add('btn-light');
    answerbtn6.innerHTML = currentQuestion.answers[5].answer;
    playCorrect();

}
function strikeone() {
    strike1.style.display = 'flex';

}
function striketwo() {
    strike2.style.display = 'flex';

}
function strikethree() {
    strike3.style.display = 'flex';

}

function strike() {

    if (strikeTotal == 0) {
        strike1.style.display = 'block';
        xbox.style.display = 'block';
        playIncorrect();

        strikeTotal++;
    } else if (strikeTotal == 1) {
        strike2.style.display = 'block';
        strikeTotal++;
        playIncorrect();
    } else if (strikeTotal == 2) {
        strike3.style.display = 'block';
        strikeTotal++;
        playIncorrect();
    }
}

function team1active(){
    team1card.style.backgroundColor = 'greenyellow';
    team2card.style.backgroundColor = 'white';
    console.log("team 1 is active");
    switchTeamAudio();
    whichTeam = 1;

}

function team2active(){
    team1card.style.backgroundColor = 'white';
    team2card.style.backgroundColor = 'greenyellow';
    console.log("team 2 is active");
    switchTeamAudio();
    whichTeam = 2;
}

//Audio
function playCorrect() {
    audioCorrect.play();
}

function playIncorrect() {
    audioIncorrect.play();
}

function switchTeamAudio() {
    audioSwitch.play();
}

function newQuestion(){
    newQuestionAudio.play();
}


function showAnswers(){
    answerbtn1.classList.add('btn-light');
    answerbtn1.innerHTML = currentQuestion.answers[0].answer;
    answerbtn2.classList.add('btn-light');
    answerbtn2.innerHTML = currentQuestion.answers[1].answer;
    answerbtn3.classList.add('btn-light');
    answerbtn3.innerHTML = currentQuestion.answers[2].answer;
    answerbtn4.classList.add('btn-light');
    answerbtn4.innerHTML = currentQuestion.answers[3].answer;
    answerbtn5.classList.add('btn-light');
    answerbtn5.innerHTML = currentQuestion.answers[4].answer;
    answerbtn6.classList.add('btn-light');
    answerbtn6.innerHTML = currentQuestion.answers[5].answer;
    playCorrect();
}


answerbtn1.addEventListener('click', answer1);
answerbtn2.addEventListener('click', answer2);
answerbtn3.addEventListener('click', answer3);
answerbtn4.addEventListener('click', answer4);
answerbtn5.addEventListener('click', answer5);
answerbtn6.addEventListener('click', answer6);

strike1.addEventListener('click', strikeone);
strike2.addEventListener('click', striketwo);
strike3.addEventListener('click', strikethree);
strikeBtn.addEventListener('click', strike);

questionBox.addEventListener('click', nextQuestion);

team1card.addEventListener('click', team1active);
team2card.addEventListener('click', team2active);

showAnswersEl.addEventListener('click', showAnswers)



