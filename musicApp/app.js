window.addEventListener('load', () => {

  ////////////////////////
  //                GLOBAL
  ////////////////////////

  const noteC = document.getElementById('noteC');
  const noteE = document.getElementById('noteE');
  const noteG = document.getElementById('noteG');

  const hiHat = document.getElementById('hiHat');
  const kick = document.getElementById('kick');
  const snare = document.getElementById('snare');

  ////////////////////////
  //      Ripple Functions
  ////////////////////////

  const squares = document.querySelectorAll('.square');
  let squaresArray = Array.from(squares);
  const ripple = document.querySelector('.ripple')

  squares.forEach(square => {
    square.addEventListener('click', e => {
      const ripples = document.createElement('div');
      ripple.appendChild(ripples);
      ripples.style.animation = 'jump 1.5s ease';
      ripples.addEventListener('animationend', function(){
        ripple.removeChild(ripples);
      });
    });
  });

  ////////////////////////
  //   Piano Row Functions
  ////////////////////////

  noteC.onclick = function() {
    const audioC = new Audio('./sounds/noteC.wav')
    audioC.play();
  }

  noteE.onclick = function() {
    const audioE = new Audio('./sounds/noteE.wav')
    audioE.play();
  }

  noteG.onclick = function() {
    const audioG = new Audio('./sounds/noteG.wav')
    audioG.play();
  }


  ////////////////////////
  //    Drum Row Functions
  ////////////////////////

  hiHat.onclick = function() {
    const hiHat = new Audio('./sounds/hiHat.wav')
    hiHat.play();
  }

  kick.onclick = function() {
    const kick = new Audio('./sounds/kick.wav')
    kick.play();
  }

  snare.onclick = function() {
    const snare = new Audio('./sounds/snare.wav')
    snare.play();
  }

});