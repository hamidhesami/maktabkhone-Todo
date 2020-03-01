import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import store from "../stores/TodoStore";

@observer
class Footer extends Component {
  clearcompleted = () => {
    store.ClearCompleted();
  };

  showall = () => {
    store.ShowAll();
  };

  showcompleted = () => {
    store.ShowCompleted();
  };

  showactive = () => {
    store.ShowActive();
  };

  render() {
    return (
      <div className={`footer ${store.All.length == 0 ? "hidden" : ""}`}>
        <div className="todo-count">
          {store.Count < 2
            ? `${store.Count} item left`
            : `${store.Count} items left`}
        </div>

        <ul className="filters">
          <li>
            <a
              onClick={this.showall}
              className={store.AllFillter ? "selected" : ""}
            >
              All
            </a>
          </li>

          <li>
            <a
              onClick={this.showactive}
              className={store.ActiveFillter ? "selected" : ""}
            >
              Active
            </a>
          </li>

          <li>
            <a
              onClick={this.showcompleted}
              className={store.CompletedFillter ? "selected" : ""}
            >
              Completed
            </a>
          </li>
        </ul>

        <div
          className={`clear-completed ${
            store.Completed.length == 0 ? "hidden" : ""
          }`}
          onClick={this.clearcompleted}
        >
          clear completed
        </div>
      </div>
    );
  }
}

export default Footer;
