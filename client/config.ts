export interface VendorConfig {
  businessName: string;
  tagline: string;
  logo: string;
  colors: {
    primary: string;
    secondary: string;
  };
  contactLinks: {
    whatsapp?: string;
    telegram?: string;
    phone?: string;
    email?: string;
  };
  giftCards: GiftCard[];
}

export interface GiftCard {
  id: string;
  name: string;
  category: string;
  buyRate: number;
  sellRate: number;
  currency: string;
  icon?: string;
}

export const vendorConfig: VendorConfig = {
  businessName: "GiftCard Exchange Pro",
  tagline: "Fast, Reliable & Secure Gift Card Trading",
  logo: "💳",
  colors: {
    primary: "221 83% 53%",
    secondary: "210 17% 90%",
  },
  contactLinks: {
    whatsapp: "https://wa.me/1234567890",
    telegram: "https://t.me/giftcardexchange",
    phone: "+1 (234) 567-8900",
    email: "support@giftcardexchange.com",
  },
  giftCards: [
    {
      id: "1",
      name: "iTunes Gift Card",
      category: "Entertainment",
      buyRate: 0.82,
      sellRate: 0.78,
      currency: "USD",
    },
    {
      id: "2",
      name: "Amazon Gift Card",
      category: "Shopping",
      buyRate: 0.85,
      sellRate: 0.81,
      currency: "USD",
    },
    {
      id: "3",
      name: "Google Play Card",
      category: "Entertainment",
      buyRate: 0.80,
      sellRate: 0.76,
      currency: "USD",
    },
    {
      id: "4",
      name: "Steam Wallet",
      category: "Gaming",
      buyRate: 0.83,
      sellRate: 0.79,
      currency: "USD",
    },
    {
      id: "5",
      name: "Walmart Gift Card",
      category: "Shopping",
      buyRate: 0.84,
      sellRate: 0.80,
      currency: "USD",
    },
    {
      id: "6",
      name: "eBay Gift Card",
      category: "Shopping",
      buyRate: 0.81,
      sellRate: 0.77,
      currency: "USD",
    },
    {
      id: "7",
      name: "Target Gift Card",
      category: "Shopping",
      buyRate: 0.83,
      sellRate: 0.79,
      currency: "USD",
    },
    {
      id: "8",
      name: "Xbox Gift Card",
      category: "Gaming",
      buyRate: 0.82,
      sellRate: 0.78,
      currency: "USD",
    },
    {
      id: "9",
      name: "PlayStation Store",
      category: "Gaming",
      buyRate: 0.82,
      sellRate: 0.78,
      currency: "USD",
    },
    {
      id: "10",
      name: "Visa Gift Card",
      category: "General",
      buyRate: 0.87,
      sellRate: 0.83,
      currency: "USD",
    },
    {
      id: "11",
      name: "Mastercard Gift Card",
      category: "General",
      buyRate: 0.87,
      sellRate: 0.83,
      currency: "USD",
    },
    {
      id: "12",
      name: "Sephora Gift Card",
      category: "Beauty",
      buyRate: 0.80,
      sellRate: 0.76,
      currency: "USD",
    },
    {
      id: "13",
      name: "Nike Gift Card",
      category: "Fashion",
      buyRate: 0.81,
      sellRate: 0.77,
      currency: "USD",
    },
    {
      id: "14",
      name: "Starbucks Gift Card",
      category: "Food & Drink",
      buyRate: 0.79,
      sellRate: 0.75,
      currency: "USD",
    },
    {
      id: "15",
      name: "Best Buy Gift Card",
      category: "Electronics",
      buyRate: 0.83,
      sellRate: 0.79,
      currency: "USD",
    },
  ],
};
