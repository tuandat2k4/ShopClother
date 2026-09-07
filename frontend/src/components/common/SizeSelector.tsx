"use client";

interface SizeSelectorProps {
  sizes: string[];
  selected: string;
  onChange: (size: string) => void;
}

export default function SizeSelector({
  sizes,
  selected,
  onChange,
}: SizeSelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => {
        const isSelected = selected === size;

        return (
          <button
            key={size}
            type="button"
            onClick={() => onChange(size)}
            className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
              isSelected
                ? "bg-black text-white"
                : "bg-[#f0f0f0] text-gray-600 hover:bg-gray-200"
            }`}
          >
            {size}
          </button>
        );
      })}
    </div>
  );
}
