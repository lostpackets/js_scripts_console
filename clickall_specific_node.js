document.querySelectorAll("button").forEach( function(element) {
   element.dispatchEvent(new Event("click"));
});
