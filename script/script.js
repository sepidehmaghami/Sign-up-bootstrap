var logemail = () => {
    console.log(document.getElementById("inputUsername").value);
}

var logpassword = () => {
    console.log("Password entered");
}

var sumbitbtn = () => {
    console.log(Date());
}

var validateForm = () => {
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["password"].value;
    if (x == "" && y == "") {
        alert("Email address and Password must be filled out");
        return false;
    } else if (y == "") {
        alert("Password must be filled out");
        return false;
    } else if (x == "") {
        alert("Email address must be filled out");
        return false;
    }
}