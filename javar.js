document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Aquí puedes realizar validaciones adicionales antes de enviar los datos

  document.getElementById('registration-message').textContent = 'Registro exitoso. ¡Bienvenido, ' + username + '!';
});
