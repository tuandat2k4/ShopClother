"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, SlidersHorizontal, X } from "lucide-react";
import { Product } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Grid from "@/components/common/Grid";
import FiltersSidebar from "./FiltersSidebar";
import { FilterState, defaultFilters } from "@/types/filters";

interface CategoryClientProps {
  categoryName: string;
  products: Product[];
}

export default function CategoryClient({
  categoryName,
  products,
}: CategoryClientProps) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [showFilters, setShowFilters] = useState(false);

  // Filter products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Categories
    if (filters.categories.length > 0) {
      result = result.filter((product) =>
        filters.categories.includes(product.category),
      );
    }

    // Sizes
    if (filters.sizes.length > 0) {
      result = result.filter((product) =>
        product.sizes.some((size) => filters.sizes.includes(size)),
      );
    }

    // Colors
    if (filters.colors.length > 0) {
      result = result.filter((product) =>
        product.colors.some((color) => filters.colors.includes(color)),
      );
    }

    // Dress style
    if (filters.dressStyle.length > 0) {
      result = result.filter((product) =>
        filters.dressStyle.includes(product.dressStyle),
      );
    }

    // Price
    result = result.filter(
      (product) =>
        product.price >= filters.priceRange.min &&
        product.price <= filters.priceRange.max,
    );

    return result;
  }, [products, filters]);

  const clearAll = () => {
    setFilters(defaultFilters);
  };

  // Check active filters
  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.sizes.length > 0 ||
    filters.colors.length > 0 ||
    filters.dressStyle.length > 0 ||
    filters.priceRange.min > 0 ||
    filters.priceRange.max < 500;

  return (
    <div className="flex-1 py-5 md:py-8">
      <div className="mx-auto w-full max-w-310 px-4 md:px-5">
        {/* Breadcrumb */}
        <div className="mb-4 flex items-center gap-2 text-[11px] text-gray-400 md:mb-6 md:text-sm">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <span>›</span>
          <span className="text-black">{categoryName}</span>
        </div>

        {/* Category header */}
        <div className="mb-5 flex items-center justify-between md:mb-8">
          <div>
            <h1 className="text-[24px] font-bold md:text-[32px]">
              {categoryName}
            </h1>
            <p className="mt-1 text-[10px] text-gray-500 md:text-sm">
              Showing 1-10 of {filteredProducts.length} Products
            </p>
          </div>

          {/* Mobile filter button */}
          <button
            type="button"
            onClick={() => setShowFilters(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f0f0] md:hidden"
            aria-label="Open filters"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>

        {/* Desktop content */}
        <div className="flex gap-8">
          {/* Desktop filter */}
          <div className="hidden w-62.5 shrink-0 md:block">
            <FiltersSidebar filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Product list */}
          <div className="min-w-0 flex-1">
            <Grid>
              {filteredProducts.slice(0, 10).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Grid>

            {/* No products */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="mb-4 text-gray-500">No products found</p>
                <button type="button" onClick={clearAll} className="underline">
                  Clear filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4 md:mt-10">
                {/* Previous */}
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-2 text-[11px] md:text-sm"
                >
                  <ChevronLeft className="h-3 w-3" />
                  Previous
                </button>

                {/* Pages */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="h-7 w-7 rounded-md bg-black text-xs text-white"
                  >
                    1
                  </button>

                  <button type="button" className="h-7 w-7 text-xs">
                    2
                  </button>

                  <span className="px-1 text-xs">...</span>

                  <button type="button" className="h-7 w-7 text-xs">
                    10
                  </button>
                </div>

                {/* Next */}
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md border border-gray-200 px-3 py-2 text-[11px] md:text-sm"
                >
                  Next
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter */}
      {showFilters && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setShowFilters(false)}
            className="absolute inset-0 bg-black/40"
          />

          {/* Filter panel */}
          <div className="absolute inset-x-0 top-25 bottom-0 flex flex-col overflow-hidden rounded-t-[40px] bg-white">
            {/* Filter content */}
            <div className="flex-1 overflow-y-auto px-5 pt-8">
              <FiltersSidebar
                filters={filters}
                onFilterChange={setFilters}
                onClose={() => setShowFilters(false)}
              />
            </div>

            {/* Apply button */}
            <div className="shrink-0 border-t border-gray-100 bg-white px-5 py-4">
              <button
                type="button"
                onClick={() => setShowFilters(false)}
                className="w-full rounded-full bg-black py-3 text-[12px] font-medium text-white"
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
