document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const loginForm = document.getElementById('login-form'); 

    loginButton.addEventListener('click', function(event) {
        event.preventDefault();  

        const email = document.getElementById('email').value; 
        const password = document.getElementById('password').value;  

        if (email === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
        }else{
            alert('Login efetuado com sucesso!');
        }
    });
});

let showPassword = false;

const PasswordVisibility = () => {
    showPassword = !showPassword;
    const passwordField = document.getElementById('password');
    if (showPassword) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
};

document.getElementById('eye').addEventListener('click', PasswordVisibility);

const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye');

passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length > 0) {
        eyeIcon.style.display = 'block';
    } else {
        eyeIcon.style.display = 'none';
    }
});

eyeIcon.addEventListener('click', PasswordVisibility);