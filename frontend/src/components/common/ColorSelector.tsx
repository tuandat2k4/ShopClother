"use client";

import { Check } from "lucide-react";

interface ColorSelectorProps {
  colors: string[];
  colorHex: Record<string, string>;
  selected: string;
  onChange: (color: string) => void;
}

export default function ColorSelector({
  colors,
  colorHex = {},
  selected,
  onChange,
}: ColorSelectorProps) {
  return (
    <div className="flex items-center gap-3">
      {colors.map((color) => {
        const isSelected = selected === color;

        return (
          <button
            key={color}
            type="button"
            onClick={() => onChange(color)}
            title={color}
            aria-label={color}
            className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
              isSelected ? "border-white" : "border-transparent"
            }`}
            style={{
              backgroundColor: colorHex[color],
            }}
          >
            {isSelected && (
              <Check className="h-5 w-5 text-white" strokeWidth={2.5} />
            )}
          </button>
        );
      })}
    </div>
  );
}
