//Clicks all nodes
document.querySelectorAll("button").forEach( function(element) {
   element.dispatchEvent(new Event("click"));
});
//Clicks a node (first node)
document.querySelector("button").dispatchEvent(new Event("click"));
