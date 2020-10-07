import React from "react";
import { connect } from "react-redux";
import ShowTodo from "./ShowTodo.js";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

function DisplayTodo(props) {
  console.log(props.todos);
  return (
    <div>
      {/* <row>
        <col xxl={8}> */}
      <h3 className="displayTodo mt-3">
        {props.todos.map((todo) => (
          <ShowTodo key={todo.id} id={todo.id} todo={todo.todo} />
        ))}
      </h3>
      {/* </col>
      </row> */}
    </div>
  );
}

export default connect(mapStateToProps)(DisplayTodo);
