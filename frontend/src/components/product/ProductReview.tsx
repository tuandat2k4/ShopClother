"use client";

import { useState } from "react";

import { reviews } from "@/data/products";
import { ReviewCard } from "@/components/home";
import { ChevronDownIcon, SlidersHorizontal } from "lucide-react";

const REVIEWS_PER_PAGE = 6;

export default function ProductReviews() {
  const [visibleCount, setVisibleCount] = useState(REVIEWS_PER_PAGE);

  const visibleReviews = reviews.slice(0, visibleCount);
  const hasMoreReviews = visibleCount < reviews.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + REVIEWS_PER_PAGE, reviews.length),
    );
  };

  return (
    <section className="border-border mt-12 border-t pt-6">
      {/* Tabs */}
      <div className="border-border grid grid-cols-3 border-b">
        <button
          type="button"
          className="text-text-secondary relative pb-4 text-xs sm:text-sm"
        >
          Product Details
        </button>

        <button
          type="button"
          className="text-text relative pb-4 text-xs font-medium sm:text-sm"
        >
          Rating & Reviews
          <span className="bg-text absolute bottom-0 left-0 h-[2px] w-full" />
        </button>

        <button
          type="button"
          className="text-text-secondary relative pb-4 text-xs sm:text-sm"
        >
          FAQs
        </button>
      </div>

      {/* Reviews Header */}
      <div className="mt-5 flex items-center justify-between gap-3">
        {/* Title */}
        <div className="flex items-center gap-1">
          <h2 className="text-base font-bold sm:text-lg">All Reviews</h2>

          <span className="text-text-secondary text-xs sm:text-sm">
            ({reviews.length})
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Filter */}
          <button
            type="button"
            aria-label="Filter reviews"
            className="bg-surface hover:bg-border flex h-10 w-10 items-center justify-center rounded-full text-sm transition-colors"
          >
            <SlidersHorizontal />
          </button>

          {/* Sort Button */}
          <button
            type="button"
            className="bg-surface text-text flex h-10 items-center gap-2 rounded-full px-4 text-xs"
          >
            Latest
            <ChevronDownIcon className="h-4 w-4" />
          </button>

          {/* Write Review */}
          <button
            type="button"
            className="bg-text text-background h-10 rounded-full px-4 text-xs font-medium transition-opacity hover:opacity-80 sm:px-5 sm:text-sm"
          >
            Write a Review
          </button>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {visibleReviews.map((review, index) => (
          <ReviewCard
            key={`${review.name}-${index}`}
            name={review.name}
            review={review.review}
            date={review.date}
          />
        ))}
      </div>

      {/* Load More */}
      {hasMoreReviews && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleLoadMore}
            type="button"
            style={{
              border: "1px solid #e6e6e6",
            }}
            className="text-text mx-auto mt-6 rounded-full px-7 py-2.5 text-xs font-medium hover:bg-gray-50"
          >
            Load More Reviews
          </button>
        </div>
      )}
    </section>
  );
}
