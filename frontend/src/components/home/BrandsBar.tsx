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
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div className="ml-5 flex flex-wrap items-center justify-start gap-8 md:justify-between md:gap-12">
          {brands.map((brand) => (
            <Image
              key={brand.name}
              src={brand.src}
              alt={brand.name}
              width={100}
              height={100}
              className="h-6 w-auto cursor-pointer transition-opacity hover:opacity-80 md:h-8"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
