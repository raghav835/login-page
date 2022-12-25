const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!email || !password) {
    errorMessage.textContent = 'Please enter a valid email and password';
    return;
  }

  // Send login request to server and handle response
});
