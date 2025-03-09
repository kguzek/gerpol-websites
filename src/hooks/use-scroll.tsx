import { useEffect, useState } from "react";

export function useScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleScroll() {
      setScroll({ x: window.scrollX, y: window.scrollY });
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return scroll;
}
