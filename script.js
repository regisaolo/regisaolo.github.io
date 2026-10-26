/* Progressive enhancement: content and all links also work without JavaScript. */
(() => {
  'use strict';

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const smallScreen = window.matchMedia('(max-width: 760px)');

  if (toggle && nav) {
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
      nav.hidden = smallScreen.matches && !open;
    };
    const updateNavigation = () => {
      toggle.hidden = !smallScreen.matches;
      setOpen(false);
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    nav.addEventListener('click', (event) => {
      if (smallScreen.matches && event.target.closest('a')) {
        setOpen(false);
        // Move focus out of the collapsed navigation to the destination.
        const target = document.querySelector(event.target.closest('a').hash);
        if (target) {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
          target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });
        }
      }
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && smallScreen.matches && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });
    if (smallScreen.addEventListener) smallScreen.addEventListener('change', updateNavigation);
    else smallScreen.addListener(updateNavigation);
    updateNavigation();
  }

  const links = [...document.querySelectorAll('.site-nav a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  if ('IntersectionObserver' in window) {
    const visibleSections = new Set();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleSections.add(entry.target);
        else visibleSections.delete(entry.target);
      });
      const current = sections.find((section) => visibleSections.has(section));
      links.forEach((link) => {
        if (current && link.hash === `#${current.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-20% 0px -50% 0px', threshold: 0 });
    sections.forEach((section) => observer.observe(section));
  }

  const copyButton = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('#copy-status');
  if (copyButton && navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    let resetTimer;
    copyButton.addEventListener('click', async () => {
      clearTimeout(resetTimer);
      try {
        await navigator.clipboard.writeText(copyButton.dataset.email);
        copyButton.querySelector('span').textContent = 'Copied';
        copyStatus.textContent = 'Email address copied to clipboard.';
      } catch {
        copyStatus.textContent = 'Please select the email address above to copy it.';
      }
      resetTimer = setTimeout(() => {
        copyButton.querySelector('span').textContent = 'Copy email';
        copyStatus.textContent = '';
      }, 3000);
    });
  }

  const year = document.querySelector('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
