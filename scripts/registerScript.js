var nameText;
var emailText;
var passwordText;
var genderText;
var genderTextF;
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
  genderText = document.querySelector('input[name="gender"]');
  genderTextF = document.querySelector('input[name="genderF"]');
  console.log(genderText);
  addressText = document.getElementById("alamat-pengguna").value;
  console.log(addressText);
  cityText = document.getElementById("kota-pengguna").value;
  console.log(cityText);
  tosText = document.getElementById("tos");
  console.log(tosText);
  var errorLabel = document.getElementById("errorLabel");

  if (nameText == "") {
    errorLabel.innerHTML = "Please Insert Your Name!";
    // alert("Please Insert Your Name!");
  } else if (nameText.length < 3) {
    errorLabel.innerHTML = "Name must be at least 3 characters!";
    // alert("Name must be at least 3 characters!");
  } else if (emailText == "") {
    errorLabel.innerHTML = "Please Insert Your Email Address!";
    // alert("Please Insert Your Email Address!");
  } else if (!validateEmail(emailText)) {
    errorLabel.innerHTML = "Invalid Email Format!";
    // alert("Invalid Email Format!");
  } else if (passwordText == "") {
    errorLabel.innerHTML = "Please Insert Your Password!";
    // alert("Please Insert Your Password!");
  } else if (!genderText.checked && !genderTextF.checked) {
    errorLabel.innerHTML = "Please Choose Your Gender!";
    // alert("Please Choose Your Gender!");
  } else if (addressText == "") {
    errorLabel.innerHTML = "Please Fill You Address!";
    // alert("Please Fill You Address!");
  } else if (cityText == "") {
    errorLabel.innerHTML = "Please Fill Your City Location!";
    // alert("Please Fill Your City Location!");
  } else if (!tosText.checked) {
    errorLabel.innerHTML = "Please Check the ToS Box!";
    // alert("Please Check the ToS Box!");
  }else{
    errorLabel.innerHTML = "";
  }
}

function validateEmail(textEmail){
  if (textEmail.length < 3){
    return false;
  }

  if (textEmail.indexOf("@") < 0){
    return false;
  }

  var bagian = textEmail.split("@");
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

// function validateEmail(textEmail) {
//   if (textEmail.indexOf("@") <= 0 || textEmail.indexOf("@") <= textEmail.length - 1) {
//     return false;
//   }

//   if (textEmail.indexOf(".") <= 0 || textEmail.indexOf("@") <= textEmail.length - 1) {
//     return false;
//   }

//   var jmlAt = 0;
//   for (i = 0; i < textEmail.length; i++){
//     if (textEmail[i] == "@"){
//       jml++;
//     }
//   }

//   if (jmlAt > 1) {
//     return false;
//   }

//   return true;
// }

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
