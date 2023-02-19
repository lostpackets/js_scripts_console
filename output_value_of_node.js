// Select all elements with a data-asciimath attribute
//Change all "data" to any node you want to select
const elements = document.querySelectorAll('[data]');

// Loop through each element and output its value
for (let i = 0; i < elements.length; i++) {
  const value = elements[i].getAttribute('data');
  console.log(value);
}
