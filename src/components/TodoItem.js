import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import store from "../stores/TodoStore";

@observer
class TodoItem extends Component {
  toggle = () => {
    store.Toggle(this.props.todo);
  };

  close = () => {
    store.Close(this.props.todo);
  };

  render() {
    return (
      <li
        className={`${this.props.todo.status ? "completed" : ""}
             ${this.props.todo.show ? "view" : "hidden"} 
             ${this.props.todo.clear ? "hidden" : "view"}`}
      >
        <div className="view">
          <input
            type="checkbox"
            className="toggle"
            value="on"
            onChange={this.toggle}
            checked={this.props.todo.status}
          />

          <label>{this.props.todo.input}</label>

          <button className="destroy" onClick={this.close}></button>
        </div>
      </li>
    );
  }
}

export default TodoItem;
