/* ================================================================
   PORTFOLIO — NAM SENA
   main.js
   ================================================================

   01. Page Loader
   02. Custom Cursor
   03. Navigation — scroll state, mobile toggle, active link
   04. Side Navigation Dots
   05. Scroll Progress Bar
   06. Scroll-triggered Reveal Animations
   07. Skills — group hover dimming
   08. Hero — subtle parallax on mousemove
   09. Smooth Scroll

   ================================================================ */


/* ----------------------------------------------------------------
   01. PAGE LOADER
   ---------------------------------------------------------------- */

window.addEventListener('load', () => {
  setTimeout(() => {
    const loader = document.getElementById('pageLoader');
    if (loader) loader.classList.add('hidden');
  }, 700);
});


/* ----------------------------------------------------------------
   02. CUSTOM CURSOR
   ---------------------------------------------------------------- */

const cursorDot  = document.getElementById('cursorDot');
const cursorRing = document.getElementById('cursorRing');

if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let rafId  = null;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top  = mouseY + 'px';
  });

  function animateRing() {
    const speed = 0.13;
    ringX += (mouseX - ringX) * speed;
    ringY += (mouseY - ringY) * speed;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover states
  const hoverTargets = document.querySelectorAll(
    'a, button, .works__item, .skills__item, .gcard, .project'
  );
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    cursorDot.style.opacity  = '0';
    cursorRing.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursorDot.style.opacity  = '1';
    cursorRing.style.opacity = '1';
  });
}


/* ----------------------------------------------------------------
   03. NAVIGATION
   ---------------------------------------------------------------- */

const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

// Solid background after scroll
function handleNavState() {
  if (window.scrollY > 60) {
    nav.classList.add('nav--solid');
  } else {
    nav.classList.remove('nav--solid');
  }
}

// Mobile toggle
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });

  navLinks.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Active link highlighting
const sectionIds = ['hero', 'about', 'projects', 'works', 'skills', 'experience', 'contact'];

function updateActiveNav() {
  const scrollMid = window.scrollY + window.innerHeight * 0.4;
  let current = sectionIds[0];

  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (section && scrollMid >= section.offsetTop) {
      current = id;
    }
  });

  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === `#${current}`);
  });
}


/* ----------------------------------------------------------------
   04. SIDE NAVIGATION DOTS
   ---------------------------------------------------------------- */

function updateSideNav() {
  const scrollMid = window.scrollY + window.innerHeight * 0.4;
  let currentIndex = 0;

  sectionIds.forEach((id, i) => {
    const section = document.getElementById(id);
    if (section && scrollMid >= section.offsetTop) {
      currentIndex = i;
    }
  });

  document.querySelectorAll('.side-nav__dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}


/* ----------------------------------------------------------------
   05. SCROLL PROGRESS BAR
   ---------------------------------------------------------------- */

const progressBar = document.getElementById('scrollProgress');

function updateScrollProgress() {
  if (!progressBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}


/* ----------------------------------------------------------------
   SCROLL EVENT — Batch all scroll handlers
   ---------------------------------------------------------------- */

window.addEventListener('scroll', () => {
  handleNavState();
  updateScrollProgress();
  updateActiveNav();
  updateSideNav();
}, { passive: true });

// Init on load
handleNavState();
updateSideNav();


/* ----------------------------------------------------------------
   06. SCROLL-TRIGGERED REVEAL ANIMATIONS
   ---------------------------------------------------------------- */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    const el = entry.target;

    // Stagger siblings that share the same parent
    const siblings = Array.from(el.parentElement.querySelectorAll('.reveal-item:not(.revealed)'));
    const ownIndex = siblings.indexOf(el);
    const delay    = Math.max(0, ownIndex * 80);

    setTimeout(() => {
      el.classList.add('revealed');
    }, delay);

    revealObserver.unobserve(el);
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.reveal-item').forEach(el => revealObserver.observe(el));


/* ----------------------------------------------------------------
   07. SKILLS — GROUP HOVER DIMMING
   ---------------------------------------------------------------- */

document.querySelectorAll('.skills__item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const list = item.closest('.skills__list');
    if (!list) return;
    list.querySelectorAll('.skills__item').forEach(other => {
      if (other !== item) other.style.opacity = '0.14';
    });
  });

  item.addEventListener('mouseleave', () => {
    const list = item.closest('.skills__list');
    if (!list) return;
    list.querySelectorAll('.skills__item').forEach(other => {
      other.style.opacity = ''; // revert to CSS data-level value
    });
  });
});


/* ----------------------------------------------------------------
   08. HERO — SUBTLE PARALLAX ON MOUSEMOVE
   ---------------------------------------------------------------- */

const heroSection = document.querySelector('.hero');
const heroTitle   = document.querySelector('.hero__title');

if (heroSection && heroTitle) {
  let currentX = 0, currentY = 0;
  let targetX  = 0, targetY  = 0;
  let isAnimating = false;

  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    targetX = ((e.clientX - rect.left) / rect.width  - 0.5) * 16;
    targetY = ((e.clientY - rect.top)  / rect.height - 0.5) * 8;

    if (!isAnimating) {
      isAnimating = true;
      animateParallax();
    }
  });

  heroSection.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
  });

  function animateParallax() {
    const ease = 0.06;
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    heroTitle.style.transform = `translate(${currentX}px, ${currentY}px)`;

    if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
      requestAnimationFrame(animateParallax);
    } else {
      isAnimating = false;
    }
  }
}


/* ----------------------------------------------------------------
   09. SMOOTH SCROLL FOR ANCHOR LINKS
   ---------------------------------------------------------------- */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
