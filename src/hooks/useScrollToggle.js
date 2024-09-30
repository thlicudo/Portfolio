import { useState } from "react";

const useScrollToggle = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return { isClicked, handleClick };
};

export default useScrollToggle;
