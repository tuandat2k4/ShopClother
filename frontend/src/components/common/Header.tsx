import Container from "@/components/common/Container";
import { CircleUser, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = ["Shop", "On Sale", "New Arrivals", "Brands"];

export default function Header() {
  return (
    <header>
      <div className="bg-text text-background relative px-5 py-3 text-center text-[13px]">
        Sign up and get 20% off to your first order.{" "}
        <a href="#" style={{ textDecoration: "underline" }}>
          Sign Up Now
        </a>
        <button
          type="button"
          className="absolute top-1/2 right-5 -translate-y-1/2 cursor-pointer text-lg"
        >
          ×
        </button>
      </div>

      <Container>
        <nav className="border-border flex flex-wrap items-center justify-between gap-4 border-b py-5">
          <Image
            src="/images/banners/SHOP.CO.png"
            alt="SHOP.CO"
            width={140}
            height={24}
            className="h-auto w-[140px] cursor-pointer"
          />

          <ul className="m-0 hidden list-none items-center gap-6 p-0 md:flex">
            {navLinks.map((link) => (
              <li
                key={link}
                className="cursor-pointer rounded-full px-2 py-1 text-[17px] hover:bg-gray-100"
              >
                {link}
                {link === "Shop" && " ▾"}
              </li>
            ))}
          </ul>

          <div className="bg-background flex max-w-[500px] flex-1 items-center gap-2 rounded-full px-5 py-2.5 max-md:order-3 max-md:w-full max-md:max-w-full">
            <Search />
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 border-none bg-transparent text-sm outline-none"
            />
          </div>

          <div className="flex items-center gap-4 hover:cursor-pointer">
            <Link href="/cart">
              <ShoppingCart />
            </Link>
            <CircleUser />
          </div>
        </nav>
      </Container>
    </header>
  );
}
