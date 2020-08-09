import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

import { getTodos } from "../redux/selectors";

const TodoList = ({ allTodos }) => {
  //   console.log(allTodos);
  return (
    <ul>
      {allTodos && allTodos.length
        ? allTodos.map((todo, index) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "No todos, yay!"}
    </ul>
  );
};

const mapStateProps = (state) => {
  const allTodos = getTodos(state);
  return { allTodos };
};

export default connect(mapStateProps)(TodoList);
