/**
 * MAPS — Modern Academy for Professional Solutions
 * Landing Page Script
 * Handles: Navigation, Scroll effects, Intersection Observer animations,
 *          Mobile menu, Active nav links, Footer year.
 */

'use strict';

(function () {

  // ===================== DOM REFS =====================
  const navHeader     = document.getElementById('nav-header');
  const navToggle     = document.getElementById('nav-toggle');
  const mobileOverlay = document.getElementById('mobile-nav-overlay');
  const mobileClose   = document.getElementById('mobile-nav-close');
  const mobileLinks   = document.querySelectorAll('.mobile-nav-link');
  const navLinks      = document.querySelectorAll('.nav-link');
  const footerYear    = document.getElementById('footer-year');
  const allSections   = document.querySelectorAll('section[id]');
  const animateEls    = document.querySelectorAll('[data-animate]');

  // ===================== FOOTER YEAR =====================
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  // ===================== NAV SCROLL STATE =====================
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateScrollUI);
      ticking = true;
    }
  }

  function updateScrollUI() {
    const scrollY = window.scrollY;

    // Sticky nav shadow
    if (navHeader) {
      navHeader.classList.toggle('scrolled', scrollY > 20);
    }

    // Active nav link
    updateActiveLink(scrollY);

    ticking = false;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // ===================== ACTIVE NAV HIGHLIGHTING =====================
  function updateActiveLink(scrollY) {
    let current = '';
    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
    ) || 72;

    allSections.forEach(section => {
      const top = section.offsetTop - navH - 40;
      if (scrollY >= top) current = section.getAttribute('id');
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href === '#' + current) link.classList.add('active');
    });
  }

  // ===================== MOBILE NAV =====================
  function openMobileNav() {
    if (!mobileOverlay || !navToggle) return;
    mobileOverlay.classList.add('open');
    mobileOverlay.setAttribute('aria-hidden', 'false');
    navToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    const lines = navToggle.querySelectorAll('.hamburger-line');
    if (lines[0]) lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    if (lines[1]) lines[1].style.opacity   = '0';
    if (lines[2]) lines[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  }

  function closeMobileNav() {
    if (!mobileOverlay || !navToggle) return;
    mobileOverlay.classList.remove('open');
    mobileOverlay.setAttribute('aria-hidden', 'true');
    navToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    const lines = navToggle.querySelectorAll('.hamburger-line');
    if (lines[0]) lines[0].style.transform = '';
    if (lines[1]) lines[1].style.opacity   = '';
    if (lines[2]) lines[2].style.transform = '';
  }

  if (navToggle)     navToggle.addEventListener('click', openMobileNav);
  if (mobileClose)   mobileClose.addEventListener('click', closeMobileNav);
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', e => {
      if (e.target === mobileOverlay) closeMobileNav();
    });
  }

  mobileLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && mobileOverlay && mobileOverlay.classList.contains('open')) {
      closeMobileNav();
    }
  });

  // ===================== SMOOTH SCROLL =====================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();

      const navH = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--nav-h')
      ) || 72;

      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navH,
        behavior: 'smooth'
      });
    });
  });

  // ===================== SCROLL ANIMATIONS =====================
  function revealElement(el) {
    el.classList.add('in-view');
  }

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            revealElement(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    animateEls.forEach(el => {
      // If already in viewport on load, reveal immediately
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        revealElement(el);
      } else {
        observer.observe(el);
      }
    });
  } else {
    // Fallback: reveal all immediately
    animateEls.forEach(el => revealElement(el));
  }

  // ===================== PROGRAM CARD TILT =====================
  document.querySelectorAll('.program-card').forEach(card => {
    card.addEventListener('mousemove', function (e) {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.width  / 2;
      const cy    = rect.height / 2;
      const tiltX = ((e.clientY - rect.top  - cy) / cy) * 3;
      const tiltY = ((cx - (e.clientX - rect.left)) / cx) * 3;
      card.style.transform = `translateY(-4px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });

  // ===================== PREVENT HORIZONTAL OVERFLOW =====================
  document.body.style.overflowX = 'hidden';

})();
