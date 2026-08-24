"use client";

interface ColorSelectorProps {
  colors: string[];
  colorHex: Record<string, string>;
  selectedColor: string;
  onSelectColor: (color: string) => void;
}

export default function ColorSelector({
  colors,
  colorHex,
  selectedColor,
  onSelectColor,
}: ColorSelectorProps) {
  return (
    <div className="flex gap-3">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onSelectColor(color)}
          className={`w-10 h-10 rounded-full border-2 transition-transform ${
            selectedColor === color
              ? "border-black scale-110"
              : "border-gray-300"
          }`}
          style={{ backgroundColor: colorHex[color] }}
          title={color}
        />
      ))}
    </div>
  );
}
