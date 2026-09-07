import Image from "next/image";

const footerLinks = {
  COMPANY: ["About", "Features", "Works", "Career"],
  HELP: [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ],
  FAQ: ["Account", "Manage Deliveries", "Orders", "Payments"],
  RESOURCES: [
    "Free eBooks",
    "Development Tutorial",
    "How to - Blog",
    "Youtube Playlist",
  ],
};

const socialLinks = [
  { name: "Twitter", image: "/images/banners/social.png" },
  { name: "Facebook", image: "/images/banners/social2.png" },
  { name: "Instagram", image: "/images/banners/social3.png" },
  { name: "GitHub", image: "/images/banners/social4.png" },
];

const paymentMethods = [
  { name: "Visa", image: "/images/banners/visa.png" },
  { name: "Mastercard", image: "/images/banners/mastercard.png" },
  { name: "PayPal", image: "/images/banners/paypal.png" },
  { name: "Apple Pay", image: "/images/banners/applepay.png" },
  { name: "Google Pay", image: "/images/banners/ggpay.png" },
];

export default function Footer() {
  return (
    <footer className="bg-background-alt relative mt-[100px] mt-[150px] md:mt-[100px]">
      <div className="absolute top-0 left-0 w-full -translate-y-1/2">
        <div className="mx-auto w-full max-w-[1240px] px-5">
          <div className="bg-text text-background flex flex-col items-center justify-between gap-6 rounded-[20px] px-6 py-4 md:flex-row md:px-12 md:py-6">
            <h2 className="m-0 text-[32px] md:text-[40px]">
              STAY UPTO DATE ABOUT
              <br />
              OUR LATEST OFFERS
            </h2>
            <div className="flex w-full flex-col gap-3 md:w-[350px]">
              <div className="bg-background text-text flex w-full items-center gap-2 rounded-full px-5 py-3">
                <span>✉</span>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                />
              </div>
              <button
                type="button"
                className="bg-background text-text w-full cursor-pointer rounded-full px-5 py-3 font-medium transition-colors hover:bg-gray-100"
              >
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[100px] w-full max-w-[1240px] px-5 pt-[100px] pb-12 md:mt-[30px]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="mt-3 mb-4">
              <Image
                src="/images/banners/SHOP.CO.png"
                alt="SHOP.CO"
                width={140}
                height={24}
              />
            </div>
            <p className="text-text-secondary mb-4 text-sm">
              We have clothes that suits your style and which you&apos;re proud
              to wear. From women to men.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="cursor-pointer transition-opacity hover:opacity-80"
                >
                  <Image
                    src={social.image}
                    alt={social.name}
                    width={28}
                    height={28}
                  />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="mt-2">
              <h4 className="m-0 mb-4 text-sm font-bold tracking-wider">
                {title}
              </h4>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {links.map((link) => (
                  <li
                    key={link}
                    className="text-text-secondary hover:text-text cursor-pointer text-sm transition-colors"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-border mt-8 flex flex-col items-center justify-between border-t pt-8 md:flex-row">
          <p className="text-text-secondary text-sm">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="mt-4 flex items-center gap-1 md:mt-0">
            {paymentMethods.map((payment) => (
              <Image
                key={payment.name}
                src={payment.image}
                alt={payment.name}
                width={50}
                height={30}
                className="h-[53px] w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
