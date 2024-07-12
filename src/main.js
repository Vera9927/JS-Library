document.addEventListener('DOMContentLoaded', function () {
  // initial Glide.js 
  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 2000, 
    hoverpause: true, 
    animationDuration: 800, 
    animationTimingFunc: 'ease-in-out' 
  }).mount();

  // initial Lightbox2 
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
});

// GSAP and Intersection Observer
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");
  const bestsellerSection = document.getElementById("bestseller");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        gsap.to(cards, {
          duration: 1,
          opacity: 1,
          y: 0,
          stagger: 0.2
        });
        observer.unobserve(bestsellerSection); // Stop observing once the animation is triggered
      }
    });
  }, {
    threshold: 0.1 // Trigger animation when 10% of the section is in view
  });

  observer.observe(bestsellerSection);
});


// Parsley form validation-----------------
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contact-form');
  
  form.addEventListener('submit', function(event) {
      if (!form.parsley().isValid()) {
          event.preventDefault();
      }
  });
});


// mobile, Burger Menu replace navbar
document.querySelector('.burger-menu').addEventListener('click', function() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.style.display === 'none' ? navLinks.style.display = 'block' : navLinks.style.display = 'none';
});
