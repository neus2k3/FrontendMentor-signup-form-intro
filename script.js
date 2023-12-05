validate_email = (text) => {
    at_symbol_pos = text.indexOf("@");
    last_dot_pos = text.lastIndexOf(".");

    if(at_symbol_pos == -1 || last_dot_pos == -1){ // Check if both @ and . exist in the email or not
        return false; 
    }else if(at_symbol_pos == 0 || last_dot_pos == text.length-1){ // Make sure they dont exist at the beginning or the end
        return false;
    } else if(last_dot_pos < at_symbol_pos){ // Make sure one follows the other
        return false;
    }
    return true;
}

validate_form = () => {
    is_valid = true;

    const form = document.forms["form"];
    const fname = form["fname"];
    const lname = form["lname"];
    const email = form["email"];
    const password = form["password"];

    const fname_error = document.querySelector(".ferror");
    const lname_error = document.querySelector(".lerror");
    const email_error = document.querySelector(".email-error");
    const password_error = document.querySelector(".password-error");

    // First name validation
    if(fname.value == ""){
        fname_error.style.visibility = "visible";
        fname.style.backgroundImage = "url('images/icon-error.svg')";
        fname.style.backgroundRepeat = "no-repeat";
        fname.style.backgroundPositionX = "95%";
        fname.style.backgroundPositionY = "center";
        is_valid = false;
    }else{
        fname_error.style.visibility = "hidden";
        fname.style.backgroundImage = "none";
    }

    // Last name validation
    if(lname.value == ""){
        lname_error.style.visibility = "visible";
        lname.style.backgroundImage = "url('images/icon-error.svg')";
        lname.style.backgroundRepeat = "no-repeat";
        lname.style.backgroundPositionX = "95%";
        lname.style.backgroundPositionY = "center";
        is_valid = false;
    }else{
        lname_error.style.visibility = "hidden";
        lname.style.backgroundImage = "none";
    }

    // Email validation
    if(email.value != ""){
        if(!validate_email(email.value)){
            email_error.style.visibility = "visible";
            email.style.backgroundImage = "url('images/icon-error.svg')";
            email.style.backgroundRepeat = "no-repeat";
            email.style.backgroundPositionX = "95%";
            email.style.backgroundPositionY = "center";
            is_valid = false;                
        }else{
            email_error.style.visibility = "hidden";
            email.style.backgroundImage = "none";
    
        }
    }else{
        email_error.style.visibility = "visible";
        email.style.backgroundImage = "url('images/icon-error.svg')";
        email.style.backgroundRepeat = "no-repeat";
        email.style.backgroundPositionX = "95%";
        email.style.backgroundPositionY = "center";
        is_valid = false;                
    }

    // Password validation
    if(password.value == ""){
        password_error.style.visibility = "visible";
        password.style.backgroundImage = "url('images/icon-error.svg')";
        password.style.backgroundRepeat = "no-repeat";
        password.style.backgroundPositionX = "95%";
        password.style.backgroundPositionY = "center";
        is_valid = false;
    }else{
        password_error.style.visibility = "hidden";
        password.style.backgroundImage = "none";
    }
    
    return is_valid;
}