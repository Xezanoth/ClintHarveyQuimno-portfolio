# Static Portfolio - Deployment Ready

This is the **static version** of your portfolio, optimized for deployment on platforms like Vercel, Netlify, or GitHub Pages. All content is hardcoded in HTML - no admin panel or localStorage needed!

## 📁 Files Needed for Deployment

```
📦 Deployment Files
├── index-static.html    # Main HTML file
├── styles-static.css    # All styling
├── script-static.js     # JavaScript functionality
└── README-STATIC.md     # This file
```

## 🚀 Quick Deployment Guide

### **Option 1: Vercel (Recommended)**

1. **Prepare files:**
   ```bash
   # Rename static files to standard names
   rename index-static.html to index.html
   rename styles-static.css to styles.css  
   rename script-static.js to script.js
   ```

2. **Deploy:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repo OR drag & drop folder
   - Vercel auto-detects settings
   - Click "Deploy"
   - ✅ Done! Your site is live

### **Option 2: Netlify**

1. **Prepare files** (same as above)
2. **Deploy:**
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop your folder to netlify.com/drop
   - ✅ Site deployed instantly!

### **Option 3: GitHub Pages**

1. **Prepare files** (same as above)
2. **Upload to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to repo Settings → Pages
   - Source: Deploy from branch → main
   - Click Save
   - ✅ Site live at: `https://yourusername.github.io/portfolio`

## ✏️ How to Update Content

Since this is static, you edit the HTML directly:

### **Update Profile Information:**

Open `index-static.html` and find:

```html
<h1 class="profile-name">Clint Harvey Quimno</h1>
<p class="profile-title">BSIT Student | 3rd Year</p>
```

Replace with your information.

### **Add Your Photo:**

Replace the icon with your photo URL:

```html
<!-- Change from: -->
<i class="fas fa-user"></i>

<!-- To: -->
<img src="your-photo.jpg" alt="Profile Photo">
```

### **Update Skills:**

Find the skills section and modify:

```html
<div class="skill-item">
    <div class="skill-info">
        <i class="fab fa-html5"></i>
        <span>HTML5 & CSS3</span>
    </div>
    <div class="skill-level">
        <div class="skill-bar" data-level="90">
            <span class="skill-percent">90%</span>
        </div>
    </div>
</div>
```

Change `data-level="90"` to your actual skill level (0-100).

### **Update Projects:**

Find the projects section and edit:

```html
<div class="project-card">
    <div class="project-image">
        <img src="project-image.jpg" alt="Project Name">
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description here</p>
        <div class="project-tags">
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
        </div>
    </div>
</div>
```

### **Update Social Links:**

Find and replace URLs:

```html
<a href="https://github.com/yourusername" class="social-link" target="_blank">
    <i class="fab fa-github"></i>
    <span>GitHub</span>
    <i class="fas fa-external-link-alt"></i>
</a>
```

### **Update Contact Email:**

Find and replace:

```html
<a href="mailto:clint.quimno@example.com" class="social-link">
```

## 🎨 Customization

### **Change Colors:**

Edit `styles-static.css` at the top:

```css
:root {
    --primary-red: #c23a2b;    /* Main theme color */
    --accent-gold: #d4a959;    /* Gold highlights */
    --bg-dark: #0d0d0d;        /* Dark background */
}
```

### **Change Fonts:**

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

## 📸 Adding Images

### **Profile Photo:**

1. Add your photo to the project folder (e.g., `profile.jpg`)
2. Update HTML:
   ```html
   <img src="profile.jpg" alt="Your Name">
   ```

### **Project Images:**

1. Add project screenshots to folder
2. Update HTML:
   ```html
   <img src="project1.jpg" alt="Project Name">
   ```

**Tip:** Use online image optimization tools to reduce file size:
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)

## 🔧 Contact Form Integration

The contact form currently shows an alert. To make it functional:

### **Option 1: FormSpree (Free)**

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form
3. Update HTML:
   ```html
   <form action="https://formspree.io/f/yourformid" method="POST">
   ```

### **Option 2: EmailJS (Free)**

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their integration guide
3. Add their script to your HTML

### **Option 3: Netlify Forms (Free)**

1. Add `netlify` attribute to form:
   ```html
   <form netlify>
   ```
2. Deploy to Netlify
3. Forms work automatically!

## ⚡ Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images (< 100KB each)
   - Use lazy loading for images

2. **Minimize CSS/JS:**
   - Use online minifiers before deployment
   - [CSS Minifier](https://cssminifier.com)
   - [JavaScript Minifier](https://javascript-minifier.com)

3. **Use CDN for Libraries:**
   - Font Awesome is already on CDN ✅
   - Loads faster from global servers

## 🌐 Custom Domain

### **Vercel:**
1. Go to project settings
2. Domains → Add
3. Follow DNS instructions

### **Netlify:**
1. Domain settings
2. Add custom domain
3. Update DNS records

### **GitHub Pages:**
1. Add `CNAME` file with your domain
2. Update DNS settings at your registrar

## 📊 Analytics (Optional)

Add Google Analytics:

```html
<!-- Add before </head> in HTML -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## ✅ Pre-Deployment Checklist

- [ ] Replace all "yourusername" with actual usernames
- [ ] Update email addresses
- [ ] Add real project links
- [ ] Replace placeholder text
- [ ] Add your profile photo
- [ ] Test all social media links
- [ ] Test contact form
- [ ] Check mobile responsiveness
- [ ] Optimize images
- [ ] Update page title and meta description
- [ ] Test in different browsers

## 🔄 Updating After Deployment

### **Vercel/Netlify (Git connected):**
```bash
# Make changes to files
git add .
git commit -m "Update content"
git push
# Automatically re-deploys! ✅
```

### **Vercel/Netlify (Manual):**
- Make changes locally
- Drag & drop updated folder
- Site updates automatically

### **GitHub Pages:**
```bash
# Make changes
git add .
git commit -m "Update content"
git push
# Wait 1-2 minutes for GitHub to rebuild
```

## 🐛 Troubleshooting

### **Site not loading?**
- Check file names are correct (index.html, styles.css, script.js)
- Verify all files are in root directory
- Check browser console for errors (F12)

### **Images not showing?**
- Check file paths are correct
- Use relative paths: `./image.jpg` not `/image.jpg`
- Ensure images are in same folder

### **Styles not applying?**
- Check CSS link in HTML: `<link rel="stylesheet" href="styles.css">`
- Clear browser cache (Ctrl+Shift+R)

### **Contact form not working?**
- Follow integration steps for FormSpree/EmailJS
- Check browser console for errors

## 📞 Support

If you need help:
1. Check browser console (F12) for errors
2. Verify all files are uploaded
3. Test locally first (open index.html in browser)
4. Check platform-specific docs (Vercel/Netlify/GitHub Pages)

## 🎉 You're Ready!

Your portfolio is deployment-ready! Choose your platform and go live in minutes.

**Remember:** After deployment, share your portfolio link on:
- LinkedIn profile
- Resume/CV
- Email signature
- GitHub profile README
- Social media

---

**Good luck with your internship/job search!** 🚀
