import React, { Component } from "react";
import "./App.css";
import { observer } from "mobx-react";
import TodoEntry from "./components/TdoEntry";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer";

@observer
class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />

        <TodoItems />
        
        <Footer/>
      </div>
    );
  }
}

export default App;
