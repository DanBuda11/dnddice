import '../css/main.css';
import { registerSW } from 'virtual:pwa-register';

registerSW({
  immediate: true,
});

const plusBtns = document.querySelectorAll('.plus-btn');
const multiRollSection = document.getElementById('multi-rolls');
const clearBtn = document.getElementById('clear-btn');
const totalDisplay = document.getElementById('total');
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

function updateRollButton() {
  rollBtnAmt.textContent = `${dieCounter}d${currentDie}`;
}

function disableControls() {
  plusBtns.forEach((btn) => {
    btn.disabled = true;
  });

  rollBtn.disabled = true;
}

function enableControls() {
  plusBtns.forEach((btn) => {
    btn.disabled = false;
  });

  rollBtn.disabled = false;
}

plusBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // if currentDie is already equal to the die of the plusBtn clicked, then add 1 to the dieCounter
    // if currentDie isn't equal to the die plusBtn, change currentDie to this die & set counter to 1
    const die = Number(e.target.dataset.number);

    if (currentDie === die) {
      dieCounter += 1;
    } else {
      dieCounter = 1;
      currentDie = die;
    }

    updateRollButton();
    rollBtnDefault.textContent = '';
  });
});

clearBtn.addEventListener('click', () => {
  dieCounter = 1;
  currentDie = 20;
  updateRollButton();
});

// function to make the roll(s). x is the value of dieCounter and y is the value of currentDie
function rollDie(dieCount, dieSides) {
  console.log(dieCount, dieSides);
  totalDisplay.classList.remove('nat-twenty');
  totalDisplay.classList.remove('nat-one');
  totalDisplay.textContent = '';

  // const rollCounter = 0;
  // Empty the multi roll section contents if any
  multiRollSection.textContent = '';
  // Start the rolled die image spinning
  const dieImage = document.querySelector(
    `.plus-btn[data-number="${dieSides}"]`,
  ).nextElementSibling;

  dieImage.classList.add('rotating');

  // Remove "default" from roll button until roll over
  rollBtnDefault.textContent = '';
  // Disable buttons while roll is going on
  disableControls();

  // Stop the rolled die image spinning after a set time
  setTimeout(() => {
    dieImage.classList.remove('rotating');
    enableControls();
  }, rollTime);

  // Actual rolling
  for (let i = 0; i < dieCount; i += 1) {
    const roll = Math.ceil(Math.random() * dieSides);
    multiRoll.push(roll);
    rollSum += roll;
  }

  // show finals after rollTime amount of time
  setTimeout(() => {
    if (dieCount > 1) {
      multiRollSection.textContent = multiRoll.join(' + ');
    }

    if (dieSides === 20 && dieCount === 1) {
      if (rollSum === 20) {
        totalDisplay.classList.add('nat-twenty');
      }
      if (rollSum === 1) {
        totalDisplay.classList.add('nat-one');
      }
    }

    totalDisplay.textContent = rollSum;
  }, rollTime);

  // -----------------------------------------------------------------------------
  // Future enhancement:
  //
  // Reveal each die roll progressively during the roll animation instead of
  // displaying all rolls at once. The code below was an earlier experiment toward
  // that feature. Leaving it here as a reference until the rest of the app is
  // refactored and the rolling logic is separated from the UI.
  // -----------------------------------------------------------------------------
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
  //       multiRollSection.textContent = multiRoll.join(' + ');
  //     }

  //     total.textContent = rollSum;
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
    updateRollButton();
    rollBtnDefault.textContent = 'DEFAULT';
    // rollCounter = 0;
  }, rollTime);
}

rollBtn.addEventListener('click', () => {
  rollDie(dieCounter, currentDie);
  reset();
});
