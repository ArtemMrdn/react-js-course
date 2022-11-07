import React, { useEffect, useRef, useState } from "react";

function WithRef() {
  //   const inputEl = useRef(null);
  //   console.log(inputEl);
  const numRef = useRef(0);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    // useReff не уведомляет нас об изменении содержимого никогда, поэтому мы можем мутировать ключ нашего обьекта current сколько угодно и это не будет вызывать повторный перерендеринг
    // numRef.current = 1;
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    // console.log(inputEl);
    console.log(numRef.current);
  });

  return (
    <div>
      {/* <input placeholder='name' /> */}
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}

export default WithRef;
