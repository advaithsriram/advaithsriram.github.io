// Custom Interactive Features
// ========================================================================

// Dark Mode Toggle
// ========================================================================
function initDarkMode() {

  // Create toggle button
  const toggle = document.createElement('button');
  toggle.className = 'dark-mode-toggle';
  toggle.setAttribute('aria-label', 'Toggle dark mode');
  
  const slider = document.createElement('div');
  slider.className = 'dark-mode-toggle-slider';
  
  toggle.appendChild(slider);
  document.body.appendChild(toggle);

  // Check for saved preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Remove loading class and apply proper dark mode class
  document.documentElement.classList.remove('dark-mode-loading');
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark-mode');
  }

  // Toggle functionality
  toggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      if (e.matches) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }
  });
}

// Project Filtering
// ========================================================================
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      const filter = this.dataset.filter;

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.classList.remove('hidden');
        } else {
          const tags = card.dataset.tags ? card.dataset.tags.split(',') : [];
          if (tags.includes(filter)) {
            card.classList.remove('hidden');
          } else {
            card.classList.add('hidden');
          }
        }
      });
    });
  });
}

// Interactive Timeline
// ========================================================================
function initTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach(item => {
    const content = item.querySelector('.timeline-content');
    if (!content) return;

    content.addEventListener('click', function() {
      item.classList.toggle('expanded');
    });
  });
}

// Back to Top Button
// ========================================================================
function initBackToTop() {
  // Create back to top button if it doesn't exist
  let backToTopBtn = document.querySelector('.back-to-top');
  
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
  }

  // Show/hide button based on scroll position
  function toggleBackToTop() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }

  // Scroll to top on click
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Listen for scroll events
  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop(); // Check initial state
}

// Sticky Header
// ========================================================================
function initStickyHeader() {
  const masthead = document.querySelector('.masthead');
  if (!masthead) return;

  function updateHeaderOnScroll() {
    if (window.pageYOffset > 50) {
      masthead.classList.add('scrolled');
    } else {
      masthead.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeaderOnScroll);
  updateHeaderOnScroll(); // Check initial state
}

// Intersection Observer for Scroll Animations
// ========================================================================
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  }
}

// Initialize all features when DOM is ready
// ========================================================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllFeatures);
} else {
  initAllFeatures();
}

function initAllFeatures() {
  initDarkMode();
  initProjectFilters();
  initTimeline();
  initBackToTop();
  initStickyHeader();
  initScrollAnimations();
}
