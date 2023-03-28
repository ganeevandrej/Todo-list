import React from "react";

import { TodoListItem } from "../todo-list-item";

import { ItemTodo } from "../app/App";

import "./todo-list.css";

export interface  TodoListProps {
    todos: ItemTodo[]
}

export const TodoList: React.FC<TodoListProps> = ( { todos } ):JSX.Element => {
    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...itemProps } />
            </li>
        );
    })

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
}