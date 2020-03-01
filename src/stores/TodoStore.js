import Todo from "./Todo";
import { observable, action } from "mobx";
import { Component } from "react";

class TodoStore extends Component {
  @observable todos = [];

  ID = 0;

  @observable Count = 0;

  @observable All = [];

  @observable Completed = [];

  @observable Active = [];

  @observable AllFillter = true;

  @observable ActiveFillter = false;

  @observable CompletedFillter = false;

  @observable Fillter = "";

  //   HideFooter() {
  //     this.todos.length == 0 ? "hidden" : "";
  //   }

  @action
  AddTodo(input) {
    this.todos.push(new Todo(this, this.ID++, input, false, false, true));
    this.CountItems();
    this.All = this.todos.filter(todo => todo.clear == false);
    if (this.CompletedFillter) {
      this.ShowCompleted();
    }
  }

  @action
  Toggle(todo) {
    todo.status = !todo.status;
    this.Completed = this.todos.filter(
      todo => (todo.status == true) & (todo.clear == false)
    );
    this.Active = this.todos.filter(
      todo => (todo.status == false) & (todo.clear == false)
    );
    this.CountItems();
  }

  @action
  CountItems() {
    this.Count = this.todos.filter(
      todo => (todo.status == false) & (todo.clear == false)
    ).length;
  }

  @action
  Close(todo) {
    todo.clear = true;
    this.CountItems();
    this.All = this.todos.filter(todo => todo.clear == false);
    this.Completed = this.todos.filter(
      todo => (todo.status == true) & (todo.clear == false)
    );
  }

  @action
  ClearCompleted() {
    this.Completed.map(todo => this.Close(todo));
  }

  @action
  ShowAll() {
    this.todos
      .filter(todo => todo.clear == false)
      .map(todo => (todo.show = true));
    this.AllFillter = true;
    this.ActiveFillter = false;
    this.CompletedFillter = false;
  }

  @action
  ShowCompleted() {
    this.todos
      .filter(todo => (todo.clear == false) & (todo.status == true))
      .map(todo => (todo.show = true));

    this.todos
      .filter(todo => (todo.clear == false) & (todo.status == false))
      .map(todo => (todo.show = false));
    this.AllFillter = false;
    this.ActiveFillter = false;
    this.CompletedFillter = true;
  }

  @action
  ShowActive() {
    this.todos
      .filter(todo => (todo.clear == false) & (todo.status == false))
      .map(todo => (todo.show = true));

    this.todos
      .filter(todo => (todo.clear == false) & (todo.status == true))
      .map(todo => (todo.show = false));
    this.AllFillter = false;
    this.ActiveFillter = true;
    this.CompletedFillter = false;
  }

  //   @action
  //   FillterTodo() {
  //     this.AllFillter = !this.AllFillter;
  //     this.ActiveFillter = !this.ActiveFillter;
  //     this.CompletedFillter = !this.CompletedFillter;
  //   }
}

const store = new TodoStore();

export default store;
