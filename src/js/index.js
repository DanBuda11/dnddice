// const dieCards = document.querySelectorAll('.die-card');
const dieImgs = document.querySelectorAll('.die-img');
const plusBtns = document.querySelectorAll('.plus-btn');
const multiRollSection = document.getElementById('multi-rolls');
const clearBtn = document.getElementById('clear-btn');
const total = document.getElementById('total');
const rollBtn = document.getElementById('roll-btn');
const rollBtnAmt = document.getElementById('roll-btn-amt');

let dieCounter = 1;
let currentDie = 20;
const multiRoll = [];

plusBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(`${e.target.dataset.number}=${currentDie}`);
    // if currentDie is already equal to the die of the plusBtn clicked, then add 1 to the dieCounter
    // if currentDie isn't equal to the die plusBtn, change currentDie to this die & set counter to 1
    if (currentDie === parseInt(e.target.dataset.number) || currentDie === e.target.dataset.number) {
      dieCounter++;
    } else {
      dieCounter = 1;
      currentDie = e.target.dataset.number;
    }
    console.log(`${dieCounter} dieCounter`);
    console.log(`${currentDie} currentDie`);
    rollBtnAmt.innerText = `${dieCounter}d${currentDie}`;
  });
});

clearBtn.addEventListener('click', (e) => {
  dieCounter = 1;
  currentDie = 20;
  rollBtnAmt.innerText = `${dieCounter}d${currentDie}`;
});

// function to make the roll(s). x is the value of dieCounter and y is the value of currentDie
function rollDie(x, y) {
  // is this rolling a single die (dieCounter = 1)? or a multi die roll?
  if (x === 1) {
    // this is a single die roll
  } else {
    // this is a multi die roll
  }
}

rollBtn.addEventListener('click', (e) => {
  console.log('roll clicked');
  rollDie(dieCounter, currentDie);
  dieCounter = 1;
  currentDie = 20;
  rollBtnAmt.innerText = `${dieCounter}d${currentDie}`;
});
