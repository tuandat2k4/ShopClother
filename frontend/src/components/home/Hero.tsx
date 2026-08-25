import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-background-alt">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="bg-surface relative min-h-[620px] overflow-hidden md:min-h-[560px]">
          <Image
            src="/images/banners/Rectangle 2.png"
            alt="Hero fashion"
            width={1440}
            height={763}
            priority
            className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
          />

          <Image
            src="/images/banners/Rectangle 2.png"
            alt="Hero fashion"
            width={1440}
            height={763}
            priority
            className="absolute bottom-0 left-[-140px] block h-[230px] w-full object-cover object-[center_bottom] md:hidden"
          />

          <Image
            src="/images/banners/Vector.png"
            alt=""
            width={56}
            height={56}
            priority
            className="absolute top-100 left-10 z-20 w-10 md:top-[42%] md:right-16 md:left-150 md:w-14"
          />

          <Image
            src="/images/banners/Vector.png"
            alt=""
            width={104}
            height={104}
            priority
            className="absolute top-78.75 right-8 z-20 w-16 md:top-12 md:right-10 md:w-24"
          />

          <div className="relative z-30 px-5 pt-8 md:absolute md:top-1/2 md:left-10 md:w-[50%] md:-translate-y-1/2 md:px-0 md:pt-0 lg:left-16 lg:w-[45%]">
            <h1 className="max-w-[350px] text-[36px] leading-[0.92] font-black tracking-[-1.5px] md:max-w-none md:text-5xl md:leading-[0.95] lg:text-[64px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>

            <p className="text-text-secondary mt-4 max-w-[350px] text-[11px] leading-[1.45] md:mt-5 md:max-w-[500px] md:text-[14px] lg:text-[15px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <Link
              href="/shop"
              className="bg-text text-background mt-5 block w-full rounded-full px-6 py-3 text-center text-xs font-medium transition-colors hover:bg-gray-800 md:mt-6 md:inline-block md:w-auto md:px-12 md:py-3.5 md:text-sm"
            >
              Shop Now
            </Link>

            <div className="mt-6 grid grid-cols-2 gap-y-5 text-center md:mt-9 md:flex md:justify-start md:gap-8 md:text-left">
              <div>
                <div className="text-[25px] leading-none font-black md:text-[30px] lg:text-[32px]">
                  200+
                </div>
                <div className="text-text-secondary mt-1 text-[9px] md:text-xs lg:text-sm">
                  International Brands
                </div>
              </div>

              <div>
                <div className="text-[25px] leading-none font-black md:text-[30px] lg:text-[32px]">
                  2,000+
                </div>
                <div className="text-text-secondary mt-1 text-[9px] md:text-xs lg:text-sm">
                  High-Quality Products
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <div className="text-[25px] leading-none font-black md:text-[30px] lg:text-[32px]">
                  30,000+
                </div>
                <div className="text-text-secondary mt-1 text-[9px] md:text-xs lg:text-sm">
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
