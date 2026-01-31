# 📜 Project Constitution

**Last Updated:** 2026-01-31T13:04:42+13:00

---

## 🎯 Project Overview

**Project Name:** Resiguard  
**Status:** Active Development  
**Current Phase:** Phase 1 - Blueprint  
**Primary Goal:** Drive leads through "Get Your Free Estimate" CTA

### Mission Statement
Create a mobile-first landing page for Resiguard, a home fire sprinkler system company targeting rural New Zealand new build property owners. The page will capture leads via form submissions and integrate with Go High Level CRM.

### Key Integrations
- **Go High Level CRM** - Lead data storage and management
- **GitHub** - Page hosting and version control
- **Social Media Ads** - Traffic source

---

## 📊 Data Schemas

### Input Schema (Lead Form Submission)
```json
{
  "name": "string (required)",
  "email": "string (required, valid email format)",
  "location": "string (required, NZ region/city)",
  "phone": "string (optional, NZ format)",
  "timestamp": "ISO 8601 datetime",
  "source": "string (utm parameters from ads)"
}
```

### Output Schema (Go High Level CRM Payload)
```json
{
  "contact": {
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "tags": ["rural-builder", "fire-sprinkler-lead"],
    "customFields": {
      "location": "string",
      "leadSource": "resiguard-landing-page",
      "adCampaign": "string",
      "submissionDate": "ISO 8601"
    }
  },
  "opportunityStage": "New Lead"
}
```

### Page Asset Schema
```json
{
  "landingPage": {
    "format": "HTML5 + CSS3 + Vanilla JavaScript",
    "hosting": "GitHub Pages",
    "responsive": "Mobile-first (320px+)",
    "performance": "<3s load on 3G",
    "assets": {
      "images": "WebP with fallbacks",
      "fonts": "Google Fonts (Inter/similar)",
      "icons": "SVG format"
    }
  }
}
```

---

## 🔐 Behavioral Rules

### Design Principles
1. **Mobile-First Mandatory**: Design for 320px-428px FIRST, then scale up
2. **Performance Critical**: Must load under 3 seconds on rural 3G/4G
3. **Touch Optimized**: All tap targets minimum 44px × 44px
4. **Premium Aesthetic**: Follow inspiration from provided screenshots (teal/blue theme, modern cards, clean typography)
5. **No Placeholders**: All images must be generated, no "placeholder" text or images

### Technical Constraints
- **Single Column Layout**: No horizontal scrolling on mobile
- **Minimum Font Sizes**: 16px body text, 14px minimum for any text
- **Image Optimization**: Compress all images, lazy load below fold
- **Sticky CTA**: Fixed bottom CTA button appears after hero section
- **Click-to-Actions**: Phone numbers use `tel://`, emails use `mailto://`

### Content Rules
- **CTA Frequency**: "Get Your Free Estimate" appears 7+ times throughout page
- **Trust Elements**: Display compliance badges, certifications, testimonials
- **Scarcity/Urgency**: "Limited Design Consultations Available This Quarter"
- **Social Proof**: Real testimonials with photos (generated if needed)

### Form Submission Rules
- **Minimal Fields**: Only collect name, email, location (+ optional phone)
- **Validation**: Client-side validation before submission
- **Feedback**: Clear success/error states
- **No Crashes**: If Go High Level API fails, log error but show user success message

---

## 🏗️ Architectural Invariants

### 1. Data-First Rule
- All data schemas must be defined in this document before coding begins
- No script in `tools/` may be written without a matching SOP in `architecture/`

### 2. Self-Annealing Loop
- Errors trigger: Analyze → Patch → Test → Update Architecture

### 3. Deliverables vs. Intermediates
- `.tmp/` → Ephemeral local processing
- Cloud/Database → Final payloads only

---

## 🔄 Change Log

| Date | Change | Reason |
|------|--------|--------|
| 2026-01-31 | Constitution initialized | Protocol 0: Initialization |

---

## 🛠️ Maintenance Log

> Will be populated during Trigger phase for long-term stability.
