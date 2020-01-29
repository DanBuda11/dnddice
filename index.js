const four = document.getElementById('four');
const six = document.getElementById('six');
const eight = document.getElementById('eight');
const ten = document.getElementById('ten');
const twelve = document.getElementById('twelve');
const twenty = document.getElementById('twenty');
const hundred = document.getElementById('hundred');
const roll = document.getElementById('roll');

four.addEventListener('click', () => {
  rollDie(4);
});
six.addEventListener('click', () => {
  rollDie(6);
});
eight.addEventListener('click', () => {
  rollDie(8);
});
ten.addEventListener('click', () => {
  rollDie(10);
});
twelve.addEventListener('click', () => {
  rollDie(12);
});
twenty.addEventListener('click', () => {
  rollDie(20);
});
hundred.addEventListener('click', () => {
  rollDie(100);
});

function rollDie(x) {
  const number = Math.ceil(Math.random() * x);
  roll.innerHTML = number;
}