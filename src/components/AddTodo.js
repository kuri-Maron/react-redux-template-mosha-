import React, { useState, useCallback } from "react";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const updateInput = useCallback(
    (input) => {
      setInput(input);
    },
    [setInput]
  );

  const handleAddTodo = useCallback(async () => {
    console.log("check!");
    // call fetch_api function
    await fetch(
      "https://q710ycvg7i.execute-api.ap-northeast-1.amazonaws.com/dev/api",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: input,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(addTodo(input));
        setInput("");
      });
  }, [dispatch, input]);

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
