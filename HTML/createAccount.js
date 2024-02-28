// JavaScript Document
function validateForm() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;

    // Basic validation for login, password, and email
    if (login === "" || password === "" || email === "") {
        alert("Please fill in all required fields: Login, Password, and Email.");
        return false;
    }

    // Validate email format using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Additional optional field validation (if provided)
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var phone = document.getElementById("phone").value;

    if (street !== "" && city === "") {
        alert("If Street is provided, City must be filled in.");
        return false;
    }

    // Validate ZIP code format using a regular expression
    var zipRegex = /^\d{5}(?:-\d{4})?$/;
    if (zip !== "" && !zipRegex.test(zip)) {
        alert("Please enter a valid ZIP code.");
        return false;
    }

    // Validate phone number format using a regular expression
    var phoneRegex = /^\d{10}$/;
    if (phone !== "" && !phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    return true;	
}

