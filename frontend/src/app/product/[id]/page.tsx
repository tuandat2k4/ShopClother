"use client";

import Link from "next/link";
import { use, useState } from "react";

import { products } from "@/data/products";
import {
  ImageGallery,
  ProductSection,
  SizeSelector,
} from "@/components/product";
import ProductReviews from "@/components/product/ProductReview";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);

  const product = products.find((p) => p.id === Number(id));

  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <main className="flex-1 px-5 py-16 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>

        <Link
          href="/"
          className="text-text-secondary hover:text-text mt-4 inline-block text-sm hover:underline"
        >
          Back to Home
        </Link>
      </main>
    );
  }

  const discountPercentage =
    product.discountPercentage ??
    (product.originalPrice
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        )
      : 0);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    alert(
      `Added ${quantity} ${product.name} (${selectedColor}, ${selectedSize}) to cart`,
    );
  };

  return (
    <main className="flex-1">
      <div className="mx-auto w-full max-w-[1240px] px-5">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="text-text-secondary flex items-center gap-2 py-5 text-xs sm:py-6 sm:text-sm"
        >
          <Link href="/" className="hover:text-text">
            Home
          </Link>

          <span className="text-text-muted">›</span>

          <Link href="/shop" className="hover:text-text">
            Shop
          </Link>

          <span className="text-text-muted">›</span>

          <Link href="/shop/men" className="hover:text-text">
            Men
          </Link>

          <span className="text-text-muted">›</span>

          <span className="text-text font-medium">T-shirts</span>
        </nav>

        {/* Product */}
        <section className="pb-10 sm:pb-16">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            {/* LEFT - Gallery */}
            <div className="w-full lg:w-[604px] lg:shrink-0">
              <ImageGallery
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* RIGHT - Product Info */}
            <div className="w-full min-w-0 lg:flex-1 lg:pt-1">
              {/* Title */}
              <h1 className="text-[28px] leading-[1.05] font-black uppercase sm:text-[32px]">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-[20px] leading-none">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        star <= Math.round(product.rating ?? 0)
                          ? "text-rating"
                          : "text-border"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                <span className="text-text-secondary text-xs sm:text-sm">
                  {product.rating?.toFixed(1)}/5
                </span>
              </div>

              {/* Price */}
              <div className="mt-3 flex items-center gap-2.5">
                <span className="text-[24px] font-bold sm:text-[28px]">
                  ${product.price}
                </span>

                {product.originalPrice && (
                  <span className="text-text-muted text-[22px] font-bold line-through sm:text-[24px]">
                    ${product.originalPrice}
                  </span>
                )}

                {product.isSale && discountPercentage > 0 && (
                  <span className="text-sale bg-sale/15 rounded-full px-3 py-1 text-xs font-medium">
                    -{discountPercentage}%
                  </span>
                )}
              </div>

              {/* Description */}
              {product.description && (
                <p className="text-text-secondary mt-4 max-w-[600px] text-xs leading-5 sm:text-sm sm:leading-6">
                  {product.description}
                </p>
              )}

              {/* Divider */}
              <div className="border-border my-5 border-t sm:my-6" />

              {/* Colors */}
              <div>
                <p className="text-text-secondary mb-3 text-xs sm:text-sm">
                  Select Colors
                </p>

                <div className="flex items-center gap-3">
                  {product.colors.map((color) => {
                    const isSelected = selectedColor === color;

                    return (
                      <button
                        key={color}
                        type="button"
                        aria-label={`Select ${color}`}
                        aria-pressed={isSelected}
                        onClick={() => setSelectedColor(color)}
                        className="flex h-8 w-8 items-center justify-center rounded-full transition-transform hover:scale-105"
                      >
                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full border border-black/10 ${
                            isSelected ? "ring-2 ring-black ring-offset-2" : ""
                          }`}
                          style={{
                            backgroundColor:
                              product.colorHex?.[color] ?? "#000000",
                          }}
                        >
                          {isSelected && (
                            <span className="text-sm text-white">✓</span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="border-border my-5 border-t sm:my-6" />

              {/* Size */}
              <div>
                <p className="text-text-secondary mb-3 text-xs sm:text-sm">
                  Choose Size
                </p>

                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onSelectSize={setSelectedSize}
                />
              </div>

              {/* Divider */}
              <div className="border-border my-5 border-t sm:my-6" />

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Quantity */}
                <div className="bg-surface flex h-11 shrink-0 items-center rounded-full px-3 sm:h-12 sm:px-4">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    aria-label="Decrease quantity"
                    className="text-text flex h-7 w-7 items-center justify-center text-lg"
                  >
                    −
                  </button>

                  <span className="w-7 text-center text-sm font-medium">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={increaseQuantity}
                    aria-label="Increase quantity"
                    className="text-text flex h-7 w-7 items-center justify-center text-lg"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="bg-text text-background flex h-11 flex-1 items-center justify-center rounded-full px-5 text-xs font-medium transition-opacity hover:opacity-80 sm:h-12 sm:text-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <ProductReviews />

        {/* YOU MIGHT ALSO LIKE */}
        <ProductSection
          title="YOU MIGHT ALSO LIKE"
          products={products.filter((p) => p.id !== Number(id))}
        />
      </div>
    </main>
  );
}
