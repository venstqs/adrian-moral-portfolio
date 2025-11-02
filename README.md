# 🌟 Adrian Xavier Moral - Personal Portfolio

> **Born To Inherit the Stars**

A fully functional and interactive personal portfolio website featuring a clean, futuristic design inspired by iOS/macOS aesthetics with space-themed elements.

## ✨ Features

- **🎨 Modern Design**: Glassmorphism UI with iOS/macOS-inspired aesthetics
- **🌓 Dark/Light Mode**: Seamless theme toggle with persistent preference
- **⭐ Space Theme**: Animated starfield, particles, and orbit effects
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🎬 Smooth Animations**: GSAP-powered scroll animations and transitions
- **📧 Working Contact Form**: Integrated Formspree for direct email delivery
- **🚀 Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom properties, glassmorphism, animations
- **JavaScript (Vanilla)**: Interactive features and animations
- **GSAP**: Professional animations and scroll triggers
- **Font Awesome**: Icon library
- **Google Fonts**: Inter & Space Grotesk typography
- **Formspree**: Contact form backend

## 📂 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Deployment on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `portfolio` or `adrian-moral-portfolio`)
5. Make it **Public** (required for free GitHub Pages)
6. Click **"Create repository"**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. In your new repository, click **"uploading an existing file"**
2. Drag and drop all files (`index.html`, `styles.css`, `script.js`, `README.md`)
3. Click **"Commit changes"**

**Option B: Using Git (Command Line)**

```bash
# Navigate to your project folder
cd "path/to/your/portfolio"

# Initialize git repository (if not already initialized)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

**Method 1: Using GitHub Actions (Recommended - More Reliable)**

The repository includes a GitHub Actions workflow (`.github/workflows/pages.yml`) that will automatically deploy your site. Just:

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"GitHub Actions"**
5. Click **"Save"**
6. Go to **"Actions"** tab and wait for the deployment to complete (should take 1-2 minutes)

**Method 2: Using Branch Deployment (Alternative)**

1. Go to your repository on GitHub
2. Click on **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Choose **"main"** branch and **"/ (root)"** folder
6. Click **"Save"**
7. Wait 5-10 minutes for GitHub to build your site

> **💡 Tip**: If you have issues, use Method 1 (GitHub Actions) - it's more reliable and shows build status.

### Step 4: Access Your Live Site

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

Example: `https://adrianmoral.github.io/portfolio/`

> ⏱️ **Note**: It may take 1-10 minutes for your site to go live after enabling GitHub Pages.

## 📧 Setting Up Formspree Contact Form

### Step 1: Create a Formspree Account

1. Go to [Formspree.io](https://formspree.io)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create a New Form

1. After logging in, click **"New Form"**
2. Give your form a name (e.g., "Portfolio Contact")
3. Copy your **Form ID** (looks like: `xzbkjwpn`)

### Step 3: Update Your Form Code

1. Open `script.js` in your project
2. Find this line (around line 217):
   ```javascript
   const formspreeUrl = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
   ```
3. Replace `YOUR_FORMSPREE_ID` with your actual Formspree Form ID:
   ```javascript
   const formspreeUrl = 'https://formspree.io/f/xzbkjwpn';
   ```
4. Save the file and push changes to GitHub

### Step 4: Test Your Form

1. Visit your live portfolio site
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email (the one linked to Formspree) for the submission

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `styles.css` under `:root` and `[data-theme="dark"]`:

```css
:root {
    --accent-primary: #007aff;  /* Change primary accent color */
    --accent-secondary: #5856d6; /* Change secondary accent color */
    /* ... more variables */
}
```

### Updating Content

- **Personal Info**: Edit the text in `index.html` sections
- **Projects**: Modify project cards in the Projects section
- **Skills**: Update skill items in the Skills section
- **Social Links**: Add your social media links (if desired)

### Adding More Sections

1. Add a new section in `index.html`
2. Add corresponding styles in `styles.css`
3. Add scroll animations in `script.js` (if needed)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Features Breakdown

### Navigation
- Smooth scroll navigation
- Mobile-responsive hamburger menu
- Theme toggle button
- Active link highlighting

### Animations
- Hero section fade-in animations
- Scroll-triggered element animations
- Hover effects on cards and buttons
- Particle system in hero section
- Orbit animations in Dreams section

### Form Features
- Real-time validation
- Error messages
- Success confirmation
- Disabled state during submission

## 🔧 Troubleshooting

### Form Not Working?
- Make sure you've replaced `YOUR_FORMSPREE_ID` in `script.js`
- Check browser console for errors
- Verify your Formspree form is active
- Ensure your email is verified in Formspree

### GitHub Pages Not Loading or Showing Outdated Content?

**If your site is showing old content:**

1. **Clear Browser Cache**
   - Press `Ctrl + Shift + R` (Windows/Linux) or `Cmd + Shift + R` (Mac) to hard refresh
   - Or clear your browser cache completely
   - Try opening in an incognito/private window

2. **Check GitHub Pages Settings**
   - Go to your repository → **Settings** → **Pages**
   - Make sure **Source** is set to **"Deploy from a branch"**
   - Branch should be **"main"** (or "master") and folder **"/ (root)"**
   - Click **Save** even if already set (this forces a rebuild)

3. **Force a New Deployment**
   - Make a small change to any file (add a space, comment, etc.)
   - Commit and push the change
   - This triggers GitHub Pages to rebuild

4. **Check the Deployment Status**
   - Go to your repository → **Actions** tab
   - Look for "pages build and deployment" workflow
   - Make sure it shows ✅ (green checkmark) and not ❌ (red X)
   - If there's an error, click on it to see details

5. **Verify File Structure**
   - All files (`index.html`, `styles.css`, `script.js`) must be in the **root** of your repository
   - NOT in a subfolder
   - Repository structure should look like:
     ```
     your-repo/
     ├── index.html
     ├── styles.css
     ├── script.js
     └── README.md
     ```

6. **Check Repository Visibility**
   - Repository must be **Public** (for free GitHub Pages)
   - Go to **Settings** → scroll to bottom → make sure it's Public

7. **Wait for Build**
   - After pushing changes, wait **5-10 minutes** for GitHub to rebuild
   - The site updates automatically after each push

8. **Check Your URL**
   - Make sure you're visiting: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - NOT the raw GitHub file URLs
   - If your repo is named exactly `YOUR_USERNAME.github.io`, the URL is just `https://YOUR_USERNAME.github.io`

### Styles Not Loading?
- Verify all file paths are correct
- Check browser console (F12) for 404 errors
- Ensure `styles.css` is properly linked in `index.html` as `href="styles.css"` (relative path, not absolute)
- Make sure all CDN links (Font Awesome, Google Fonts, GSAP) are accessible

## 📄 License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

## 👤 Author

**Adrian Xavier Moral**
- Grade 10 STEP Student
- Camarines Sur National High School
- Science & Engineering Enthusiast

---

**Built with passion for technology and space exploration** 🚀✨

*"Born To Inherit the Stars"*
