
// let storage = JSON.parse(localStorage.getItem("userData"));

// function loginValidation(e) {
//     e.preventDefault()
//     const User_Login_Email = document.querySelector("#loginemail").value;
//     const User_Login_Pass = document.querySelector("#loginpassword").value;
//     console.log(User_Login_Email, User_Login_Pass);
//     if (storage.email === User_Login_Email && storage.password === User_Login_Pass) {
//         console.log("succesfull");
//     }
//     else {
//         console.log("Not matched");
//     }
// }
function loginValidation(event) {
    event.preventDefault();

    let User_Email = document.getElementById("loginemail").value;
    let User_Password = document.getElementById("loginpassword").value;

    // Fetch signup data from localStorage
    let signupData = JSON.parse(localStorage.getItem("userData"));

    if (signupData) {
        if (signupData.email === User_Email && signupData.password === User_Password) {
            openSignupModal(signupData);
        } else {
            alert("Invalid email or password!");
        }
    } else {
        alert("No signup data found.");
    }
}

// Open the modal and show signup details
function openSignupModal(data) {
    let modalBody = document.getElementById("signupDetails");
    modalBody.innerHTML = ""; // Clear previous data if any

    let signUp_data_Container = document.createElement("div");
    signUp_data_Container.className= "signUp_data_container"

    let Username = document.createElement("p");
    let Email = document.createElement("p");
    let Contact = document.createElement("p");


    Username.innerText = `Username : ${data.username}`;
    Email.innerText = `Email : ${data.email}`;
    Contact.innerText = `Contact : ${data.contact}`;

    // Append these elements inside the modal body
    signUp_data_Container.append(Username,Email,Contact);
    modalBody.append(signUp_data_Container);

    // Show the modal
    document.getElementById("signupModal").style.display = "block";
}


// Close the modal
document.getElementById("closeModal").addEventListener("click", function () {
    document.getElementById("signupModal").style.display = "none";
});
