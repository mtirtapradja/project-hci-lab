var nameText;
var emailText;
var passwordText;
var genderText;
var addressText;
var cityText;
var tosText;

function validateRegistration() {
  nameText = document.getElementById("nama-pengguna").value;
  console.log(nameText);
  emailText = document.getElementById("email-pengguna").value;
  console.log(emailText);
  passwordText = document.getElementById("password-pengguna").value;
  console.log(passwordText);
  genderText = document.getElementById("gender").value;
  console.log(genderText);
  addressText = document.getElementById("alamat-pengguna").value;
  console.log(addressText);
  cityText = document.getElementById("kota-pengguna").value;
  console.log(cityText);
  tosText = document.getElementById("tos").value;
  console.log(tosText);

  if (nameText == "") {
    alert("Please Insert Your Name!");
  } else if (nameText.length < 3) {
    alert("Name must be at least 3 characters!");
  } else if (emailText == "") {
    alert("Please Insert Your Email Address!");
  } else if (!validateEmail(emailText)) {
    alert("Invalid Email Format!");
  } else if (passwordText == "") {
    alert("Please Insert Your Password!");
  } else if (genderText == "") {
    alert("Please Choose Your Gender!");
  } else if (addressText == "") {
    alert("Please Fill You Address!");
  } else if (cityText == "") {
    alert("Please Fill Your City Location!");
  } else if (tosText == "") {
    alert("Please Check the ToS Box!");
  }
}

function validateEmail(textEmail) {
  if (textEmail.indexOf("@") < 1) {
    console.log("1");
    return false;
  }

  if (textEmail.indexOf(".") == 0) {
    console.log("2");
    return false;
  }

  if (textEmail.indexOf(".")) {
    console.log("3");
    return false;
  }

  return true;
}
