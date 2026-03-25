// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('App.js loaded');
  initFilters();
  initStyleCards();
});

// Initialize filter tags
function initFilters() {
  var tags = document.querySelectorAll('.tag');
  var cards = document.querySelectorAll('.style-card');
  
  tags.forEach(function(tag) {
    tag.addEventListener('click', function() {
      tags.forEach(function(t) { t.classList.remove('active'); });
      tag.classList.add('active');

      var category = tag.dataset.category;
      
      cards.forEach(function(card) {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = 'block';
          setTimeout(function() {
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.opacity = '0';
          setTimeout(function() {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Initialize style card clicks
function initStyleCards() {
  var cards = document.querySelectorAll('.style-card');
  console.log('Found', cards.length, 'cards');
  
  cards.forEach(function(card, index) {
    card.addEventListener('click', function(e) {
      var styleName = card.dataset.style;
      if (!styleName) return;
      
      console.log('Card clicked:', index, styleName);
      applyStyle(styleName);
    });
  });
}

// Style name to class mapping
const styleMapping = {
  // General Styles (1-49)
  'minimalism': 'style-minimalism',
  'neumorphism': 'style-neumorphism',
  'glassmorphism': 'style-glassmorphism',
  'brutalism': 'style-brutalism',
  '3d': 'style-3d',
  'vibrant': 'style-vibrant',
  'dark': 'style-dark',
  'accessible': 'style-accessible',
  'claymorphism': 'style-claymorphism',
  'aurora': 'style-aurora',
  'retro': 'style-retro',
  'flat': 'style-flat',
  'skeuomorphism': 'style-skeuomorphism',
  'liquid-glass': 'style-liquid-glass',
  'motion': 'style-motion',
  'micro': 'style-micro',
  'inclusive': 'style-inclusive',
  'zero': 'style-zero',
  'soft': 'style-soft',
  'neubrutalism': 'style-neubrutalism',
  'bento': 'style-bento',
  'y2k': 'style-y2k',
  'cyberpunk': 'style-cyberpunk',
  'organic': 'style-organic',
  'ai': 'style-ai',
  'memphis': 'style-memphis',
  'vaporwave': 'style-vaporwave',
  'dimensional': 'style-dimensional',
  'exaggerated': 'style-exaggerated',
  'kinetic': 'style-kinetic',
  'parallax': 'style-parallax',
  'swiss': 'style-swiss',
  'hud': 'style-hud',
  'pixel': 'style-pixel',
  'bento-grids': 'style-bento-grids',
  'spatial': 'style-spatial',
  'eink': 'style-eink',
  'genz': 'style-genz',
  'biomimetic': 'style-biomimetic',
  'anti': 'style-anti',
  'tactile': 'style-tactile',
  'nature': 'style-nature',
  'interactive-cursor': 'style-interactive-cursor',
  'voice': 'style-voice',
  '3d-product': 'style-3d-product',
  'gradient-mesh': 'style-gradient-mesh',
  'editorial': 'style-editorial',
  'chromatic': 'style-chromatic',
  'vintage': 'style-vintage',
  // Landing Page Styles (50-57)
  'hero': 'style-hero',
  'conversion': 'style-conversion',
  'feature': 'style-feature',
  'minimal-direct': 'style-minimal-direct',
  'social': 'style-social',
  'interactive-product': 'style-interactive-product',
  'trust': 'style-trust',
  'storytelling': 'style-storytelling',
  // Dashboard Styles (58-67)
  'data-dense': 'style-data-dense',
  'heatmap': 'style-heatmap',
  'executive': 'style-executive',
  'realtime': 'style-realtime',
  'drilldown': 'style-drilldown',
  'comparative': 'style-comparative',
  'predictive': 'style-predictive',
  'behavior': 'style-behavior',
  'financial': 'style-financial',
  'sales': 'style-sales'
};

// Style display names
const styleNames = {
  'minimalism': 'Minimalism & Swiss Style',
  'neumorphism': 'Neumorphism',
  'glassmorphism': 'Glassmorphism',
  'brutalism': 'Brutalism',
  '3d': '3D & Hyperrealism',
  'vibrant': 'Vibrant & Block-based',
  'dark': 'Dark Mode (OLED)',
  'accessible': 'Accessible & Ethical',
  'claymorphism': 'Claymorphism',
  'aurora': 'Aurora UI',
  'retro': 'Retro-Futurism',
  'flat': 'Flat Design',
  'skeuomorphism': 'Skeuomorphism',
  'liquid-glass': 'Liquid Glass',
  'motion': 'Motion-Driven',
  'micro': 'Micro-interactions',
  'inclusive': 'Inclusive Design',
  'zero': 'Zero Interface',
  'soft': 'Soft UI Evolution',
  'neubrutalism': 'Neubrutalism',
  'bento': 'Bento Box Grid',
  'y2k': 'Y2K Aesthetic',
  'cyberpunk': 'Cyberpunk UI',
  'organic': 'Organic Biophilic',
  'ai': 'AI-Native UI',
  'memphis': 'Memphis Design',
  'vaporwave': 'Vaporwave',
  'dimensional': 'Dimensional Layering',
  'exaggerated': 'Exaggerated Minimalism',
  'kinetic': 'Kinetic Typography',
  'parallax': 'Parallax Storytelling',
  'swiss': 'Swiss Modernism 2.0',
  'hud': 'HUD / Sci-Fi FUI',
  'pixel': 'Pixel Art',
   'bento-grids': 'Bento Grids',
  'spatial': 'Spatial UI (VisionOS)',
  'eink': 'E-Ink / Paper',
  'genz': 'Gen Z Chaos / Maximalism',
  'biomimetic': 'Biomimetic / Organic 2.0',
  'anti': 'Anti-Polish / Raw',
  'tactile': 'Tactile Digital',
  'nature': 'Nature Distilled',
  'interactive-cursor': 'Interactive Cursor',
  'voice': 'Voice-First Multimodal',
  '3d-product': '3D Product Preview',
  'gradient-mesh': 'Gradient Mesh / Aurora',
  'editorial': 'Editorial Grid / Magazine',
  'chromatic': 'Chromatic Aberration / RGB',
  'vintage': 'Vintage Analog / Retro Film',
  'hero': 'Hero-Centric Design',
  'conversion': 'Conversion-Optimized',
  'feature': 'Feature-Rich Showcase',
  'minimal-direct': 'Minimal & Direct',
  'social': 'Social Proof-Focused',
  'interactive-product': 'Interactive Product Demo',
  'trust': 'Trust & Authority',
  'storytelling': 'Storytelling-Driven',
  'data-dense': 'Data-Dense Dashboard',
  'heatmap': 'Heat Map Style',
  'executive': 'Executive Dashboard',
  'realtime': 'Real-Time Monitoring',
  'drilldown': 'Drill-Down Analytics',
  'comparative': 'Comparative Analysis',
  'predictive': 'Predictive Analytics',
  'behavior': 'User Behavior Analytics',
  'financial': 'Financial Dashboard',
  'sales': 'Sales Intelligence'
};

// Apply style by adding/removing CSS class
function applyStyle(styleName) {
  var body = document.body;
  
  // Remove all style classes
  var allClasses = Object.values(styleMapping);
  body.classList.remove(...allClasses);
  
  // Find matching style
  var matchedClass = styleMapping[styleName];
  var matchedName = styleNames[styleName] || styleName;
  
  if (matchedClass) {
    body.classList.add(matchedClass);
    showNotification('已切换至: ' + matchedName);
  } else {
    showNotification('该风格演示开发中: ' + styleName);
  }
}

// Show notification with enhanced animation
function showNotification(message) {
  var existing = document.querySelector('.style-notification');
  if (existing) existing.remove();
  
  var notification = document.createElement('div');
  notification.className = 'style-notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: #fff;
    padding: 16px 28px;
    border-radius: 12px;
    z-index: 10000;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    transform: translateX(100px);
    opacity: 0;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.2);
  `;
  
  document.body.appendChild(notification);
  
  // Trigger animation
  requestAnimationFrame(function() {
    notification.style.transform = 'translateX(0)';
    notification.style.opacity = '1';
  });
  
  setTimeout(function() {
    notification.style.transform = 'translateX(100px)';
    notification.style.opacity = '0';
    setTimeout(function() {
      notification.remove();
    }, 400);
  }, 2500);
}

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
  var cards = Array.from(document.querySelectorAll('.style-card:not(.hidden)'));
  var currentIndex = cards.findIndex(function(card) {
    return card === document.activeElement;
  });
  
  if (e.key === 'ArrowRight' && currentIndex < cards.length - 1) {
    cards[currentIndex + 1].focus();
    e.preventDefault();
  } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
    cards[currentIndex - 1].focus();
    e.preventDefault();
  } else if (e.key === 'Enter' && currentIndex >= 0) {
    cards[currentIndex].click();
  }
});

// Add touch feedback for mobile
document.querySelectorAll('.style-card, .tag').forEach(function(el) {
  el.addEventListener('touchstart', function() {
    this.style.transform = 'scale(0.98)';
  });
  el.addEventListener('touchend', function() {
    this.style.transform = '';
  });
});

// Add parallax effect on mouse move
document.addEventListener('mousemove', function(e) {
  var cards = document.querySelectorAll('.style-card');
  var mouseX = e.clientX / window.innerWidth - 0.5;
  var mouseY = e.clientY / window.innerHeight - 0.5;
  
  cards.forEach(function(card, index) {
    if (card.matches(':hover')) {
      var intensity = 10;
      card.style.transform = 'translateY(-8px) scale(1.02) perspective(1000px) rotateY(' + (mouseX * intensity) + 'deg) rotateX(' + (-mouseY * intensity) + 'deg)';
    }
  });
});

// Console easter egg
console.log('%c UI/UX Pro Max ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 24px; font-weight: bold; padding: 10px 20px; border-radius: 8px;');
console.log('%c 67 Styles Loaded ✨ ', 'color: #667eea; font-size: 14px;');
console.log('%c Click any card to switch styles! ', 'color: #666; font-size: 12px;');