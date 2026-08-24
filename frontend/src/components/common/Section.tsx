import { ReactNode } from "react";
import Container from "./Container";

interface SectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-12 sm:py-8 ${className}`}>
      <Container>
        {title && (
          <h2 className="text-[32px] font-black text-center mb-8">{title}</h2>
        )}
        {children}
      </Container>
    </section>
  );
}
