function myfunction() {
if (validation()) // Calling Validation Function
{
// Serializing Form Data And Displaying It In <p id="wrapper"></p>
document.getElementById("wrapper").innerHTML = serialize(document.forms[0]); // Serialize Form Data
document.getElementById("form").reset(); // Reset Form Fields
}
}

// Name And Email Validation Function
function validation() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var contact = document.getElementById("contact").value;
var emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
if (name === '' || email === '' || contact === '') {
alert("Please fill all fields...!!!!!!");
return false;
} else if (!(email).match(emailReg)) {
alert("Invalid Email...!!!!!!");
return false;
} else {
return true;
}
}