import React, { useReducer } from "react";

function App() {
  const initialState = { count: 0 };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 100 };
      case "decrement":
        return { count: state.count - 100 };
      default:
        throw new Error();
    }
  }
  //dispatch - это то что мы используем при клике, она передает данные в функцию reducer, т.е если мы передали тип декремент, то мы в action получаем этот тип в строчном формате
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count: {state.count}</h1>
      <button
        className='button'
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </button>
      <button
        className='button'
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </button>
    </>
  );
}

export default App;
