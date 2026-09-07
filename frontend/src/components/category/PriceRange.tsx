"use client";

import { useState } from "react";

interface PriceRangeProps {
  value: {
    min: number;
    max: number;
  };
  onChange: (value: { min: number; max: number }) => void;
}

const MIN_PRICE = 0;
const MAX_PRICE = 500;

export default function PriceRange({ value, onChange }: PriceRangeProps) {
  const [minValue, setMinValue] = useState(value.min);
  const [maxValue, setMaxValue] = useState(value.max);

  const minPercent = ((minValue - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
  const maxPercent = ((maxValue - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

  const handleMinChange = (newValue: number) => {
    const newMin = Math.min(newValue, maxValue - 1);

    setMinValue(newMin);

    onChange({
      min: newMin,
      max: maxValue,
    });
  };

  const handleMaxChange = (newValue: number) => {
    const newMax = Math.max(newValue, minValue + 1);

    setMaxValue(newMax);

    onChange({
      min: minValue,
      max: newMax,
    });
  };

  return (
    <div className="w-full">
      {/* Slider */}
      <div className="relative h-8">
        {/* Track */}
        <div className="absolute top-1/2 left-0 h-2.25 w-full -translate-y-1/2 rounded-full bg-[#f0f0f0]" />

        {/* Active range */}
        <div
          className="absolute top-1/2 h-2.25 -translate-y-1/2 rounded-full bg-black"
          style={{
            left: `${minPercent}%`,
            right: `${100 - maxPercent}%`,
          }}
        />

        {/* Min slider */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={minValue}
          onChange={(e) => handleMinChange(Number(e.target.value))}
          className="pointer-events-none absolute top-0 left-0 h-8 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
        />

        {/* Max slider */}
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={maxValue}
          onChange={(e) => handleMaxChange(Number(e.target.value))}
          className="pointer-events-none absolute top-0 left-0 h-8 w-full appearance-none bg-transparent [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
        />
      </div>

      {/* Price values */}
      <div className="mt-1 flex items-center justify-between px-0">
        <span className="text-[18px] font-normal">${minValue}</span>

        <span className="text-[18px] font-normal">${maxValue}</span>
      </div>
    </div>
  );
}
