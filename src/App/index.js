import React from "react";
import { AppUi } from "./AppUi";
import { TodoProvider } from "../TodoContext/index.js";

function App() {

  return (
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  );
}

export default App;
