const input = document.getElementById('input');
const btn = document.getElementById('btn');
const items = document.getElementById('items');
const dialougeBox = document.getElementById('dialougeBox');
const okBtn = document.getElementById('okBtn');

btn.addEventListener('click', function() {
  if(input.value == '') {
    dialougeBox.classList.remove('dialougeBoxHidden');
    dialougeBox.classList.add('dialougeBoxVisible');
    return;
  }

  let newItem = document.createElement('p');
      newItem.textContent = input.value;
      items.appendChild(newItem);
      newItem.classList.add('newItem');
      input.value = '';

  newItem.addEventListener('click', function() {
    items.removeChild(newItem);
  })
    
})

okBtn.addEventListener('click', function() {
  dialougeBox.classList.add('dialougeBoxHidden');
  dialougeBox.classList.remove('dialougeBoxVisible');
})