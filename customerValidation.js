// JavaScript source code
//validate user information

function validate() {
    var fName = document.getElementById("fistname");
    var lName = document.getElementById("lastname");
    var mail = document.getElementById("email");
    var msg = document.getElementById("message");

    //check if values are empty
    if (fName.value == "") {
        alert ("Please enter your first name.");
        return false;
    }
    if (lName.value == "") {
        alert ("Please enter your last name.");
        return false;
    }
    if (mail.value == "") {
        alert ("Please enter your email.");
        return false;
    }
    if (msg == "") {
        alert ("Please enter a message.");
        return false;
    }
    
}
//register event handlers
document.getElementById("customerForm").onsubmit = validate;

