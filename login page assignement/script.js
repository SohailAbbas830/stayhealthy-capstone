document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(el => el.textContent = "");

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name.length < 4) {
    document.getElementById("nameError").textContent = "Name should be at least 4 characters";
    isValid = false;
  }

  // Validate Phone
  const phone = document.getElementById("phone").value.trim();
  if (!/^\d{10}$/.test(phone)) {
    document.getElementById("phoneError").textContent = "Phone must be 10 digits";
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email address";
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    document.getElementById("passwordError").textContent = "Password must be at least 8 characters";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("signupForm").reset();
  }
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
});
