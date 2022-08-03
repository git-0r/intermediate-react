import { useState } from "react";

export const useMenu = () => {
  const [menu, setMenu] = useState<number>();
  return { menu, setMenu };
};
