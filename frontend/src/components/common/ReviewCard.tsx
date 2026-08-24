interface ReviewCardProps {
  name: string;
  review: string;
  date?: string;
}

export default function ReviewCard({ name, review, date }: ReviewCardProps) {
  return (
    <div className="flex h-[230px] flex-col gap-4 rounded-[20px] border border-gray-300 p-6">
      {/* Rating */}
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-xl text-yellow-400">
            ★
          </span>
        ))}
      </div>

      {/* Name */}
      <div className="flex items-center gap-1">
        <div className="text-sm font-bold">{name}</div>

        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#01AB31] text-[12px] leading-none text-white">
          ✓
        </span>
      </div>

      {/* Review */}
      <p className="text-text-secondary m-0 text-sm">{review}</p>

      {/* Date chỉ show khi Product Detail truyền date */}
      {date && (
        <p className="text-text-secondary m-0 text-xs">Posted on {date}</p>
      )}
    </div>
  );
}
