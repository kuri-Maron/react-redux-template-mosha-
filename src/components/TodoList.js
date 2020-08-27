import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { useDispatch } from "react-redux";
import { fetchTodoList } from "../redux/actions";

import { getTodos } from "../redux/selectors";

const TodoList = () => {
  const dispatch = useDispatch();
  // apiからGETしてstoreにtodoリストデータ格納
  useEffect(() => {
    let unmouted = false;
    const f = async () => {
      // call fetch_api function
      await fetch(
        "https://q710ycvg7i.execute-api.ap-northeast-1.amazonaws.com/dev/api",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((respose) => respose.json())
        .then((data) => {
          console.log(data);
          dispatch(fetchTodoList(data));
        });
      if (!unmouted) {
        // storeに格納する関数の実行
      }
    };
    f();
    const cleanup = () => {
      unmouted = true;
    };
    return cleanup;
  }, []);

  // const allTodos = useSelector((state) => getTodos(state));
  const allTodos = useSelector((state) => {
    console.log(`state:`, state);
    return getTodos(state);
  });
  console.log(allTodos);
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
