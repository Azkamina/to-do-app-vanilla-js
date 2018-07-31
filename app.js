console.log("hello");

var todos = [
  {
    label: "buy chips",
    isComplete: false
  },
  {
    label: "buy diapers",
    isComplete: false
  },
  {
    label: "eat chocolate",
    isComplete: false
  }
];

function render () {
  var items = [];
  for (var i = 0; i < todos.length; i += 1) {
    items.push("<li>" + todos[i]["label"] + "</li>")
  }
  var itemsHTML = items.join("");

  var ol = document.getElementById("todos");
  ol.innerHTML = itemsHTML;
}

render();

document.getElementById("todo-add").addEventListener('click', function() {
  todos.push({
    label: document.getElementById("todo-label").value,
    isComplete: false
  });
  render();
});

// ** render --> loop through array & inserts items into HTML
// a) loop that generates <li> for list items.

// 1) create a place to add an item 
// a) make a var to hold items
// b) make a way to push those items into to-dos
// c) call the render function

// 2) create a place to delete an item
// a) find the object & item, delete
// b) re-render the list so it is updated

// 3) create a way to mark item as complete
// a) when checkbox clicked, find associated item
// b) sets "is complete" to true
// c) re-render list so it is updated

// 4) create a way to mark item as incomplete
// a) repeat steps #3, change code to false


