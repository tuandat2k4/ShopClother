import { Product } from "@/data/products";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, image, price, originalPrice, rating } = product;
  const discount = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const renderStars = (rating: number) =>
    "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));

  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="bg-card aspect-[1/1.01] w-full cursor-pointer overflow-hidden rounded-[20px]">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="py-3">
        <h3 className="font-body m-0 mb-1.5 text-lg font-bold sm:text-base">
          {name}
        </h3>
        {rating && (
          <div className="mb-1.5 flex items-center gap-1.5">
            <span className="text-rating text-xl">{renderStars(rating)}</span>
            <span className="text-[13px]">{rating}/5</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <span style={{ fontSize: "20px" }} className="font-bold sm:text-base">
            ${price}
          </span>
          {originalPrice && (
            <>
              <span
                style={{ fontSize: "20px" }}
                className="text-text-muted text-base line-through sm:text-sm"
              >
                ${originalPrice}
              </span>
              <span
                style={{ fontSize: "15px" }}
                className="text-sale bg-sale/15 rounded-full px-2 py-1 text-sm"
              >
                -{discount}%
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
