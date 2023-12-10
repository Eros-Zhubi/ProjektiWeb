//Please dissregard the comments, theyre there for perseritje purposes
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pwd');
const password2 = document.getElementById('pwdRepeat');

form.addEventListener('submit', e => {
    e.preventDefault(); // e nal default (submit) qe mos me u submit po me u validate

    validateInputs();
});

const setError = (element, message) => {        // i merr ni html element edhe ni error message
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidUsername = username => {
    const nameRegex = /^[a-zA-Z]{4,20}$/;   //username can be prej a ne z case insencitive edhe 4-20 char long
    return nameRegex.test(String(username).toLowerCase());
}

const isValidEmail = email => {     //email has to be email, duh
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const pwdValue = pwd.value.trim();
    const pwdRepeatValue = pwdRepeat.value.trim();          //trim removes space para/mas

    if(usernameValue === '') {      //checks user mos me kan zbrazt
        setError(username, 'Username is required');
    } else if (!isValidUsername(usernameValue)) {       //checks isValidUsername
        setError(username, 'Username is not valid');
    } else {
        setSuccess(username);
    }

    if(emailValue === '') {     //checks if empty
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {     //checks if valid
        setError(email, 'invalid Email');
    } else {
        setSuccess(email);
    }

    if(pwdValue === '') {       //checks empty
        setError(pwd, 'Password is required');
    } else if (pwdValue.length < 8 ) {      //checks over 8 char
        setError(pwd, 'Password must be atleast 8 characters')
    } else {
        setSuccess(pwd);
    }

    if(pwdRepeatValue === '') {     //checks empty
        setError(pwdRepeat, 'Please confirm your password');
    } else if (pwdRepeatValue !== pwdValue) {       //checks if passwords match
        setError(pwdRepeat, "Passwords dont match");
    } else {
        setSuccess(pwdRepeat);
    }

};
