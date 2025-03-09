import { Contact } from "../footer/contact";

export function Banner() {
  return (
    <>
      <div className="text-primary bg-tertiary mb-1 flex h-21 items-center justify-center gap-10">
        <h1 className="flex w-fit flex-col items-center">
          <span className="text-accent text-3xl font-semibold">Machulec</span>
          <span className="text-2xl">Das Profiteam</span>
        </h1>
      </div>
      <div className="bg-secondary/70 text-primary hover:bg-secondary/90 sticky top-0 z-10 mb-2 flex h-8 justify-around gap-2 text-xs backdrop-blur-sm transition-colors duration-300 sm:justify-center sm:gap-2 md:gap-10 md:text-sm lg:text-lg">
        <Contact compact animate />
      </div>
    </>
  );
}
