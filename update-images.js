// Update images for all 67 styles with matching Unsplash images
const styleImages = {
  // General Styles
  'minimalism': ['photo-1494438639946-1ebd1d20bf85', 'photo-1507721999472-8ed4421c4af2'], // White, clean
  'neumorphism': ['photo-1618005182384-a83a8bd57fbe', 'photo-1558591710-4b4a1ae0f04d'], // Soft, subtle
  'glassmorphism': ['photo-1550684848-fac1c5b4e853', 'photo-1614850523459-c2f4c699c52e'], // Glass, blur
  'brutalism': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Concrete, bold
  '3d': ['photo-1633356122544-f134324a6cee', 'photo-1614732415006-6a6f4b749526'], // 3D, depth
  'vibrant': ['photo-1541701494587-cb58502866ab', 'photo-1558470598-a5dda9640f68'], // Colorful, vibrant
  'dark': ['photo-1519681393784-d120267933ba', 'photo-1534796636912-3b95b3ab5986'], // Dark, night
  'accessible': ['photo-1573164713714-d95e436ab8d6', 'photo-1586717791821-3f44a5638d48'], // Clean, readable
  'claymorphism': ['photo-1558591710-4b4a1ae0f04d', 'photo-1614850523459-c2f4c699c52e'], // Soft, rounded
  'aurora': ['photo-1534796636912-3b95b3ab5986', 'photo-1550684848-fac1c5b4e853'], // Gradient, colorful
  'retro': ['photo-1550745165-9bc0b252726f', 'photo-1544256718-3bcf237f3974'], // Retro, neon
  'flat': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Flat, simple
  'skeuomorphism': ['photo-1586717791821-3f44a5638d48', 'photo-1573164713714-d95e436ab8d6'], // Realistic
  'liquid-glass': ['photo-1550684848-fac1c5b4e853', 'photo-1614850523459-c2f4c699c52e'], // Liquid, glass
  'motion': ['photo-1541701494587-cb58502866ab', 'photo-1558470598-a5dda9640f68'], // Motion, dynamic
  'micro': ['photo-1494438639946-1ebd1d20bf85', 'photo-1507721999472-8ed4421c4af2'], // Micro, subtle
  'inclusive': ['photo-1573164713714-d95e436ab8d6', 'photo-1586717791821-3f44a5638d48'], // Inclusive
  'zero': ['photo-1519681393784-d120267933ba', 'photo-1534796636912-3b95b3ab5986'], // Zero, minimal
  'soft': ['photo-1618005182384-a83a8bd57fbe', 'photo-1558591710-4b4a1ae0f04d'], // Soft UI
  'neubrutalism': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Neo-brutalism
  'bento': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Bento grid
  'y2k': ['photo-1550745165-9bc0b252726f', 'photo-1544256718-3bcf237f3974'], // Y2K
  'cyberpunk': ['photo-1519681393784-d120267933ba', 'photo-1534796636912-3b95b3ab5986'], // Cyberpunk
  'organic': ['photo-1541701494587-cb58502866ab', 'photo-1558470598-a5dda9640f68'], // Organic
  'ai': ['photo-1620712943543-bcc4688e7485', 'photo-1677442136019-21780ecad995'], // AI
  'memphis': ['photo-1544256718-3bcf237f3974', 'photo-1550745165-9bc0b252726f'], // Memphis
  'vaporwave': ['photo-1550745165-9bc0b252726f', 'photo-1544256718-3bcf237f3974'], // Vaporwave
  'dimensional': ['photo-1633356122544-f134324a6cee', 'photo-1614732415006-6a6f4b749526'], // Dimensional
  'exaggerated': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Exaggerated
  'kinetic': ['photo-1541701494587-cb58502866ab', 'photo-1558470598-a5dda9640f68'], // Kinetic
  'parallax': ['photo-1534796636912-3b95b3ab5986', 'photo-1550684848-fac1c5b4e853'], // Parallax
  'swiss': ['photo-1494438639946-1ebd1d20bf85', 'photo-1507721999472-8ed4421c4af2'], // Swiss
  'hud': ['photo-1519681393784-d120267933ba', 'photo-1534796636912-3b95b3ab5986'], // HUD
  'pixel': ['photo-1550745165-9bc0b252726f', 'photo-1544256718-3bcf237f3974'], // Pixel
  'spatial': ['photo-1633356122544-f134324a6cee', 'photo-1614732415006-6a6f4b749526'], // Spatial
  'eink': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // E-ink
  'genz': ['photo-1541701494587-cb58502866ab', 'photo-1558470598-a5dda9640f68'], // Gen Z
  'biomimetic': ['photo-1541701494587-cb58502866ab', 'photo-1558470598-a5dda9640f68'], // Biomimetic
  'anti': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Anti-polish
  'tactile': ['photo-1618005182384-a83a8bd57fbe', 'photo-1558591710-4b4a1ae0f04d'], // Tactile
  'nature': ['photo-1541701494587-cb58502866ab', 'photo-1558470598-a5dda9640f68'], // Nature
  'interactive': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Interactive
  'voice': ['photo-1573164713714-d95e436ab8d6', 'photo-1586717791821-3f44a5638d48'], // Voice
  'gradient': ['photo-1534796636912-3b95b3ab5986', 'photo-1550684848-fac1c5b4e853'], // Gradient
  'editorial': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Editorial
  'chromatic': ['photo-1541701494587-cb58502866ab', 'photo-1558470598-a5dda9640f68'], // Chromatic
  'vintage': ['photo-1550745165-9bc0b252726f', 'photo-1544256718-3bcf237f3974'], // Vintage
  
  // Landing Page Styles
  'hero': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Hero
  'conversion': ['photo-1494438639946-1ebd1d20bf85', 'photo-1507721999472-8ed4421c4af2'], // Conversion
  'feature': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Feature
  'minimal-direct': ['photo-1494438639946-1ebd1d20bf85', 'photo-1507721999472-8ed4421c4af2'], // Minimal direct
  'social': ['photo-1573164713714-d95e436ab8d6', 'photo-1586717791821-3f44a5638d48'], // Social
  'interactive-product': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Interactive
  'trust': ['photo-1573164713714-d95e436ab8d6', 'photo-1586717791821-3f44a5638d48'], // Trust
  'storytelling': ['photo-1550745165-9bc0b252726f', 'photo-1544256718-3bcf237f3974'], // Storytelling
  
  // Dashboard Styles
  'data': ['photo-1551288049-bebda4e38f71', 'photo-1460925895917-afdab827c52f'], // Data
  'heat': ['photo-1551288049-bebda4e38f71', 'photo-1460925895917-afdab827c52f'], // Heat map
  'executive': ['photo-1493397212122-2b85dda8106b', 'photo-1507003211169-0a1dd7228f2d'], // Executive
  'realtime': ['photo-1551288049-bebda4e38f71', 'photo-1460925895917-afdab827c52f'], // Real-time
  'drill': ['photo-1551288049-bebda4e38f71', 'photo-1460925895917-afdab827c52f'], // Drill-down
  'comparative': ['photo-1551288049-bebda4e38f71', 'photo-1460925895917-afdab827c52f'], // Comparative
  'predictive': ['photo-1620712943543-bcc4688e7485', 'photo-1677442136019-21780ecad995'], // Predictive
  'behavior': ['photo-1551288049-bebda4e38f71', 'photo-1460925895917-afdab827c52f'], // Behavior
  'financial': ['photo-1554224155-8d04cb21cd6c', 'photo-1579532537594-3c3e3b8a5b9e'], // Financial
  'sales': ['photo-1554224155-8d04cb21cd6c', 'photo-1579532537594-3c3e3b8a5b9e'] // Sales
};

// Generate image URLs
function getUnsplashUrl(photoId, width = 400, height = 300) {
  return `https://images.unsplash.com/${photoId}?w=${width}&h=${height}&fit=crop`;
}

console.log('Style images mapping created');
console.log('Total styles:', Object.keys(styleImages).length);
