document.getElementById("login-form").onsubmit = function(event) {
  event.preventDefault();

  // Get the entered username and password
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Validate the username and password
  if (username === "admin" && password === "12345") {
    // If the username and password are correct, redirect to the dashboard page
    window.location.href = "dashboard.html";
  } else {
    // If the username and password are invalid, display an error message
    document.getElementById("error-message").innerHTML = "Invalid username or password.";
  }
};
