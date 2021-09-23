// -- TO-DO LIST FUNCTION --

function newItem() {

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
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  // ADDING THE DELETE BUTTON "X":
  let crossOutButton = $('<crossOutButton></crossOutButton>‚');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    li.addClass('delete');
  }
  // REORDERING THE ITEMS:
  $('#list').sortable()
}


// -- DATE AND TIME --

const dateAndTime = document.querySelector('.date-time');

const tick = () => {

  const now = new Date();

  const date = now.toDateString();
  const hours = ('0' + now.getHours()).slice(-2);
  const minutes = ('0' + now.getMinutes()).slice(-2);
  const seconds = ('0' + now.getSeconds()).slice(-2);

  const timeHtml = `
  <h2>${date}</h2>
  <h2 >
  <span>${hours}</span> :
  <span>${minutes}</span> :
  <span>${seconds}</span>
  </h2>
  `;

  dateAndTime.innerHTML = timeHtml;

};

setInterval(tick, 1000);