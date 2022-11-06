import React, { useState } from "react";
// import Clicker from "./Clicker";
import WithRef from "./Ref";

function App() {
  // const [isClicker, setClicker] = useState(false);

  return (
    <div className='App'>
      <h2>React App</h2>
      <WithRef />
      {/* <button onClick={() => setClicker(!isClicker)}>Toggle Clicker</button>
      {isClicker && <Clicker />} */}
    </div>
  );
}

export default App;
