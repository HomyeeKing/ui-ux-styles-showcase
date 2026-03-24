#!/usr/bin/env python3
"""Update images in index.html to use Unsplash with style-appropriate photos"""

import re

# Style to Unsplash photo mapping
style_photos = {
    'minimalism': ['1494438639946-1ebd1d20bf85', '1507721999472-8ed4421c4af2'],
    'neumorphism': ['1618005182384-a83a8bd57fbe', '1558591710-4b4a1ae0f04d'],
    'glassmorphism': ['1550684848-fac1c5b4e853', '1614850523459-c2f4c699c52e'],
    'brutalism': ['1493397212122-2b85dda8106b', '1507003211169-0a1dd7228f2d'],
    '3dhyper': ['1633356122544-f134324a6cee', '1614732415006-6a6f4b749526'],
    'vibrant': ['1541701494587-cb58502866ab', '1558470598-a5dda9640f68'],
    'darkmode': ['1519681393784-d120267933ba', '1534796636912-3b95b3ab5986'],
    'accessible': ['1573164713714-d95e436ab8d6', '1586717791821-3f44a5638d48'],
    'clay': ['1558591710-4b4a1ae0f04d', '1614850523459-c2f4c699c52e'],
    'aurora': ['1534796636912-3b95b3ab5986', '1550684848-fac1c5b4e853'],
    'retro': ['1550745165-9bc0b252726f', '1544256718-3bcf237f3974'],
    'flat': ['1493397212122-2b85dda8106b', '1507003211169-0a1dd7228f2d'],
    'hero': ['1493397212122-2b85dda8106b', '1507003211169-0a1dd7228f2d'],
    'conversion': ['1494438639946-1ebd1d20bf85', '1507721999472-8ed4421c4af2'],
    'feature': ['1493397212122-2b85dda8106b', '1507003211169-0a1dd7228f2d'],
    'minimal': ['1494438639946-1ebd1d20bf85', '1507721999472-8ed4421c4af2'],
    'datadense': ['1551288049-bebda4e38f71', '1460925895917-afdab827c52f'],
    'heatmap': ['1551288049-bebda4e38f71', '1460925895917-afdab827c52f'],
}

def get_unsplash_url(photo_id, w=400, h=300):
    return f'https://images.unsplash.com/photo-{photo_id}?w={w}&h={h}&fit=crop'

# Read file
with open('index.html', 'r') as f:
    content = f.read()

# Replace each style's images
for style, photos in style_photos.items():
    # Replace first image
    pattern1 = f'picsum.photos/seed/{style}1'
    url1 = get_unsplash_url(photos[0])
    content = content.replace(pattern1, url1.replace('https://images.unsplash.com/', ''))
    
    # Replace second image
    pattern2 = f'picsum.photos/seed/{style}2'
    url2 = get_unsplash_url(photos[1])
    content = content.replace(pattern2, url2.replace('https://images.unsplash.com/', ''))

# Fix URLs - add back the domain
content = content.replace('src="photo-', 'src="https://images.unsplash.com/photo-')

# Write back
with open('index.html', 'w') as f:
    f.write(content)

print("Images updated successfully!")
