function validateLogIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let errorMessage = "";
    
    if (!email) {
        errorMessage += "Email is required. \n";
    } 
    else if (email.length < 15) {
        errorMessage += "Email must be 15 characters long. \n";
    }
    
    if (!password) {
        errorMessage += "Password is required. \n";
    
    } else if (password.length < 8) {
        errorMessage += "Password must be 8 characters long. \n";
    }
    if (errorMessage) {
        alert(errorMessage);
        return false;
    }
    
    return true;
    
    }