// Obtén todos los enlaces de noticias
const newsLinks = document.querySelectorAll('article a');

// Recorre cada enlace y agrega un evento de clic
newsLinks.forEach(link => {
  link.addEventListener('click', redirectToPage);
});

// Función para redirigir a la página
function redirectToPage(event) {
  // Evita que el enlace realice la acción predeterminada de navegación
  event.preventDefault();

  // Obtiene el atributo 'href' del enlace
  const pageURL = this.getAttribute('href');

  // Redirige a la página especificada
  window.location.href = pageURL;
}