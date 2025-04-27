function myValidation(event) {
    event.preventDefault();

    let User_Name = document.getElementById("username").value;
    let User_Email = document.getElementById("email").value;
    let User_Password = document.getElementById("password").value;
    let User_Confirm_Password = document.getElementById("c_password").value;
    let User_Contact = document.getElementById("contact").value;

    // Add error
    let UserName_Error = document.querySelector(".username_error")
    let Contact_Error = document.querySelector(".contact_error");
    let Email_Error = document.querySelector(".email_error");
    let Password_Error = document.querySelector(".password_error")
    let Confirm_Password_Error = document.querySelector(".confirm_password_error");

    // Remove Previous Error
    Contact_Error.textContent = "";
    Email_Error.textContent = "";
    Password_Error.textContent = "";
    Confirm_Password_Error.textContent = "";
    UserName_Error.textContent = "";


    if(User_Email=== "" || User_Password === "" || User_Confirm_Password === "" || User_Contact === ""){
        alert("All fields are mendatory!")
        return false;
    }

    // UserName Validation
    const hasUpperCase = /[A-Z]/.test(User_Name);
    if(hasUpperCase){
        UserName_Error.textContent = "username must be in small letter";
        return false;
    }

    // Email validation

    if (User_Email.indexOf("@") <= 0){
        Email_Error.textContent= `"@" cannot be at first place`;
        return false;
    }
    else if (User_Email.charAt(User_Email.length - 4) === "." || User_Email.charAt(User_Email.length - 3 ) === "."){
    }
    else{
        Email_Error.textContent= "Invalid email! Please check??";
        return false;
    }

    // Password validation

    if(User_Password.trim() === ""){
        Password_Error.textContent = "Please enter the password";
        return false;
    }
    else if (User_Password.length < 8 || User_Password.length > 20){
        Password_Error.textContent = "password must lies between 8 to 20 charector";
        return false;
    }
    else if (User_Password !== User_Confirm_Password){
        Confirm_Password_Error.textContent = "password must be same.";
        return false;
    }
    else{
        const hasUpperCase = /[A-Z]/.test(User_Password);
        const hasLowerCase = /[a-z]/.test(User_Password);
        const hasNumber = /[0-9]/.test(User_Password);
        const hasSpecialChar = /[!@#$%^&*()|\/;:<>?]/.test(User_Password);

        if(!hasUpperCase){
            Password_Error.textContent = "password must include at least one uppercase letter!"
            return false;
        }
        else if(!hasLowerCase){
            Password_Error.textContent = "password must include at least one lowercase letter!"
            return false;
        }
        else if(!hasNumber){
            Password_Error.textContent = "password must include at least one number!"
            return false;
        }
        else if(!hasSpecialChar){
            Password_Error.textContent = "password must include at least one special letter!"
            return false;
        }
    }

    // Contact validation

    if(User_Contact.length< 10 || User_Contact.length > 10){
        Contact_Error.textContent = "Number Should be of 10 Digits!"
        return false;
    }
    else if (isNaN(User_Contact)){
        Contact_Error.textContent = "Only Numbers are allowed!"
        return false;
    }

    // storing data in local storage

    let object = {
        username: User_Name,
        email: User_Email,
        password: User_Password,
        confirm_password: User_Confirm_Password,
        contact: User_Contact,
    }
    localStorage.setItem("userData", JSON.stringify(object));

    // If everything is valid, open modal
    openModal();

}

// function for open modal
function openModal(){
    document.querySelector(".modal_container").classList.add("show_modal");
}

// function for open login page when click the modal Continue button
function openLoginPage(){
    window.location.href= "./login.html"
}
let openLogin = document.querySelector("#continue_btn");
openLogin.addEventListener("click", openLoginPage);