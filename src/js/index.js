const plusBtns = document.querySelectorAll('.die-plus');
const rollBtns = document.querySelectorAll('.die-roll');
const eachRoll = document.getElementById('each-roll');
const totalRoll = document.getElementById('total-roll')
let dieCounter = 1

rollBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    rollDice(e.target.parentNode.dataset.number);
    btn.innerHTML = '1'
  })
})

plusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    dieCounter++
    btn.nextElementSibling.innerHTML = dieCounter.toString()
  })
})

function rollDice(x) {
  // console.log(`This die has ${x} sides.`);
  let rolls = []
  let sum = 0
  for (i = 1; i <= dieCounter; i++) {
    let roll = Math.ceil(Math.random() * parseInt(x))
    rolls.push(`${roll} +`)
    sum += roll
  }
  eachRoll.innerHTML = rolls.join(' ')
  totalRoll.innerHTML = sum
  dieCounter = 1
}