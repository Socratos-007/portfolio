// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Fade-in animation for sections on scroll
const sections = document.querySelectorAll('.section');

const fadeInOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, fadeInOptions);

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  sectionObserver.observe(section);
});

// Add fade-in class for CSS animation
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// Hover animation for skill and project cards
const cards = document.querySelectorAll('.skill-card, .project-card');
cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
    card.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
  });
});

// Typing animation for hero section
const heroTitle = document.querySelector('.hero h2');
const heroText = 'Socratos-007';
let i = 0;

function typeWriter() {
  if (i < heroText.length) {
    heroTitle.textContent = heroText.slice(0, i + 1);
    i++;
    setTimeout(typeWriter, 100);
  }
}

window.addEventListener('load', () => {
  heroTitle.textContent = '';
  typeWriter();
});

// Parallax effect for hero section background
const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset;
  hero.style.backgroundPositionY = `${scrollPosition * 0.3}px`;
});

// Animate contact links on hover
const contactLinks = document.querySelectorAll('.contact-links a');
contactLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.transform = 'scale(1.1)';
    link.style.color = '#666';
  });
  link.addEventListener('mouseleave', () => {
    link.style.transform = 'scale(1)';
    link.style.color = '#1a1a1a';
  });
  link.style.transition = 'transform 0.2s ease, color 0.2s ease';
});

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.width = '0';
progressBar.style.height = '3px';
progressBar.style.background = '#1a1a1a';
progressBar.style.zIndex = '1000';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  progressBar.style.width = `${scrollPercentage}%`;
});