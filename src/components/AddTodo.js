import React, { useState, useCallback } from "react";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
// import teal from "@material-ui/core/colors/teal";

const useStyles = makeStyles({
  add_button: {
    color: "green",
  },
});

const AddTodo = () => {
  const classes = useStyles();
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
      {/* <button onClick={handleAddTodo}>Add Todo</button> */}
      <Button
        variant="outlined"
        size="small"
        color="secondary"
        // className={classes.add_button}
        onClick={handleAddTodo}
      >
        Add Todo
      </Button>
    </div>
  );
};

export default AddTodo;
