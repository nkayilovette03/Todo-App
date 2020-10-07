const initialState = {
  todos: [
    { id: 1, todo: "Learn React" },
    { id: 2, todo: "Learn Vue" },
    { id: 3, todo: "Learn Angular" },
    { id: 4, todo: "Learn Python" },
    { id: 5, todo: "Learn JavaScript" },
    { id: 6, todo: "Learn Flutter" },
  ],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        todos: state.todos.concat(action.payload),
      });

    case "DELETE":
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      });
      console.log("added");
    default:
      return state;
  }
}

export default todoReducer;
