# 🌐 Custom Domain Setup Guide for GitHub Pages

## Complete Guide to Using Your Own Domain Name

Instead of `vtn02.github.io/VTN_PORTFOLIO`, you can use your own custom domain like:
- `www.vithusan.com`
- `vithusan.dev`
- `portfolio.vithusan.com`
- Or any domain you own!

---

## 📋 Prerequisites

Before you start, you need:
1. ✅ Your portfolio deployed on GitHub Pages
2. ✅ A custom domain name (purchased from a domain registrar)

---

## 🛒 STEP 1: Purchase a Domain Name

If you don't have a domain yet, you can buy one from these popular registrars:

### Recommended Domain Registrars:

| Registrar | Price Range | Best For | Website |
|-----------|-------------|----------|---------|
| **Namecheap** | $8-15/year | Best value, easy to use | [namecheap.com](https://www.namecheap.com) |
| **Google Domains** | $12-20/year | Simple interface, Google integration | [domains.google](https://domains.google) |
| **Porkbun** | $6-12/year | Cheapest, great features | [porkbun.com](https://porkbun.com) |
| **Cloudflare** | $8-15/year | Best for developers | [cloudflare.com](https://www.cloudflare.com/products/registrar/) |
| **GoDaddy** | $10-20/year | Most popular (but pricier) | [godaddy.com](https://www.godaddy.com) |

### Domain Extension Recommendations:
- `.com` - Most professional and recognizable ($10-15/year)
- `.dev` - Perfect for developers ($12-15/year)
- `.me` - Great for personal portfolios ($8-12/year)
- `.tech` - Tech-focused ($8-12/year)
- `.io` - Popular with tech startups ($30-40/year)

**💡 Tip**: For a portfolio, I recommend `.com` or `.dev`

---

## ⚙️ STEP 2: Configure Your Custom Domain on GitHub

### 2.1 Add Custom Domain in GitHub Settings

1. Go to your repository: `https://github.com/VTN02/VTN_PORTFOLIO`
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Custom domain**, enter your domain:
   - For apex domain: `vithusan.com`
   - For subdomain: `www.vithusan.com` or `portfolio.vithusan.com`
5. Click **Save**

### 2.2 Create CNAME File (Automatic)

GitHub will automatically create a `CNAME` file in your repository with your domain name. This file tells GitHub Pages which domain to serve your site from.

**Important**: Don't delete this file!

---

## 🔧 STEP 3: Configure DNS Settings at Your Domain Registrar

This is the most important step! You need to point your domain to GitHub's servers.

### Option A: Using a Subdomain (www.vithusan.com) - **RECOMMENDED**

This is easier and more reliable.

**DNS Records to Add:**

| Type | Host/Name | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| CNAME | www | vtn02.github.io | 3600 |

**Steps** (example for Namecheap):
1. Log in to your domain registrar
2. Go to **Domain List** → Select your domain → **Advanced DNS** or **DNS Settings**
3. Add a new record:
   - **Type**: CNAME Record
   - **Host**: www
   - **Value**: vtn02.github.io
   - **TTL**: Automatic or 3600
4. Click **Save**

---

### Option B: Using Apex Domain (vithusan.com without www)

**DNS Records to Add:**

You need to add **4 A records** pointing to GitHub's IP addresses:

| Type | Host/Name | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| A | @ | 185.199.108.153 | 3600 |
| A | @ | 185.199.109.153 | 3600 |
| A | @ | 185.199.110.153 | 3600 |
| A | @ | 185.199.111.153 | 3600 |

**Optional but Recommended**: Also add a CNAME for www:

| Type | Host/Name | Value/Points To | TTL |
|------|-----------|-----------------|-----|
| CNAME | www | vtn02.github.io | 3600 |

---

### Option C: Using Both (Recommended for Best Experience)

Set up both apex and www, with one redirecting to the other:

**Primary Domain**: `www.vithusan.com`

1. Add the CNAME record for www (as in Option A)
2. Add the 4 A records for apex domain (as in Option B)
3. In GitHub Pages settings, use `www.vithusan.com` as your custom domain

This way:
- `vithusan.com` → redirects to → `www.vithusan.com`
- `www.vithusan.com` → your portfolio

---

## 📝 Detailed Instructions for Popular Registrars

### Namecheap

1. Log in to [Namecheap](https://www.namecheap.com)
2. Click **Domain List** → Select your domain
3. Click **Advanced DNS** tab
4. Under **Host Records**, click **Add New Record**
5. Add the DNS records as shown above
6. Click the **✓** (checkmark) to save
7. Wait 10-30 minutes for DNS propagation

### Google Domains

1. Log in to [Google Domains](https://domains.google.com)
2. Click on your domain
3. Click **DNS** in the left menu
4. Scroll to **Custom resource records**
5. Add the DNS records as shown above
6. Click **Add**
7. Wait 10-30 minutes for DNS propagation

### Cloudflare

1. Log in to [Cloudflare](https://dash.cloudflare.com)
2. Select your domain
3. Click **DNS** in the top menu
4. Click **Add record**
5. Add the DNS records as shown above
6. Make sure the **Proxy status** is set to **DNS only** (gray cloud, not orange)
7. Click **Save**
8. Wait 10-30 minutes for DNS propagation

### Porkbun

1. Log in to [Porkbun](https://porkbun.com)
2. Click **Domain Management**
3. Click **DNS** for your domain
4. Add the DNS records as shown above
5. Click **Submit**
6. Wait 10-30 minutes for DNS propagation

---

## ✅ STEP 4: Enable HTTPS (Recommended)

After your DNS is configured and propagated:

1. Go to your GitHub repository → **Settings** → **Pages**
2. Wait for the message: "DNS check successful"
3. Check the box: **Enforce HTTPS**
4. Your site will now be served over secure HTTPS! 🔒

**Note**: It may take up to 24 hours for the HTTPS certificate to be issued.

---

## 🧪 STEP 5: Test Your Domain

### Check DNS Propagation

Use these tools to verify your DNS settings:
- [whatsmydns.net](https://www.whatsmydns.net/)
- [dnschecker.org](https://dnschecker.org/)

Enter your domain and check if the records are propagating globally.

### Test Your Website

After DNS propagation (10 minutes to 48 hours):
1. Open a browser
2. Go to your custom domain (e.g., `www.vithusan.com`)
3. Your portfolio should load! 🎉

---

## ⏱️ How Long Does It Take?

| Step | Time |
|------|------|
| Adding domain to GitHub | Instant |
| DNS propagation | 10 minutes - 48 hours (usually 1-2 hours) |
| HTTPS certificate | Up to 24 hours |

**💡 Tip**: DNS changes usually take 1-2 hours, but can take up to 48 hours in rare cases.

---

## 🔍 Troubleshooting

### Problem: "Domain is improperly configured"

**Solutions**:
1. Double-check your DNS records (A or CNAME)
2. Make sure you're using the correct GitHub IPs
3. Wait longer - DNS can take up to 48 hours
4. Clear your browser cache and try again

### Problem: "DNS check unsuccessful"

**Solutions**:
1. Verify DNS records at your registrar
2. Use [whatsmydns.net](https://www.whatsmydns.net/) to check propagation
3. Wait 24-48 hours for full propagation
4. Make sure you removed any conflicting DNS records

### Problem: Website shows 404 error

**Solutions**:
1. Check that the CNAME file exists in your repository
2. Make sure `index.html` is in the root directory
3. Verify GitHub Pages is enabled
4. Wait a few minutes and refresh

### Problem: HTTPS not available

**Solutions**:
1. Make sure DNS is fully propagated first
2. Uncheck and re-check "Enforce HTTPS" in GitHub settings
3. Wait up to 24 hours for certificate issuance
4. Try removing and re-adding the custom domain

### Problem: CSS/Images not loading

**Solutions**:
1. Update all absolute paths to relative paths in your HTML
2. Change `/CSS/style.css` to `CSS/style.css`
3. Change `/images/photo.jpg` to `images/photo.jpg`

---

## 📧 Email Setup (Optional)

Want to use email with your domain (e.g., `contact@vithusan.com`)?

### Free Options:
1. **Zoho Mail** - Free for 1 user, 5GB storage
   - [zoho.com/mail](https://www.zoho.com/mail/)
2. **ImprovMX** - Free email forwarding
   - [improvmx.com](https://improvmx.com/)

### Paid Options:
1. **Google Workspace** - $6/month per user
2. **Microsoft 365** - $6/month per user

---

## 🎯 Quick Reference

### For www subdomain (RECOMMENDED):
```
Type: CNAME
Host: www
Value: vtn02.github.io
```

### For apex domain:
```
Type: A, Host: @, Value: 185.199.108.153
Type: A, Host: @, Value: 185.199.109.153
Type: A, Host: @, Value: 185.199.110.153
Type: A, Host: @, Value: 185.199.111.153
```

---

## 📚 Additional Resources

- [GitHub Pages Custom Domain Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Pages IP Addresses](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)
- [DNS Checker Tool](https://dnschecker.org/)
- [SSL Certificate Checker](https://www.sslshopper.com/ssl-checker.html)

---

## ✨ Summary Checklist

- [ ] Purchase a domain name
- [ ] Add custom domain in GitHub Pages settings
- [ ] Configure DNS records at your domain registrar
- [ ] Wait for DNS propagation (1-48 hours)
- [ ] Enable HTTPS in GitHub settings
- [ ] Test your website at your custom domain
- [ ] Celebrate! 🎉

---

**Your portfolio will look much more professional with a custom domain!**

Example:
- Before: `vtn02.github.io/VTN_PORTFOLIO`
- After: `www.vithusan.dev` ✨

Good luck with your deployment! 🚀
