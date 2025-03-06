// Smooth scrolling
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
      // Adjust when the element should start fading in (e.g., once it's 100px above the bottom of the viewport)
      const revealPoint = 100;
      if (rect.top < window.innerHeight - revealPoint) {
        elem.classList.add('visible');
      }
    });
  }
  
  // Initial trigger in case elements are in view on load
  document.addEventListener('DOMContentLoaded', revealOnScroll);
  