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

  const handleAddTodo = useCallback(() => {
    console.log("check!");
    dispatch(addTodo(input));
    setInput("");
  }, [dispatch, input]);

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
