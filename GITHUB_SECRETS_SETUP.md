# 🔐 GitHub Secrets Setup for Cloudflare Deployment

## Required Secrets

To enable automatic deployment from GitHub to Cloudflare Pages, you need to set up two secrets:

### 1. CLOUDFLARE_API_TOKEN

**How to get it:**

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click **Create Token**
3. Select **Edit Cloudflare Workers** template (or custom)
4. Configure permissions:
   - ✅ Account → Cloudflare Pages → Edit
   - ✅ User → API Token → Read
5. Click **Continue to summary**
6. Click **Create Token**
7. Copy the token (it will only show once!)

### 2. CLOUDFLARE_ACCOUNT_ID

**How to get it:**

1. Go to https://dash.cloudflare.com/
2. Look at the URL bar - it shows: `dash.cloudflare.com/<YOUR_ACCOUNT_ID>`
3. Or go to **Accounts** and find your Account ID in settings

## Adding Secrets to GitHub

### Step 1: Go to Repository Settings

1. Open https://github.com/aris2394/cv
2. Click **Settings** tab
3. Select **Secrets and variables** → **Actions**

### Step 2: Add CLOUDFLARE_API_TOKEN

1. Click **New repository secret**
2. Name: `CLOUDFLARE_API_TOKEN`
3. Paste your Cloudflare API Token
4. Click **Add secret**

### Step 3: Add CLOUDFLARE_ACCOUNT_ID

1. Click **New repository secret**
2. Name: `CLOUDFLARE_ACCOUNT_ID`
3. Paste your Cloudflare Account ID
4. Click **Add secret**

## Verification

After adding secrets:

```bash
# Push a commit to main to trigger deployment
git push origin main

# Watch the workflow
# Go to: https://github.com/aris2394/cv/actions
# You should see "Deploy to Cloudflare Pages" running
```

## What Happens Next

✅ GitHub Actions automatically:
1. Checks out your code
2. Installs dependencies (`npm ci`)
3. Builds the project (`npm run build`)
4. Deploys to Cloudflare Pages
5. Comments on PRs with preview URL

## Workflow Status

You can monitor deployment at:
- GitHub Actions: https://github.com/aris2394/cv/actions
- Cloudflare Dashboard: https://dash.cloudflare.com/pages

## Troubleshooting

### Workflow fails with "Invalid API Token"
- Check CLOUDFLARE_API_TOKEN is correct
- Token may have expired, generate a new one
- Verify permissions include "Cloudflare Pages"

### Workflow fails with "Invalid Account ID"
- Verify CLOUDFLARE_ACCOUNT_ID is exactly correct
- No extra spaces or characters

### Build fails
- Run `npm run build` locally to test
- Check for TypeScript/React errors
- Review GitHub Actions logs

## Security Notes

🔒 Secrets are:
- Encrypted at rest
- Never shown in logs
- Only accessible to Actions workflows
- Masked in workflow output

⚠️ Never commit secrets to git!

---

Generated: March 16, 2026
