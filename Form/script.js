function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function getCookie(name) {
    let nameEQ = name + "=";
    let cookiesArr = document.cookie.split(';');
    for (let i = 0; i < cookiesArr.length; i++) {
        let cookie = cookiesArr[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
        }
    }
    return null;
}

function validateForm() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let age = document.getElementById("age").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let phonePattern = /^[0-9]{10}$/;
    
    if (firstName.length < 4 || !/^[A-Za-z]+$/.test(firstName)) {
        alert("First name must contain only letters and be at least 4 characters long.");
        return;
    }
    if (lastName.length < 1 || !/^[A-Za-z]+$/.test(lastName)) {
        alert("Last name must contain only letters and be at least 1 character long.");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return;
    }
    if (!dob) {
        alert("Please enter a valid date of birth.");
        return;
    }
    if (!/^[0-9]{2}$/.test(age)) {
        alert("Age must be a 2-digit number.");
        return;
    }
    if (!gender) {
        alert("Please select a gender.");
        return;
    }
    if (!phonePattern.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return;
    }
    if (address.trim() === "") {
        alert("Address cannot be empty.");
        return;
    }

    // Store user details in cookies
    setCookie("firstName", firstName, 1);
    setCookie("lastName", lastName, 1);
    setCookie("email", email, 1);
    setCookie("dob", dob, 1);
    setCookie("age", age, 1);
    setCookie("gender", gender.value, 1);
    setCookie("phone", phone, 1);
    setCookie("address", address, 1);

    // Redirect to new page to show the data
    window.location.href = "details.html";
}
