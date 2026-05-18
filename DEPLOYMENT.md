# GitHub Pages Deployment Guide

This guide will help you deploy your e-commerce services website to GitHub Pages with your custom domain.

## Prerequisites

- A GitHub account
- Git installed on your computer
- A custom domain (optional, but you mentioned you have one)

## Step-by-Step Deployment Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `artboat-digital` or any name you prefer)
4. Set it to **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 2. Initialize Git and Push Your Code

Open your terminal in the project directory and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: ArtBoat Digital website"

# Add your GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace** `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

### 3. Configure GitHub Pages

1. Go to your GitHub repository page
2. Click on **Settings** (top right)
3. In the left sidebar, click **Pages** (under "Code and automation")
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Your site will automatically deploy when you push to the main branch

### 4. Configure Custom Domain (Optional)

If you want to use your own domain instead of `username.github.io`:

#### A. In your domain registrar (where you bought the domain):

Add these DNS records:

**For apex domain (yourdomain.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

#### B. In your GitHub repository:

1. Go to **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `yourdomain.com` or `www.yourdomain.com`)
3. Click **Save**
4. Check "Enforce HTTPS" (wait a few minutes for the SSL certificate)

#### C. Create CNAME file in your project:

Rename `public/CNAME.example` to `public/CNAME` and update it:

```bash
# Rename the file
mv public/CNAME.example public/CNAME

# Edit the file and replace with your domain
# For example: echo "yourdomain.com" > public/CNAME
```

Then commit and push:

```bash
git add public/CNAME
git commit -m "Add custom domain"
git push
```

### 5. Verify Deployment

1. Wait 2-5 minutes for the GitHub Action to complete
2. Go to **Actions** tab in your GitHub repository to see the deployment progress
3. Once complete (green checkmark ✓), visit your site:
   - Default URL: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
   - Custom domain: `https://yourdomain.com`

## Important Notes

### If using custom domain:
- Keep `base: '/'` in `vite.config.ts` (already configured)
- DNS changes can take 24-48 hours to propagate fully

### If using default GitHub Pages URL (username.github.io/repo-name):
You need to update the base path in `vite.config.ts`:

```typescript
base: '/YOUR_REPO_NAME/',
```

Then rebuild and push:

```bash
pnpm run build
git add .
git commit -m "Update base path for GitHub Pages"
git push
```

## Making Updates

Whenever you make changes to your website:

```bash
# 1. Make your changes to the code

# 2. Add changed files
git add .

# 3. Commit changes
git commit -m "Description of your changes"

# 4. Push to GitHub
git push

# GitHub Actions will automatically rebuild and deploy your site
```

## Manual Deployment (Alternative Method)

If you prefer to deploy manually using the `gh-pages` package:

```bash
# Build and deploy in one command
pnpm run deploy
```

This will build your project and push the `dist` folder to the `gh-pages` branch.

Then in GitHub Settings → Pages, set:
- **Source**: Deploy from a branch
- **Branch**: gh-pages / (root)

## Troubleshooting

### Site not loading or shows 404
- Check that GitHub Actions workflow completed successfully
- Verify your custom domain DNS settings
- Wait a few minutes and clear your browser cache

### Images not showing
- Ensure all image URLs are absolute or properly relative
- Check browser console for any errors

### CSS not loading
- Verify the `base` path in `vite.config.ts` matches your deployment URL
- Clear browser cache

### Custom domain not working
- Verify DNS records are correct
- Wait 24-48 hours for DNS propagation
- Check GitHub Pages settings show your domain
- Ensure CNAME file exists in the root of the deployed site

## Build Locally Before Deploying

Test your build locally before deploying:

```bash
# Build the project
pnpm run build

# Preview the build
pnpm run preview
```

Open the preview URL (usually `http://localhost:4173`) to verify everything works.

## Support

If you encounter any issues:
1. Check the GitHub Actions logs in the **Actions** tab
2. Verify all DNS settings if using a custom domain
3. Ensure all dependencies are installed: `pnpm install`
4. Try rebuilding: `pnpm run build`

---

**Your website is now ready to go live! 🚀**
