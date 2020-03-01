import { action, observable } from "mobx";

class Todo {
  store;
  id;
  @observable status;
  @observable input;
  @observable clear;
  @observable show;

  constructor(store, id, input, status, clear, show) {
    this.store = store;
    this.id = id;
    this.status = status;
    this.input = input;
    this.clear = clear;
    this.show = show;
  }
}

export default Todo;
