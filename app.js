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

// Apply style by adding/removing CSS class
function applyStyle(styleName) {
  var body = document.body;
  
  // Remove all style classes
  body.classList.remove('style-minimalism', 'style-dark', 'style-brutalism', 'style-cyberpunk');
  
  // Add appropriate class based on style name
  if (styleName.indexOf('Minimalism') !== -1) {
    body.classList.add('style-minimalism');
    showNotification('已切换至: 极简风格');
  }
  else if (styleName.indexOf('Dark') !== -1) {
    body.classList.add('style-dark');
    showNotification('已切换至: 深色模式');
  }
  else if (styleName.indexOf('Brutalism') !== -1) {
    body.classList.add('style-brutalism');
    showNotification('已切换至: 粗野主义');
  }
  else if (styleName.indexOf('Cyberpunk') !== -1) {
    body.classList.add('style-cyberpunk');
    showNotification('已切换至: 赛博朋克');
  }
  else {
    showNotification('该风格演示开发中...');
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
