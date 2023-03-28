import React from "react";

import { TodoListItem } from "../todo-list-item";

import { ItemTodo } from "../app/App";

import "./todo-list.css";

export interface  TodoListProps {
    todos: ItemTodo[],
    onDeleted: (id: number) => void,
    onToggleDone: (id: number) => void,
    onToggleImportant: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = (
    { todos, onDeleted, onToggleDone, onToggleImportant } ):JSX.Element => {


    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    onToggleDone={() => onToggleDone(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onDeleted={ () => onDeleted(id) }
                    {...itemProps } />
            </li>
        );
    })

    return (
        <ul className="list-group todo-list">
            { elements }
        </ul>
    );
}