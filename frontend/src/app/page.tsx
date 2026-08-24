import { BrandsBar, DressStyle, Hero, ReviewsSection } from "@/components/home";
import { ProductSection } from "@/components/product";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandsBar />
      <ProductSection title="NEW ARRIVALS" products={products} showViewAll />
      <div className="h-px bg-border" />
      <ProductSection title="TOP SELLINGS" products={products} showViewAll />
      <DressStyle />
      <ReviewsSection />
    </>
  );
}
