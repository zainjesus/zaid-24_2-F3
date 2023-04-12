const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const repeatPasswordInput = document.getElementById("reapit__password");
const checkPasswordButtons = document.querySelectorAll("#check__password");
const form = document.querySelector('form');
const header = document.getElementById("header");

const validateEmail = () => /^[a-z1-9]{3,20}@[a-z]{3,10}\.[a-z]{2,5}$/.test(emailInput.value);
const validatePassword = () => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+={[}\]|\\:;"'<,>.?/`~-]{8,}$/.test(passwordInput.value);
const validateRepeatPassword = () => repeatPasswordInput.value === passwordInput.value;


emailInput.addEventListener("input", () => emailInput.setCustomValidity(validateEmail() ? "" : "Пожалуйста, введите правильную почту"));
passwordInput.addEventListener("input", () => passwordInput.setCustomValidity(validatePassword() ? "" : "Пароль должен содержать минимум 8 символов, минимум одну заглавную букву, минимум одну строчную букву и миниум одну цифру"));
repeatPasswordInput.addEventListener("input", () => repeatPasswordInput.setCustomValidity(validateRepeatPassword() ? "" : "Пароли не совпадают"));

checkPasswordButtons.forEach((button) => {
    const passwordInput = button.previousElementSibling;
    button.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            button.querySelector("i").classList.remove("fa-eye");
            button.querySelector("i").classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            button.querySelector("i").classList.remove("fa-eye-slash");
            button.querySelector("i").classList.add("fa-eye");
        }
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    header.textContent = "Successfully!";
    setTimeout(() => {
        form.submit();
    }, 1500);
});
