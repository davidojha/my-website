document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  var formData = {
    name: document.getElementById("name-field").value,
    email: document.getElementById("email-field").value,
    subject: document.getElementById("subject-field").value,
    message: document.getElementById("message-field").value
  };

  var scriptURL = "https://script.google.com/macros/s/AKfycbyC6J5RKTiPYnoSfG-RyPbVE1hYJ-aBQc4BzMkxJ6LLwFi8EpBRpVfzQjxsJHrM0THL/exec";  // Replace with your Google Script URL

  fetch(scriptURL, {
    method: 'POST',
    body: new URLSearchParams(formData)
  })
  .then(response => response.json())
  .then(data => {
    document.querySelector('.sent-message').style.display = "block";
    document.querySelector('.error-message').style.display = "none";
    document.getElementById("contactForm").reset(); // Clear the form
  })
  .catch(error => {
    document.querySelector('.error-message').style.display = "block";
    document.querySelector('.sent-message').style.display = "none";
  });
});
