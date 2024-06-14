let username = document.getElementById("username");
let password = document.getElementById("password");
let togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function() {
  
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  
  
  this.classList.toggle("fa-eye-slash");
});

function validateForm() {
  let flag = true; 

  
  if (username.value === "") {
    document.getElementById("userError").innerHTML = "User Name is empty";
    flag = false;
  } else if (username.value.length < 3) {
    document.getElementById("userError").innerHTML = "User Name requires a minimum of 3 characters";
    flag = false;
  } else {
    document.getElementById("userError").innerHTML = "";
  }

  
  const passwordValue = password.value;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;

  if (passwordValue === "") {
    document.getElementById("passError").innerHTML = "Password is empty";
    flag = false;
  } else if (passwordValue.length < 8 || passwordValue.length > 14) {
    document.getElementById("passError").innerHTML = "Password must be 8 to 14 characters long";
    flag = false;
  } else if (passwordValue.includes(" ")) {
    document.getElementById("passError").innerHTML = "Password cannot contain spaces";
    flag = false;
  } else if (!passwordRegex.test(passwordValue)) {
    document.getElementById("passError").innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
    flag = false;
  } else {
    document.getElementById("passError").innerHTML = "";
  }

  return flag; 
}
