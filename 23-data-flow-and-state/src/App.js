import React, { Component } from "react";
import Posts from "./components/Posts";

class App extends Component {
  state = {
    posts: [
      { id: "abc1", name: "JS Basics" },
      { id: "abc2", name: "JS Advanced" },
      { id: "abc3", name: "React JS" },
    ],
  };

  handleSomething = () => {
    console.log("App.js setState update");
  };

  render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} cb={this.handleSomething}></Posts>
      </div>
    );
  }
}

export default App;
