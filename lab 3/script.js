// Function to validate the form
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;
  
    // Check if the password is strong enough
    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return false;
    }
  
    // Check if gender is selected
    if (!gender) {
      alert('Please select your gender.');
      return false;
    }
  
    // Check if country is selected
    if (!country) {
      alert('Please select your country.');
      return false;
    }
  
    // Ensure the user agrees to the terms
    if (!terms) {
      alert('You must agree to the terms and conditions.');
      return false;
    }
  
    // If validation passes, display the message form and hide the original form
    displayMessageForm(name, email, country);
    return false; // Prevent form submission
  }
  
  // Function to display the message form
  function displayMessageForm(name, email, country) {
    const userForm = document.getElementById('userForm');
    const messageForm = document.getElementById('messageForm');
    const userMessage = document.getElementById('userMessage');
  
    // Hide the original form
    userForm.classList.add('d-none');
  
    // Customize the thank you message
    userMessage.innerHTML = `Hello ${name}, thank you for submitting the form! <br> We have received your details from ${country}. <br> An email has been sent to ${email}.`;
  
    // Display the new form with the message
    messageForm.classList.remove('d-none');
  }
  
  // Function to reload the page for another submission
  function reloadPage() {
    location.reload();
  }
  