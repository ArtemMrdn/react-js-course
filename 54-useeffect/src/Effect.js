import { useEffect } from "react";

const Effect = () => {
  //Ассинхонный хук

  //what effect does
  useEffect(() => {
    const handler = () => {};
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return <div></div>;
};

export default Effect;
