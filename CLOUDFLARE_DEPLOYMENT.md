# 🚀 Cloudflare Pages Deployment Guide

## ✅ Status Deployment

- ✅ Build Configuration: `npm run build`
- ✅ Output Directory: `dist/`
- ✅ GitHub Actions: Configured
- ✅ Redirects: `public/_redirects` for SPA routing
- ✅ Code Splitting: Vendor & Icons chunks optimized

## 📊 Current Build Performance

```
Build time: ~2.4s
Output size:
├── HTML:      1.01 KB (gzip: 0.51 KB)
├── CSS:      47.66 KB (gzip: 7.99 KB)
├── Icons:    14.71 KB (gzip: 5.56 KB)
└── React:   132.87 KB (gzip: 42.96 KB)

Total: ~195 KB (gzip: ~57 KB)
```

## Deployment Status

✅ **Build Configuration:** Ready
✅ **GitHub Repository:** `aris2394/cv`
✅ **Build Output:** `dist/` directory

---

## 📋 Automatic Deployment (Recommended)

### Step 1: Connect GitHub to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the left sidebar
3. Click **Create a project** → **Connect to Git**
4. Select **GitHub** and authorize Cloudflare
5. Choose repository: `aris2394/cv`
6. Select **main** branch

### Step 2: Configure Build Settings

When prompted, use these settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | None |
| **Build command** | `npm run build` |
| **Build output directory** | `dist` |
| **Root directory** | `/` |
| **Node.js version** | 18.x or later |

### Step 3: Environment Variables (Optional)

No environment variables needed for this static site.

### Step 4: Deploy

Click **Save and Deploy** - Cloudflare will:
1. Trigger build from main branch
2. Run `npm run build`
3. Deploy `dist/` folder to Cloudflare CDN
4. Generate URL: `https://cv-<random-id>.pages.dev`

---

## 📦 Manual Deployment (CLI)

### Using Wrangler CLI:

```bash
# Login to Cloudflare
npx wrangler login

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist/
```

### Or use the provided script:

```bash
bash deploy-cloudflare.sh
```

---

## 🔗 Custom Domain Setup

After deployment:

1. Go to your Cloudflare Pages project
2. Click **Custom domain**
3. Enter your domain: `aris-setyawan.com`
4. Update DNS records as instructed
5. HTTPS is automatically enabled via Let's Encrypt

### DNS Configuration Example:

```
Type    Name                Content              TTL
CNAME   aris-setyawan.com   cv.<account>.pages.dev  Auto
```

---

## 📊 Build & Deployment Info

**Build Details:**
- Framework: React 18
- Build Tool: Vite
- CSS: Tailwind CSS 4
- Icons: Lucide React
- Bundle Size: ~355 KB (gzipped)

**Files:**
- `wrangler.toml` - Cloudflare Workers config
- `public/_redirects` - SPA routing rules
- `.cloudflare.json` - Pages build config
- `deploy-cloudflare.sh` - Manual deployment script

---

## ✨ Deployment Features

✅ **Automatic Builds** - Deploy on every push to main  
✅ **Preview Deployments** - Auto-create for pull requests  
✅ **Instant Rollback** - Revert to previous versions  
✅ **Global CDN** - Fast content delivery worldwide  
✅ **SSL/TLS** - Free HTTPS certificate  
✅ **Analytics** - Built-in traffic insights  

---

## 🔄 CI/CD Pipeline

Once connected to GitHub, this happens automatically:

```
Push to main
    ↓
Cloudflare detects change
    ↓
Runs: npm run build
    ↓
Deploys dist/ to CDN
    ↓
Site live at Pages URL
```

---

## 📱 Test Your Deployment

After deployment, test with:

```bash
# Check build
curl https://your-site.pages.dev

# Check specific routes
curl https://your-site.pages.dev/#projects
curl https://your-site.pages.dev/#skills
```

---

## 🐛 Troubleshooting

### Build fails?
- Check `npm run build` works locally
- Verify Node.js version compatibility
- Check build logs in Cloudflare dashboard

### Routes not working?
- Confirm `public/_redirects` is deployed
- Clear browser cache
- Check production build output

### Custom domain not working?
- Verify DNS CNAME records
- Wait 24-48 hours for DNS propagation
- Check nameserver configuration

---

## 📞 Support

- **Cloudflare Docs:** https://developers.cloudflare.com/pages/
- **GitHub Pages:** https://github.com/aris2394/cv
- **Wrangler CLI:** https://developers.cloudflare.com/workers/wrangler/

---

Generated: March 16, 2026
