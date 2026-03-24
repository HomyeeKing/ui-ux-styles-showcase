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
      var h3 = card.querySelector('h3');
      if (!h3) return;
      
      var styleName = h3.textContent.trim();
      console.log('Card clicked:', index, styleName);
      
      applyStyle(styleName);
    });
  });
}

// Style name to class mapping
const styleMapping = {
  'Minimalism': 'style-minimalism',
  'Neumorphism': 'style-neumorphism',
  'Glassmorphism': 'style-glassmorphism',
  'Brutalism': 'style-brutalism',
  '3D': 'style-3d',
  'Vibrant': 'style-vibrant',
  'Dark': 'style-dark',
  'Accessible': 'style-accessible',
  'Claymorphism': 'style-claymorphism',
  'Aurora': 'style-aurora',
  'Retro': 'style-retro',
  'Flat': 'style-flat',
  'Skeuomorphism': 'style-skeuomorphism',
  'Liquid': 'style-liquid-glass',
  'Motion': 'style-motion',
  'Micro': 'style-micro',
  'Inclusive': 'style-inclusive',
  'Zero': 'style-zero',
  'Soft': 'style-soft',
  'Neubrutalism': 'style-neubrutalism',
  'Bento': 'style-bento',
  'Y2K': 'style-y2k',
  'Cyberpunk': 'style-cyberpunk',
  'Organic': 'style-organic',
  'AI-Native': 'style-ai',
  'Memphis': 'style-memphis',
  'Vaporwave': 'style-vaporwave',
  'Dimensional': 'style-dimensional',
  'Exaggerated': 'style-exaggerated',
  'Kinetic': 'style-kinetic',
  'Parallax': 'style-parallax',
  'Swiss': 'style-swiss',
  'HUD': 'style-hud',
  'Pixel': 'style-pixel',
  'Spatial': 'style-spatial',
  'E-Ink': 'style-eink',
  'Gen Z': 'style-genz',
  'Biomimetic': 'style-biomimetic',
  'Anti-Polish': 'style-anti',
  'Tactile': 'style-tactile',
  'Nature': 'style-nature',
  'Interactive': 'style-interactive',
  'Voice': 'style-voice',
  'Gradient Mesh': 'style-gradient',
  'Editorial': 'style-editorial',
  'Chromatic': 'style-chromatic',
  'Vintage': 'style-vintage',
  'Hero': 'style-hero',
  'Conversion': 'style-conversion',
  'Feature': 'style-feature',
  'Minimal & Direct': 'style-minimal-direct',
  'Social': 'style-social',
  'Interactive Product': 'style-interactive-product',
  'Trust': 'style-trust',
  'Storytelling': 'style-storytelling',
  'Data-Dense': 'style-data',
  'Heat': 'style-heat',
  'Executive': 'style-executive',
  'Real-Time': 'style-realtime',
  'Drill-Down': 'style-drill',
  'Comparative': 'style-comparative',
  'Predictive': 'style-predictive',
  'User Behavior': 'style-behavior',
  'Financial': 'style-financial',
  'Sales': 'style-sales'
};

// Apply style by adding/removing CSS class
function applyStyle(styleName) {
  var body = document.body;
  
  // Remove all style classes
  var allClasses = Object.values(styleMapping);
  body.classList.remove(...allClasses);
  
  // Find matching style
  var matchedClass = null;
  var matchedName = null;
  
  for (var key in styleMapping) {
    if (styleName.indexOf(key) !== -1) {
      matchedClass = styleMapping[key];
      matchedName = key;
      break;
    }
  }
  
  if (matchedClass) {
    body.classList.add(matchedClass);
    showNotification('已切换至: ' + matchedName);
  } else {
    showNotification('该风格演示开发中: ' + styleName);
  }
}

// Show notification
function showNotification(message) {
  var existing = document.querySelector('.style-notification');
  if (existing) existing.remove();
  
  var notification = document.createElement('div');
  notification.className = 'style-notification';
  notification.textContent = message;
  notification.style.cssText = 'position:fixed;top:20px;right:20px;background:#333;color:#fff;padding:15px 25px;border-radius:8px;z-index:10000;font-family:sans-serif;font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,0.3);transition:opacity 0.3s;';
  
  document.body.appendChild(notification);
  
  setTimeout(function() {
    notification.style.opacity = '0';
    setTimeout(function() {
      notification.remove();
    }, 300);
  }, 2000);
}
