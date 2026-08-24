import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-background-alt mb-[-60px] py-12 md:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div className="relative">
          <Image
            src="/images/banners/Rectangle 2.png"
            alt="Hero fashion"
            width={1440}
            height={763}
            className="h-auto w-full"
            priority
          />

          <Image
            src="/images/banners/Vector.png"
            alt="Hero fashion"
            width={56}
            height={56}
            className="absolute top-50 left-150"
            priority
          />

          <Image
            src="/images/banners/Vector.png"
            alt="Hero fashion"
            width={104}
            height={104}
            className="absolute top-0 left-265"
            priority
          />
          <div className="absolute left-0 top-1/2 w-[50%] -translate-y-1/2">
            <h1 className="mb-1 text-[40px] font-black font-display leading-tight md:text-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <p className="mb-6 max-w-[500px] text-[17px] text-text-secondary">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <button className="rounded-full bg-text px-15 py-4 text-[17px] font-medium text-background transition-colors hover:bg-gray-800">
              Shop Now
            </button>

            <div className="flex flex-wrap gap-8 mt-10 mb-5">
              <div>
                <div className="text-[32px] font-black">200+</div>
                <div className="text-sm text-text-secondary">
                  International Brands
                </div>
              </div>

              <div>
                <div className="text-[32px] font-black">2,000+</div>
                <div className="text-sm text-text-secondary">
                  High-Quality Products
                </div>
              </div>

              <div>
                <div className="text-[32px] font-black">30,000+</div>
                <div className="text-sm text-text-secondary">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
