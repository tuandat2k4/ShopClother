import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const categoryNames: Record<string, string> = {
  casual: "Casual",
  formal: "Formal",
  party: "Party",
  gym: "Gym",
  all: "All Products",
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = categoryNames[slug] || slug;

  const filteredProducts =
    slug === "all" ? products : products.filter((_, i) => i % 2 === 0);

  return (
    <div className="flex-1 py-8">
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div className="text-text-secondary mb-6 flex gap-2 text-sm">
          <Link href="/" className="hover:text-text">
            Home
          </Link>
          <span>›</span>
          <span className="text-black">{categoryName}</span>
        </div>

        <h1 className="mb-8 text-[32px] font-bold">
          {categoryName.toUpperCase()}
        </h1>

        <div className="mb-8 flex flex-wrap gap-4">
          {Object.entries(categoryNames).map(([key, name]) => (
            <Link
              key={key}
              href={`/category/${key}`}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                slug === key
                  ? "bg-text text-background"
                  : "bg-background-alt hover:bg-gray-200"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
