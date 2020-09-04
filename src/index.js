import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

// import "./index.css";
import TodoApp from "./TodoApp";

// import Container from "@material-ui/core/Container";
import { Container, Box } from "@material-ui/core";
ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="sm">
      <Box bgcolor="#dcedc8">
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </Box>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);
