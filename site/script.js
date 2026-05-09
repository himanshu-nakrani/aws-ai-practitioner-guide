// ═══════════════════════════════════════════════════════════════
// AWS AI PRACTITIONER STUDY GUIDE - INTERACTIVE FEATURES
// ═══════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initCollapsibles();
  initProgressTracking();
  highlightActiveNav();
  initSmoothScroll();
  initKeyboardNav();
});

// ─── MOBILE MENU ───
function initMobileMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        menuBtn.focus();
      }
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
}

// ─── COLLAPSIBLE SECTIONS ───
function initCollapsibles() {
  const collapsibles = document.querySelectorAll('.collapsible');

  collapsibles.forEach((collapsible) => {
    const header = collapsible.querySelector('.collapsible-header');
    const content = collapsible.querySelector('.collapsible-content');

    if (header && content) {
      header.addEventListener('click', () => {
        const isOpen = collapsible.classList.toggle('open');
        header.setAttribute('aria-expanded', isOpen);
      });

      // Keyboard support
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });

      // Make header focusable
      header.setAttribute('tabindex', '0');
      header.setAttribute('role', 'button');
      header.setAttribute('aria-expanded', 'false');
    }
  });
}

// ─── PROGRESS TRACKING ───
function initProgressTracking() {
  const storageKey = 'aws-ai-practitioner-progress';

  // Load saved progress
  const savedProgress = JSON.parse(localStorage.getItem(storageKey) || '{}');

  // Initialize checkboxes
  const checkboxes = document.querySelectorAll('input[type="checkbox"][data-topic]');
  checkboxes.forEach((checkbox) => {
    const topic = checkbox.dataset.topic;
    if (savedProgress[topic]) {
      checkbox.checked = true;
    }

    checkbox.addEventListener('change', () => {
      savedProgress[topic] = checkbox.checked;
      localStorage.setItem(storageKey, JSON.stringify(savedProgress));
      updateProgressDisplay();
    });
  });

  updateProgressDisplay();
}

function updateProgressDisplay() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"][data-topic]');
  const total = checkboxes.length;
  const completed = Array.from(checkboxes).filter((cb) => cb.checked).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  const progressDisplay = document.querySelector('.progress-pill');
  if (progressDisplay) {
    progressDisplay.textContent = `${completed}/${total} topics (${percentage}%)`;
  }
}

// ─── HIGHLIGHT ACTIVE NAV ───
function highlightActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

// ─── SMOOTH SCROLL ───
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        // Update focus for accessibility
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  });
}

// ─── KEYBOARD NAVIGATION ───
function initKeyboardNav() {
  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Alt + H: Go to home
    if (e.altKey && e.key === 'h') {
      e.preventDefault();
      window.location.href = 'index.html';
    }

    // Alt + 1-5: Go to domain pages
    if (e.altKey && e.key >= '1' && e.key <= '5') {
      e.preventDefault();
      window.location.href = `domain${e.key}.html`;
    }

    // Alt + S: Go to services
    if (e.altKey && e.key === 's') {
      e.preventDefault();
      window.location.href = 'services.html';
    }

    // Alt + P: Go to practice
    if (e.altKey && e.key === 'p') {
      e.preventDefault();
      window.location.href = 'practice.html';
    }
  });
}

// ─── SEARCH FUNCTIONALITY (if search box exists) ───
function initSearch() {
  const searchInput = document.querySelector('#search-input');
  const searchResults = document.querySelector('#search-results');

  if (searchInput && searchResults) {
    let debounceTimer;

    searchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length < 2) {
          searchResults.innerHTML = '';
          return;
        }

        performSearch(query, searchResults);
      }, 300);
    });
  }
}

function performSearch(query, resultsContainer) {
  // Simple client-side search through page content
  const sections = document.querySelectorAll('section[id], .collapsible');
  const results = [];

  sections.forEach((section) => {
    const text = section.textContent.toLowerCase();
    if (text.includes(query)) {
      const title = section.querySelector('h2, h3')?.textContent || 'Section';
      const id = section.id || '';
      results.push({ title, id });
    }
  });

  if (results.length === 0) {
    resultsContainer.innerHTML = '<p>No results found</p>';
  } else {
    resultsContainer.innerHTML = results
      .map(
        (result) =>
          `<a href="#${result.id}" class="search-result">${result.title}</a>`
      )
      .join('');
  }
}

// ─── THEME TOGGLE (optional) ───
function initThemeToggle() {
  const themeToggle = document.querySelector('#theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// ─── COPY CODE BLOCKS ───
function initCodeCopy() {
  const codeBlocks = document.querySelectorAll('pre code');

  codeBlocks.forEach((block) => {
    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.textContent = 'Copy';
    button.setAttribute('aria-label', 'Copy code to clipboard');

    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(block.textContent);
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });

    block.parentElement.style.position = 'relative';
    block.parentElement.appendChild(button);
  });
}

// ─── EXPORT FUNCTIONS FOR EXTERNAL USE ───
window.awsStudyGuide = {
  initSearch,
  initThemeToggle,
  initCodeCopy,
};
