var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var search = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);

//Remove item
itemList.addEventListener('click', removeItem);

//Filter items
search.addEventListener('keyup', filterItem);

// Add item
function addItem(e) {
  e.preventDefault();
  
  // Get input value
  var input = document.querySelector('#item').value;

  // Create new li element
  var li = document.createElement('li');
  
  // Add class
  li.className = 'list-group-item';
  
  var list = itemList.getElementsByTagName('li');
  
   // Add text node with input value
  li.appendChild(document.createTextNode(input));

  // Create del button element
  var button = document.createElement('button');

  // Add classes to del button
  button.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  button.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(button);

  // Append li to list
  itemList.appendChild(li);	
}

//Remove item
function removeItem(e) {
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
  }
}


//Filter Item
function filterItem(e) {

  var input = search.value.toLowerCase();

  var list = itemList.getElementsByTagName('li');

  Array.from(list).forEach(function(item){
    var itemName = item.firstChild.textContent.toLowerCase();

    if(itemName.indexOf(input) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
