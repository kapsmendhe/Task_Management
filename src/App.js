import React, { useState } from "react";
import AddTask from "./AddTask";
import "./style.css";


function App() {
  const [state, setState] = useState([]);
  return (
    <div>
      <h1 style={{ marginLeft: "200px" }}>Task Management</h1>
      <AddTask setState={setState} state={state} />
    </div>

  );
}

export default App;
