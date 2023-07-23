// Fading in elements as they appear on the screen
const elements = document.querySelectorAll('.animate-fade-in');

const fadeInOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2,
};

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, fadeInOptions);

elements.forEach((element) => {
  fadeInObserver.observe(element);
});

