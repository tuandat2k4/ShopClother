import Grid from "@/components/common/Grid";

import { Product } from "@/data/products";
import ProductCard from "../product/ProductCard";

interface ProductSectionProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
}

export default function ProductSection({
  title,
  products,
  showViewAll = false,
}: ProductSectionProps) {
  return (
    <section className="py-12 sm:py-8">
      <div className="mx-auto w-full max-w-[1240px] px-5">
        {/* Header: Title */}
        <div className="mb-8 flex flex-col items-center gap-4">
          <h2 className="text-[28px] font-black">{title}</h2>
        </div>

        {/* Responsive Grid */}
        <Grid className="grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>

        {/* Nút view all chưa có gì */}
        {showViewAll && (
          <div className="mt-8 flex justify-center">
            <button
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "9999px",
              }}
              className="text-text-secondary hover:text-text flex cursor-pointer items-center gap-1 px-6 py-2.5 text-sm"
            >
              View All →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
