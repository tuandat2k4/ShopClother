interface GridProps {
  children: React.ReactNode;
  className?: string;
}

export default function Grid({ children, className = "" }: GridProps) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ${className}`}
    >
      {children}
    </div>
  );
}
