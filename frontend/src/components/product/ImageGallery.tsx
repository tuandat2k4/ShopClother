"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export default function ImageGallery({
  images,
  productName,
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images.length) {
    return (
      <div className="bg-card flex h-[290px] w-full items-center justify-center rounded-[20px] lg:h-[530px] lg:w-[440px]">
        <span className="text-text-muted text-sm">No image available</span>
      </div>
    );
  }

  const thumbnails = images.slice(0, 3);
  const currentImage = images[selectedIndex] ?? images[0];

  return (
    <div className="flex w-full flex-col gap-2 lg:flex-row lg:gap-3">
      {/* Main Image */}
      <div className="bg-card relative order-1 h-[290px] w-full overflow-hidden rounded-[20px] lg:order-2 lg:h-[530px] lg:w-[440px] lg:shrink-0">
        <Image
          src={currentImage}
          alt={productName}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1023px) 100vw, 440px"
        />

        <span className="bg-text text-background absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-medium">
          NEW
        </span>
      </div>

      {/* Thumbnails */}
      <div className="order-2 grid w-full grid-cols-3 gap-2 lg:order-1 lg:flex lg:w-[152px] lg:flex-col lg:gap-3">
        {thumbnails.map((image, index) => {
          const isSelected = selectedIndex === index;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              aria-label={`View image ${index + 1}`}
              aria-pressed={isSelected}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-[112/106] w-full overflow-hidden rounded-[16px] border-2 transition-colors lg:aspect-auto lg:h-[168px] lg:w-[152px] ${
                isSelected
                  ? "border-black"
                  : "border-transparent hover:border-gray-300"
              } `}
            >
              <Image
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 33vw, 152px"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
