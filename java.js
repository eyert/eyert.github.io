document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'usuario' && password === 'contraseña') {
    window.location.href = 'dashboard.html'; // Página de destino después del inicio de sesión exitoso
  } else {
    document.getElementById('login-error').textContent = 'Nombre de usuario o contraseña incorrectos.';
  }
});
