document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function (event) {
        event.preventDefault(); 

        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (email === '' || password === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
            alert('Por favor, insira um email válido.');
            return;
        }

        if (password.length < 6) {
            alert('A senha deve ter no mínimo 6 caracteres.');
            return;
        }

        alert('Login efetuado com sucesso!');

        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        emailInput.value = '';
        passwordInput.value = '';
        
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