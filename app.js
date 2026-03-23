// Filter functionality
document.addEventListener('DOMContentLoaded', () => {
  const tags = document.querySelectorAll('.tag');
  const cards = document.querySelectorAll('.style-card');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Update active state
      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      // Filter cards
      const category = tag.dataset.category;
      
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.classList.remove('hidden');
          // Add fade in animation
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
});
