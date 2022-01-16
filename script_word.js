const text = document.querySelector('#text') ;
const word = document.querySelector('#word') ;
const message = document.querySelector('#message') ;
const scoreEl = document.querySelector('#score') ;
const endgameEl = document.getElementById('end-game-backcover');

const words = [
    ['abandon','ละทิ้ง'],
    ['ability','ความสามารถ'],
    ['approach','การเข้าสู่'],
    ['advise','ให้คำปรึกษา'],
    ['damage','ความเสียหาย'],
    ['explosion','การระเบิด'],
    ['geology','ธรณีวิทยา'],
    ['incident','เหตุการณ์'],
    ['perform','กระทำ'],
    ['precise','ถูกต้องแม่นยำ'],
    ['strike','ต่อต้าน']
] ;
let randomWord ;
let score = 0;
let highscore = localStorage.getItem('highscore') | 0;

function getRandomWord() {
    return words[Math.floor(Math.random() *words.length)] ;
}
function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord[0];
}

function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}
//เริ่มใหม่
function gameOver() {
    if (score > highscore) {
      localStorage.setItem('highscore', score);
    }
    endgameEl.innerHTML = `
      <h1> Don't give up 💪 </h1>
      <h3>High Score: ${localStorage.getItem('highscore')}</h3>
      <h3>Your final score is ${score}</h3>
      <p><button onclick="location.reload()">Reload</button></p>
    `;
  
    endgameEl.style.display = 'flex';
}
addWordToDOM();
// Typing
text.addEventListener('input', e => {const insertedText = e.target.value;
    matchWords() ;
  if (insertedText === (randomWord[1]) ) {
    addWordToDOM();
    updateScore();
    e.target.value = '';
    }
})
function matchWords(){
    if( text.value === randomWord[1] ){
        message.innerHTML = '[ Great 👍 ]';
        return true;
    }else{
        message.innerHTML = '[ Keep trying ✌️ ]';
        return false;
    }
}
