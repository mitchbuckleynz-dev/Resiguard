# Resiguard Design System SOP

**Version:** 1.0
**Status:** Active
**Last Updated:** 2026-02-04

---

## 1. Overview
This document serves as the **Single Source of Truth** for the Resiguard brand identity across all web properties. All future landing pages and platform interfaces (SaaS, Admin Dashboards) **MUST** adhere to these guidelines to ensure consistency.

## 2. Design Tokens
These tokens are defined in `shared/styles/core.css`. Use CSS variables, do not hardcode hex values.

### 2.1 Colors
#### Primary Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#4A90A4` | Main brand color, buttons, icons |
| `--color-primary-dark` | `#3A7080` | Button hover states, active elements |
| `--color-primary-light` | `#E8F4F8` | Backgrounds, gradients, subtle highlights |

#### Neutral Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-text` | `#2C3E50` | Primary headings, body text (Light Mode) |
| `--color-text-light` | `#5A6C7D` | Secondary text, descriptions |
| `--color-white` | `#FFFFFF` | Card backgrounds, text on dark backgrounds |
| `--color-secondary` | `#F5F5F5` | Section backgrounds (alternating) |

#### Utility
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#10B981` | Success icons, trust badges |
| `--color-warning` | `#F59E0B` | Warning labels, promotional badges |

### 2.2 Typography
**Font Family:** `Inter`, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

| Token | Size | Clamp Value | Usage |
|-------|------|-------------|-------|
| `--font-size-hero` | 28px - 52px | `clamp(28px, 7vw, 52px)` | Main H1 titles |
| `--font-size-h2` | 24px - 40px | `clamp(24px, 5vw, 40px)` | Section headings |
| `--font-size-h3` | 18px - 24px | `clamp(18px, 4vw, 24px)` | Card titles, subtitles |
| `--font-size-body` | 16px | `16px` | Standard paragraph text |
| `--font-size-small` | 14px | `14px` | Metadata, captions, footnotes |

### 2.3 Spacing & Layout
| Token | Value | Note |
|-------|-------|------|
| `--spacing-xs` | `8px` | Tiny gaps (icons to text) |
| `--spacing-sm` | `16px` | Standard padding |
| `--spacing-md` | `24px` | Card padding |
| `--spacing-lg` | `40px` | Section separation |
| `--spacing-xl` | `60px` | Major section breaks |
| `--max-width` | `1200px` | Main container width |
| `--border-radius` | `16px` | Standard cards & images |

### 2.4 Shadows (Depth)
Resiguard uses a "layered" shadow system for a premium feel.
- `--shadow-sm`: Subtle separation.
- `--shadow-md`: Default card state.
- `--shadow-lg`: Hover states.
- `--shadow-xl`: Deep depth (modals, floating elements).

---

## 3. Component Guidelines

### 3.1 Buttons
- **Primary Button**: Use `.btn--primary`.
    - Background: `--color-primary`
    - Text: `--color-white`
    - Hover: `--color-primary-dark`, Lift effect (`transform: translateY(-2px)`)
    - Shadow: `--shadow-md` -> `--shadow-lg`

### 3.2 Cards
- **Standard Card**: Use `.card`.
    - Background: `--bg-surface`
    - Radius: `--border-radius`
    - Shadow: `--shadow-md`
    - Hover: Lift effect (`transform: translateY(-8px)`), Shadow increase (`--shadow-xl`)

### 3.3 Sections
- **Alternating Backgrounds**: Use `--bg-body` for primary content and `--bg-secondary` for alternating sections (e.g., Features vs. Testimonials) to create visual rhythm.

---

## 4. Dark Mode Support
The system automatically adapts to system preferences (`prefers-color-scheme: dark`).
- **Backgrounds**: Shift to Slate/Dark Blue tones (`#0F172A`, `#1E293B`).
- **Text**: Switches to White/Gray (`#F1F5F9`, `#94A3B8`).
- **Primary**: Becomes brighter (`#38BDF8`) for better contrast on dark backgrounds.
