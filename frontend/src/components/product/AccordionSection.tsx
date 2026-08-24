"use client";

import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

interface AccordionSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function AccordionSection({
  title,
  children,
  defaultOpen = false,
}: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-border border-t">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="font-medium">{title}</span>
        <span
          className={`items-center gap-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <ChevronDownIcon className="h-4 w-4" />
        </span>
      </button>
      {isOpen && <div className="text-text-secondary pb-4">{children}</div>}
    </div>
  );
}
