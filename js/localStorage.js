let userInformation = localStorage.getItem("userInfo");

if (userInformation === null) {
  printEnterValue();
} else {
  let userData = JSON.parse(userInformation);
  document.querySelector(".form").innerHTML = showUserData(userData);

  // if getElementByClassName is used then use below method
  // let forms = document.getElementByClassName("form");
  // console.log(forms.length);
  // for (let i = 0; i < forms.length; i++) {
  //   forms[i].innerHTML = showUserData(userData);
  // }
}

function printEnterValue() {
  let fname = prompt("Enter your First Name");
  let lname = prompt("Enter your Last Name");
  let country = prompt("Enter your Country Name");
  let phone = prompt("Enter your Phone Number");
  let state = prompt("Enter your State Name");
  let city = prompt("Enter your City Name");
  let area = prompt("Enter your Area Name");
  userData = {
    firstName: fname,
    lastName: lname,
    cntry: country,
    pNumber: phone,
    st: state,
    c: city,
    locality: area,
  };

  //   saving to localStorage
  localStorage.setItem("userInfo", JSON.stringify(userData));

  //  creation starts from here
  let createCard = document.createElement("div");
  createCard.classList.add("form");
  createCard.innerHTML = showUserData(userData);

  document.querySelector(".container").appendChild(createCard);
}

function showUserData(userData) {
  return `<p id="fn">First Name : <span>${userData.firstName}</span></p>
<p id="ln">Last Name : <span>${userData.lastName}</span></p>
<p id="cnt">Country : <span>${userData.cntry}</span></p>
<p id="phn">Phone Number : <span>${userData.pNumber}</span></p>
<p id="state">State : <span>${userData.st}</span></p>
<p id="city">City : <span>${userData.c}</span></p>
<p id="area">Area : <span>${userData.locality}</span></p>`;
}
