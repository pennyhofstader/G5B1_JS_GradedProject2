let username;
let password;

let error = document.getElementById("error");

function loginDetails() {

    /* storing username and passwords into local storage */
    localStorage.setItem("test", "test");

    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    // checking for credentials
    if (username === "test" && password === "test") {

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        window.open("resume.html", "_self")
    } 
    else {

        error.textContent = "Invalid Credentials";
    }

}

//  restricting the user from going back to the login page 

window.history.forward()