// ✅ Scroll Animation for fade-in sections
const faders = document.querySelectorAll('.fade-in');

function handleScroll() {
  const triggerBottom = window.innerHeight * 0.9;
  faders.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

// ✅ Infinite Progress Loop Animation
const progressBars = document.querySelectorAll('.progress');

function loopProgressBars() {
  progressBars.forEach(bar => {
    const width = bar.style.width;

    bar.style.transition = 'none';
    bar.style.width = '0%';

    setTimeout(() => {
      bar.style.transition = 'width 2s ease';
      bar.style.width = width;
    }, 100);
  });

  setTimeout(loopProgressBars, 6000); // repeat forever every 6s
}

window.addEventListener('load', loopProgressBars);

// ✅ Typing Effect (infinite loop)
window.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector(".typewrite");
  if (!el) return;

  const texts = el.getAttribute("data-text").split('|');
  let i = 0;
  let j = 0;
  let isDeleting = false;
  let current = '';

  function type() {
    current = texts[i];

    if (!isDeleting) {
      el.textContent = current.substring(0, j++) + '|';
      if (j > current.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      }
    } else {
      el.textContent = current.substring(0, j--) + '|';
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % texts.length;
      }
    }

    const speed = isDeleting ? 60 : 120;
    setTimeout(type, speed);
  }

  type();
});
