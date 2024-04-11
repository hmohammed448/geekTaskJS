let users = JSON.parse(localStorage.getItem("registeredUser"));
console.log(users);

function validateLogin() {
  let userEmail = document.forms["regForm"]["loginInputEmail"].value;
  let userPass = document.forms["regForm"]["loginInputPassword"].value;

  // validate form
  if (userEmail == "") {
    alert("Email can not be empty");
    return false;
  }
  if (userPass == "") {
    alert("Password can not be empty");
    return false;
  }
  let ans = validate(userEmail, userPass);
  if (ans) {
    return true;
  }
  return false;
}

function validate(email, password) {
  let userEmail = document.forms["regForm"]["loginInputEmail"].value;
  let userPass = document.forms["regForm"]["loginInputPassword"].value;

  if (!users || users.length === 0) return false;

  let personInfoEmail = users.some(
    (per) => per.email === userEmail && per.password === userPass
  );
  if (!personInfoEmail) {
    alert("Invalid Credentials");
    return false;
  } else {
    alert("Login Successfull");
  }
  return true;
}
