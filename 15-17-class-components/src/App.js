import React, { Component } from "react";

class App extends Component {
  state = {
    //У нас есть state к которому мы всегда можем обратиться через this.state, и у нас отдельная функция this.setState
    count: 0,
  };

  handleClick = () => {
    //Отдельная функция, которая отвечает за то чтобы обновлять состояния, и работая с классовыми компонентами состояние мы обновляем только через него
    this.setState({ count: this.state.count + 1 }); // самый распространенный вариант
    // this.setState(
    //   (prevState) => ({ count: prevState.count + 1 }), //Может принимать второй параметр, это коллбек, который будет выполнен после того как изменения произойдут
    //   () => {
    //     console.log("setState complete");
    //   }
    // );
    console.log("from handle click");
  };

  render() {
    return (
      <div className="App">
        Hello from React
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}

export default App;
