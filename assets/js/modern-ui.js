/**
 * Modern UI/UX Enhancements
 * Smooth animations, transitions, and interactive effects
 */

(function() {
  'use strict';

  // ─── SMOOTH SCROLL BEHAVIOR ─── 
  document.documentElement.style.scrollBehavior = 'smooth';

  // ─── NAVBAR / TOPBAR INTERACTIONS ─── 
  const topbar = document.getElementById('topbar-wrapper');
  const sidebar = document.getElementById('sidebar');
  const mask = document.getElementById('mask');
  const sidebarTrigger = document.getElementById('sidebar-trigger');
  const searchTrigger = document.getElementById('search-trigger');
  const searchWrapper = document.getElementById('search-wrapper');
  const searchInput = document.getElementById('search-input');
  const searchCleaner = document.getElementById('search-cleaner');
  const searchCancel = document.getElementById('search-cancel');
  const backToTop = document.getElementById('back-to-top');

  // ─── SIDEBAR TOGGLE ─── 
  if (sidebarTrigger) {
    sidebarTrigger.addEventListener('click', () => {
      sidebar?.classList.toggle('sidebar-open');
      mask?.classList.toggle('show');
    });
  }

  // Close sidebar when mask is clicked
  if (mask) {
    mask.addEventListener('click', () => {
      sidebar?.classList.remove('sidebar-open');
      mask.classList.remove('show');
    });
  }

  // Close sidebar when a nav link is clicked
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar?.classList.remove('sidebar-open');
      mask?.classList.remove('show');
    });
  });

  // ─── SEARCH FUNCTIONALITY ─── 
  if (searchTrigger && searchWrapper) {
    searchTrigger.addEventListener('click', () => {
      searchWrapper.classList.toggle('show');
      searchInput?.focus();
    });
  }

  // Close search on cancel
  if (searchCancel) {
    searchCancel.addEventListener('click', () => {
      searchWrapper?.classList.remove('show');
      searchInput?.value = '';
    });
  }

  // Clear search input
  if (searchCleaner) {
    searchCleaner.addEventListener('click', () => {
      searchInput.value = '';
      searchInput?.focus();
    });
  }

  // ─── TOPBAR SCROLL ANIMATION ─── 
  let lastScrollY = 0;
  let ticking = false;

  function updateTopbar() {
    if (window.scrollY > lastScrollY) {
      // Scrolling down - hide topbar
      topbar?.classList.add('topbar-up');
    } else {
      // Scrolling up - show topbar
      topbar?.classList.remove('topbar-up');
    }
    lastScrollY = window.scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateTopbar);
      ticking = true;
    }
  });

  // ─── BACK TO TOP BUTTON ─── 
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ─── 
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  document.querySelectorAll('.animate-fade-in, .animate-slide-in-up, .animate-slide-in-down').forEach(el => {
    observer.observe(el);
  });

  // ─── ACTIVE LINK HIGHLIGHTING ─── 
  function updateActiveLink() {
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      link.parentElement.classList.remove('active');
      if (link.getAttribute('href') === currentPath || 
          link.getAttribute('href').includes(currentPath.split('/')[1])) {
        link.parentElement.classList.add('active');
      }
    });
  }

  updateActiveLink();
  window.addEventListener('popstate', updateActiveLink);

  // ─── DARK MODE DETECTION AND TOGGLE ─── 
  function detectDarkMode() {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('theme-mode');
    
    if (savedMode) {
      applyTheme(savedMode);
    } else if (isDarkMode) {
      applyTheme('dark');
    }
  }

  function applyTheme(mode) {
    const html = document.documentElement;
    if (mode === 'dark') {
      html.setAttribute('mode', 'dark');
      localStorage.setItem('theme-mode', 'dark');
    } else {
      html.removeAttribute('mode');
      localStorage.setItem('theme-mode', 'light');
    }
  }

  // Check for theme toggle button
  const modeToggle = document.getElementById('mode-toggle');
  if (modeToggle) {
    modeToggle.addEventListener('click', () => {
      const currentMode = document.documentElement.getAttribute('mode');
      const newMode = currentMode === 'dark' ? 'light' : 'dark';
      applyTheme(newMode);
    });
  }

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme-mode')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });

  detectDarkMode();

  // ─── SMOOTH PAGE TRANSITIONS ─── 
  document.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = '1';
  });

  // ─── LOADING STATE ─── 
  window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.7';
  });

  // ─── RESIZE HANDLER ─── 
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Reposition any floating elements
      if (window.innerWidth > 1024) {
        sidebar?.classList.remove('sidebar-open');
        mask?.classList.remove('show');
      }
    }, 250);
  });

  // ─── KEYBOARD SHORTCUTS ─── 
  document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K for search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      searchWrapper?.classList.toggle('show');
      searchInput?.focus();
    }
    // Escape to close search/sidebar
    if (e.key === 'Escape') {
      searchWrapper?.classList.remove('show');
      sidebar?.classList.remove('sidebar-open');
      mask?.classList.remove('show');
    }
  });

  // ─── LAZY LOAD IMAGES ─── 
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // ─── EXTERNAL LINKS ─── 
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (link.hostname !== window.location.hostname) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // ─── PREVENT LAYOUT SHIFT ─── 
  document.documentElement.style.scrollPaddingTop = '80px';

  console.log('✨ Modern UI/UX enhancements loaded!');
})();
