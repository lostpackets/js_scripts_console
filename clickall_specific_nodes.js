//Clicks all nodes
document.querySelectorAll("button").forEach( function(element) {
   element.dispatchEvent(new Event("click"));
});
//Clicks a node (first node)
document.querySelector("button").dispatchEvent(new Event("click"));
//Click by array of node
var buttons = document.querySelectorAll("button");
buttons[2].dispatchEvent(new Event("click"));
//       \------- Selects 3rd element, as it starts from 0 like an array
//
//Like the previous command, but it uses CSS:
document.querySelector("button:nth-child(3)").dispatchEvent(new Event("click"));
