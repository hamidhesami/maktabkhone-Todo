import React, { Component } from "react";
import { action } from "mobx";
import store from "../stores/TodoStore";

class TodoEntry extends Component {
  state = {
    Entry: ""
  };

  ChangeInput = event => {
    this.setState({
      Entry: event.target.value
    });
  };

  CreateTodo = event => {
    if ((event.keyCode == 13) & (this.state.Entry != "")) {
      store.AddTodo(this.state.Entry);
      this.setState({
        Entry: ""
      });
    } else {
      return;
    }
  };

  render() {
    return (
      <header className="header">
        <h1>todo</h1>
        <input
          value={this.state.Entry}
          onChange={this.ChangeInput}
          onKeyDown={this.CreateTodo}
          type="text"
          className="new-todo"
          placeholder="what needs to be done?"
        />
      </header>
    );
  }
}

export default TodoEntry;
