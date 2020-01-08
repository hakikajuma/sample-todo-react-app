import React from "react";

const TodoView = ({ todos, deleteTodo }) => {
  const todoList = todos.map(todo => {
    return (
      <li className="list-group-item" key={todo.id}>
        {todo.content}
        <button
          className="btn btn-danger btn-sm float-right"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  });
  return todos.length ? (
    <ul className="list-group">{todoList}</ul>
  ) : (
    <div className="alert alert-primary text-center display-5" role="alert">
      <strong>No todo left!</strong>
    </div>
  );
};

export default TodoView;
