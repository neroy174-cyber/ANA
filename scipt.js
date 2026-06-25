// Additional JavaScript functionality for INKGLOW frontend

// Header scroll effect + mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.boxShadow = 'none';
      }
    });
  }

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

function openWhatsApp(message) {
  const phoneNumber = '212659436806';
  const encodedMessage = encodeURIComponent(String(message || ''));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

function handleFormSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name')?.value || '';
  const phone = document.getElementById('phone')?.value || '';
  const email = document.getElementById('email')?.value || '';

  const message = `Bonjour, je m'appelle ${name}. Mon numéro est ${phone} et mon email est ${email}. Je souhaite passer commande ou obtenir plus d'informations sur vos produits INKGLOW.`;

  openWhatsApp(message);
  event.target.reset();
}



