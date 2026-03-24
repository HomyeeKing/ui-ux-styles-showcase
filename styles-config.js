// 67 UI Styles Configuration
const styleConfigs = {
  // General Styles (49)
  'Minimalism': {
    '--bg-primary': '#f8f9fa',
    '--bg-secondary': '#ffffff',
    '--bg-header': 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    '--text-primary': '#212529',
    '--text-secondary': '#6c757d',
    '--card-bg': '#ffffff',
    '--card-shadow': '0 1px 3px rgba(0,0,0,0.08)',
    '--border-color': '#dee2e6'
  },
  'Neumorphism': {
    '--bg-primary': '#e0e5ec',
    '--bg-secondary': '#e0e5ec',
    '--bg-header': 'linear-gradient(135deg, #e0e5ec 0%, #c9d6df 100%)',
    '--text-primary': '#2d3748',
    '--text-secondary': '#4a5568',
    '--card-bg': '#e0e5ec',
    '--card-shadow': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
    '--border-color': 'transparent'
  },
  'Glassmorphism': {
    '--bg-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    '--bg-secondary': 'rgba(255,255,255,0.1)',
    '--bg-header': 'linear-gradient(135deg, rgba(102,126,234,0.8) 0%, rgba(118,75,162,0.8) 100%)',
    '--text-primary': '#ffffff',
    '--text-secondary': 'rgba(255,255,255,0.8)',
    '--card-bg': 'rgba(255,255,255,0.15)',
    '--card-shadow': '0 8px 32px rgba(0,0,0,0.1)',
    '--border-color': 'rgba(255,255,255,0.2)'
  },
  'Brutalism': {
    '--bg-primary': '#ff6b6b',
    '--bg-secondary': '#ffffff',
    '--bg-header': '#ff6b6b',
    '--text-primary': '#000000',
    '--text-secondary': '#333333',
    '--card-bg': '#ffffff',
    '--card-shadow': '8px 8px 0 #000000',
    '--border-color': '#000000'
  },
  '3D & Hyperrealism': {
    '--bg-primary': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    '--bg-secondary': '#ffffff',
    '--bg-header': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    '--text-primary': '#2d3748',
    '--text-secondary': '#4a5568',
    '--card-bg': '#ffffff',
    '--card-shadow': '0 20px 40px rgba(0,0,0,0.15), 0 10px 20px rgba(0,0,0,0.1)',
    '--border-color': '#e2e8f0'
  },
  'Vibrant': {
    '--bg-primary': 'linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)',
    '--bg-secondary': '#ffffff',
    '--bg-header': 'linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)',
    '--text-primary': '#2d3436',
    '--text-secondary': '#636e72',
    '--card-bg': '#ffffff',
    '--card-shadow': '0 10px 20px rgba(255,107,107,0.3)',
    '--border-color': '#ff6b6b'
  },
  'Dark Mode': {
    '--bg-primary': '#0a0a0f',
    '--bg-secondary': '#161b22',
    '--bg-header': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 100%)',
    '--text-primary': '#e4e4e7',
    '--text-secondary': '#a1a1aa',
    '--card-bg': '#1a1a2e',
    '--card-shadow': '0 4px 6px rgba(0,0,0,0.3)',
    '--border-color': '#2d3748'
  },
  'Accessible': {
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f8f9fa',
    '--bg-header': '#005a9c',
    '--text-primary': '#000000',
    '--text-secondary': '#333333',
    '--card-bg': '#ffffff',
    '--card-shadow': '0 2px 4px rgba(0,0,0,0.1)',
    '--border-color': '#000000'
  },
  'Claymorphism': {
    '--bg-primary': '#f0f3f8',
    '--bg-secondary': '#e8ecf1',
    '--bg-header': 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
    '--text-primary': '#2d3748',
    '--text-secondary': '#4a5568',
    '--card-bg': '#f8fafc',
    '--card-shadow': '0 20px 40px rgba(0,0,0,0.1), inset 0 -4px 8px rgba(0,0,0,0.05)',
    '--border-color': 'transparent'
  },
  'Aurora': {
    '--bg-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    '--bg-secondary': 'rgba(255,255,255,0.1)',
    '--bg-header': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    '--text-primary': '#ffffff',
    '--text-secondary': 'rgba(255,255,255,0.9)',
    '--card-bg': 'rgba(255,255,255,0.2)',
    '--card-shadow': '0 8px 32px rgba(102,126,234,0.3)',
    '--border-color': 'rgba(255,255,255,0.3)'
  },
  'Retro-Futurism': {
    '--bg-primary': '#0c0c1d',
    '--bg-secondary': '#16162a',
    '--bg-header': 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
    '--text-primary': '#00ffff',
    '--text-secondary': '#ff00ff',
    '--card-bg': '#1a1a3e',
    '--card-shadow': '0 0 20px rgba(0,255,255,0.3)',
    '--border-color': '#00ffff'
  },
  'Flat Design': {
    '--bg-primary': '#ecf0f1',
    '--bg-secondary': '#ffffff',
    '--bg-header': '#3498db',
    '--text-primary': '#2c3e50',
    '--text-secondary': '#7f8c8d',
    '--card-bg': '#ffffff',
    '--card-shadow': 'none',
    '--border-color': '#bdc3c7'
  },
  'Skeuomorphism': {
    '--bg-primary': 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)',
    '--bg-secondary': '#f5f5f5',
    '--bg-header': 'linear-gradient(135deg, #c0c0c0 0%, #a0a0a0 100%)',
    '--text-primary': '#333333',
    '--text-secondary': '#666666',
    '--card-bg': 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
    '--card-shadow': '0 10px 20px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.5)',
    '--border-color': '#999999'
  },
  'Liquid Glass': {
    '--bg-primary': 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    '--bg-secondary': 'rgba(255,255,255,0.05)',
    '--bg-header': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
    '--text-primary': '#ffffff',
    '--text-secondary': 'rgba(255,255,255,0.7)',
    '--card-bg': 'rgba(255,255,255,0.1)',
    '--card-shadow': '0 8px 32px rgba(0,0,0,0.2)',
    '--border-color': 'rgba(255,255,255,0.1)'
  },
  'Motion-Driven': {
    '--bg-primary': '#0f0f23',
    '--bg-secondary': '#1a1a3e',
    '--bg-header': 'linear-gradient(135deg, #ff6b6b 0%, #feca57 50%, #48dbfb 100%)',
    '--text-primary': '#ffffff',
    '--text-secondary': '#a0a0a0',
    '--card-bg': '#1a1a3e',
    '--card-shadow': '0 0 30px rgba(255,107,107,0.3)',
    '--border-color': '#ff6b6b'
  },
  'Micro-interactions': {
    '--bg-primary': '#f7fafc',
    '--bg-secondary': '#ffffff',
    '--bg-header': '#4299e1',
    '--text-primary': '#2d3748',
    '--text-secondary': '#718096',
    '--card-bg': '#ffffff',
    '--card-shadow': '0 4px 6px rgba(66,153,225,0.1)',
    '--border-color': '#bee3f8'
  },
  'Inclusive': {
    '--bg-primary': '#ffffff',
    '--bg-secondary': '#f7fafc',
    '--bg-header': '#2b6cb0',
    '--text-primary': '#1a202c',
    '--text-secondary': '#4a5568',
    '--card-bg': '#ffffff',
    '--card-shadow': '0 2px 4px rgba(0,0,0,0.1)',
    '--border-color': '#2b6cb0'
  },
  'Zero Interface': {
    '--bg-primary': '#000000',
    '--bg-secondary': '#0a0a0a',
    '--bg-header': '#000000',
    '--text-primary': '#00ff00',
    '--text-secondary': '#00aa00',
    '--card-bg': '#0a0a0a',
    '--card-shadow': '0 0 20px rgba(0,255,0,0.2)',
    '--border-color': '#00ff00'
  },
  'Soft UI': {
    '--bg-primary': '#f8f9fa',
    '--bg-secondary': '#ffffff',
    '--bg-header': 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
    '--text-primary': '#495057',
    '--text-secondary': '#6c757d',
    '--card-bg': '#ffffff',
    '--card-shadow': '0 2px 8px rgba(0,0,0,0.08)',
    '--border-color': '#e9ecef'
  },
  'Neubrutalism': {
    '--bg-primary': '#ffe156',
    '--bg-secondary': '#ffffff',
    '--bg-header': '#ff90e8',
    '--text-primary': '#000000',
    '--text-secondary': '#333333',
    '--card-bg': '#ffffff',
    '--card-shadow': '8px 8px 0 #000000',
    '--border-color': '#000000'
  },
  'Bento Box': {
    '--bg-primary': '#f5f5f5',
    '--bg-secondary': '#ffffff',
    '--bg-header': '#1a1a1a',
    '--text-primary': '#1a1a1a',
    '--text-secondary': '#666666',
    '--card-bg': '#ffffff',
    '--card-shadow': '0 4px 12px rgba(0,0,0,0.08)',
    '--border-color': '#e5e5e5'
  },
  'Y2K': {
    '--bg-primary': 'linear-gradient(135deg, #ff00ff 0%, #00ffff 50%, #ffff00 100%)',
    '--bg-secondary': '#ffffff',
    '--bg-header': 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
    '--text-primary': '#000000',
    '--text-secondary