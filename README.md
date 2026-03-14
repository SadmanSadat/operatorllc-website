# OperatorLLC Website

## Local Development
1. Install dependencies: `npm install`
2. Copy env template: `cp .env.local.example .env.local`
3. Run dev server: `npm run dev`

## Deployment (Vercel)
1. Push repository to GitHub.
2. Import project in Vercel and select framework **Next.js**.
3. Add all variables from `.env.local.example` in Project Settings > Environment Variables.
4. Deploy main branch.
5. Confirm custom domain is attached under **Settings > Domains**.

## Email Setup (Resend or SendGrid SMTP)
- **Resend**: set `RESEND_API_KEY` and verified sender domain.
- **SendGrid SMTP**: set `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_FROM_EMAIL`, and `CONTACT_TO_EMAIL`.

## Analytics Setup
- Add `GA4_MEASUREMENT_ID` and `GTM_ID` to environment variables.
- Wire scripts in layout when IDs are available.

## Google Business Profile Integration
- Keep NAP consistent: Operator LLC, Austin, TX, phone/email.
- Link website URL and service pages from profile.
- Collect and respond to reviews weekly.

## Domain & DNS Configuration
- A Record: `@ -> 76.76.21.21` (Vercel)
- CNAME: `www -> cname.vercel-dns.com`
- Optional AAAA via provider instructions when enabled.

## SSL/HTTPS
- Vercel provisions SSL automatically.
- Enforce HTTPS redirects in Vercel domain settings.

## Post-Launch SEO Verification
1. Submit `https://www.operatorllc.com/sitemap.xml` in Search Console.
2. Validate schema using Rich Results Test.
3. Verify canonical and robots directives.
4. Measure Core Web Vitals in PageSpeed Insights.
5. Track branded + non-branded queries and GEO visibility monthly.
