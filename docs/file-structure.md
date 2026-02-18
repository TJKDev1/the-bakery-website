# File Structure

```
Website/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── Original.png        # Logo image
├── CNAME               # Custom domain config (the-bakery.co)
├── _headers            # Security headers (for Netlify/Cloudflare)
├── netlify.toml        # Netlify-specific header config
├── .nojekyll           # Tells GitHub Pages to skip Jekyll
├── .github/
│   └── workflows/
│       └── site-quality.yml  # CI quality checks and Lighthouse
├── scripts/
│   └── check-site-quality.py # Custom static quality checks
├── lighthouserc.json   # Lighthouse CI configuration
├── icons/              # Custom generated icons
│   ├── icon_fresh_memes_*.webp
│   ├── icon_premium_quality_*.webp
│   ├── icon_perfect_gifts_*.webp
│   ├── icon_tshirt_*.webp
│   ├── icon_mug_*.webp
│   ├── icon_stickers_*.webp
│   ├── icon_magnet_*.webp
│   ├── icon_phone_case_*.webp
│   ├── icon_wall_art_*.webp
│   ├── icon_bag_*.webp
│   ├── icon_email_*.webp
│   ├── icon_shop_*.webp
│   └── icon_social_*.webp
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
3. Layout (Container)
4. Navigation
5. Hero Section
6. Buttons
7. Scroll Indicator
8. Section Styling
9. About Section
10. Products Section
11. CTA Banner
12. Contact Section
13. Footer
14. Responsive Design (5 breakpoints)
15. Touch Device Optimizations
16. Mobile Menu
17. Scroll Animations
18. Focus Styles (Accessibility)

### script.js

JavaScript functionality:

- Navbar scroll effects
- Centralized external URL map (via `data-link-key`)
- Mobile menu toggle (dynamically reads nav links from HTML)
- Smooth scrolling
- Intersection Observer animations
- Parallax effect on hero (with requestAnimationFrame throttling)
- Hover effects for product cards

### icons/

Optimized WebP icons in the brand's warm golden-brown color palette.

### CNAME

Contains the custom domain: `the-bakery.co`

### .nojekyll

Empty file that tells GitHub Pages to serve files directly without Jekyll processing.
