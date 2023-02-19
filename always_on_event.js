// Get the span element by its ID
const spanElement = document.getElementById('qd-dd-0');

// Dispatch a click event on the span element
if (spanElement) {
  spanElement.dispatchEvent(new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  }));
} else {
  console.log('Element not found.');
}
