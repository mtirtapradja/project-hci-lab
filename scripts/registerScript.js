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
  genderText = document.querySelector('input[name="gender"]').value;
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

function validateEmail(emailText){
  if (emailText.length < 3){
    return false;
  }

  if (email.indexOf("@") < 0){
    return false;
  }

  var bagian = emailText.split("@");
  var titik = bagian[1].indexOf(".");
  var titikSplit = bagian[1].split(".");
  var titikCount = titikSplit.length - 1;

  if (titik < 2 || titikCount > 2){
    return false;
  }

  for(var n = 0; n < titikSplit.length; n++){
    if (titikSplit[n].length == 0){
      return false;
    }
  }

  return true;
}

function validateEmail(textEmail) {
  if (textEmail.indexOf("@") <= 0 || textEmail.indexOf("@") <= textEmail.length - 1) {
    return false;
  }

  if (textEmail.indexOf(".") <= 0 || textEmail.indexOf("@") <= textEmail.length - 1) {
    return false;
  }

  var jmlAt = 0;
  for (i = 0; i < textEmail.length; i++){
    if (textEmail[i] == "@"){
      jml++;
    }
  }

  if (jmlAt > 1) {
    return false;
  }

  return true;
}

function valueChanged(){
  if(document.getElementById("male").checked == true)
  {
      document.getElementById("female").checked = false;
  }
  else
  {
      document.getElementById("male").checked = false;
  }
}
