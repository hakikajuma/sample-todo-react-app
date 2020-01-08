import React, { Component } from "react";
import TodoView from "./components/TodoView";
import AddTodo from "./components/AddTodo";
import "./App.css";

class App extends Component {
  //state of data
  state = {
    todos: [
      { id: 1, content: "Kuchambua mikoa na vijiji." },
      { id: 2, content: "Working on my assignment." },
      { id: 3, content: "Kuoga." }
    ],
    doneTodos: [],
    todosActions: ["done", "edit"],
    doneTodosActions: ["delete", "undone"]
  };

  addTodo = todo => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  deleteTodo = id => {
    let newTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 className="text-center">Todo's</h3>
            <TodoView todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo} />
          </div>
          <div className="col-md-6">
            <h3 className="text-center">Todo's</h3>
            <TodoView
              todos={this.state.doneTodos}
              deleteTodo={this.deleteTodo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
