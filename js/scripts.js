//I've written javascript in comments to compare to jQuery

function newItem(){

//1. ADDING A NEW ITEM TO THE LIST OF ITEMS
//    let li = document.createElement("li");
  let li = $('<li></li>');
//    let inputValue = document.getElementById("input").value;
  let inputValue = $('#input').val();
//    let text = document.createTextNode(inputValue);
//    li.appendChild(text);
  li.append(inputValue);
//    if (inputValue === '') {
//      alert("You must write something!");
//    } else {
//      let list = document.querySelector('#list');
//      list.appendChild(li);
//    }
  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

//  //2. CROSSING OUT AN ITEM FROM THE LIST OF ITEMS:
//    function crossOut() {
//  		li.classList.toggle("strike");
//  	}
  function crossOut(){
    li.toggleClass('strike');
  }
//  	li.addEventListener("dblclick",crossOut);
  li.on('dblclick', function crossOut(){
    li.toggleClass('strike');
  }
);

//  //3(i). ADDING THE DELETE BUTTON "X":
//    let crossOutButton = document.createElement("crossOutButton");
  let crossOutButton = $('<crossOutButton></crossOutButton>‚');
//  	crossOutButton.appendChild(document.createTextNode("X"));
  crossOutButton.append(document.createTextNode('X'));
//  	li.appendChild(crossOutButton);
  li.append(crossOutButton);
//  	crossOutButton.addEventListener("click", deleteListItem);
  crossOutButton.on('click', deleteListItem);

//  //3(ii). ADDING CLASS DELETE (DISPLAY: NONE) FROM THE CSS:
//    function deleteListItem(){
//  		li.classList.add("delete")
//    }
    function deleteListItem(){
      li.addClass('delete');
  }
//  // 4. REORDERING THE ITEMS:
  $('#list').sortable();
//
}
