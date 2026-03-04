/* ============================================================
   HENAD ONE — Scroll Reveal (IntersectionObserver)
   Meditative, slow fade-in on scroll
   ============================================================ */

(function () {
  'use strict';

  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // Make everything visible immediately
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  // IntersectionObserver for scroll reveals
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -60px 0px'
    }
  );

  document.querySelectorAll('.fade-in').forEach(function (el) {
    observer.observe(el);
  });
})();