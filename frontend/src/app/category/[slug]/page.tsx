import { products } from "@/data/products";
import CategoryClient from "@/components/category/CategoryClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

  const filteredProducts = products.filter(
    (p) => p.category === slug.toLowerCase(),
  );

  return (
    <CategoryClient categoryName={categoryName} products={filteredProducts} />
  );
}
