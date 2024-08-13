import "../CSS/App.css";
import "../CSS/ExitStyle.css";
import "../CSS/background.css";
import ExitStyle from "../JS/ExitStyle.js";
import Background from "../JS/background.js";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Background />
      <ExitStyle useState={useState} />
    </div>
  );
}

export default App;
