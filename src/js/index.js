// const dieCards = document.querySelectorAll('.die-card');
// const dieImgs = document.querySelectorAll('.die-img');
const plusBtns = document.querySelectorAll('.plus-btn');
const multiRollSection = document.getElementById('multi-rolls');
const clearBtn = document.getElementById('clear-btn');
const total = document.getElementById('total');
const rollBtn = document.getElementById('roll-btn');
const rollBtnAmt = document.getElementById('roll-btn-amt');
const rollBtnDefault = document.getElementById('default');

const rollTime = 1000;
let dieCounter = 1;
let currentDie = 20;
let multiRoll = [];
let rollSum = 0;
// Used inside the roll function setInterval to tell when the final die of a roll has been rolled
// let rollCounter = 0;

plusBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // if currentDie is already equal to the die of the plusBtn clicked, then add 1 to the dieCounter
    // if currentDie isn't equal to the die plusBtn, change currentDie to this die & set counter to 1
    if (currentDie === parseInt(e.target.dataset.number, 10) || currentDie === e.target.dataset.number) {
      dieCounter += 1;
    } else {
      dieCounter = 1;
      currentDie = e.target.dataset.number;
    }

    rollBtnAmt.innerText = `${dieCounter}d${currentDie}`;
    rollBtnDefault.innerText = '';
  });
});

clearBtn.addEventListener('click', () => {
  dieCounter = 1;
  currentDie = 20;
  rollBtnAmt.innerText = `${dieCounter}d${currentDie}`;
});

// function to make the roll(s). x is the value of dieCounter and y is the value of currentDie
function rollDie(x, y) {
  console.log(x, y);
  total.classList.remove('nat-twenty');
  total.classList.remove('nat-one');
  total.innerText = '';

  // const rollCounter = 0;
  // Empty the multi roll section contents if any
  multiRollSection.innerText = '';
  // Start the rolled die image spinning
  document.querySelector(`.plus-btn[data-number="${y}"]`).nextElementSibling.classList.add('rotating');
  // Remove "default" from roll button until roll over
  rollBtnDefault.innerText = '';
  // Disable buttons while roll is going on
  plusBtns.forEach((btn) => {
    btn.setAttribute('disabled', 'disabled');
  });
  rollBtn.setAttribute('disabled', 'disabled');

  // Stop the rolled die image spinning after a set time
  setTimeout(() => {
    document.querySelector(`.plus-btn[data-number="${y}"]`).nextElementSibling.classList.remove('rotating');
    plusBtns.forEach((btn) => {
      btn.removeAttribute('disabled');
    });
    rollBtn.removeAttribute('disabled');
  }, rollTime);

  // Actual rolling
  for (let i = 0; i < x; i += 1) {
    const roll = Math.ceil(Math.random() * y);
    multiRoll.push(roll);
    rollSum += roll;
  }

  // show finals after rollTime amount of time
  setTimeout(() => {
    if (x > 1) {
      multiRollSection.innerText = multiRoll.join(' + ');
    }

    if (y === 20 && x === 1) {
      if (rollSum === 20) {
        total.classList.add('nat-twenty');
      }
      if (rollSum === 1) {
        total.classList.add('nat-one');
      }
    }

    total.innerText = rollSum;
  }, rollTime);

  // Set up a setInterval to show total sum at end of rotating animation (both at same time)
  // and to show the multi rolls individually as each is rolled split evenly within the
  // setInterval total time
  // x will be used inside this as it is the # of die rolls
  // const interval = setInterval(() => {
  //   // console.log('rollCounter before +=', rollCounter);
  //   // rollCounter += 1;
  //   // console.log('rollCounter after +=', rollCounter);
  //   if (rollCounter === x) {
  //     // This is when all die have been rolled
  //     console.log('rolls done!');

  //     // show stuff if a multi-die roll
  //     if (x > 1) {
  //       multiRollSection.innerText = multiRoll.join(' + ');
  //     }

  //     total.innerText = rollSum;
  //     clearInterval(interval);
  //   } else {
  //     rollCounter += 1;
  //     console.log(rollCounter);
  //     // Put the roll stuff in here and since it's a setInterval I don't need the for loop I don't think
  //     const roll = Math.ceil(Math.random() * y);
  //     console.log('roll: ', roll);
  //     multiRoll.push(roll);
  //     console.log('multiRoll: ', multiRoll);
  //     rollSum += roll;
  //     console.log('rollSum: ', rollSum);
  //     console.log('still rolling!');
  //   }
  // }, rollTime);

  // is this rolling a single die (dieCounter = 1)? or a multi die roll?
  // differences between single and multi roll?
  // only single roll can be nat 1 or 20 for animation
  // only multi roll shows up in the multi roll div area

  // Actual dice rolling
  // roll each die based on amount of dieCounter(x) against die-sides (y)
  // add up total
  // if multi roll, show the separate die rolls in the multiRollSection
}

function reset() {
  setTimeout(() => {
    dieCounter = 1;
    currentDie = 20;
    multiRoll = [];
    rollSum = 0;
    rollBtnAmt.innerText = `${dieCounter}d${currentDie}`;
    rollBtnDefault.innerText = 'DEFAULT';
    // rollCounter = 0;
  }, rollTime);
}

rollBtn.addEventListener('click', () => {
  rollDie(dieCounter, currentDie);
  reset();
});
