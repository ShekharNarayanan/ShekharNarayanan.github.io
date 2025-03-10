// Smooth scrolling (not used in this version since there's no "Get in Touch" button, 
// but you can keep it for other nav links)
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Fade-in on scroll
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
const fadeElems = document.querySelectorAll('.fade-in-on-scroll');
fadeElems.forEach(elem => {
  const rect = elem.getBoundingClientRect();
  const revealPoint = 100;
  if (rect.top < window.innerHeight - revealPoint) {
    elem.classList.add('visible');
  }
});
}

// Initial trigger in case elements are in view on load
document.addEventListener('DOMContentLoaded', revealOnScroll);
