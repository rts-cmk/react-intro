import React from "react";
import { render } from "react-dom";
import Siteheader from "./components/Siteheader";

function App() {
    return (
        <Siteheader/>
    );
};

render(<App/>, document.getElementById("root"));