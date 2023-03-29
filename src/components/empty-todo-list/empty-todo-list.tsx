import React from "react";

import "./empty-todo-list.css";

export const EmptyTodoList: React.FC = (): JSX.Element => {
    return <span className="empty-todo-list">Write your first to-do list</span>
}