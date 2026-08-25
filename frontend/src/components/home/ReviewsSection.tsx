import { reviews } from "@/data/products";
import ReviewCard from "../common/ReviewCard";

export default function ReviewsSection() {
  return (
    <section className="bg-background-alt">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="m-0 text-[32px] md:text-[40px]">
            OUR HAPPY CUSTOMERS
          </h2>

          <div className="flex gap-2 hover:cursor-pointer">
            <button className="border-border h-10 w-10 rounded-full border hover:bg-gray-100">
              ←
            </button>

            <button className="border-border h-10 w-10 rounded-full border hover:bg-gray-100">
              →
            </button>
          </div>
        </div>

        <div className="scrollbar-hide flex gap-5 overflow-x-auto">
          {reviews.map((review) => (
            <div key={review.name} className="max-w-[400px] min-w-[350px]">
              <ReviewCard name={review.name} review={review.review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
