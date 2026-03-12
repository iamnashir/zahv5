# ZAH Luxury Holiday Homes

A Next.js 16 luxury holiday homes platform with multi-language support.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **i18n**: next-intl (EN, AR, RU, ZH)
- **Styling**: Vanilla CSS Modules
- **Icons**: lucide-react

## Deployment

### Netlify (Recommended for Client Demo)
1. Push this folder to a GitHub repo
2. Connect it to [Netlify](https://app.netlify.com) → "Import from Git"
3. Build settings are auto-detected from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Click **Deploy** — no environment variables required for the demo

### Vercel (Alternative)
```bash
npx vercel
```

## Local Development
```bash
npm install
npm run dev
# → http://localhost:3000
```

## Pages
| Route | Description |
|---|---|
| `/` | Homepage with 9 sections |
| `/properties` | Interactive filtered listings |
| `/properties/[id]` | Full detail + availability calendar |
| `/about` | Brand story, team, timeline |
| `/blog` | Articles & guides |
| `/contact` | Map + form + WhatsApp |
| `/checkout` | 4-step booking flow |
| `/owners` | Property management + income calculator |
| `/partner` | Franchise & GCC partnerships |
