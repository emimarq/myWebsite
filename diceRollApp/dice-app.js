const die1 = Math.floor(Math.random() * 6 ) + 1;
const die2 = Math.floor(Math.random() * 6 ) + 1;
const sum = `You rolled and got ${die1 + die2}!`;
const btn = document.getElementById('btn');
const die1Image = document.createElement('img');
const die2Image = document.createElement('img');

const die1Result = document.querySelector('.die1');
const die2Result = document.querySelector('.die2');

const dieImages = [
  '',
  '../images/die1.png',
  '../images/die2.png',
  '../images/die3.png',
  '../images/die4.png',
  '../images/die5.png',
  '../images/die6.png'
]


btn.onclick = function() {
  clicked = true;
  die1Image.setAttribute('src', dieImages[die1]);
  die2Image.setAttribute('src', dieImages[die2]);
  die1Result.appendChild(die1Image);
  die2Result.appendChild(die2Image);
  console.log(`${die1} ${die2}`)
  

  btn.style.display = 'none';

  setTimeout( () => {
    
  }, "300")

  setTimeout( () => {
    window.location.reload();
  }, "2000")
}

console.log(dieImages);