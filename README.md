# Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and vanilla JavaScript, designed for job applications in 2026.

## 🎨 Features

### Design
- **Modern Aesthetics**: Glassmorphism effects, vibrant gradients, and smooth animations
- **Dark Theme**: Premium dark color scheme with accent colors
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Accessibility**: Keyboard navigation, focus states, and semantic HTML

### Content Sections
- [x] Customized Hero section for Gauri Mamidwar
- [x] Updated About section with MCA/BCA details
- [x] Tailored Skills section (Python, Django, ML, etc.)
- [x] Added specific projects (RescueHer, AI Resume Screening)
- [x] Detailed Work Experience (Baranwal, Skybrisk)
- [x] Included Certifications & Leadership

### Polish & Optimization
- [x] Ensure responsive design
- [x] Add micro-animations
- [x] Optimize for SEO
- [x] Final review of personalized content

### Interactive Features
- Smooth scroll navigation with active link highlighting
- Parallax scrolling effects on background elements
- Scroll progress indicator
- Typing animation for hero text
- Animated counters for statistics
- 3D tilt effect on project cards
- Form validation and submission handling
- Mobile-friendly hamburger menu

## 🚀 Getting Started

### View the Portfolio

1. **Open in Browser**:
   - Navigate to the portfolio folder
   - Double-click `index.html` to open in your default browser
   - Or right-click `index.html` → "Open with" → Choose your browser

2. **Use Live Server** (Recommended for development):
   - Install VS Code extension "Live Server"
   - Right-click `index.html` → "Open with Live Server"
   - Automatically refreshes on file changes

### File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and design system
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## 📝 Customization Guide

### 1. Personal Information

**In `index.html`, update these sections:**

- **Line 8-9**: Update meta description and keywords
- **Line 10**: Change author name
- **Line 11**: Update page title
- **Line 24**: Replace "Portfolio" with your name/brand
- **Line 42-44**: Update your name and title
- **Line 45-48**: Edit your introduction
- **Section 65-85**: Customize About section with your story
- **Section 90-95**: Update statistics (years, projects, clients)
- **Section 111-210**: Add your actual projects
- **Section 220-310**: Add your work experience
- **Section 325-380**: Update contact information

### 2. Colors & Styling

**In `styles.css` (lines 11-30), customize:**

```css
--color-primary: hsl(250, 84%, 54%);      /* Main brand color */
--color-secondary: hsl(290, 84%, 54%);    /* Secondary accent */
--color-accent: hsl(180, 84%, 54%);       /* Highlight color */
```

### 3. Skills

**In `index.html` (lines 115-175), update skill categories:**
- Frontend Development
- Backend Development
- Tools & Platforms
- Design & Soft Skills

### 4. Projects

**For each project card (starting line 180):**
- Update project category
- Change project title and description
- Modify technology tags
- Add links to live demo and code repository

### 5. Experience

**For each timeline item (starting line 230):**
- Update dates, job title, and company name
- Modify job description
- List key achievements

### 6. Contact Form

**To enable form submission:**

In `script.js` (line 169), replace the setTimeout simulation with actual API call:

```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
});
```

## 🎯 Performance Tips

1. **Add Real Images**:
   - Replace emoji placeholders with actual photos
   - Use optimized image formats (WebP, AVIF)
   - Implement lazy loading for images below the fold

2. **Optimize Fonts**:
   - Consider self-hosting Google Fonts
   - Use `font-display: swap` for better performance

3. **Minimize Assets**:
   - Minify CSS and JavaScript for production
   - Consider using a build tool like Vite or Webpack

## 🌐 Deployment

### Quick Deployment Options

1. **GitHub Pages** (Free):
   - Push code to GitHub repository
   - Go to Settings → Pages
   - Select main branch → Save
   - Access at `username.github.io/repository-name`

2. **Vercel** (Free):
   - Sign up at vercel.com
   - Import GitHub repository
   - Automatic deployment on every push

3. **Netlify** (Free):
   - Drag and drop folder to netlify.com/drop
   - Or connect GitHub repository for auto-deployment

4. **Custom Domain**:
   - Purchase domain from provider (GoDaddy, Namecheap, etc.)
   - Point DNS to your hosting provider
   - Update CNAME/A records as needed

## 🔧 Technologies Used

- **HTML5**: Semantic markup with SEO optimization
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript ES6+**: Modern features, Intersection Observer API
- **Google Fonts**: Inter & Space Grotesk
- **No frameworks**: Pure vanilla code for maximum performance

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips for Job Applications

1. **Customize Content**: Update all placeholder text with your actual information
2. **Add Real Projects**: Include 4-6 of your best projects with live links
3. **Professional Photo**: Replace emoji with professional headshot
4. **Proofread**: Check for typos and grammatical errors
5. **Test Links**: Ensure all external links work correctly
6. **Performance**: Run Lighthouse audit for 90+ scores
7. **Resume Link**: Add PDF resume download option
8. **Analytics**: Consider adding Google Analytics to track visitors

## 📄 License

This portfolio template is free to use for personal and commercial projects.

## 🤝 Support

For questions or issues, feel free to:
- Review the code comments for guidance
- Modify styles in `styles.css`
- Adjust animations in `script.js`
- Test responsiveness using browser DevTools

---

**Built with ❤️ for job seekers in 2026**
# Gauri-Mamidwar-Portfolio
