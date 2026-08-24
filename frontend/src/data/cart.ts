export interface CartItem {
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
}

export const cartItems: CartItem[] = [
  {
    name: "Gradient Graphic T-shirt",
    image: "/images/products/frame32.png",
    size: "Large",
    color: "White",
    price: 145,
  },
  {
    name: "Checkered Shirt",
    image: "/images/products/frame33.png",
    size: "Medium",
    color: "Red",
    price: 180,
  },
  {
    name: "Skinny Fit Jeans",
    image: "/images/products/frame34.png",
    size: "Large",
    color: "Blue",
    price: 240,
  },
];
