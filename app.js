// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('App.js loaded successfully');
  
  initFilters();
  initStyleCards();
});

// Initialize filter tags
function initFilters() {
  const tags = document.querySelectorAll('.tag');
  const cards = document.querySelectorAll('.style-card');
  
  tags.forEach(function(tag) {
    tag.addEventListener('click', function() {
      // Update active state
      tags.forEach(function(t) { t.classList.remove('active'); });
      tag.classList.add('active');

      const category = tag.dataset.category;
      
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
  const cards = document.querySelectorAll('.style-card');
  console.log('Found', cards.length, 'cards');
  
  cards.forEach(function(card, index) {
    card.addEventListener('click', function(e) {
      console.log('Card', index, 'clicked');
      
      const h3 = card.querySelector('h3');
      if (!h3) {
        console.log('No h3 found');
        return;
      }
      
      const styleName = h3.textContent.trim();
      console.log('Style name:', styleName);
      
      applyStyle(styleName);
    });
  });
}

// Apply style directly to elements
function applyStyle(styleName) {
  console.log('Applying style:', styleName);
  
  const body = document.body;
  const header = document.querySelector('header');
  const cards = document.querySelectorAll('.style-card');
  
  // Minimalism style
  if (styleName.indexOf('Minimalism') !== -1) {
    console.log('Applying Minimalism');
    body.style.backgroundColor = '#ffffff';
    body.style.color = '#212529';
    
    if (header) {
      header.style.background = '#f8f9fa';
      header.style.color = '#212529';
    }
    
    cards.forEach(function(card) {
      card.style.backgroundColor = '#ffffff';
      card.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
      card.style.border = '1px solid #dee2e6';
    });
    
    showNotification('已切换至: 极简风格');
  }
  // Dark Mode style
  else if (styleName.indexOf('Dark') !== -1) {
    console.log('Applying Dark Mode');
    body.style.backgroundColor = '#0a0a0f';
    body.style.color = '#e4e4e7';
    
    if (header) {
      header.style.background = '#161b22';
      header.style.color = '#e4e4e7';
    }
    
    cards.forEach(function(card) {
      card.style.backgroundColor = '#1a1a2e';
      card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.3)';
      card.style.border = '1px solid #2d3748';
    });
    
    showNotification('已切换至: 深色模式');
  }
  // Brutalism style
  else if (styleName.indexOf('Brutalism') !== -1) {
    console.log('Applying Brutalism');
    body.style.backgroundColor = '#ff6b6b';
    body.style.color = '#000000';
    
    if (header) {
      header.style.background = '#ff6b6b';
      header.style.color = '#000000';
    }
    
    cards.forEach(function(card) {
      card.style.backgroundColor = '#ffffff';
      card.style.boxShadow = '8px 8px 0 #000000';
      card.style.border = '3px solid #000000';
    });
    
    showNotification('已切换至: 粗野主义');
  }
  // Cyberpunk style
  else if (styleName.indexOf('Cyberpunk') !== -1) {
    console.log('Applying Cyberpunk');
    body.style.backgroundColor = '#0a0a0f';
    body.style.color = '#00ffff';
    
    if (header) {
      header.style.background = 'linear-gradient(135deg, #ff00cc 0%, #333399 100%)';
      header.style.color = '#ffffff';
    }
    
    cards.forEach(function(card) {
      card.style.backgroundColor = '#1a1a2e';
      card.style.boxShadow = '0 0 20px rgba(0,255,255,0.3)';
      card.style.border = '1px solid #00ffff';
    });
    
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
  notification.style.cssText = 'position:fixed;top:20px;right:20px;background:#333;color:#fff;padding:15px 25px;border-radius:8px;z-index:10000;font-family:sans-serif;font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,0.3);';
  
  document.body.appendChild(notification);
  
  setTimeout(function() {
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s';
    setTimeout(function() {
      notification.remove();
    }, 300);
  }, 2000);
}
