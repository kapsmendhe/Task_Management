import React, { useState } from "react";
import AddTask from "./AddTask";


function App() {
  const [state, setState] = useState([]);
  return (
    <div>
      <AddTask setState={setState} state={state} />
    </div>

  );
}

export default App;
