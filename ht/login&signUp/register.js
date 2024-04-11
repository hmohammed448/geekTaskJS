// let data = JSON.parse(localStorage.getItem("registeredUser"))
//   ? JSON.parse(localStorage.getItem("registeredUser"))
//   : {};

function formValue() {
  let userName = document.forms["regForm"]["userName"].value;
  let userEmail = document.forms["regForm"]["userEmail"].value;
  let userPass = document.forms["regForm"]["password"].value;
  let confirmPassword = document.forms["regForm"]["userRe_Password"].value;
  return { userName, userEmail, userPass, confirmPassword };
}

function validateRegistration() {
  let { userName, userEmail, userPass, confirmPassword } = formValue(); // Extracting values from the form

  // validate form
  if (userName == "") {
    alert("User name can not be empty");
    return false;
  }
  if (userEmail == "") {
    alert("User email can not be empty");
    return false;
  }
  if (userPass == "") {
    alert("Enter Password");
    return false;
  }
  if (confirmPassword == "") {
    alert("Confirm Your Password");
    return false;
  }

  if (userPass != confirmPassword) {
    alert("Password does not match");
    return false;
  } else {
    if (
      !registerUserInformation(userName, userEmail, userPass, confirmPassword)
    ) {
      return false;
    } else {
      alert("Registration successfull");
    }
  }
  return true;
}

let users = JSON.parse(localStorage.getItem("registeredUser"))
  ? JSON.parse(localStorage.getItem("registeredUser"))
  : [];

function registerUserInformation(
  userName,
  userEmail,
  userPass,
  confirmPassword
) {
  users = JSON.parse(localStorage.getItem("registeredUser"));

  let newUser = {
    userFullName: userName,
    email: userEmail,
    password: userPass,
    confirmPass: confirmPassword,
  };

  let userExists = users.some((ele) => ele.email === newUser.email);
  if (userExists) {
    alert("User already Exists");
    return false;
  } else {
    // pushing user object into users array
    users.push(newUser);
  }
  // Convert users array to string using JSON because localStorage understands strings
  let usersData2String = JSON.stringify(users);
  localStorage.setItem("registeredUser", usersData2String); // Save users array back to localStorage
  return true; // Indicate registration success
}
