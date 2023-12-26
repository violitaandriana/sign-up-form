// Validation Password, ketika diketik
// min 8, max 20, harus ada angka, special char, uppercase letter
// password = confirm password

let password = document.getElementById("user_password");
let confirmPassword = document.getElementById("confirm_password");
let checkPassword = document.getElementById("check_password");
let checkConfirmPassword = document.getElementById("check_confirm_password");
let phoneNumber = document.getElementById("phone_number");
let checkNumber = document.getElementById("check_number");

let passwordRegex = /(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{8,20}$/;
password.addEventListener("keyup", () => {
    if (!password.value.match(passwordRegex)) {
        checkPassword.textContent = "Must contain min. 8 characters with number, special characters, and uppercase letter";
        return;
    }
    checkPassword.textContent = '';
});

confirmPassword.addEventListener("keyup", () => {
    if (!confirmPassword.value.match(password.value)) {
        checkConfirmPassword.textContent = "Password do not match";
        return;
    }
    checkConfirmPassword.textContent = '';
});

// Phone Number
// +62, 0
// ^(\+62|62|0)8[1-9][0-9]{6,9}$ atau ^(\+62|08)\d{9,11}$
let numberRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
phoneNumber.addEventListener("keyup", () => {
    if (!phoneNumber.value.match(numberRegex)) {
        checkNumber.textContent = "Prefix must be 0 or +62"
        return;
    }
    checkNumber.textContent = '';
});