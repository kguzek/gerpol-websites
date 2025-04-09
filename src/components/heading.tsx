import type { ReactNode } from "react";

export function Heading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-2 w-full">
      <h2 className="text-center text-xl uppercase sm:text-start sm:text-2xl md:text-3xl">
        {children}
      </h2>
      <hr className="border-accent absolute left-0 mt-1 w-full" />
    </div>
  );
}
