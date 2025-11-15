function validation() {

  let userName = document.getElementById("user_name");
  let password = document.getElementById("user_pwd");
  let errorBox = document.getElementById("error_msg_container");

  errorBox.innerHTML = "";  
  let isError = false;

  // USERNAME VALIDATION (No special characters, not only numbers)
  let usernameRegex = /^[A-Za-z0-9]+$/;   // only letters & numbers
  let onlyNumbers = /^[0-9]+$/;           // only digits

  if (userName.value === "") {
    errorBox.innerHTML += " Username is mandatory!<br>";
    userName.style.border = "2px solid red";
    isError = true;
  } 
  else if (!usernameRegex.test(userName.value)) {
    errorBox.innerHTML += " Username should not contain special characters!<br>";
    userName.style.border = "2px solid red";
    isError = true;
  }
  else if (onlyNumbers.test(userName.value)) {
    errorBox.innerHTML += " Username cannot be only numbers!<br>";
    userName.style.border = "2px solid red";
    isError = true;
  }
  else {
    userName.style.border = "1px solid #000";
  }



  // PASSWORD VALIDATION (1 uppercase, 1 special char, length 8–12)
  let passwordpatt = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,12}$/;

  if (password.value === "") {
    errorBox.innerHTML += " Password is mandatory!<br>";
    password.style.border = "2px solid red";
    isError = true;
  } 
  else if (!passwordpatt.test(password.value)) {
    errorBox.innerHTML += " Password must contain:<br>• One uppercase letter<br>• One special character (!@#$%^&*)<br>• Length 8–12 characters<br>";
    password.style.border = "2px solid red";
    isError = true;
  } 
  else {
    password.style.border = "1px solid #000";
  }

  // SHOW / HIDE ERROR BOX
  if (isError) {
    errorBox.style.display = "block";
  } else {
    errorBox.style.display = "none";
    alert("Login Successful!");
  }
}
