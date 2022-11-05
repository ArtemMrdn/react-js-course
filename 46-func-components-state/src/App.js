import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0); //value - перменная, некое значение, setValue - это функция которая позволяет нам обновлять первую переменную

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className='App'>
      <button onClick={increment}>{count}</button>
    </div>
  );
}

export default App;
