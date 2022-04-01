// Imports
import React from "react";
// Components
import TitleSegment from "./components/TitleSegment";
import SVGSelector from "./components/SVGSelector";
import Viewer from "./components/Viewer";
import SVGUploadForm from "./components/SVGUploadForm";

export default function App() {
    return (
        <>
            <TitleSegment />
            <SVGSelector />
            <Viewer />
            <SVGUploadForm />
        </>
    );
}
