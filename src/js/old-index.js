const plusBtns = document.querySelectorAll('.die-plus');
const numBtns = document.querySelectorAll('.die-num');
const rollBtns = document.querySelectorAll('.die-roll');
const eachRoll = document.getElementById('each-roll');
const totalRoll = document.getElementById('total-roll');

function rollDice(x) {
  const thisDie = document.querySelector(`.die-roll[data-number="${x}"]`);
  const thisNum = document.querySelector(`.die-num[data-number="${x}"]`);
  document.querySelector(`.die-img[data-number="${x}"]`).classList.add('rotating');

  plusBtns.forEach((btn) => {
    btn.setAttribute('disabled', 'disabled');
  });
  rollBtns.forEach((btn) => {
    btn.setAttribute('disabled', 'disabled');
  });

  setTimeout(() => {
    document.querySelector(`.die-img[data-number="${x}"`).classList.remove('rotating');
  }, 600);
  const rolls = [];
  let sum = 0;
  let rollCounter = 0;
  const datasetCounter = parseInt(thisDie.dataset.counter);
  // console.log('datasetCounter = ', datasetCounter);

  // console.log('thisDie.dataset.counter = ', parseInt(thisDie.dataset.counter));

  const interval = setInterval(() => {
    // console.log('datasetCounter = ', datasetCounter);

    rollCounter += 1;
    if (rollCounter === datasetCounter) {
      console.log('datasetCounter = ', datasetCounter);
      console.log('rollCounter = ', rollCounter);

      console.log('rollCounter === dataset.counter');
      if (x === '20' && datasetCounter === 1 && sum === 20) {
        totalRoll.classList.add('nat-twenty');
        setTimeout(() => {
          totalRoll.classList.remove('nat-twenty');
        }, 1000);
      }

      plusBtns.forEach((die) => {
        die.removeAttribute('disabled');
      });
      rollBtns.forEach((die) => {
        die.removeAttribute('disabled');
      });
      clearInterval(interval);
    } else {
      console.log('rollCounter = ', rollCounter);
      console.log('rollCounter < dataset.counter');
    }
  }, 100);

  for (let i = 1; i <= thisDie.dataset.counter; i++) {
    const roll = Math.ceil(Math.random() * parseInt(x));
    rolls.push(`${roll} +`);
    sum += roll;
  }
  eachRoll.innerHTML = rolls.join(' ');
  totalRoll.innerHTML = sum;
  thisDie.dataset.counter = 1;
  numBtns.forEach((btn) => {
    btn.innerHTML = `1d${btn.dataset.number}`;
  });
}

rollBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    rollDice(e.target.dataset.number);
  });
});

plusBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const rollBtn = document.querySelector(`.die-roll[data-number="${btn.dataset.number}"]`);

    rollBtn.dataset.counter = Number(rollBtn.dataset.counter) + 1;
    console.log(rollBtn.dataset.counter);

    // btn.nextElementSibling.dataset.counter = Number(btn.nextElementSibling.dataset.counter) + 1;
    // console.log(btn.nextElementSibling.dataset.counter);
    // dieCounter++;
    btn.nextElementSibling.innerHTML = `${rollBtn.dataset.counter.toString()}d${btn.dataset.number}`;
  });
});
