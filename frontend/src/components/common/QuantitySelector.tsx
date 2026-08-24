"use client";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        className="w-12 h-12 flex items-center justify-center border border-border rounded-full hover:border-black disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        -
      </button>
      <span className="text-xl font-medium w-8 text-center">{quantity}</span>
      <button
        onClick={onIncrease}
        className="w-12 h-12 flex items-center justify-center border border-border rounded-full hover:border-black transition-colors"
      >
        +
      </button>
    </div>
  );
}
