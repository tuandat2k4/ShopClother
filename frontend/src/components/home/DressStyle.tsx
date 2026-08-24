const styles = [
  { name: "Casual", image: "/images/categories/casual.png", className: "" },
  {
    name: "Formal",
    image: "/images/categories/formal.png",
    className: "md:col-span-2",
  },
  {
    name: "Party",
    image: "/images/categories/party.png",
    className: "md:col-span-2",
  },
  { name: "Gym", image: "/images/categories/gym.png", className: "" },
];

export default function DressStyle() {
  return (
    <section className="py-5 md:py-16">
      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div className="rounded-[20px] bg-background-alt p-6 md:p-10">
          <h2 className="mb-8 text-center text-[32px] font-display md:text-[40px]">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {styles.map(({ name, image, className }) => (
              <div
                key={name}
                className={`relative h-[200px] cursor-pointer overflow-hidden rounded-[20px] bg-gray-100 ${className}`}
              >
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 text-xl font-bold">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
