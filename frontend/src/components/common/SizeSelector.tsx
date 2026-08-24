"use client";

interface SizeSelectorProps {
  sizes?: string[];
  selectedSize: string;
  onSelectSize: (size: string) => void;
}

export default function SizeSelector({
  sizes = [],
  selectedSize,
  onSelectSize,
}: SizeSelectorProps) {
  if (sizes.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isSelected = selectedSize === size;

        return (
          <button
            key={size}
            type="button"
            onClick={() => onSelectSize(size)}
            className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
              isSelected
                ? "bg-text text-background"
                : "bg-surface text-text hover:bg-text hover:text-background"
            }`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
