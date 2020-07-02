// const four = document.getElementById('four');
// const six = document.getElementById('six');
// const eight = document.getElementById('eight');
// const ten = document.getElementById('ten');
// const twelve = document.getElementById('twelve');
// const twenty = document.getElementById('twenty');
// const hundred = document.getElementById('hundred');
const roll = document.getElementById('roll');

const dice = document.querySelectorAll('.die');
dice.forEach(die => {
  die.addEventListener('click', () => {
    rollDie(die.dataset.number)}
    )
});

let counter = 0;

// Roll a single die
function rollDie(x) {
  document.querySelector(`.die[data-number="${x}"`).classList.add('rotating');
  dice.forEach(die => {
    die.setAttribute('disabled', 'disabled');
  })
  setTimeout(() => {
    document.querySelector(`.die[data-number="${x}"`).classList.remove('rotating');
  }, 600);
  let number;
  let counter = 0;
  let interval = setInterval(() => {
    roll.style.color = 'lightblue';
    counter+= 1;
    if(counter === 6) {
      number = Math.ceil(Math.random() * parseInt(x));
      // Set number = 20 when testing nat20 animation
      // number = 20;
      roll.innerHTML = number;
      roll.style.color = 'white';
      if (x === '20' && number === 20) {
        roll.classList.add('nat-twenty');
        setTimeout(() => {
          roll.classList.remove('nat-twenty');
        }, 1000);
      }
      dice.forEach(die => {
        die.removeAttribute('disabled');
      })
      clearInterval(interval);
    } else {
      number = Math.ceil(Math.random() * parseInt(x));
      roll.innerHTML = number;
    }
  }, 100);
}

// Roll multiple of the same die
function rollDice() {

}

// Tap/click the ROLL button to start rolling


// Tap/click the CLEAR button to remove any already tapped-on die