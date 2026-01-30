# File Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── Original.png        # Logo image
├── .nojekyll           # Tells GitHub Pages to skip Jekyll
├── icons/              # Custom generated icons
│   ├── icon_fresh_memes_*.png
│   ├── icon_premium_quality_*.png
│   ├── icon_perfect_gifts_*.png
│   ├── icon_tshirt_*.png
│   ├── icon_mug_*.png
│   ├── icon_stickers_*.png
│   ├── icon_magnet_*.png
│   ├── icon_phone_case_*.png
│   ├── icon_wall_art_*.png
│   ├── icon_email_*.png
│   ├── icon_shop_*.png
│   └── icon_social_*.png
└── docs/               # Documentation
    ├── README.md
    ├── project-overview.md
    ├── file-structure.md
    ├── design-system.md
    ├── components.md
    ├── adding-content.md
    ├── coding-standards.md
    └── deployment.md
```

## File Descriptions

### index.html

The main HTML file containing:

- `<head>` - Meta tags, Open Graph, fonts, CSS link
- Navigation bar
- Hero section
- About section
- Products section
- CTA Banner
- Contact section
- Footer

### styles.css

All styling organized in sections:

1. CSS Variables (design tokens)
2. Reset & Base Styles
3. Typography
4. Layout (Container)
5. Navigation
6. Hero Section
7. Buttons
8. Section Styling
9. About Section
10. Products Section
11. CTA Banner
12. Contact Section
13. Footer
14. Responsive Design (5 breakpoints)

### script.js

JavaScript functionality:

- Navbar scroll effects
- Mobile menu toggle
- Smooth scrolling
- Intersection Observer animations
- Hover effects for product cards

### icons/

Custom generated PNG icons in the brand's warm golden-brown color palette. Each icon is approximately 400-500KB and sized for web use.

### .nojekyll

Empty file that tells GitHub Pages to serve files directly without Jekyll processing.
