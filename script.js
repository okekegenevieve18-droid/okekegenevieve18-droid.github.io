(() => {
  const body = document.body;
  body.classList.add('js-ready');

  const menuButton = document.querySelector('.menu-toggle');
  const siteMenu = document.querySelector('#site-menu');
  const navLinks = siteMenu ? siteMenu.querySelectorAll('a') : [];

  if (menuButton && siteMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = siteMenu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        siteMenu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const filterButtons = document.querySelectorAll('.filter-button');
  const projectCards = document.querySelectorAll('.project-card');
  const emptyState = document.querySelector('#empty-state');
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      let visibleCount = 0;
      projectCards.forEach((card) => {
        const visible = filter === 'all' || card.dataset.category === filter;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (emptyState) emptyState.hidden = visibleCount !== 0;
    });
  });

  const lightbox = document.querySelector('#lightbox');
  const lightboxImage = document.querySelector('#lightbox-image');
  const lightboxTitle = document.querySelector('#lightbox-title');
  const lightboxClose = document.querySelector('.lightbox-close');
  let lastTrigger = null;

  const closeLightbox = () => {
    if (!lightbox) return;
    if (typeof lightbox.close === 'function' && lightbox.open) lightbox.close();
    else lightbox.removeAttribute('open');
    body.classList.remove('no-scroll');
    if (lastTrigger) lastTrigger.focus();
  };

  document.querySelectorAll('.image-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      if (!lightbox || !lightboxImage) return;
      lastTrigger = trigger;
      lightboxImage.src = trigger.dataset.image;
      lightboxImage.alt = trigger.dataset.caption || 'Project screenshot';
      if (lightboxTitle) lightboxTitle.textContent = trigger.dataset.caption || '';
      body.classList.add('no-scroll');
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
      else lightbox.setAttribute('open', '');
      if (lightboxClose) lightboxClose.focus();
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox && lightbox.open) closeLightbox();
  });
})();
