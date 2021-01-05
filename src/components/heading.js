import React from 'react';
import "./heading.scss";

function Heading({ children }) {
    return <h1 className="xmas--active">{children}</h1>;
}

export default Heading;