// Imports
import React from "react";
import ReactDOM from "react-dom";
// Components
import App from "./App";
// Styles
import "./index.css"; // Compiler will kill me if I remove this

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
