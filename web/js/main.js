/* ============================================================
   AWS AI PRACTITIONER STUDY GUIDE — JAVASCRIPT
   Animations, interactions, and enhancements
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initAnimations();
  initNavigation();
  initScrollEffects();
  initWeightBars();
  initTimelineHover();
  initMobileNav();
});

/* ---------- Entrance Animations ---------- */
function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe domain cards
  document.querySelectorAll('.domain-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s`;
    observer.observe(card);
  });

  // Observe stat cards
  document.querySelectorAll('.stat-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(16px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Observe code cards
  document.querySelectorAll('.code-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Observe timeline items
  document.querySelectorAll('.timeline-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-16px)';
    item.style.transition = `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s`;
    observer.observe(item);
  });

  // Observe concept groups
  document.querySelectorAll('.concept-group').forEach((group, index) => {
    group.style.opacity = '0';
    group.style.transform = 'translateY(16px)';
    group.style.transition = `opacity 0.4s ease ${index * 0.05}s, transform 0.4s ease ${index * 0.05}s`;
    observer.observe(group);
  });

  // Observe resource cards
  document.querySelectorAll('.resource-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.4s ease ${index * 0.08}s, transform 0.4s ease ${index * 0.08}s`;
    observer.observe(card);
  });
}

/* ---------- Navigation ---------- */
function initNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.domain-content-section');

  // Smooth scroll on nav click
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const headerOffset = 120;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Update active nav on scroll
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${id}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  });

  sections.forEach(section => navObserver.observe(section));
}

/* ---------- Scroll Effects ---------- */
function initScrollEffects() {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        
        if (heroContent && scrolled < 600) {
          heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
          heroContent.style.opacity = 1 - (scrolled / 500);
        }
        
        // Header background on scroll
        const header = document.querySelector('.site-header');
        if (header) {
          if (scrolled > 50) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        }
        
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ---------- Weight Bar Animation ---------- */
function initWeightBars() {
  const weightObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.weight-fill');
        if (bar) {
          const weight = entry.target.getAttribute('data-weight');
          bar.style.setProperty('--fill-width', `${weight}%`);
          bar.style.width = `${weight}%`;
        }
        weightObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.domain-card').forEach(card => {
    weightObserver.observe(card);
  });
}

/* ---------- Timeline Hover Effect ---------- */
function initTimelineHover() {
  document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.phase-badge').style.transform = 'scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
      item.querySelector('.phase-badge').style.transform = 'scale(1)';
    });
  });
}

/* ---------- Mobile Navigation ---------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const navPanel = document.querySelector('.mobile-nav-panel');

  if (!toggleBtn || !navPanel) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navPanel.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('click', (e) => {
    if (navPanel.classList.contains('open') &&
        !toggleBtn.contains(e.target) &&
        !navPanel.contains(e.target)) {
      navPanel.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navPanel.classList.contains('open')) {
      navPanel.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      toggleBtn.focus();
    }
  });

  navPanel.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        e.preventDefault();
        navPanel.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        const headerOffset = 80;
        const elementPosition = targetSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ---------- Add CSS for animated elements ---------- */
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) translateX(0) !important;
  }
  
  .site-header.scrolled {
    background: rgba(10, 10, 15, 0.95);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  
  .hero-content {
    will-change: transform, opacity;
  }
`;
document.head.appendChild(style);

/* ---------- Copy to Clipboard Helper ---------- */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('Copied to clipboard!');
  }).catch(() => {
    showToast('Failed to copy', 'error');
  });
}

/* ---------- Toast Notification ---------- */
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: calc(24px + ${getComputedStyle(document.documentElement).getPropertyValue('--safe-area-bottom') || '0px'});
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: ${type === 'success' ? '#10b981' : '#ef4444'};
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    font-family: 'Space Mono', monospace;
    font-size: 13px;
    z-index: 10000;
    transition: transform 0.3s ease;
  `;
  document.body.appendChild(toast);
  
  requestAnimationFrame(() => {
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  
  setTimeout(() => {
    toast.style.transform = 'translateX(-50%) translateY(100px)';
    setTimeout(() => toast.remove(), 300);
  }, 2000);
}
