import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";
import store from "../stores/TodoStore";

@observer
class TodoItems extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">            
          {store.todos.map(todo => {
            return <TodoItem todo={todo} />;
          })}
        </ul>
      </section>
    );
  }
}

export default TodoItems;
