interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div className={`w-full max-w-[1240px] mx-auto px-5 sm:px-4 ${className}`}>
      {children}
    </div>
  );
}
