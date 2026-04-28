# LuckyGameTools DESIGN.md

This file follows the DESIGN.md pattern used by VoltAgent's `awesome-design-md` collection: it gives coding agents a plain-text design system they can apply consistently across the LuckyGameTools static site.

## 1. Visual Theme & Atmosphere

LuckyGameTools should feel like a compact aurora game utility console: dark, colorful, technical, trustworthy, and fast. The interface should not look like a marketing landing page. It should feel closer to a launcher, dashboard, or developer-facing tool surface where users can quickly find downloads, safety reports, FAQ entries, game updates, and SteamID utilities.

The visual language is a black console canvas with a colorful animated backdrop showing through restrained translucent surfaces. Emerald remains the trust and status color, cyan supports navigation and technical links, amber handles warnings and highlights, rose/magenta adds small energetic accents, and violet is used sparingly for secondary interface variety. No single hue should dominate the page.

Keep the layout dense but readable. Prefer structured sections, compact cards, crisp borders, stable grids, and clear navigation. The colorful background should feel integrated, not overpowering: panels may be translucent with moderate blur, but text contrast must stay high. Avoid decorative blobs, oversized gradients, and heavy glass effects. Animation should be subtle and disabled or reduced for users who prefer reduced motion.

## 2. Color Palette & Roles

### Core Colors

- **Aurora Black** (`#06080d`): page background and dark full-width surfaces.
- **Translucent Panel** (`rgba(8, 13, 18, 0.78)`): primary cards, sections, navbar, modal backgrounds.
- **Raised Surface** (`rgba(12, 19, 26, 0.88)`): feature cards, tool cards, table rows, hover surfaces.
- **Soft Aurora Border** (`rgba(142, 255, 226, 0.18)`): borders, section dividers, table rules.
- **Emerald Signal** (`#35f0c6`): trust, success, active nav, primary CTAs.
- **Cyan Link** (`#49c7ff`): technical links, navigation hover, table headers.
- **Amber Warning** (`#ffbd4a`): warnings, notes, caution callouts.
- **Rose Accent** (`#ff5fa2`): Chinese/community accents and high-energy secondary highlights.
- **Violet Accent** (`#a78bfa`): secondary navigation/card accents, used sparingly.

### Text Colors

- **Text Primary** (`#f7fbff`): headings and main text on dark surfaces.
- **Text Secondary** (`#c8d6d4`): body copy, list text, descriptions.
- **Text Muted** (`#8ea3a2`): metadata, footers, subdued labels.
- **Text Inverse** (`#04100b`): text on bright emerald buttons when needed.

### State Colors

- **Success** (`#35f0c6`): verified safe, completed, active success states.
- **Danger** (`#ef4444`): errors and failures.
- **Warning** (`#f59e0b`): warnings and attention notices.
- **Focus** (`#49c7ff`): keyboard focus ring and active controls.

## 3. Typography Rules

Use system fonts for speed and reliability.

- **Primary UI Font**: `Inter`, `Segoe UI`, `Microsoft YaHei`, `PingFang SC`, system sans-serif.
- **Monospace Font**: `SFMono-Regular`, `Consolas`, `Liberation Mono`, monospace.

| Role | Size | Weight | Line Height | Notes |
| --- | --- | --- | --- | --- |
| Display / Logo | 44-56px desktop, 30-36px mobile | 800 | 1.05 | Brand title only |
| Page Heading | 28-36px | 750 | 1.15 | Major page headers |
| Section Heading | 22-26px | 700 | 1.25 | Section title |
| Card Heading | 17-20px | 650 | 1.3 | Feature cards and utility panels |
| Body | 15-16px | 400 | 1.65 | Main reading text |
| Small / Meta | 13-14px | 500 | 1.5 | labels, notes, table metadata |
| Button / Nav | 14-15px | 700 | 1.2 | short, scannable commands |
| Code / IDs | 13-14px | 500 | 1.45 | Steam IDs, AppIDs, URLs |

Do not use negative letter spacing. Uppercase may be used only for small labels or compact navigation, with modest letter spacing.

## 4. Component Styling

### Navigation

- Fixed top dark navbar using `Panel Black`.
- Compact links with clear active state.
- Language switch belongs inside the nav when a nav exists.
- On utility pages without a full navbar, use a small top-right language switch button.

### Buttons

- Primary buttons are dark translucent surfaces with cyan or emerald borders.
- Hover uses a subtle cyan/emerald tint and slight vertical lift.
- Warning buttons use amber border/text; community or Chinese-entry buttons may use rose accents.
- Border radius: 6px for buttons, 8px maximum for cards.

### Cards & Sections

- Cards use translucent dark panels over the animated background.
- Borders are visible but restrained: `1px solid Soft Aurora Border`.
- Radius is 8px or less.
- Use thin top/left accents that rotate between emerald, cyan, amber, and rose for visual rhythm.
- Do not nest decorative cards inside cards.

### Notices

- Safety or success notice: emerald-tinted border/background.
- Warning notice: amber-tinted border/background.
- Error notice: red-tinted border/background.
- Keep notices readable; avoid huge alert blocks.

### Tables

- Tables should be horizontally scrollable on mobile.
- Header rows use raised dark surfaces.
- AppIDs and timestamps should use monospace or compact UI text.
- Rows should not jump in height when images load.

### Images & Modal

- All images need `alt`, `loading="lazy"`, and `decoding="async"` unless above-the-fold.
- Image previews use a dark overlay and a crisp close button.
- Keep screenshot thumbnails stable with fixed max dimensions.

## 5. Layout Principles

- Max content width: 1180-1200px.
- Base spacing unit: 8px.
- Section spacing: 24-40px on desktop, 16-28px on mobile.
- Feature grids collapse from 3 columns to 2 to 1.
- Utility pages should keep forms centered and scannable.
- Avoid giant hero-only screens; first viewport should show useful action links or content.

## 6. Depth & Elevation

Use borders, translucent surfaces, and contrast more than heavy blur.

- Flat: page background.
- Level 1: cards with `1px solid rgba(142, 255, 226, 0.18)`.
- Level 2: hover cards with cyan/emerald border tint and mild shadow.
- Modal: black overlay with a single elevated image panel.

Preferred shadow:

```css
0 18px 42px rgba(0, 0, 0, 0.28)
```

Do not add decorative gradient blobs or floating orbs.

## 7. Do's and Don'ts

### Do

- Preserve all existing text content unless explicitly asked to remove it.
- Keep Chinese and English pages paired where possible.
- Keep `ads.txt` untouched.
- Keep Google ad and analytics snippets intact unless asked otherwise.
- Prefer CSS variables and shared classes over page-specific inline styling.
- Use nav-based language switching instead of full-width explanation bars.

### Don't

- Do not introduce garbled text or lossy encoding conversions.
- Do not use PowerShell text output as proof of UTF-8 correctness.
- Do not flood the page with gradients, blur, or rounded pill cards.
- Do not remove user-provided content to make layout easier.
- Do not use large purple/blue gradients as the dominant brand look.

## 8. Responsive Behavior

| Breakpoint | Behavior |
| --- | --- |
| <480px | single column, full-width buttons, compact logo |
| 480-768px | one-column content, scrollable tables |
| 768-992px | two-column grids where comfortable |
| >992px | full nav and multi-column grids |

Touch targets should be at least 40px tall. Text must not overflow buttons or cards. Tables should scroll horizontally instead of forcing the whole page wider.

## 9. Agent Prompt Guide

When changing LuckyGameTools UI, use this prompt:

> Build in the LuckyGameTools design system: console-black background, emerald signal accents, compact technical layout, cards with 8px radius or less, clear nav-based language switching, no decorative blobs, preserve all existing text, and keep `ads.txt` untouched.

Quick references:

- Background: `#06080d`
- Surface: `rgba(8, 13, 18, 0.78)`
- Raised card: `rgba(12, 19, 26, 0.88)`
- Border: `rgba(142, 255, 226, 0.18)`
- Primary accent: `#35f0c6`
- Cyan accent: `#49c7ff`
- Warning accent: `#ffbd4a`
- Rose accent: `#ff5fa2`
- Text: `#f7fbff`, `#c8d6d4`, `#8ea3a2`
