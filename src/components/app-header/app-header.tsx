import React from "react";

import { AppHeaderProps } from "../../services/types";

import "./app-header.css";

export const AppHeader: React.FC<AppHeaderProps> = ({ toDo, done }):JSX.Element => {
    return (
        <div className="app-header d-flex">
            <h1>Todo List</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    );
}