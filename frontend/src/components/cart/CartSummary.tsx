"use client";

import { useState } from "react";

export default function CartSummary() {
  const [promo, setPromo] = useState("");
  const subtotal = 565;
  const discount = 113;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  return (
    <div className="rounded-[20px] border border-border bg-background p-6">
      <h2 className="mb-6 text-xl font-bold">Order Summary</h2>

      <div className="mb-6 space-y-4">
        <div className="flex justify-between"><span className="text-text-secondary">Subtotal</span><span className="font-bold">${subtotal}</span></div>
        <div className="flex justify-between"><span className="text-text-secondary">Discount (-20%)</span><span className="font-bold text-red-500">-${discount}</span></div>
        <div className="flex justify-between"><span className="text-text-secondary">Delivery Fee</span><span className="font-bold">${delivery}</span></div>
        <div className="h-px bg-border" />
        <div className="flex justify-between"><span className="font-bold">Total</span><span className="text-lg font-bold">${total}</span></div>
      </div>

      <div className="mb-4 flex gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-full bg-background-alt px-4 py-3">
          <span>🏷</span>
          <input type="text" value={promo} onChange={(e) => setPromo(e.target.value)} placeholder="Add promo code" className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
        </div>
        <button type="button" className="rounded-full bg-text px-6 py-3 font-medium text-background hover:bg-gray-800">Apply</button>
      </div>

      <button type="button" className="flex w-full items-center justify-center gap-2 rounded-full bg-text py-4 font-medium text-background hover:bg-gray-800">Go to Checkout →</button>
    </div>
  );
}
