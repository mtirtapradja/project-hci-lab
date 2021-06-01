function validateRegistration(){
    var nameText = document.getElementById("nama-pengguna").value;
    var emailText = document.getElementById("email-pengguna").value;
    var passwordText = document.getElementById("password-pengguna").value;
    var genderText = document.getElementById("gender").value;
    var addressText = document.getElementById("alamat-pengguna").value;
    var cityText = document.getElementById("kota-pengguna").value;
    var tosText = document.getElementById("tos").value;

    if (nameText == null){
        alert("Please Insert Your Name!");
    }else if (namaText < 3){
        alert("Name must be at least 3 characters!");
    }else if (textEmail == null){
        alert("Please Insert Your Email Address!");
    }else if (validateEmail(textEmail)){
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