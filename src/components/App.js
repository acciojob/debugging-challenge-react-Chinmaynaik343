
import React from "react";
import "./../styles/App.css";

function App() {
  return (
    <div className="main-container">
      <h1>JSX Keyword Replacement Challenge</h1>

      <label htmlFor="username">Enter your name:</label>
      <input id="username" type="text" />

      <button onClick={() => alert("Button clicked!")}>
        Click Me
      </button>
    </div>
  );
}

export default App;
