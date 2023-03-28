import React, { useState } from 'react';

import { AppHeader } from "../app-header";
import { SearchPanel } from "../search-panel";
import { TodoList } from "../todo-list";
import { ItemStatusFilter } from "../item-status-filter";
import { ItemAddForm } from "../item-add-form";

import './App.css';

export type ItemTodo = {
    id: number;
    label: string;
    important: boolean;
    done: boolean;
}

type propName = "important" | "done";

export const App: React.FC = (): JSX.Element => {
    const [todos, setTodos] = useState<ItemTodo[]>([]);
    const [maxId, setMaxId] = useState<number>(1);

    const toggleProperty = (arr: ItemTodo[], id: number, propName: propName) => {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];

        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName],
        }

        return [...arr.slice(0, idx), newItem , ...arr.slice(idx + 1 )]
    }

    const deleteItem = (id: number) => {
        setTodos(( todos ) => {
            const idx = todos.findIndex((el) => el.id === id);
            return [...todos.slice(0, idx), ...todos.slice(idx + 1 )];
        })
    }

    const addItem = (str: string) => {
        setMaxId((c) => c + 1);

        setTodos((todos) => {
            return [...todos, createTodoItem(str)];
        });
    }

    const createTodoItem = (label: string) => {
        return {
            label,
            id: maxId,
            important: false,
            done: false
        }
    }

    const onToggleDone = (id: number) => {
        setTodos(( todos ) => {
            return toggleProperty(todos, id, "done");
        })
    }

    const onToggleImportant = (id: number) => {
        setTodos(( todos ) => {
            return toggleProperty(todos, id, "important");
        })
    }

    const doneCount = todos.filter(({ done }) => done).length;
    const todoCount = todos.length - doneCount;

    return (
        <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>

            <TodoList
                onDeleted={ deleteItem }
                onToggleDone={onToggleDone}
                onToggleImportant={onToggleImportant}
                todos={ todos }
            />
            <ItemAddForm onItemAdded={ addItem } />
        </div>
    );
}
