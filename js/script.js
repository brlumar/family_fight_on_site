const answerbtn1 = document.getElementById('answerbtn1');
const answerbtn2 = document.getElementById('answerbtn2');
const answerbtn3 = document.getElementById('answerbtn3');
const answerbtn4 = document.getElementById('answerbtn4');
const answerbtn5 = document.getElementById('answerbtn5');
const answerbtn6 = document.getElementById('answerbtn6');

const strikeBtn = document.getElementById('strikeBtn');
const strike1 = document.getElementById('strike1');
const strike2 = document.getElementById('strike2');
const strike3 = document.getElementById('strike3');
const xbox = document.getElementById('xbox');


let strikeTotal = 0;




function answer1() {
    console.log('answer1 is clicked')

    answerbtn1.classList.add('btn-light');
}

function answer2() {
    console.log('answer2 is clicked')

    answerbtn2.classList.add('btn-light');
}

function answer3() {
    console.log('answer3 is clicked')

    answerbtn3.classList.add('btn-light');
}

function answer4() {
    console.log('answer4 is clicked')

    answerbtn4.classList.add('btn-light');
}

function answer5() {
    console.log('answer5 is clicked')

    answerbtn5.classList.add('btn-light');
}
function answer6() {
    console.log('answer6 is clicked')

    answerbtn6.classList.add('btn-light');
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

        strikeTotal++;
    }else if(strikeTotal==1){
        strike2.style.display = 'block';
        strikeTotal++;
    }else if(strikeTotal==2){
        strike3.style.display = 'block';
        strikeTotal++;
    }
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

