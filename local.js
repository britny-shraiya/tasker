// document.addEventListener('DOMContentLoaded', () => {
//     loadItemsFromLocalStorage(); 
//   });
  
//   const addItemBtn = document.getElementById('additembtn');
//   const itemList = document.querySelector('.items');
//   const dialog = document.getElementById('dialog');
//   const submitBtn = document.getElementById('submitBtn');
//   const cancelBtn = document.getElementById('cancelBtn');
  
//   addItemBtn.addEventListener('click', () => {
//     dialog.style.display = 'block';
//   });
  
//   submitBtn.addEventListener('click', () => {
//     const itemName = document.getElementById('itemName').value;
//     const itemCategory = document.getElementById('itemCategory').value;
  
//     addItem(itemName, itemCategory);
//     saveItemToLocalStorage(itemName, itemCategory);

//     dialog.style.display = 'none';
//     document.getElementById('itemName').value = '';
//     document.getElementById('itemCategory').value = '';
//   });
  
  
//   cancelBtn.addEventListener('click', () => {
//     dialog.style.display = 'none';
//     document.getElementById('itemName').value = '';
//     document.getElementById('itemCategory').value = '';
//   });
  
  
//   function addItem(name, category) {
//     const newItem = document.createElement('div');
//     newItem.classList.add('item');
  
//     const buttonContainer = document.createElement('div');
//     buttonContainer.classList.add('button-container');
 
    
  
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.classList.add('checkbox');
  
//     const text = document.createTextNode(` ${name} (${category}) `);
  
//     const iconContainer = document.createElement('div');
//     iconContainer.classList.add('icon-container');
  
//     const editIcon = document.createElement('i');
//     editIcon.classList.add('fas', 'fa-edit');
//     editIcon.style.cursor = 'pointer';
//     editIcon.addEventListener('click', () => editItem(newItem, name, category));
  
//     const deleteIcon = document.createElement('i');
//     deleteIcon.classList.add('fas', 'fa-trash-alt');
//     deleteIcon.style.cursor = 'pointer';
//     deleteIcon.addEventListener('click', () => {
//       newItem.remove();
//       removeItemFromLocalStorage(name, category);
//     });
  
//     iconContainer.appendChild(editIcon);
//     iconContainer.appendChild(deleteIcon);
  
//     buttonContainer.appendChild(checkbox);
//     buttonContainer.appendChild(text);
//     buttonContainer.appendChild(iconContainer);
  
//     newItem.appendChild(buttonContainer);
//     itemList.appendChild(newItem);
//   }
  
  
//   function editItem(item, name, category) {
//     const newName = prompt("Edit name:", name);
//     const newCategory = prompt("Edit category:", category);
  
//     if (newName !== null && newCategory !== null) {
//       item.querySelector('.button-container').childNodes[1].nodeValue = ` ${newName} (${newCategory}) `;
//       updateItemInLocalStorage(name, category, newName, newCategory);
//     }
//   }
  

//   function saveItemToLocalStorage(name, category) {
//     const items = JSON.parse(localStorage.getItem('items')) || [];
//     items.push({ name, category });
//     localStorage.setItem('items', JSON.stringify(items));
//   }
  
  
//   function loadItemsFromLocalStorage(nameFilter = '', categoryFilter = '') {
//     const items = JSON.parse(localStorage.getItem('items')) || [];
//     items.forEach(item => {
//       if ((nameFilter === '' || item.name === nameFilter) && (categoryFilter === '' || item.category === categoryFilter)) {
//         addItem(item.name, item.category);
//       }
//     });
//   }
  
  
//   function removeItemFromLocalStorage(name, category) {
//     let items = JSON.parse(localStorage.getItem('items')) || [];
//     items = items.filter(item => item.name !== name || item.category !== category);
//     localStorage.setItem('items', JSON.stringify(items));
//   }
  

//   function updateItemInLocalStorage(oldName, oldCategory, newName, newCategory) { 
//     let items = JSON.parse(localStorage.getItem('items')) || [];
//     const itemIndex = items.findIndex(item => item.name === oldName && item.category === oldCategory);
//     if (itemIndex > -1) {
//       items[itemIndex] = { name: newName, category: newCategory };
//       localStorage.setItem('items', JSON.stringify(items));
//     }
//   }
  
// document.addEventListener('DOMContentLoaded', () => {
//   loadItemsFromLocalStorage();
// });

// const addItemBtn = document.getElementById('additembtn');
// const itemList = document.querySelector('.items');
// const dialog = document.getElementById('dialog');
// const submitBtn = document.getElementById('submitBtn');
// const cancelBtn = document.getElementById('cancelBtn');

// addItemBtn.addEventListener('click', () => {
//   dialog.style.display = 'block';
// });

// submitBtn.addEventListener('click', () => {
//   const itemName = document.getElementById('itemName').value;
//   const itemCategory = document.getElementById('itemCategory').value;

//   addItem(itemName, itemCategory, false);
//   saveItemToLocalStorage(itemName, itemCategory, false);

//   dialog.style.display = 'none';
//   document.getElementById('itemName').value = '';
//   document.getElementById('itemCategory').value = '';
// });

// cancelBtn.addEventListener('click', () => {
//   dialog.style.display = 'none';
//   document.getElementById('itemName').value = '';
//   document.getElementById('itemCategory').value = '';
// });

// function addItem(name, category, done) {
//   const newItem = document.createElement('div');
//   newItem.classList.add('item');

//   const buttonContainer = document.createElement('div');
//   buttonContainer.classList.add('button-container');

//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.classList.add('checkbox');
//   checkbox.checked = done;
//   checkbox.addEventListener('change', () => {
//       toggleDone(name, category, checkbox.checked);
//       filterItems(currentFilter); // Re-filter items based on current filter selection
//   });

//   const text = document.createTextNode(` ${name} (${category}) `);

//   const iconContainer = document.createElement('div');
//   iconContainer.classList.add('icon-container');

//   const editIcon = document.createElement('i');
//   editIcon.classList.add('fas', 'fa-edit');
//   editIcon.style.cursor = 'pointer';
//   editIcon.addEventListener('click', () => editItem(newItem, name, category));

//   const deleteIcon = document.createElement('i');
//   deleteIcon.classList.add('fas', 'fa-trash-alt');
//   deleteIcon.style.cursor = 'pointer';
//   deleteIcon.addEventListener('click', () => {
//       newItem.remove();
//       removeItemFromLocalStorage(name, category);
//   });

//   iconContainer.appendChild(editIcon);
//   iconContainer.appendChild(deleteIcon);

//   buttonContainer.appendChild(checkbox);
//   buttonContainer.appendChild(text);
//   buttonContainer.appendChild(iconContainer);

//   newItem.appendChild(buttonContainer);
//   itemList.appendChild(newItem);
// }

// function editItem(item, name, category) {
//   const newName = prompt("Edit name:", name);
//   const newCategory = prompt("Edit category:", category);

//   if (newName !== null && newCategory !== null) {
//       item.querySelector('.button-container').childNodes[1].nodeValue = ` ${newName} (${newCategory}) `;
//       updateItemInLocalStorage(name, category, newName, newCategory);
//   }
// }

// function saveItemToLocalStorage(name, category, done) {
//   const items = JSON.parse(localStorage.getItem('items')) || [];
//   items.push({ name, category, done });
//   localStorage.setItem('items', JSON.stringify(items));
// }

// function loadItemsFromLocalStorage() {
//   const items = JSON.parse(localStorage.getItem('items')) || [];
//   items.forEach(item => addItem(item.name, item.category, item.done));
// }

// function removeItemFromLocalStorage(name, category) {
//   let items = JSON.parse(localStorage.getItem('items')) || [];
//   items = items.filter(item => item.name !== name || item.category !== category);
//   localStorage.setItem('items', JSON.stringify(items));
// }

// function updateItemInLocalStorage(oldName, oldCategory, newName, newCategory) {
//   let items = JSON.parse(localStorage.getItem('items')) || [];
//   const itemIndex = items.findIndex(item => item.name === oldName && item.category === oldCategory);
//   if (itemIndex > -1) {
//       items[itemIndex].name = newName;
//       items[itemIndex].category = newCategory;
//       localStorage.setItem('items', JSON.stringify(items));
//   }
// }

// function toggleDone(name, category, done) {
//   let items = JSON.parse(localStorage.getItem('items')) || [];
//   const itemIndex = items.findIndex(item => item.name === name && item.category === category);
//   if (itemIndex > -1) {
//       items[itemIndex].done = done;
//       localStorage.setItem('items', JSON.stringify(items));
//   }
// }

// let currentFilter = 'all';

// function filterItems(filter) {
//   currentFilter = filter;
//   const items = document.querySelectorAll('.item');
//   items.forEach(item => {
//       const checkbox = item.querySelector('.checkbox');
//       switch (filter) {
//           case 'done':
//               item.style.display = checkbox.checked ? 'block' : 'none';
//               break;
//           case 'not_done':
//               item.style.display = !checkbox.checked ? 'block' : 'none';
//               break;
//           default:
//               item.style.display = 'block';
//       }
//   });
// }

document.addEventListener('DOMContentLoaded', () => {
  loadItemsFromLocalStorage(); 
});

const addItemBtn = document.getElementById('additembtn');
const itemList = document.querySelector('.items');
const dialog = document.getElementById('dialog');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');

addItemBtn.addEventListener('click', () => {
  dialog.style.display = 'block';
});

submitBtn.addEventListener('click', () => {
  const itemName = document.getElementById('itemName').value;
  const itemCategory = document.getElementById('itemCategory').value;

  addItem(itemName, itemCategory);
  saveItemToLocalStorage(itemName, itemCategory);

  dialog.style.display = 'none';
  document.getElementById('itemName').value = '';
  document.getElementById('itemCategory').value = '';
});


cancelBtn.addEventListener('click', () => {
  dialog.style.display = 'none';
  document.getElementById('itemName').value = '';
  document.getElementById('itemCategory').value = '';
});


function addItem(name, category) {
  const newItem = document.createElement('div');
  newItem.classList.add('item');

  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');


  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox');

  const text = document.createTextNode(` ${name} (${category}) `);

  const iconContainer = document.createElement('div');
  iconContainer.classList.add('icon-container');

  const editIcon = document.createElement('i');
  editIcon.classList.add('fas', 'fa-edit');
  editIcon.style.cursor = 'pointer';
  editIcon.addEventListener('click', () => editItem(newItem, name, category));

  const deleteIcon = document.createElement('i');
  deleteIcon.classList.add('fas', 'fa-trash-alt');
  deleteIcon.style.cursor = 'pointer';
  deleteIcon.addEventListener('click', () => {
      newItem.remove();
      removeItemFromLocalStorage(name, category);
  });

  iconContainer.appendChild(editIcon);
  iconContainer.appendChild(deleteIcon);

  buttonContainer.appendChild(checkbox);
  buttonContainer.appendChild(text);
  buttonContainer.appendChild(iconContainer);

  newItem.appendChild(buttonContainer);
  itemList.appendChild(newItem);
}


function editItem(item, name, category) {
  const newName = prompt("Edit name:", name);
  const newCategory = prompt("Edit category:", category);

  if (newName !== null && newCategory !== null) {
      item.querySelector('.button-container').childNodes[1].nodeValue = ` ${newName} (${newCategory}) `;
      updateItemInLocalStorage(name, category, newName, newCategory);
  }
}

function saveItemToLocalStorage(name, category) {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  items.push({ name, category });
  localStorage.setItem('items', JSON.stringify(items));
}


function loadItemsFromLocalStorage(nameFilter = '', categoryFilter = '') {
  const items = JSON.parse(localStorage.getItem('items')) || [];
  items.forEach(item => {
      if ((nameFilter === '' || item.name === nameFilter) && (categoryFilter === '' || item.category === categoryFilter)) {
          addItem(item.name, item.category);
      }
  });
}


function removeItemFromLocalStorage(name, category) {
  let items = JSON.parse(localStorage.getItem('items')) || [];
  items = items.filter(item => item.name !== name || item.category !== category);
  localStorage.setItem('items', JSON.stringify(items));
}


function updateItemInLocalStorage(oldName, oldCategory, newName, newCategory) { 
  let items = JSON.parse(localStorage.getItem('items')) || [];
  const itemIndex = items.findIndex(item => item.name === oldName && item.category === oldCategory);
  if (itemIndex > -1) {
      items[itemIndex] = { name: newName, category: newCategory };
      localStorage.setItem('items', JSON.stringify(items));
  }
}

document.getElementById('done').addEventListener('click', () => {
  filterItems(true); 
});

document.getElementById('notdone').addEventListener('click', () => {
  filterItems(false); 
});

document.getElementById('all').addEventListener('click', () => {
  filterItems(null)
});

function filterItems(done) {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
      const checkbox = item.querySelector('.checkbox');
      if (done === null || checkbox.checked === done) {
          item.style.display = 'block';
      } else {
          item.style.display = 'none';
      }
  });
}


   