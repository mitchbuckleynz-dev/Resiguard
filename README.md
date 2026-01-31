# Resiguard Landing Page

> Save $15,000+ on water tank requirements for your rural NZ new build

## 🎯 Overview

Mobile-first landing page for Resiguard fire sprinkler systems targeting rural New Zealand new build property owners.

### Key Features
- **Mobile-First Design**: Optimized for 320px-428px screens
- **Premium Aesthetic**: Modern teal/blue design with card-based layouts
- **Lead Capture Form**: Collects name, email, location via form submissions
- **Local Storage**: Form data stored locally (Go High Level CRM integration in Phase 2)
- **Fast Performance**: Optimized for rural 3G/4G connections (<3s load time)

## 📂 Project Structure

```
Resiguard/
├── index.html              # Main landing page
├── styles/
│   └── main.css            # Mobile-first CSS
├── scripts/
│   └── main.js             # Form handling & interactivity
├── images/                 # Generated assets
│   ├── resiguard_logo_*.png
│   ├── hero_tank_comparison_*.png
│   ├── hero_happy_family_*.png
│   ├── sprinkler_detail_*.png
│   └── testimonial_*.png
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment
└── README.md               # This file
```

## 🚀 Deployment

This site is configured for automatic deployment to GitHub Pages via GitHub Actions.

### Manual Deployment Steps:
1. Push code to `main` branch
2. GitHub Actions will automatically deploy to GitHub Pages
3. Site will be available at: `https://[username].github.io/Resiguard/`

## 🧪 Local Testing

### View Submissions (Browser Console)
```javascript
viewSubmissions()  // View all form submissions
clearSubmissions() // Clear all submissions
```

## 📱 Mobile Optimization

- **Viewport**: Optimized for 320px-428px
- **Tap Targets**: Minimum 44px × 44px
- **Sticky CTA**: Fixed bottom button on mobile
- **Touch-Optimized**: Accordion FAQ, smooth scroll

## 🔗 Integrations

- **Phase 1**: Local form storage (current)
- **Phase 2**: Go High Level CRM integration (planned)

## 📊 Form Data Schema

```json
{
  "name": "string (required)",
  "email": "string (required)",
  "location": "string (required)",
  "phone": "string (optional)",
  "timestamp": "ISO 8601",
  "source": "UTM parameters"
}
```

## 🎨 Design System

- **Primary Color**: #4A90A4 (Teal)
- **Font**: Inter (Google Fonts)
- **Layout**: Card-based with rounded corners
- **Photography**: High-quality architectural imagery

## 📄 License

© 2026 Resiguard. All rights reserved.
