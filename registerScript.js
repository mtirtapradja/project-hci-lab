// var nameText;
// var emailText;
// var passwordText;
// var genderText;
// var addressText;
// var cityText;
// var tosText;

    var nameText = document.getElementById("nama-pengguna");
    var emailText = document.getElementById("email-pengguna");
    var passwordText = document.getElementById("password-pengguna");
    var genderText = document.getElementById("gender");
    var addressText = document.getElementById("alamat-pengguna");
    var cityText = document.getElementById("kota-pengguna");
    var tosText = document.getElementById("tos");


function validateRegistration(){
    
    if (nameText.value == null){
        alert("Please Insert Your Name!");
    }else if (namaText.length < 3){
        alert("Name must be at least 3 characters!");
    }else if (emailText == null){
        alert("Please Insert Your Email Address!");
    }else if (validateEmail(emailText)){
        alert("Invalid Email Format!");
    }else if (passwordText == null){
        alert("Please Insert Your Password!");
    }else if (genderText == null){
        alert("Please Choose Your Gender!");
    }else if (addressText == null){
        alert("Please Fill You Address!");
    }else if (cityText == null){
        alert("Please Fill Your City Location!");
    }else if (tosText == null){
        alert("Please Check the ToS Box!");
    }
}

function validateEmail(textEmail){
    var At = textEmail.indexOf("@");

    if (textEmail.indexOf("@") < 1){
        return false;
    }

    if (textEmail.indexOf(".") <= textEmail.length - 1){
        return false;
    }

    return true;
}
