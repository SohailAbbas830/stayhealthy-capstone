// Toggle dark mode
const toggleBtn = document.querySelector(".toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Simulate user greeting dynamically
const userName = document.getElementById("user-name");
userName.textContent = "Peter".toUpperCase();

// Simulate logout button
document.getElementById("logout").addEventListener("click", () => {
  alert("You have been logged out!");
});
