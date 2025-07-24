let dataStorage = JSON.parse(localStorage.getItem("userData")) || [];

function myValidation(event) {
    event.preventDefault();

    // Getting elements form index.html

    let User_Name = document.getElementById("username");
    let User_Email = document.getElementById("email");
    let User_Password = document.getElementById("password");
    let User_Confirm_Password = document.getElementById("c_password");
    let User_Contact = document.getElementById("contact");

    // Getting elements value

    let userNameVal = User_Name.value;
    let userEmailVal = User_Email.value;
    let userPassVal = User_Password.value;
    let userConfirmPassVal = User_Confirm_Password.value;
    let userContactVal = User_Contact.value;


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


    if (userEmailVal === "" || userPassVal === "" || userConfirmPassVal === "" || userContactVal === "") {
        alert("All fields are mendatory!")
        return false;
    }

    // UserName Validation
    const hasUpperCase = /[A-Z]/.test(userNameVal);
    if (hasUpperCase) {
        UserName_Error.textContent = "username must be in small letter";
        return false;
    }

    // Email validation

    if (userEmailVal.indexOf("@") === -1) {
        Email_Error.textContent = "Email must contain '@'";
        return false;
    }
    else if (userEmailVal.indexOf("@") <= 0) {
        Email_Error.textContent = `"@" cannot be at first place`;
        return false;
    }
    else if (userEmailVal.charAt(userEmailVal.length - 4) === "." || userEmailVal.charAt(userEmailVal.length - 3) === ".") {
    }
    else {
        Email_Error.textContent = "Invalid email! Please check??";
        return false;
    }

    // Password validation

    if (userPassVal.trim() === "") {
        Password_Error.textContent = "Please enter the password";
        return false;
    }
    else if (userPassVal.length < 8 || userPassVal.length > 20) {
        Password_Error.textContent = "password must lies between 8 to 20 charector";
        return false;
    }
    else if (userPassVal !== userConfirmPassVal) {
        Confirm_Password_Error.textContent = "password must be same.";
        return false;
    }
    else {
        const hasUpperCase = /[A-Z]/.test(userPassVal);
        const hasLowerCase = /[a-z]/.test(userPassVal);
        const hasNumber = /[0-9]/.test(userPassVal);
        const hasSpecialChar = /[!@#$%^&*()|\/;:<>?]/.test(userPassVal);

        if (!hasUpperCase) {
            Password_Error.textContent = "password must include at least one uppercase letter!"
            return false;
        }
        else if (!hasLowerCase) {
            Password_Error.textContent = "password must include at least one lowercase letter!"
            return false;
        }
        else if (!hasNumber) {
            Password_Error.textContent = "password must include at least one number!"
            return false;
        }
        else if (!hasSpecialChar) {
            Password_Error.textContent = "password must include at least one special letter!"
            return false;
        }
    }

    // Contact validation

    if (userContactVal.length < 10 || userContactVal.length > 10) {
        Contact_Error.textContent = "Number Should be of 10 Digits!"
        return false;
    }
    else if (isNaN(userContactVal)) {
        Contact_Error.textContent = "Only Numbers are allowed!"
        return false;
    }

    // storing data in local storage

    let object = {
        username: userNameVal,
        email: userEmailVal,
        password: userPassVal,
        confirm_password: userConfirmPassVal,
        contact: userContactVal,
    }
    dataStorage.push(object);
    localStorage.setItem("userData", JSON.stringify(dataStorage));


    // Remove previous input(elements) value if account is successfully created.

    User_Name.value = "";
    User_Email.value = "";
    User_Password.value = "";
    User_Confirm_Password.value = "";
    User_Contact.value = "";

    // If everything is valid, open modal
    openModal();

}

let formContainer = document.querySelector(".form_container");

// function for open modal
let modalContainer = document.querySelector(".modal_container")
function openModal() {
    modalContainer.classList.add("show_modal");
    formContainer.classList.add("form_disabled");
}

let skipBtn = document.querySelector("#skip_btn");
skipBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show_modal");
    formContainer.classList.remove("form_disabled");
})

// function for open login page when click the modal Continue button
function openLoginPage() {
    window.location.href = "../HTML/login.html"
}
let openLogin = document.querySelector("#continue_btn");
openLogin.addEventListener("click", openLoginPage);