# 🚀 GitHub Pages Deployment Guide

## Complete Step-by-Step Instructions to Deploy Your Portfolio

---

## ✅ STEP 1: Prepare Your Repository on GitHub

### 1.1 Create a New Repository (if you haven't already)
1. Go to [GitHub.com](https://github.com) and log in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. **Repository name**: Choose one of these options:
   - `VTN_PORTFOLIO` (your site will be at `https://yourusername.github.io/VTN_PORTFOLIO`)
   - `yourusername.github.io` (your site will be at `https://yourusername.github.io`) - **Recommended for personal portfolio**
5. **Description**: "My AI/ML Student Portfolio Website"
6. Choose **Public** (required for free GitHub Pages)
7. **DO NOT** check "Add a README file"
8. Click **"Create repository"**

---

## ✅ STEP 2: Initialize Git in Your Project (if not already done)

Open PowerShell in your project folder and run these commands:

```powershell
# Navigate to your project folder
cd "d:\Personal Projects\VITHUSAN V\VTN_PORTFOLIO"

# Initialize git (if not already initialized)
git init

# Check if you have a .gitignore file
# If not, create one to exclude unnecessary files
```

---

## ✅ STEP 3: Add All Your Files to Git

```powershell
# Add all files to git
git add .

# Commit your files
git commit -m "Initial commit - Portfolio website ready for deployment"
```

---

## ✅ STEP 4: Connect to Your GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```powershell
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Example:
# git remote add origin https://github.com/VTN02/VTN_PORTFOLIO.git
```

---

## ✅ STEP 5: Push Your Code to GitHub

```powershell
# Rename your branch to 'main' (if it's 'master')
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Note**: You may be asked to log in to GitHub. Follow the authentication prompts.

---

## ✅ STEP 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **"Settings"** (top menu)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
5. Click **"Save"**

---

## ✅ STEP 7: Wait for Deployment (1-2 minutes)

GitHub will automatically build and deploy your site. You'll see:
- A message saying "Your site is ready to be published at..."
- After 1-2 minutes, it will change to "Your site is live at..."

---

## ✅ STEP 8: Access Your Live Website! 🎉

Your portfolio will be live at:
- **If repo name is `VTN_PORTFOLIO`**: `https://yourusername.github.io/VTN_PORTFOLIO`
- **If repo name is `yourusername.github.io`**: `https://yourusername.github.io`

---

## 🔄 How to Update Your Website Later

Whenever you make changes to your portfolio:

```powershell
# Navigate to your project
cd "d:\Personal Projects\VITHUSAN V\VTN_PORTFOLIO"

# Add your changes
git add .

# Commit with a message describing what you changed
git commit -m "Updated project descriptions"

# Push to GitHub
git push
```

GitHub Pages will automatically update your live site within 1-2 minutes!

---

## 🎨 Optional: Add a Custom Domain

If you want to use your own domain (like `www.vithusan.com`):

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. In your GitHub repository settings → Pages
3. Enter your custom domain
4. Update your domain's DNS settings (instructions provided by GitHub)

---

## ❓ Troubleshooting

### Problem: "Permission denied" when pushing
**Solution**: Make sure you're logged into GitHub. You may need to set up a Personal Access Token:
1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with `repo` permissions
3. Use this token as your password when pushing

### Problem: Website shows 404 error
**Solution**: 
- Make sure `index.html` is in the root directory (not in a subfolder)
- Check that GitHub Pages is enabled in Settings → Pages
- Wait 2-3 minutes for deployment to complete

### Problem: CSS/Images not loading
**Solution**: 
- Make sure all file paths are relative (no leading `/`)
- File names are case-sensitive (e.g., `CSS` vs `css`)

---

## 📝 Quick Command Reference

```powershell
# Check git status
git status

# See your commit history
git log --oneline

# Check remote repository
git remote -v

# Pull latest changes from GitHub
git pull
```

---

## 🎯 Summary

1. ✅ Create GitHub repository
2. ✅ Initialize git in your project
3. ✅ Add and commit files
4. ✅ Connect to GitHub
5. ✅ Push your code
6. ✅ Enable GitHub Pages in Settings
7. ✅ Access your live site!

**Your portfolio is now live and accessible to anyone on the internet!** 🌐

---

**Need Help?** 
- GitHub Pages Documentation: https://pages.github.com/
- Git Documentation: https://git-scm.com/doc
