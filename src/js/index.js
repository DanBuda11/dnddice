const plusBtns = document.querySelectorAll('.die-plus');
const rollBtns = document.querySelectorAll('.die-roll');
const eachRoll = document.getElementById('each-roll');
const totalRoll = document.getElementById('total-roll');
// dieCounter needs to be connected to the individual die or it will roll that number of dice for any die that is rolled - if dieCounter is 3 because you hit plus on d4 twice, it will still roll 3 dice if you roll a d20 but its counter only shows a 1 - this should be working properly now
// let dieCounter = 1;

rollBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    rollDice(e.target.parentNode.dataset.number);
    btn.innerHTML = '1';
  });
});

plusBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.dataset.counter = Number(btn.nextElementSibling.dataset.counter) + 1;
    console.log(btn.nextElementSibling.dataset.counter);
    // dieCounter++;
    btn.nextElementSibling.innerHTML = btn.nextElementSibling.dataset.counter.toString();
  });
});

function rollDice(x) {
  // console.log(`This die has ${x} sides.`);
  const thisDie = document.querySelector(`.die-roll[data-number="${x}"]`);
  console.log(thisDie);
  const rolls = [];
  let sum = 0;
  for (i = 1; i <= thisDie.dataset.counter; i++) {
    const roll = Math.ceil(Math.random() * parseInt(x));
    rolls.push(`${roll} +`);
    sum += roll;
  }
  eachRoll.innerHTML = rolls.join(' ');
  totalRoll.innerHTML = sum;
  thisDie.dataset.counter = 1;
}
