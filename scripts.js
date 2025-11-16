


// Smooth scroll for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1); // Remove #
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// CTA button click
document.querySelector('.cta').addEventListener('click', () => {
  alert("Let's check out the work!");
  // You can also redirect: window.location.href = "#portfolio";
});

// Stat Counter Animation
const statElements = document.querySelectorAll('.stat strong');

function animateStats() {
  statElements.forEach(stat => {
    const target = +stat.innerText.replace(/[^\d]/g, '');
    let count = 0;
    const increment = Math.ceil(target / 50);

    const update = () => {
      count += increment;
      if (count > target) count = target;
      stat.innerText = count + (stat.innerText.includes('k') ? 'k+' : '');
      if (count < target) requestAnimationFrame(update);
    };

    update();
  });
}

// Trigger animation when stats section is in view
const statsSection = document.querySelector('.stats');
let statsAnimated = false;

window.addEventListener('scroll', () => {
  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && !statsAnimated) {
    animateStats();
    statsAnimated = true;
  }
});
