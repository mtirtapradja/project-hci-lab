

function validateEmail(emailText){
    var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (emailText.value.match(mailformat)){
        alert("Valid Email Address!");
        
        return true;
    }else{
        alert("Invalid Email Address!");

        return false;
    }
}