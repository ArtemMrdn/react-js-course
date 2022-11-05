import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //count - перменная, некое значение, setCount - это функция которая позволяет нам обновлять первую переменную

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='App'>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
