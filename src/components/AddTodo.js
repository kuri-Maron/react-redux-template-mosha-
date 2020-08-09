import React, { useState } from "react";
// import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const updateInput = (input2) => {
    console.log(input, input2); // TODO: どっちが呼ばれる？
    setInput(input2);
  };

  const handleAddTodo = () => {
    console.log("check!");
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div>
      <input onChange={(e) => updateInput(e.target.value)} value={input} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;

// class AddTodo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { input: "" };
//   }

//   updateInput = (input) => {
//     this.setState({ input });
//   };

//   handleAddTodo = () => {
//     this.props.addTodo(this.state.input);
//     this.setState({ input: "" });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           onChange={(e) => this.updateInput(e.target.value)}
//           value={this.state.input}
//         />
//         <button onClick={this.handleAddTodo}>Add Todo</button>
//       </div>
//     );
//   }
// }

// export default connect(null, { addTodo })(AddTodo);
