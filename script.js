const form = document.getElementById("loginForm");
const studentID = document.getElementById("studentID");
const password = document.getElementById("password");
const errorMsg = document.getElementById("errorMsg");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  togglePassword.textContent = type === "password" ? "👁️" : "🙈";
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errorMsg.textContent = "";

  if (studentID.value.trim() === "" || password.value.trim() === "") {
    errorMsg.textContent = "All fields are required.";
    return;
  }

  // Example validation (replace with actual backend call)
  if (studentID.value === "20250123" && password.value === "college123") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Or your actual page
  } else {
    errorMsg.textContent = "Invalid ID or Password.";
  }
});
