document.addEventListener('DOMContentLoaded', function () {
  // initial Glide.js 
  new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 2000, // 自动播放间隔时间，单位为毫秒 (2000ms = 2秒)
    hoverpause: true, // 鼠标悬停时暂停自动播放
    animationDuration: 800, // 动画持续时间，单位为毫秒 (800ms = 0.8秒)
    animationTimingFunc: 'ease-in-out' // 动画缓动函数
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
