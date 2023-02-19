// Set the range of numbers to loop through
const start = 0;
const end = 10;

// Loop through the range of numbers
for (let i = start; i <= end; i++) {
  // Construct the ID string
  const id = `qd-dd-${i}`;
  
  // Get the span element by its ID
  const spanElement = document.getElementById(id);
  
  // Dispatch a click event on the span element if it exists
  if (spanElement) {
    spanElement.dispatchEvent(new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    
    // Exit the loop once the element is found
    break;
  }
  
  // Output a message if the element is not found
  if (i === end) {
    console.log('Element not found.');
  }
}
