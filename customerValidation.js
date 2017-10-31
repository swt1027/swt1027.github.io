// JavaScript source code
//validate user information

function validate() {
    var fName = document.getElementById("firstname").value;
    var lName = document.getElementById("lastname").value;
    var mail = document.getElementById("email").value;
    var msg = document.getElementById("message").value;

    //check if values are empty
    if (fName == "" || !isNaN(fName)){
        alert ("Please enter your first name.");
        return false;
    }
    if (lName == "" || !isNaN(lName)) {
        alert ("Please enter your last name.");
        return false;
    }
    if (mail == "" || !isNaN(mail)) {
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

