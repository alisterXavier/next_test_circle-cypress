import { useEffect, useState } from "react";

export const useSmallDeviceSize = () => {
  const [state, setState] = useState<number>();
  useEffect(() => {
    const handleResize = () => {
      setState(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return state && state <= 1358;
};