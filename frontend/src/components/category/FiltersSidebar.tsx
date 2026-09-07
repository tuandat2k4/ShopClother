"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { categories, colors, sizes, dressStyles } from "@/data/categories";
import PriceRange from "@/components/category/PriceRange";
import { FilterState } from "@/types/filters";

interface FiltersSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onClose?: () => void;
}

export default function FiltersSidebar({
  filters,
  onFilterChange,
  onClose,
}: FiltersSidebarProps) {
  const [openCategories, setOpenCategories] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [openColors, setOpenColors] = useState(true);
  const [openSizes, setOpenSizes] = useState(true);
  const [openDressStyle, setOpenDressStyle] = useState(true);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    onFilterChange({
      ...filters,
      ...newFilters,
    });
  };

  const toggleArray = (
    key: "categories" | "sizes" | "colors" | "dressStyle",
    value: string,
  ) => {
    const arr = filters[key];

    const newArr = arr.includes(value)
      ? arr.filter((v) => v !== value)
      : [...arr, value];

    updateFilters({
      [key]: newArr,
    });
  };

  return (
    <aside className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-6">
        <h2 className="text-[24px] font-bold">Filters</h2>

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close filters"
            className="text-gray-400 transition hover:text-black"
          >
            <X className="h-8 w-8" strokeWidth={1.5} />
          </button>
        )}
      </div>

      {/* Categories */}
      <div className="border-b border-gray-200 py-5">
        <button
          type="button"
          onClick={() => setOpenCategories(!openCategories)}
          className="flex w-full items-center justify-between"
        >
          <span className="text-[16px] font-medium">Categories</span>

          {openCategories ? (
            <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>

        {openCategories && (
          <div className="mt-5 space-y-5">
            {categories.map((category) => {
              const selected = filters.categories.includes(category.slug);

              return (
                <button
                  key={category.slug}
                  type="button"
                  onClick={() => toggleArray("categories", category.slug)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span
                    className={`text-[18px] ${
                      selected ? "font-medium text-black" : "text-gray-500"
                    }`}
                  >
                    {category.name}
                  </span>

                  <ChevronRight
                    className="h-6 w-6 text-gray-500"
                    strokeWidth={1.5}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Price */}
      <div className="border-b border-gray-200 py-5">
        <button
          type="button"
          onClick={() => setOpenPrice(!openPrice)}
          className="flex w-full items-center justify-between"
        >
          <span className="text-[16px] font-medium">Price</span>

          {openPrice ? (
            <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>

        {openPrice && (
          <div className="mt-5">
            <PriceRange
              value={filters.priceRange}
              onChange={(priceRange) => updateFilters({ priceRange })}
            />
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="border-b border-gray-200 py-5">
        <button
          type="button"
          onClick={() => setOpenColors(!openColors)}
          className="flex w-full items-center justify-between"
        >
          <span className="text-[16px] font-medium">Colors</span>

          {openColors ? (
            <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>

        {openColors && (
          <div className="mt-5 flex flex-wrap gap-3">
            {colors.map((color) => {
              const selected = filters.colors.includes(color.name);

              return (
                <button
                  key={color.name}
                  type="button"
                  title={color.name}
                  onClick={() => toggleArray("colors", color.name)}
                  className={`h-8 w-8 rounded-full transition ${
                    selected
                      ? "border-2 border-black p-0.5"
                      : "border-2 border-transparent"
                  } `}
                >
                  <span
                    className="block h-full w-full rounded-full"
                    style={{
                      backgroundColor: color.hex,
                    }}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Size */}
      <div className="border-b border-gray-200 py-5">
        <button
          type="button"
          onClick={() => setOpenSizes(!openSizes)}
          className="flex w-full items-center justify-between"
        >
          <span className="text-[16px] font-medium">Size</span>

          {openSizes ? (
            <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>

        {openSizes && (
          <div className="mt-5 flex flex-wrap gap-2">
            {sizes.map((size) => {
              const selected = filters.sizes.includes(size);

              return (
                <button
                  key={size}
                  type="button"
                  onClick={() => toggleArray("sizes", size)}
                  className={`rounded-full px-4 py-2 text-[11px] transition ${
                    selected
                      ? "bg-black text-white"
                      : "bg-[#f2f2f2] text-gray-500"
                  } `}
                >
                  {size}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Dress style */}
      <div className="py-5">
        <button
          type="button"
          onClick={() => setOpenDressStyle(!openDressStyle)}
          className="flex w-full items-center justify-between"
        >
          <span className="text-[16px] font-medium">Dress Style</span>

          {openDressStyle ? (
            <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
          ) : (
            <ChevronRight className="h-5 w-5" strokeWidth={1.5} />
          )}
        </button>

        {openDressStyle && (
          <div className="mt-5 space-y-5">
            {dressStyles.map((style) => {
              const selected = filters.dressStyle.includes(style);

              return (
                <button
                  key={style}
                  type="button"
                  onClick={() => toggleArray("dressStyle", style)}
                  className="flex w-full items-center justify-between text-left"
                >
                  <span
                    className={`text-[18px] ${
                      selected ? "font-medium text-black" : "text-gray-500"
                    }`}
                  >
                    {style}
                  </span>

                  <ChevronRight
                    className="h-6 w-6 text-gray-500"
                    strokeWidth={1.5}
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
