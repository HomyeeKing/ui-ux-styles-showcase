// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('App.js loaded');
  
  // Filter functionality
  const tags = document.querySelectorAll('.tag');
  const cards = document.querySelectorAll('.style-card');
  
  console.log('Found cards:', cards.length);

  // Filter tags
  tags.forEach(tag => {
    tag.addEventListener('click', function() {
      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      const category = tag.dataset.category;
      
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // Style card click - apply theme
  cards.forEach(function(card, index) {
    card.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const h3 = card.querySelector('h3');
      const styleName = h3 ? h3.textContent.trim() : '';
      
      console.log('Card clicked:', index, styleName);
      applyStyle(styleName);
    });
  });
});

// Style configurations
const styleConfigs = {
  'Minimalism': {
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f8f9fa',
    '--text-primary': '#212529',
    '--card-bg': '#ffffff',
    '--card-shadow': '0 1px 3px rgba(0,0,0,0.1)',
    '--border-color': '#dee2e6'
  },
  'Dark Mode': {
    '--bg-primary': '#0a0a0f',
    '--bg-secondary': '#161b22',
    '--text-primary': '#e4e4e7',
    '--card-bg': '#1a1a2e',
    '--card-shadow': '0 4px 6px rgba(0,0,0,0.3)',
    '--border-color': '#2d3748'
  }
};

// Apply style
function applyStyle(styleName) {
  console.log('Applying style:', styleName);
  
  const root = document.documentElement;
  let matchedStyle = null;
  
  // Find matching style
  for (const [key, config] of Object.entries(styleConfigs)) {
    if (styleName.includes(key)) {
      matchedStyle = config;
      break;
    }
  }
  
  if (matchedStyle) {
    // Apply CSS variables
    for (const [prop, value] of Object.entries(matchedStyle)) {
      root.style.setProperty(prop, value);
    }
    showNotification('风格已切换: ' + styleName);
  } else {
    showNotification('该风格演示开发中: ' + styleName);
  }
}

// Show notification
function showNotification(message) {
  // Remove existing notification
  const existing = document.querySelector('.style-notification');
  if (existing) existing.remove();
  
  // Create new notification
  const notification = document.createElement('div');
  notification.className = 'style-notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--card-bg, #fff);
    color: var(--text-primary, #333);
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: var(--card-shadow, 0 4px 6px rgba(0,0,0,0.1));
    z-index: 10000;
    font-family: sans-serif;
    font-size: 14px;
    animation: slideIn 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(style);
