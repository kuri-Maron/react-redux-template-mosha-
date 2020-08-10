import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

import { getTodos } from "../redux/selectors";

const TodoList = () => {
  const allTodos = useSelector((state) => getTodos(state));
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

export default TodoList;
