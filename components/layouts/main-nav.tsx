"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { LifeBuoy } from "lucide-react";

import { cn } from "@/lib/utils";

function MainNav({ items }: { items?: Item[] }) {
  const segment = useSelectedLayoutSegment();
  return (
    <header className="top-0 z-50">
      <nav className="flex max-w-7xl flex-col items-center sm:flex-row md:gap-10">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <LifeBuoy />
          <span className="hidden font-bold sm:inline-block">sh...</span>
        </Link>
        {items?.length && (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item: Item, index: Index) => (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground"
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}
      </nav>
    </header>
  );
}

export default MainNav;
