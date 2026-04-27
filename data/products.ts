export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  ingredients: string[];
  usage: string;
  benefits: string[];
}

export const products: Product[] = [
  {
    id: "sunscreen-spf-50",
    name: "Sunscreen SPF 50+",
    price: 30,
    image: "/images/sunscreen.png",
    category: "Protection",
    rating: 5,
    description: "Our high-performance mineral sunscreen provides broad-spectrum protection against UVA and UVB rays while nourishing your skin with antioxidants.",
    ingredients: ["Zinc Oxide", "Titanium Dioxide", "Green Tea Extract", "Vitamin E", "Hyaluronic Acid"],
    usage: "Apply generously to face and neck 15 minutes before sun exposure. Reapply every 2 hours or after swimming.",
    benefits: ["Broad-spectrum protection", "Non-greasy formula", "Safe for coral reefs", "Dermatologist approved"],
  },
  {
    id: "niacinamide-serum",
    name: "Niacinamide 10% + Zinc 1%",
    price: 45,
    image: "/images/hero.png",
    category: "Treatment",
    rating: 5,
    description: "A high-strength vitamin and mineral blemish formula that visibly targets skin congestion and balances visible aspects of sebum activity.",
    ingredients: ["Niacinamide", "Zinc PCA", "Aqua", "Pentylene Glycol", "Tamarindus Indica Seed Gum"],
    usage: "Apply a small amount to the entire face in the morning and evening before heavier creams.",
    benefits: ["Reduces appearance of pores", "Balances sebum production", "Brightens skin tone", "Improves skin texture"],
  },
  {
    id: "vitamin-c-serum",
    name: "Vitamin C Brightening Serum",
    price: 25,
    image: "/images/sunscreen.png",
    category: "Brightening",
    rating: 4,
    description: "A potent serum designed to brighten skin tone and reduce signs of aging by neutralising free radicals and boosting collagen production.",
    ingredients: ["L-Ascorbic Acid", "Ferulic Acid", "Vitamin E", "Sodium Hyaluronate", "Aloe Vera"],
    usage: "Apply 3-5 drops to clean, dry skin every morning. Follow with moisturizer and sunscreen.",
    benefits: ["Brightens dull skin", "Fights oxidative stress", "Supports collagen", "Even skin tone"],
  },
  {
    id: "hydrating-cleanser",
    name: "Gentle Hydrating Cleanser",
    price: 50,
    image: "/images/hero.png",
    category: "Cleanser",
    rating: 5,
    description: "A non-foaming, creamy cleanser that removes impurities and makeup without stripping the skin of its natural moisture barrier.",
    ingredients: ["Ceramides", "Hyaluronic Acid", "Glycerin", "Stearyl Alcohol", "Chamomilla Recutita Extract"],
    usage: "Massage into damp skin in circular motions. Rinse thoroughly with lukewarm water.",
    benefits: ["Deeply hydrates", "Gentle on sensitive skin", "Restores moisture barrier", "Fragrance-free"],
  },
];
