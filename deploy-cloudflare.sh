#!/bin/bash

echo "🚀 Deploying to Cloudflare Pages..."
echo ""

# Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed!"
  exit 1
fi

echo "✅ Build completed successfully!"
echo ""
echo "📝 Next steps to deploy to Cloudflare Pages:"
echo ""
echo "1. Go to https://dash.cloudflare.com"
echo "2. Select your account and navigate to Pages"
echo "3. Click 'Create a project' > 'Connect to Git'"
echo "4. Select your GitHub repository: aris2394/cv"
echo "5. Configure build settings:"
echo "   - Build command: npm run build"
echo "   - Build output directory: dist"
echo "6. Click 'Save and Deploy'"
echo ""
echo "💡 Alternative: Use Wrangler CLI"
echo "   npx wrangler login"
echo "   npx wrangler pages deploy dist/"
echo ""
echo "✨ Your site will be available at: https://<project-name>.pages.dev"
echo ""

