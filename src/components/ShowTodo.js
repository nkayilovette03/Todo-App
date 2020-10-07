import React from "react";
import "./style.css";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (action) => dispatch(action),
  };
};

function ShowTodo(props) {
  function deleteTodo() {
    const action = { type: "DELETE", payload: props.id };

    props.deleteTodo(action);
  }

  return (
    <div className="showTodo mt-2 width-20 border p-3">
      <h3>{props.todo}</h3>
      <button className="Button btn btn-sm btn-danger" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(ShowTodo);
