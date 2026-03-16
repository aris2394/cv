# 🔐 GitHub Secrets Setup untuk Cloudflare Deployment

Untuk mengaktifkan auto-deployment ke Cloudflare Pages, ikuti langkah berikut:

## 1️⃣ Dapatkan Cloudflare API Token

1. Buka https://dash.cloudflare.com/profile/api-tokens
2. Klik **"Create Token"**
3. Pilih template: **"Edit Cloudflare Workers"** atau buat custom dengan permissions:
   - `Account.Pages:Edit`
   - `Zone.Pages:Edit`
4. Copy token yang dibuat

## 2️⃣ Dapatkan Cloudflare Account ID

1. Login ke https://dash.cloudflare.com
2. Buka domain atau akun Anda
3. Copy **Account ID** dari sidebar kanan (di bagian bawah)

## 3️⃣ Setup GitHub Secrets

1. Buka repository: https://github.com/aris2394/cv
2. Pergi ke **Settings** → **Secrets and variables** → **Actions**
3. Klik **"New repository secret"** dan tambahkan:

### Secret 1: CLOUDFLARE_API_TOKEN
- **Name:** `CLOUDFLARE_API_TOKEN`
- **Value:** [Paste API token dari step 1]

### Secret 2: CLOUDFLARE_ACCOUNT_ID
- **Name:** `CLOUDFLARE_ACCOUNT_ID`
- **Value:** [Paste Account ID dari step 2]

## 4️⃣ Setup Cloudflare Pages Project

### Opsi A: Manual Setup (Recommended)
1. Buka https://dash.cloudflare.com/pages
2. Klik **"Create a project"** → **"Connect to Git"**
3. Authorize GitHub dan select repository: `aris2394/cv`
4. Build settings:
   - **Framework:** None
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Klik **"Save and Deploy"**

### Opsi B: Automatic via GitHub Actions
Sudah configured! Setiap push ke `main` branch akan auto-deploy.

## 5️⃣ Verifikasi Deployment

Setelah secrets dikonfigurasi:
1. Push commit baru ke main branch
2. Buka repository → **Actions** tab
3. Lihat workflow "Deploy to Cloudflare Pages" running
4. Tunggu sampai hijau ✅
5. Akses site di: `https://aris-cv.pages.dev`

## 📋 Checklist

- [ ] API Token dibuat di Cloudflare
- [ ] Account ID dikopi
- [ ] `CLOUDFLARE_API_TOKEN` secret ditambahkan di GitHub
- [ ] `CLOUDFLARE_ACCOUNT_ID` secret ditambahkan di GitHub
- [ ] Cloudflare Pages project dibuat
- [ ] Workflow berhasil dijalankan

## 🆘 Troubleshooting

### Error: "API token is invalid or expired"
- Pastikan token di-copy dengan benar tanpa spasi
- Buat token baru dengan permissions yang tepat

### Error: "Project not found"
- Pastikan project name di workflow sama dengan Cloudflare Pages project
- Current project name: `aris-cv`

### Build gagal
- Cek output di GitHub Actions untuk error details
- Pastikan `npm install` berjalan sukses
- Verifikasi `npm run build` berjalan di local

## 📚 Referensi

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [GitHub Actions Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
