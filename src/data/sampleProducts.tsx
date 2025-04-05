// src/data/sampleProducts.ts
export interface Product {
    id: string; // Should be string type for consistency
    nameKey: string; // For i18n translations
    name: string; // Fallback display name
    price: number;
    imageUrls: string[];
    description?: string;
    basePriceUnit?: string; // e.g., "per kg", "per item"
    specs?: Array<{
      key: string;
      value: string;
    }>;
    relatedProducts?: string[]; // Array of product IDs
    category?: string;
    // Add any other product-specific fields you need
  }
  
  export const sampleProducts: Product[] = [
    {
      id: "prod-001", // Must be string
      nameKey: "products.woodenSpoon",
      name: "Wooden Spoon",
      price: 12.99,
      imageUrls: [
        "/images/products/wooden-spoon-1.jpg",
        "/images/products/wooden-spoon-2.jpg"
      ],
      description: "Handcrafted oak wooden spoon, perfect for cooking and serving",
      basePriceUnit: "per item",
      specs: [
        { key: "specs.material", value: "Oak wood" },
        { key: "specs.length", value: "30 cm" }
      ],
      relatedProducts: ["prod-002", "prod-003"],
      category: "kitchen"
    },
    {
      id: "prod-002",
      nameKey: "products.cuttingBoard",
      name: "Bamboo Cutting Board",
      price: 24.99,
      imageUrls: [
        "/images/products/cutting-board-1.jpg",
        "/images/products/cutting-board-2.jpg"
      ],
      // ... other properties
    },
    // Add more products as needed
  ];
  
  // Optional helper functions
  export const getProductById = (id: string): Product | undefined => {
    return sampleProducts.find(product => product.id === id);
  };
  
  export const getProductsByCategory = (category: string): Product[] => {
    return sampleProducts.filter(product => product.category === category);
  };