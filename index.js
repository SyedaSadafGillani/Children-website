


function startAdventure() {
    alert('🚀 Adventure starting! Ready to learn and have fun?');
}

const info_btn=document.querySelector("info_btn");

function showParentInfo()
{
const list=document.querySelector("#parent_info");
if(list.style.display==none){
list.style.display=block;}

}


info_btn.addEventListener('click',showParentInfo());



function checkAnswer(answer) 
{
    const correctAnswer = 8;
    const feedback = document.getElementById('gameFeedback');
    const buttons = document.querySelectorAll('.game-btn');
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (parseInt(btn.textContent) === correctAnswer) {
            btn.style.background = '#4ecdc4';
        }
    });
    
    if (answer === correctAnswer) {
        feedback.textContent = '🎉 Correct! You\'re a math superstar!';
        feedback.style.color = '#4ecdc4';
    } else {
        feedback.textContent = '😅 Almost! Try again next time!';
        feedback.style.color = '#ff6b6b';
        event.target.style.background = '#ff6b6b';
    }
    
    setTimeout(() => {
        generateNewQuestion();
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.style.background = 'white';
        });
        feedback.textContent = 'Can you solve it?';
        feedback.style.color = '#333';
    }, 3000);
}

function generateNewQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const question = document.getElementById('mathQuestion');
    question.textContent = `${num1} + ${num2} = ?`;
    
    question.dataset.answer = num1 + num2;
    
    const buttons = document.querySelectorAll('.game-btn');
    const correctIndex = Math.floor(Math.random() * 3);
    const usedNumbers = new Set();
    
    buttons.forEach((btn, index) => {
        if (index === correctIndex) {
            btn.textContent = num1 + num2;
        } else {
            let randomAnswer;
            do {
                randomAnswer = Math.floor(Math.random() * 19) + 1; 
            } while (randomAnswer === num1 + num2 || usedNumbers.has(randomAnswer));
            
            usedNumbers.add(randomAnswer);
            btn.textContent = randomAnswer;
        }
    });
}



