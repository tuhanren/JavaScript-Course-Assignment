var count = 0;
function validateFirstname(){
    var input = document.getElementById("fname");
    var errorDiv = document.getElementById("fnError");
    try {
        if (/.{3,}/.test(input.value) === false) {
            throw "Firstname must be at least 3 character long.";
        }
        input.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        count++;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
    }
}
function validateLastname(){
    var input = document.getElementById("lname");
    var errorDiv = document.getElementById("lnError");
    try {
        if (/.{3,}/.test(input.value) === false) {
            throw "Lastname must be at least 3 character long.";
        }
        input.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        count++;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
    }
}
function validateAddress(){
    var input = document.getElementById("address");
    var errorDiv = document.getElementById("addressError");
    try {
        if (/\W/.test(input.value) === false) {
            throw "Address must contain only letters and numbers.";
        }
        input.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        count++;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
    }
}
function validateCity(){
    var input = document.getElementById("city");
    var errorDiv = document.getElementById("cityError");
    try {
        if (/.{3,}/.test(input.value) === false) {
            throw "Please fill with a Canadian city name.";
        }
        input.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        count++;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
    }
}
function validatePostalCode(){
    var input = document.getElementById("post");
    var errorDiv = document.getElementById("postError");
    var caPost = /^[A-Za-z]\d[A-Za-z][-]?\d[A-Za-z]\d$/;
    try{
        if(caPost.test(input.value) === false){
            throw "Zip code should be in Canadian style."
        }
        input.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        count++;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
    }
}
function validateProvince(){
    var input = document.getElementById("province");
    var errorDiv = document.getElementById("provError");
    var caProv =["QC", "ON", "MN", "SK", "AB", "BC"];
    var controller = false;//controller
    try{
        //  if(caProv[i].test(input.value) === true){
        // } NOT WORK WHY!?!?!?!?
        for(var i = 0; i < caProv.length; i++){
            if(input.value == caProv[i]){
                controller = true;
                break;
            }
        }
        if(controller == false){
            throw "Please fill with a Canadian province code."
        }
        input.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        count++;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
    }
}
function validateAge(){
    var input = document.getElementById("age");
    var errorDiv = document.getElementById("ageError");
    try{
        if(parseInt(input.value, 10) < 18){
            throw "You must be 18-year-old or more."
        }
        else if(input.value == ""){
            throw "You must fufil this part."
        }
        input.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        count++;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
    }
}
function validatePassword(){
    var pwd1 = document.getElementById("pwd1");
    var pwd2 = document.getElementById("pwd2");
    var errorDiv = document.getElementById("pwdError");
    try{
        if(pwd1.value.localeCompare(pwd2.value) !== 0){
            throw "Passwords must match"
        }
        else if (/.{6,}/.test(pwd1.value) === false){
            throw "Password must be more than 6 characters."
        }
        else if (/[A-Z]/.test(pwd1.value) === false || /\d/.test(pwd1.value) === false){
            throw "Passwords must contain at least one digit and one upper-case character."
        }
        pwd1.style.background = "";
        pwd2.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        count++;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        pwd1.style.background = "rgb(255,233,233)";
        pwd2.style.background = "rgb(255,233,233)";
    }
}
function validateEmail(){
    var input = document.getElementById("email");
    var errorDiv = document.getElementById("emailError");
    var emailCheck = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    try{
        //if(input.value.search(/@/) === -1 || input.value.lastIndexOf(".") === -1)
        if (emailCheck.test(input.value) === false) {
            throw "Please provide a valid email address.";
        }
        input.style.background = "";
        errorDiv.style.display = "block";
        errorDiv.innerHTML = "";
        count++;
    }
    catch (msg) {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        input.style.background = "rgb(255,233,233)";
    }
}
function allCorrect(){
    if (count == 9){
        alert("Thanks for registering with our website, your customer record was created successfully.");
    }
}
function setUpPages() {
    validateFirstname();
    validateLastname();
    validateAddress();
    validateCity();
    validatePostalCode();
    validateAge();
    validatePassword();
    validateEmail();
    validateProvince();
    allCorrect()
}
var submit = document.getElementById("submit");
if (submit.addEventListener){
    submit.addEventListener("click", setUpPages, false);
} else if (submit.attachEvent){
    submit.attachEvent("onclick", setUpPages);
}
//Tu Hanren - 301061529