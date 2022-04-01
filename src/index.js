// Imports
import React from "react";
import ReactDOM from "react-dom";
// Components
import TitleSegment from "./components/TitleSegment";
import SVGSelector from "./components/SVGSelector";
import Viewer from "./components/Viewer";
import SVGUploadForm from "./components/SVGUploadForm";
// Styles
import "./index.css"; // Compiler will kill me if I remove this

ReactDOM.render(
    <React.StrictMode>
        <TitleSegment />
        <SVGSelector />
        <Viewer />
        <SVGUploadForm />
    </React.StrictMode>,
    document.getElementById("root")
);
