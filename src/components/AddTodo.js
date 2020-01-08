import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: ""
  };

  handleOnChange = e => {
    this.setState({
      content: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mt-3">
        <div className="form-froup">
          <input
            type="text"
            className="form-control"
            onChange={this.handleOnChange}
            value={this.state.content}
          />
        </div>
      </form>
    );
  }
}

export default AddTodo;
