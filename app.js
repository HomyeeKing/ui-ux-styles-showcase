// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('.tag');
  const cards = document.querySelectorAll('.style-card');
  const body = document.body;

  // Filter tags
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
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
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const styleName = card.querySelector('h3').textContent.trim();
      applyStyle(styleName);
    });
  });
});

// Apply different styles based on selection
function applyStyle(styleName) {
  const body = document.body;
  
  // Remove all previous style classes
  body.className = '';
  
  // Apply style based on name
  if (styleName.includes('Dark')) {
    body.style.setProperty('--bg-primary', '#0a0a0f');
    body.style.setProperty('--bg-secondary', '#1a1a2e');
    body.style.setProperty('--text-primary', '#e4e4e7');
    body.style.setProperty('--card-bg', '#16213e');
  } else if (styleName.includes('Glass')) {
    body.style.setProperty('--bg-primary', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
    body.style.setProperty('--card-bg', 'rgba(255,255,255,0.1)');
    body.style.setProperty('--card-shadow', '0 8px 32px rgba(0,0,0,0.1)');
  } else if (styleName.includes('Neumorphism')) {
    body.style.setProperty('--bg-primary', '#e0e5ec');
    body.style.setProperty('--card-bg', '#e0e5ec');
    body.style.setProperty('--card-shadow', '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)');
  } else if (styleName.includes('Brutalism')) {
    body.style.setProperty('--bg-primary', '#ff6b6b');
    body.style.setProperty('--card-bg', '#ffffff');
    body.style.setProperty('--card-shadow', '8px 8px 0 #000');
    body.style.setProperty('--text-primary', '#000');
  } else if (styleName.includes('Cyberpunk')) {
    body.style.setProperty('--bg-primary', '#0a0a0f');
    body.style.setProperty('--bg-header', 'linear-gradient(135deg, #ff00cc 0%, #333399 100%)');
    body.style.setProperty('--text-primary', '#00ffff');
    body.style.setProperty('--card-bg', '#1a1a2e');
  } else if (styleName.includes('Aurora')) {
    body.style.setProperty('--bg-primary', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)');
    body.style.setProperty('--card-bg', 'rgba(255,255,255,0.9)');
  } else {
    // Reset to default
    body.style.removeProperty('--bg-primary');
    body.style.removeProperty('--bg-secondary');
    body.style.removeProperty('--bg-header');
    body.style.removeProperty('--text-primary');
    body.style.removeProperty('--card-bg');
    body.style.removeProperty('--card-shadow');
  }
  
  // Show notification
  showNotification(`已切换至: ${styleName}`);
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--card-bg);
    color: var(--text-primary);
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: var(--card-shadow);
    z-index: 1000;
    animation: slideIn 0.3s ease;
  `;
  notification.textContent = message;
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
