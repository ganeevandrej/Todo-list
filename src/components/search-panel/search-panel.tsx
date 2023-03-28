import React from "react";

import "./search-panel.css";

export const SearchPanel: React.FC = ():JSX.Element => {
    return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search" />
    );
}