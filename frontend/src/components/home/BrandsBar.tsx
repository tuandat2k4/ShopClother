import Image from "next/image";

const brands = [
  { name: "Versace", src: "/images/categories/versace.png" },
  { name: "Zara", src: "/images/categories/zara-logo.png" },
  { name: "Gucci", src: "/images/categories/gucci-logo.png" },
  { name: "Prada", src: "/images/categories/prada-logo.png" },
  { name: "Calvin Klein", src: "/images/categories/calvin-logo.png" },
];

export default function BrandsBar() {
  return (
    <section className="bg-text py-8">
      <div className="w-full max-w-[1240px] mx-auto px-5">
        <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12">
          {brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              width={100}
              height={100}
              className="h-8 md:h-10 w-auto hover:opacity-80 transition-opacity cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
