// validate.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Los campos usuario y contraseña no pueden estar vacíos.');
    } else {
        // Aquí se podría agregar el código para manejar el inicio de sesión exitoso
        window.location.href = './usuario.html';
    }
});