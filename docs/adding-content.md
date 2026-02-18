# Adding Content

This guide explains how to add or modify content on The Bakery website.

---

## Adding a New Product Category

### Step 1: Create the Icon

Generate or create a new icon that:

- Uses the golden-brown color palette (#C4A35A, #8B6914, #D4A843)
- Is WebP format with white/transparent background
- Is at least 400x400px source size
- Matches the minimalist style of existing icons

Save to: `icons/icon_[productname]_[timestamp].webp`

### Step 2: Find the Redbubble Category Code

1. Go to your Redbubble shop
2. Filter by the product category
3. Copy the `iaCode` from the URL parameter

Example URL:

```
https://www.redbubble.com/people/the-bakery-shop/shop?artistUserName=the-bakery-shop&asc=u&iaCode=u-tees
```

The `iaCode` is: `u-tees`

### Step 3: Add the Product Card

In `index.html`, find the `<div class="products-grid">` section and add:

```html
<a href="https://www.redbubble.com/people/the-bakery-shop/shop?artistUserName=the-bakery-shop&asc=u&iaCode=[IACODE]"
    target="_blank" rel="noopener noreferrer" class="product-card">
    <div class="product-icon">
        <img src="icons/icon_[name].webp" alt="[Product Name]" loading="lazy" width="52" height="52">
    </div>
    <h3>[Product Name]</h3>
    <p>[Catchy description, keep it short]</p>
    <span class="product-link">Shop Now →</span>
</a>
```

---

## Adding a New Feature (About Section)

In `index.html`, find the `<div class="about-features">` section and add:

```html
<div class="feature">
    <div class="feature-icon">
        <img src="icons/icon_[name].webp" alt="[Feature Name]" loading="lazy" width="40" height="40">
    </div>
    <div class="feature-text">
        <h4>[Feature Title]</h4>
        <p>[Short description]</p>
    </div>
</div>
```

---

## Adding a New Contact Method

In `index.html`, find the `<div class="contact-info">` section and add:

```html
<div class="contact-card">
    <div class="contact-icon">
        <img src="icons/icon_[type].webp" alt="[Type]" loading="lazy" width="48" height="48">
    </div>
    <h4>[Platform/Method]</h4>
    <a href="[full URL]" target="_blank" rel="noopener noreferrer">@[handle or display text]</a>
</div>
```

For email, use `mailto:`:

```html
<a href="mailto:email@example.com">email@example.com</a>
```

---

## Adding a New Navigation Link

### Step 1: Add the nav link

In `index.html`, find `<ul class="nav-links">` and add:

```html
<li><a href="#[section-id]">[Link Text]</a></li>
```

### Step 2: Add the section

Create a new section with the corresponding ID:

```html
<section id="[section-id]" class="[section-class]">
    <div class="container">
        <!-- Content -->
    </div>
</section>
```

### Step 3: Add section styles

In `styles.css`, add styles for your new section following the existing patterns.

---

## Updating Text Content

### Hero Section

Edit in `index.html`:

- `.hero-title` - Main heading
- `.hero-tagline` - Tagline
- `.hero-description` - Description paragraph

### About Section

Edit in `index.html`:

- `.about-text h2` - Section heading
- `.about-text p` - Paragraphs
- `.floating-badge` - Badge text (e.g., "Est. 2026")

### Footer

Edit in `index.html`:

- `.footer-tagline` - Brand tagline
- `.footer-bottom p` - Copyright text

---

## Updating Links

### Redbubble Shop Links

Update the URL constants in `script.js` inside the `LINKS` object.

### Social Media Links

Update the TikTok URL in `script.js` in the `LINKS.tiktok` entry.

```javascript
tiktok: 'https://www.tiktok.com/@thebakerytiktok'
```

### Email

Update the email URL in `script.js` in the `LINKS.email` entry:

```javascript
email: 'mailto:TheOfficialBakery@proton.me'
```

---

## Updating Meta Tags

### For SEO

In `<head>`:

```html
<meta name="description" content="[Your description]">
<title>[Page Title]</title>
```

### For Social Sharing

```html
<meta property="og:title" content="[Title]">
<meta property="og:description" content="[Description]">
<meta property="og:image" content="[Image path]">
<meta property="og:url" content="[Full URL]">
```
