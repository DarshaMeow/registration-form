const email = document.getElementById("email")
const password = document.getElementById("password")
const checkbox = document.getElementById("checkbox")

function resetEmailInput() {
    email.classList.remove(ERROR_BORDER)
    emailBlock.classList.remove(ERROR_BEFORE)
    emailLabel.classList.remove(ERROR_COLOR)
    emailSpan.classList.remove(ERROR)
    emailSpan.innerText = "error"
}

function resetPasswordInput() {
    password.classList.remove(ERROR_BORDER)
    passwordBlock.classList.remove(ERROR_BEFORE)
    passwordLabel.classList.remove(ERROR_COLOR)
    passwordSpan.classList.remove(ERROR)
    passwordSpan.innerText = "error"
}

function resetCheckbox() {
    checkbox.classList.remove(ERROR_BORDER)
    checkboxBlock.classList.remove(ERROR_BEFORE)
    checkboxLabel.classList.remove(ERROR_COLOR)
    checkboxSpan.classList.remove(ERROR)
    checkboxSpan.innerText = "error"
}

function ready() {
    resetEmailInput()
    resetPasswordInput()
    resetCheckbox()
}

document.addEventListener("DOMContentLoaded", ready)

const emailBlock = email.parentElement
const emailLabel = emailBlock.querySelector("label")
const emailSpan = emailBlock.querySelector("span")

const passwordBlock = password.parentElement
const passwordLabel = passwordBlock.querySelector("label")
const passwordSpan = passwordBlock.querySelector("span")

const checkboxBlock = checkbox.parentElement
const checkboxLabel = checkboxBlock.querySelector("label")
const checkboxSpan = checkboxBlock.querySelector("span")

const ERROR_BORDER = "error-border"
const ERROR_BEFORE = "error-before"
const ERROR_COLOR = "error-color"
const ERROR = "error"

const isValid = {
    isEmailValid: false,
    isPasswordValid: false,
    isCheckboxValid: false,
}

function validateEmail() {
    if (!email.value) {
        email.classList.add(ERROR_BORDER)
        emailBlock.classList.add(ERROR_BEFORE)
        emailLabel.classList.add(ERROR_COLOR)
        emailSpan.classList.add(ERROR)
        emailSpan.innerText = "Поле обязательно для заполнения"
        console.log("Поле обязательно для заполнения")
        isValid.isEmailValid = false
    } else if (validateEmailString(email.value) == false) {
        email.classList.add(ERROR_BORDER)
        emailBlock.classList.add(ERROR_BEFORE)
        emailLabel.classList.add(ERROR_COLOR)
        emailSpan.classList.add(ERROR)
        emailSpan.innerText = "Email невалидный"
        console.log("Email невалидный")
        isValid.isEmailValid = false
    } else {
        email.classList.remove(ERROR_BORDER)
        emailBlock.classList.remove(ERROR_BEFORE)
        emailLabel.classList.remove(ERROR_COLOR)
        emailSpan.classList.remove(ERROR)
        emailSpan.innerText = "error"
        isValid.isEmailValid = true
    }
}

function validatePassword() {
    if (!password.value) {
        password.classList.add(ERROR_BORDER)
        passwordBlock.classList.add(ERROR_BEFORE)
        passwordLabel.classList.add(ERROR_COLOR)
        passwordSpan.classList.add(ERROR)
        passwordSpan.innerText = "Поле обязательно для заполнения"
        console.log("Поле обязательно для заполнения")
        isValid.isPasswordValid = false
    } else if (password.value.length < 8) {
        password.classList.add(ERROR_BORDER)
        passwordBlock.classList.add(ERROR_BEFORE)
        passwordLabel.classList.add(ERROR_COLOR)
        passwordSpan.classList.add(ERROR)
        passwordSpan.innerText = "Пароль должен содержать как минимум 8 символов"
        console.log("Пароль должен содержать как минимум 8 символов")
        isValid.isPasswordValid = false
    } else {
        password.classList.remove(ERROR_BORDER)
        passwordBlock.classList.remove(ERROR_BEFORE)
        passwordLabel.classList.remove(ERROR_COLOR)
        passwordSpan.classList.remove(ERROR)
        passwordSpan.innerText = "error"
        isValid.isPasswordValid = true
    }
}

function validateChecked() {
    if (!checkbox.checked) {
        checkbox.classList.add(ERROR_BORDER)
        checkboxBlock.classList.add(ERROR_BEFORE)
        checkboxLabel.classList.add(ERROR_COLOR)
        checkboxSpan.classList.add(ERROR)
        checkboxSpan.innerText = "Поле обязательно для заполнения"
        console.log("Поле обязательно для заполнения")
        isValid.isCheckboxValid = false
    } else {
        checkbox.classList.remove(ERROR_BORDER)
        checkboxBlock.classList.remove(ERROR_BEFORE)
        checkboxLabel.classList.remove(ERROR_COLOR)
        checkboxSpan.classList.remove(ERROR)
        checkboxSpan.innerText = "error"
        isValid.isCheckboxValid = true
    }
}

function validateFrame(event) {
    event.preventDefault()
    validateEmail()
    validatePassword()
    validateChecked()

    if ( isValid.isEmailValid &&  isValid.isPasswordValid &&  isValid.isCheckboxValid) {
        console.log({
            email: email.value,
            password: password.value
        })
    }
}

function validateEmailString(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
