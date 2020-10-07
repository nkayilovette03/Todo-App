import React from "react";
import uniqid from "uniqid";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (action) => dispatch(action),
  };
};

class CreateTodo extends React.Component {
  state = {
    trackinput: "",
  };

  changeInput = (e) => {
    this.setState({ trackinput: e.target.value });
  };

  submitTodo = (e) => {
    e.preventDefault();

    const value = {
      id: uniqid(),
      todo: this.state.trackinput,
    };

    const action = {
      type: "ADD",
      payload: value,
    };

    this.props.addTodo(action);
  };

  render() {
    return (
      <div className="mt-3">
        <form onSubmit={this.submitTodo}>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo"
            onChange={this.changeInput}
          />
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Submit"
          />
        </form>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
