// eventually will handle displaying the form for creating a login and whatnot when index is redesigned
function newUser(){
    var form = document.getElementById("myform");

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

    form.removeChild(document.getElementsByName("username")[0])
    form.removeChild(document.getElementsByName("password")[0])
    form.innerText = "";

    form.innerText = "First Name: "
    form.appendChild(fnField);
}