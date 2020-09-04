import React from "react";
import { useDispatch } from "react-redux";
// import cx from "classnames";
import { toggleTodo } from "../redux/actions";

import { FormControlLabel, Checkbox } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  completed_todo: {
    color: "gray",
    textDecoration: "line-through",
  },
  none: {},
});

const Todo = ({ todo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <li>
      {/* <input type="checkbox" onClick={() => dispatch(toggleTodo(todo.id))} />
      {todo && todo.completed ? "オワオワリ" : "未完"} {todo.content} */}

      <FormControlLabel
        control={<Checkbox />}
        label={todo.content}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className={
          todo && todo.completed ? classes.completed_todo : classes.none
        }
      />
    </li>
  );
};

export default Todo;
// export default connect(null, { toggleTodo })(Todo);
