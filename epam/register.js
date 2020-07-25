form.addEventListener('submit', e => {
	e.preventDefault();
    EmailValidation();
    PasswordValidation();
    RepeatPasswordValidation();
    NumberValidation();
});

function EmailValidation() {
    var email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var box=document.getElementById("email");
    if (email.match(pattern)) {
        box.style.backgroundColor="green";
    }
    else {
        box.style.backgroundColor="red";
        alert("enter valid email");
    }
}
function PasswordValidation() {
    var password = document.getElementById("psw").value;
    var password_tag=document.getElementById("psw");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers) && password.match(special) && password.length >=8)
    {
     password_tag.style.backgroundColor="green";
    }
    else
    {
        password_tag.style.backgroundColor="red";
        alert(
            "password should contain lowercase,uppercase,numeric,special character and minimum length >=8"
        );
    }
}
function RepeatPasswordValidation() {
    var RePassword = document.getElementById("psw-repeat").value;
    var pass = document.getElementById("psw-repeat");
    var password = document.getElementById("psw").value;
    if(RePassword === password)
    {
        
        pass.style.backgroundColor = "green";
    }
    else
    {
        pass.style.backgroundColor = "red";
        alert("password mismatch");
    }
}
function NumberValidation() {
    var Number = document.getElementById("mobile no.").value;
    var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var d=document.getElementById("mobile no.");
    if(Number.match(pattern))
    {
        d.style.backgroundColor="green";
    }
    else 
    {
        d.style.backgroundColor="red";
        alert("enter valid mobile no.");
    }
}