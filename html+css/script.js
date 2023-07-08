// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values from the input fields
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  // Display an alert with the submitted values
  alert(`Thank you, ${name}! We will contact you at ${email}.`);
});