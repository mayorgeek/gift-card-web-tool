# Gift Card Rate Checker - Customization Guide

This is a fully customizable template for gift card vendors. You can easily rebrand it for different vendors by modifying the configuration files.

## Website Customization

### 1. Basic Configuration (`client/config.ts`)

Edit this file to customize the entire website:

```typescript
export const vendorConfig: VendorConfig = {
  // Business Details
  businessName: "Your Business Name",
  tagline: "Your Tagline Here",
  logo: "💳", // Use any emoji or replace with image path
  
  // Brand Colors (HSL format: hue saturation% lightness%)
  colors: {
    primary: "221 83% 53%",    // Main brand color
    secondary: "210 17% 90%",  // Secondary color
  },
  
  // Contact Information
  contactLinks: {
    whatsapp: "https://wa.me/1234567890",
    telegram: "https://t.me/username",
    phone: "+1 (234) 567-8900",
    email: "support@yourbusiness.com",
  },
  
  // Gift Card Rates
  giftCards: [
    {
      id: "1",
      name: "iTunes Gift Card",
      category: "Entertainment",
      buyRate: 0.82,  // Rate you buy at
      sellRate: 0.78, // Rate you sell at
      currency: "USD",
    },
    // Add more cards...
  ],
};
```

### 2. Advanced Color Customization

If you need to customize beyond primary and secondary colors, edit `client/src/index.css`:

```css
:root {
  --primary: 221 83% 53%;        /* Your brand color */
  --secondary: 210 17% 90%;      /* Secondary color */
  --background: 0 0% 100%;       /* Page background */
  --foreground: 222 47% 11%;     /* Text color */
  /* ... other colors */
}
```

### 3. Logo Customization

**Option A: Using Emoji (Current)**
```typescript
logo: "💳"
```

**Option B: Using Image File**
1. Add your logo image to `client/public/` (e.g., `logo.png`)
2. Update config:
```typescript
logo: "/logo.png"
```
3. Update Header.tsx to use `<img>` instead of emoji

### 4. Font Customization

Edit `client/index.html` to change fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update `client/src/index.css`:
```css
--font-sans: 'YourFont', sans-serif;
```

## Chrome Extension Customization

Edit `extension/config.js` to customize the extension:

```javascript
const VENDOR_CONFIG = {
  businessName: "Your Business Name",
  tagline: "Your Tagline",
  logo: "💳",
  
  colors: {
    primary: "#3b82f6",
    secondary: "#f3f4f6"
  },
  
  contactLinks: {
    whatsapp: "https://wa.me/your-number",
    telegram: "https://t.me/your-username",
    phone: "your-phone",
    email: "your-email"
  },
  
  giftCards: [
    // Same format as website config
  ]
};
```

### Extension Icons

Create icons in the `extension/` folder:
- `icon16.png` (16x16)
- `icon48.png` (48x48)
- `icon128.png` (128x128)

Or use online tools like https://favicon.io to generate them.

## Quick Setup for New Vendor

1. **Copy this entire project folder**
2. **Edit `client/config.ts`**:
   - Change business name and tagline
   - Update logo
   - Update colors (HSL format)
   - Update contact links
   - Replace gift card data
3. **Edit `extension/config.js`** with the same information
4. **Test the website**: Run `npm run dev`
5. **Test the extension**: Load in Chrome
6. **Deploy**: Host the website and publish extension

## Data Management

### Adding New Gift Cards

Add to the `giftCards` array in both configs:

```typescript
{
  id: "unique-id",
  name: "Card Name",
  category: "Category",
  buyRate: 0.85,
  sellRate: 0.81,
  currency: "USD",
}
```

### Updating Rates

Simply modify the `buyRate` and `sellRate` values in the config files.

### Categories

Use consistent categories for better organization:
- Entertainment
- Shopping
- Gaming
- General
- Beauty
- Fashion
- Food & Drink
- Electronics

## Multi-Vendor Setup

To manage multiple vendors:

1. Create a folder for each vendor:
```
vendors/
  vendor1/
    client/config.ts
    extension/config.js
  vendor2/
    client/config.ts
    extension/config.js
```

2. Keep the main codebase separate
3. Copy only the config files for each vendor
4. Use a build script to generate each vendor's version

## Support

For questions or issues with customization, refer to:
- Website code: `client/src/` folder
- Extension code: `extension/` folder
- Configuration: `client/config.ts` and `extension/config.js`
