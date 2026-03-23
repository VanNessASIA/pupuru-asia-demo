/* pupuru asia — Redesign Proposal: script.js */

// ── Sticky header on scroll ──────────────────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ── Mobile hamburger menu ────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', nav.classList.contains('open'));
});
// Close on nav link click
nav.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// ── Scroll-in animation (IntersectionObserver) ──────────────
const animatables = document.querySelectorAll(
  '.service-card, .strength-item, .case-card, .company__info, .company__map, .section-header'
);
animatables.forEach(el => el.classList.add('fade-up'));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

animatables.forEach(el => observer.observe(el));

// ── Stagger children in grids ────────────────────────────────
['services__grid','strengths__grid','cases__grid'].forEach(cls => {
  const grid = document.querySelector('.' + cls);
  if (!grid) return;
  [...grid.children].forEach((child, i) => {
    child.style.transitionDelay = `${i * 100}ms`;
  });
});

// ── Smooth active nav highlight on scroll ───────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
}, { passive: true });

// ── Contact form: basic client-side validation ────────────────
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      field.style.borderColor = field.value.trim() ? '' : '#FF6060';
      if (!field.value.trim()) valid = false;
    });
    if (valid) {
      // PLACEHOLDER: Replace with actual form submission (Formspree, backend API, etc.)
      alert('お問い合わせありがとうございます。\n担当者より2営業日以内にご連絡いたします。');
      form.reset();
    } else {
      alert('必須項目を入力してください。');
    }
  });
}
