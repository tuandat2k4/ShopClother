import Image from "next/image";

const footerLinks = {
  COMPANY: ["About", "Features", "Works", "Career"],
  HELP: ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"],
  FAQ: ["Account", "Manage Deliveries", "Orders", "Payments"],
  RESOURCES: ["Free eBooks", "Development Tutorial", "How to - Blog", "Youtube Playlist"],
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
    <footer className="relative mt-[100px] bg-background-alt mt-[150px] md:mt-[100px]">
      <div className="absolute top-0 left-0 w-full -translate-y-1/2">
        <div className="mx-auto w-full max-w-[1240px] px-5">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[20px] bg-text px-6 py-4 text-background md:flex-row md:px-12 md:py-6">
            <h2 className="m-0 font-display text-[32px] md:text-[40px]">STAY UPTO DATE ABOUT<br />OUR LATEST OFFERS</h2>
            <div className="flex w-full flex-col gap-3 md:w-[350px]">
              <div className="flex w-full items-center gap-2 rounded-full bg-background px-5 py-3 text-text">
                <span>✉</span>
                <input type="email" placeholder="Enter your email address" className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
              </div>
              <button type="button" className="w-full cursor-pointer rounded-full bg-background px-5 py-3 font-medium text-text transition-colors hover:bg-gray-100">Subscribe to Newsletter</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1240px] px-5 pb-12 pt-[100px] mt-[100px] md:mt-[30px]">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4 mt-3"><Image src="/images/banners/SHOP.CO.png" alt="SHOP.CO" width={140} height={24} /></div>
            <p className="mb-4 text-sm text-text-secondary">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a key={social.name} href="#" aria-label={social.name} className="cursor-pointer transition-opacity hover:opacity-80">
                  <Image src={social.image} alt={social.name} width={28} height={28} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="mt-2">
              <h4 className="m-0 mb-4 text-sm font-bold tracking-wider">{title}</h4>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {links.map((link) => (
                  <li key={link} className="cursor-pointer text-sm text-text-secondary transition-colors hover:text-text">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-text-secondary">Shop.co © 2000-2023, All Rights Reserved</p>
          <div className="mt-4 flex items-center gap-1 md:mt-0">
            {paymentMethods.map((payment) => (
              <Image key={payment.name} src={payment.image} alt={payment.name} width={50} height={30} className="h-[53px] w-auto object-contain" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
