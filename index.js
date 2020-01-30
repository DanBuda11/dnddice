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

// Probably need to disable all dice/buttons while this is running then enable once roll is complete
// function rollDie(x) { 
//     window.setInterval(() => {
//       const number = Math.ceil(Math.random() * x);
//       roll.innerHTML = number;}, 500)
   
// }

// function rollDie(x) {
//   for (i = 0; i < 7; i++) {
//     window.setTimeout(() => {
//       let number = Math.ceil(Math.random() * x);
//       roll.innerHTML = number;
//     }, 500)
//   }
// }

function rollDie(x) {
  let counter = 0;
  let interval = setInterval(() => {
    roll.style.color = 'lightblue';
    counter+= 1;
    if(counter === 6) {
      let number = Math.ceil(Math.random() * x);
      roll.innerHtml = number;
      roll.style.color = 'black';
      clearInterval(interval);
    }
    let number = Math.ceil(Math.random() * x);
    roll.innerHTML = number;
  }, 200);
}