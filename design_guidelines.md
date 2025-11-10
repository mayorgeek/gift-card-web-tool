# Gift Card Rate Checker - Design Guidelines

## Design Approach
**System Selected**: Material Design principles with utility-first focus
**Rationale**: Information-dense application requiring clear data presentation, quick scanning, and efficient user actions. Professional appearance builds trust for financial transactions.

## Typography
- **Primary Font**: Inter (Google Fonts) - excellent readability for data tables
- **Hierarchy**:
  - Business Name/Logo: text-2xl to text-3xl, font-bold
  - Section Headers: text-xl, font-semibold
  - Gift Card Names: text-base, font-medium
  - Rate Values: text-lg, font-semibold (emphasis on numbers)
  - Labels/Descriptions: text-sm, font-normal
  - Button Text: text-sm, font-medium

## Layout System
**Spacing**: Tailwind units of 2, 4, 6, and 8 for consistent rhythm
- Component padding: p-4 to p-6
- Section spacing: space-y-6 to space-y-8
- Card gaps: gap-4
- Button padding: px-6 py-3

## Core Components

### Website Layout
**Header**:
- Logo (left), Business Name (left/center), Contact CTAs (right)
- Sticky navigation for quick access to Trade/Chat buttons
- Height: h-16, shadow-sm for subtle elevation

**Search Section**:
- Prominent search bar (max-w-md, centered or left-aligned)
- Search icon inside input, rounded-lg border
- Auto-suggest dropdown showing matching gift cards as user types

**Rates Display**:
- **Table View**: Clean table with columns: Gift Card | Buy Rate | Sell Rate | Action
- **Card View** (mobile): Individual cards with gift card name, rates, and quick action button
- Alternating row backgrounds for easier scanning
- Hover state on rows for interactivity

**Contact Section**:
- Two prominent CTAs: "Trade Now" (primary) and "Chat With Us" (secondary)
- Multiple contact method buttons (WhatsApp, Telegram, etc.) in grid layout
- Icons from Heroicons for consistency

**Footer**:
- Business info, additional contact details
- Minimal height: py-8

### Chrome Extension Popup
- **Dimensions**: 380px width × 500px height (compact but readable)
- **Layout**: Single column with search at top, scrollable rate list, sticky CTAs at bottom
- Search bar: mb-4
- Rate cards: compact spacing (p-3, text-sm)
- Bottom action bar: fixed position with Trade/Chat buttons side-by-side

## Component Library

**Search Input**:
- Border style: border-2, rounded-lg
- Focus state: ring-2 for clear interaction feedback
- Icon: Leading search icon (h-5 w-5)

**Rate Table**:
- Header row: font-semibold, border-b-2
- Data rows: py-3, border-b
- Number formatting: Clear decimal alignment, currency symbols

**CTA Buttons**:
- Primary (Trade): Larger size, px-8 py-3, rounded-lg
- Secondary (Chat): Outlined style, matching border
- Contact method buttons: Icon + text, gap-2, rounded-md

**Gift Card Cards** (mobile/extension):
- rounded-lg, border, p-4
- Gift card name at top, rates in two-column grid below
- Small action button at bottom

**Logo Container**:
- Max height: h-12 to h-16
- Maintain aspect ratio, object-contain

## Images
No hero image required. This is a utility tool focused on quick information access.

**Optional Brand Elements**:
- Small decorative pattern/gradient in header background (subtle)
- Gift card brand logos (small icons, h-6 w-6) next to card names in table

## Animations
Minimal animations only:
- Smooth transitions on hover states (transition-colors duration-200)
- Subtle fade-in for search results dropdown
- No scroll animations or complex transitions

## Accessibility
- Clear focus indicators on all interactive elements
- Sufficient contrast ratios for rate numbers
- Keyboard navigation for search and table
- ARIA labels for icon-only buttons

## Customization Architecture
Create a config.js file structure for vendors:
- Brand colors (primary, secondary, accent)
- Logo URL/path
- Business name and tagline
- Contact links (WhatsApp, Telegram URLs)
- Gift card rates data array

Keep all styling references as CSS variables or Tailwind classes that map to config values for easy theming.