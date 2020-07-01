const img = document.querySelector('.test-btn-img');
const plusBtn = document.querySelector('.test-btn-num');
const rollBtn = document.querySelector('.test-btn-roll');
const outputEach = document.querySelector('.test-btn-output-each');
const outputTotal = document.querySelector('.test-btn-output-total');
let counterB = 1;

plusBtn.addEventListener('click', () => {
  // increase counter and make counter value the innerHTML of rollBtn
  counterB++;
  rollBtn.innerHTML = counterB.toString();
});

rollBtn.addEventListener('click', () => {
  let sumB = 0;
  let outputString = [];
  for (i = 1; i <= counterB; i++) {
    const numB = Math.ceil(Math.random() * parseInt(rollBtn.dataset.number));
    if (i < counterB) {
      outputString.push(`${numB} +`);
    } else {
      outputString.push(`${numB}`);
    }
    outputEach.innerHTML = outputString.join(' ');
    sumB += numB;
  }
  outputTotal.innerHTML = sumB;

  counterB = 1;
  rollBtn.innerHTML = counterB.toString();

});