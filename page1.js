const addItemBtn = document.getElementById('additembtn'); // Corrected button ID
const itemList = document.querySelector('.items'); 

addItemBtn.addEventListener('click', addItem);

function addItem() {
  const newItem = document.createElement('div');
  newItem.classList.add('item'); 

  const button = document.createElement('button');
  
  button.innerHTML = '<input type="checkbox"></input> <i class="fa fa-home"></i> examples';

  newItem.appendChild(button);
  

  itemList.appendChild(newItem);
}