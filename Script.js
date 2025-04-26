document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Default to index.html if path is '/'
  const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

  sidebarLinks.forEach(link => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (currentPage === linkPage) {
          link.classList.add('active');
      } else {
          link.classList.remove('active'); // Ensure others are not active
      }
  });
});