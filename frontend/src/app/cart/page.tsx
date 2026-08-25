import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import { cartItems } from "@/data/cart";
import Link from "next/link";

export default function CartPage() {
  return (
    <div className="">
      <main className="mb-10 flex-1 py-6">
        <div className="mx-auto w-full max-w-[1240px] px-5">
          <div className="text-text-secondary mb-6 flex gap-2 text-sm">
            <Link href="/" className="hover:text-text">
              Home
            </Link>
            <span>›</span>
            <span className="text-black">Cart</span>
          </div>

          <h1 className="mb-8 text-[32px] md:text-[40px]">YOUR CART</h1>

          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex-1 space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.name} {...item} />
              ))}
            </div>

            <div className="w-full lg:w-[400px] lg:shrink-0">
              <CartSummary />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
