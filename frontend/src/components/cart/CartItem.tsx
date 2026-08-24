"use client";

import { useState } from "react";
import Image from "next/image";

interface CartItemProps {
  name: string;
  image: string;
  size: string;
  color: string;
  price: number;
}

export default function CartItem({ name, image, size, color, price }: CartItemProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex gap-4 rounded-[20px] border border-border bg-background p-4">
      <div className="relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-[12px] bg-background-alt">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between gap-4">
          <div>
            <h3 className="mb-1 text-base font-bold">{name}</h3>
            <p className="text-xs text-text-secondary">Size: {size}</p>
            <p className="text-xs text-text-secondary">Color: {color}</p>
          </div>
          <button type="button" className="text-lg text-red-500 hover:opacity-70">🗑</button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold">${price}</span>
          <div className="flex items-center gap-4 rounded-full bg-background-alt px-4 py-2">
            <button type="button" onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="flex h-6 w-6 items-center justify-center">−</button>
            <span className="min-w-[20px] text-center font-medium">{quantity}</span>
            <button type="button" onClick={() => setQuantity((q) => q + 1)} className="flex h-6 w-6 items-center justify-center">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
