var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var form = document.getElementById("myform");

// displays the form for creating a login
function newUser(){

    var fnField = document.createElement("input");
    fnField.setAttribute("type","text");
    fnField.setAttribute("name", "firstname");

    var lnField = document.createElement("input");
    lnField.setAttribute("type","text");
    lnField.setAttribute("name", "lastname");

    var ageField = document.createElement("input");
    ageField.setAttribute("type","text");
    ageField.setAttribute("name", "age");

    var genderField = document.createElement("input");
    genderField.setAttribute("type", "text");
    genderField.setAttribute("name", "gender");

    var locationField = document.createElement("input");
    locationField.setAttribute("type", "text");
    locationField.setAttribute("name", "location");

    // form.append(document.createElement("br"));
    // form.append(document.createElement("br"));
    form.append("First Name: ");
    form.append(document.createElement("br"));
    form.append(fnField);
    form.append(document.createElement("br"));
    form.append(document.createElement("br"));
    form.append("Last Name: ");
    form.append(document.createElement("br"));
    form.append(lnField);
    form.append(document.createElement("br"));
    form.append(document.createElement("br"));
    form.append("Age: ");
    form.append(document.createElement("br"));
    form.append(ageField);
    form.append(document.createElement("br"));
    form.append(document.createElement("br"));
    form.append("Gender: ")
    form.append(document.createElement("br"));
    form.append(genderField);
    form.append(document.createElement("br"));
    form.append(document.createElement("br"));
    form.append("Location: ");
    form.append(document.createElement("br"));
    form.append(locationField);
    form.append(document.createElement("br"));

    newUserButtons();
}

// displays the login form
function loginButtons(){
    b1.setAttribute("onclick", "attemptLogin()");
    b1.innerText = "Login";

    b2.setAttribute("onclick", "newUser()");
    b2.innerText = "New User";
}

// checks for user in database
function attemptLogin(){
    
    // check if user is in the database
    var userPresent = true; // php check here?

    // if yes, send to menu
    if (userPresent){
        location.href = 'menu.php';
    }
    
    else location.href = 'menu.php'
}

// creates user in database
function submit(){

    // Do some PHP things here I think
    // Then change the form back to login Format

    var unField = document.createElement("input");
    unField.setAttribute("type", "text");
    unField.setAttribute("name", "username");
    unField.setAttribute("placeholder", "My name is Jeff");

    var pwField = document.createElement("input");
    pwField.setAttribute("type", "text");
    pwField.setAttribute("name", "password");
    pwField.setAttribute("placeholder", "My password is Jeff");
    
    form.removeChild(document.getElementsByName("firstname")[0])
    form.removeChild(document.getElementsByName("lastname")[0])
    form.removeChild(document.getElementsByName("age")[0])
    form.removeChild(document.getElementsByName("gender")[0])
    form.removeChild(document.getElementsByName("location")[0])
    form.innerText = "";

    form.append("Username: ", unField);
    form.append(document.createElement("br"));
    form.append(document.createElement("br"));
    form.append("Password: ", pwField);

    loginButtons();
}



function newUserButtons(){
    b1.setAttribute("onclick", "newuserfun()");
    b1.innerText = "Submit";

    b2.setAttribute("onclick", "login()");
    b2.innerText = "Cancel";
}