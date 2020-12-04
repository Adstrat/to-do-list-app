function newItem(){

// ADDING A NEW ITEM TO THE LIST OF ITEMS
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

// CROSSING OUT AN ITEM FROM THE LIST OF ITEMS:
  function crossOut(){
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut(){
    li.toggleClass('strike');
  });

// ADDING THE DELETE BUTTON "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>‚');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
  function deleteListItem(){
    li.addClass('delete');
  }
// REORDERING THE ITEMS:
  $('#list').sortable()
}
