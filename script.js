const firstName = document.querySelector('.first')
const firstErrorIcon = document.querySelector('.icon-first')
const firstError = document.getElementById('error-first')

const lastName = document.querySelector('.last');
const lastErrorIcon = document.querySelector('.icon-last');
const lastError = document.getElementById('error-last');

const emailInput = document.querySelector('.email');
const emailIcon = document.querySelector('.icon-email');
const emailError = document.getElementById('error-email');

const passwordInput = document.querySelector('.password');
const passwordIcon = document.querySelector('.icon-password');
const passwordError = document.getElementById('error-password');

const submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', function() {
    if(firstName.value === '' || lastName.value === '' || emailInput.value === '' || passwordInput.value === '' || !emailInput.validity.valid) {
        formErrors();
    } else {
        window.location.reload();
    }
});

firstName.addEventListener('keydown', function(){
    firstName.classList.remove('error');
    firstErrorIcon.classList.add('hide');
    firstErrorIcon.classList.remove('show');
    firstError.classList.add('hide');
    firstError.classList.remove('show');
})

lastName.addEventListener('keydown', function() {
    lastName.classList.remove('error');
    lastErrorIcon.classList.add('hide');
    lastErrorIcon.classList.remove('show');
    lastError.classList.add('hide');
    lastError.classList.remove('show');
})

passwordInput.addEventListener('keydown', function() {
    passwordInput.classList.remove('error');
    passwordIcon.classList.add('hide');
    passwordIcon.classList.remove('show');
    passwordError.classList.add('hide');
    passwordError.classList.remove('show');
})

emailInput.addEventListener('keydown', function() {
    emailInput.classList.remove('error');
    emailIcon.classList.add('hide');
    emailIcon.classList.remove('show');
    emailError.classList.add('hide');
    emailError.classList.remove('show');
})

function formErrors() {
    // If 'First Name' is empty, throw error
    firstEmpty();

    // If 'Last Name' is empty, throw error
    lastEmpty();

    // If password is empty, throw error
    passwordEmpty();

    // If email is empty or improperly formatted, throw error
    emailEmpty();
}

// First name is empty
function firstEmpty() {
    if(firstName.value === '') {
        firstName.classList.add('error');
        firstErrorIcon.classList.add('show')
        firstErrorIcon.classList.remove('hide');
        firstError.classList.add('show')
        firstError.classList.remove('hide');
        firstName.placeholder = "";
    } else {
        firstName.classList.remove('error');
        firstErrorIcon.classList.remove('show')
        firstErrorIcon.classList.add('hide');
        firstError.classList.remove('show')
        firstError.classList.add('hide');
    }
}

// Last name is empty
function lastEmpty() {
    if(lastName.value === '') {
        lastName.classList.add('error');
        lastErrorIcon.classList.add('show')
        lastErrorIcon.classList.remove('hide');
        lastError.classList.add('show')
        lastError.classList.remove('hide');
        lastName.placeholder = "";
    } else {
        lastName.classList.remove('error');
        lastErrorIcon.classList.remove('show')
        lastErrorIcon.classList.add('hide');
        lastError.classList.remove('show')
        lastError.classList.add('hide');
    }
}

// Password is empty
function passwordEmpty() {
    if(passwordInput.value === '') {
        passwordInput.classList.add('error');
        passwordIcon.classList.add('show');
        passwordError.classList.add('show');
        passwordInput.placeholder = "";
    } else {
        passwordInput.classList.remove('error');
        passwordIcon.classList.remove('show');
        passwordError.classList.remove('show');
    }
}

// Email is empty
function emailEmpty() {
    if(emailInput.value === '' || !emailInput.validity.valid) {
        emailInput.classList.add('error');
        emailIcon.classList.add('show');
        emailError.classList.add('show');
        emailInput.placeholder = "";
    } else {
        emailInput.classList.remove('error');
        emailIcon.classList.remove('show');
        emailError.classList.remove('show');
    }
}
