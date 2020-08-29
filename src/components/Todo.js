import React from "react";
import { useDispatch } from "react-redux";
// import cx from "classnames";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <input type="checkbox" onClick={() => dispatch(toggleTodo(todo.id))} />
      {todo && todo.completed ? "オワオワリ" : "未完"} {todo.content}
    </li>
  );
};

export default Todo;
// export default connect(null, { toggleTodo })(Todo);
