export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[];
  colors: string[];
  colorHex: Record<string, string>;
  sizes: string[];
  rating?: number;
  reviewCount?: number;
  isSale?: boolean;
  originalPrice?: number;
  discountPercentage?: number;
  description?: string;
}

export interface Review {
  name: string;
  review: string;
  date?: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "ONE LIFE GRAPHIC T-SHIRT",
    price: 260,
    originalPrice: 300,
    discountPercentage: 40,

    image: "/images/products/frame32.png",

    images: [
      "/images/products/frame32.png",
      "/images/products/frame33.png",
      "/images/products/frame34.png",
    ],

    colors: ["Olive", "Green", "Blue"],

    colorHex: {
      Olive: "#5C6B3C",
      Green: "#3D6B5C",
      Blue: "#1E3A5F",
    },

    sizes: ["Small", "Medium", "Large", "X-Large"],

    rating: 4.5,
    reviewCount: 128,

    isSale: true,

    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
  },

  {
    id: 2,
    name: "Polo with Contrast Trime",
    price: 85,

    image: "/images/products/frame33.png",

    images: [
      "/images/products/frame33.png",
      "/images/products/frame32.png",
      "/images/products/frame34.png",
    ],

    colors: ["Navy", "White"],

    colorHex: {
      Navy: "#1A237E",
      White: "#FFFFFF",
    },

    sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],

    rating: 4.2,
    reviewCount: 89,

    isSale: false,

    description:
      "Classic polo shirt with modern contrast trim details. Made from breathable pique fabric, ideal for both casual and semi-formal occasions.",
  },

  {
    id: 3,
    name: "Black Floral T-Shirt",
    price: 120,
    originalPrice: 150,
    discountPercentage: 20,

    image: "/images/products/frame34.png",

    images: [
      "/images/products/frame34.png",
      "/images/products/frame32.png",
      "/images/products/frame33.png",
    ],

    colors: ["Black"],

    colorHex: {
      Black: "#000000",
    },

    sizes: ["Small", "Medium", "Large"],

    rating: 4.8,
    reviewCount: 256,

    isSale: true,

    description:
      "Elegant black t-shirt with delicate floral embroidery. Features a relaxed fit and premium cotton material for all-day comfort.",
  },

  {
    id: 4,
    name: "Classic Fit Men's Shirt",
    price: 180,

    image: "/images/products/frame38.png",

    images: [
      "/images/products/frame38.png",
      "/images/products/frame32.png",
      "/images/products/frame34.png",
    ],

    colors: ["White", "Blue"],

    colorHex: {
      White: "#FFFFFF",
      Blue: "#1565C0",
    },

    sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],

    rating: 4.6,
    reviewCount: 192,

    isSale: false,

    description:
      "Timeless classic fit shirt crafted from 100% premium cotton. Perfect for office wear or special occasions. Wrinkle-resistant for easy maintenance.",
  },
];

export const reviews: Review[] = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    date: "August 14, 2024",
    rating: 5,
  },

  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    date: "August 13, 2024",
    rating: 5,
  },

  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is exceptional and the quality is top-notch.",
    date: "August 12, 2024",
    rating: 5,
  },

  {
    name: "Emily R.",
    review:
      "I absolutely love my new clothes from Shop.co. The fabric feels great and everything fits perfectly. I'll definitely be ordering again.",
    date: "August 11, 2024",
    rating: 5,
  },

  {
    name: "Michael B.",
    review:
      "The ordering process was really easy and my package arrived quickly. The clothes look exactly like the pictures and the quality is better than I expected.",
    date: "August 10, 2024",
    rating: 4,
  },

  {
    name: "Olivia W.",
    review:
      "Shop.co has become one of my favorite places to shop for everyday outfits. There are so many styles to choose from and the prices are reasonable.",
    date: "August 9, 2024",
    rating: 5,
  },

  {
    name: "Daniel T.",
    review:
      "Great quality and modern designs. I bought a few different pieces and they all look amazing. Very happy with my purchase.",
    date: "August 8, 2024",
    rating: 4,
  },

  {
    name: "Sophia L.",
    review:
      "The clothes are stylish, comfortable, and exactly what I was looking for. Customer service was also very helpful when I had a question about my order.",
    date: "August 7, 2024",
    rating: 5,
  },

  {
    name: "William H.",
    review:
      "Really impressed with the quality of the products. Everything arrived nicely packaged and the sizing guide was accurate.",
    date: "August 6, 2024",
    rating: 5,
  },
];
