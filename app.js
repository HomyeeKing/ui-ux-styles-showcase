// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('.tag');
  const cards = document.querySelectorAll('.style-card');

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

// Simple style configurations
const simpleStyles = {
  // 极简风格 - 白色背景，细边框
  'Minimalism': {
    bg: '#ffffff',
    header: '#f8f9fa',
    text: '#212529',
    card: '#ffffff',
    shadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #dee2e6'
  },
  // 深色模式 - 深蓝黑背景
  'Dark Mode': {
    bg: '#0a0a0f',
    header: '#161b22',
    text: '#e4e4e7',
    card: '#1a1a2e',
    shadow: '0 4px 6px rgba(0,0,0,0.3)',
    border: '1px solid #2d3748'
  }
};

// Apply style
function applyStyle(styleName) {
  const body = document.body;
  const header = document.querySelector('header');
  const cards = document.querySelectorAll('.style-card');
  
  // Check if it's a supported simple style
  let style = null;
  if (styleName.includes('Minimalism')) {
    style = simpleStyles['Minimalism'];
  } else if (styleName.includes('Dark')) {
    style = simpleStyles['Dark Mode'];
  }
  
  if (style) {
    // Apply to body
    body.style.background = style.bg;
    body.style.color = style.text;
    
    // Apply to header
    if (header) {
      header.style.background = style.header;
      header.style.color = style.text;
    }
    
    // Apply to cards
    cards.forEach(card => {
      card.style.background = style.card;
      card.style.boxShadow = style.shadow;
      card.style.border = style.border;
    });
    
    showNotification(`已切换至: ${styleName}`);
  } else {
    showNotification('该风格演示开发中...');
  }
}

// Show notification
function showNotification(message) {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();
  
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => notification.remove(), 2000);
}
