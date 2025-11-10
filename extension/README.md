# Gift Card Rate Checker - Chrome Extension

## Installation Instructions

### For Testing Locally:

1. **Open Chrome Extensions Page**
   - Go to `chrome://extensions/` in your Chrome browser
   - Or click the three dots menu → More Tools → Extensions

2. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

3. **Load the Extension**
   - Click "Load unpacked" button
   - Navigate to and select the `extension` folder from this project
   - The extension icon should appear in your Chrome toolbar

4. **Test the Extension**
   - Click the extension icon in your toolbar
   - The popup should appear with gift card rates
   - Test the search functionality
   - Test the "Trade Now" and "Chat With Us" buttons

### Customization for Vendors:

To customize this extension for a specific vendor, edit the `extension/config.js` file:

```javascript
const VENDOR_CONFIG = {
  businessName: "Your Business Name",
  tagline: "Your Tagline",
  logo: "🎁", // Any emoji or text
  
  colors: {
    primary: "#your-color",
    secondary: "#your-color"
  },
  
  contactLinks: {
    whatsapp: "https://wa.me/your-number",
    telegram: "https://t.me/your-username",
    phone: "your-phone",
    email: "your-email"
  },
  
  giftCards: [
    // Add your gift card data here
    {
      id: "1",
      name: "Card Name",
      category: "Category",
      buyRate: 0.85,
      sellRate: 0.81,
      currency: "USD"
    }
  ]
};
```

### Publishing to Chrome Web Store (Optional):

1. Create icons for the extension (16x16, 48x48, 128x128)
2. Update manifest.json with your details
3. Create a developer account at https://chrome.google.com/webstore/devconsole
4. Package and upload the extension
5. Fill in the required metadata and screenshots

### Notes:

- The extension works entirely offline after installation
- No server connection required
- All data is stored in the config.js file
- Perfect for quick rate checks without opening the full website
