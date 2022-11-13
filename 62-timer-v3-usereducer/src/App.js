import React, { useState } from "react";
// import Clicker from "./Clicker";
import Timer from "./Timer";

function App() {
  const [isTimer, setTimer] = useState(false);

  return (
    <div className='App'>
      <h2>React App</h2>
      <button onClick={() => setTimer(!isTimer)}>Toggle Timer</button>
      {isTimer && <Timer />}
    </div>
  );
}

export default App;
