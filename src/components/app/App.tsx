import React, { useState } from 'react';

import { AppHeader } from "../app-header";
import { SearchPanel } from "../search-panel";
import { TodoList } from "../todo-list";
import { ItemStatusFilter } from "../item-status-filter";
import { ItemAddForm } from "../item-add-form";
import { EmptyTodoList } from "../empty-todo-list";

import { ItemTodo, TypeFilter } from "../../services/types";
import { toggleProperty } from "../../services/utils";

import './App.css';

export const App: React.FC = (): JSX.Element => {
    const [todos, setTodos] = useState<ItemTodo[]>([]);
    const [maxId, setMaxId] = useState<number>(1);
    const [term, setTerm] = useState<string>("");
    const [filter, setFilter] = useState<TypeFilter>("all");

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

    const search = (items: ItemTodo[], term: string): ItemTodo[] => {
        if(term.length === 0) {
            return items;
        }

        return items.filter((item) => item.label
            .toLowerCase()
            .indexOf(term.toLowerCase()) > -1 );
    }

    const itemsFilter = (items: ItemTodo[], filter: string): ItemTodo[] => {
        switch (filter) {
            case "all":
                return items;
            case "active":
                return items.filter(({done}) => !done );
            case "done":
                return items.filter(({done}) => done );
            default:
                return items;
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
    const visibleItems = search(itemsFilter(todos, filter), term);

    const todolist = <TodoList
        onDeleted={ deleteItem }
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
        todos={ visibleItems }
    />

    const isTodoList = todos.length > 0 ? todolist : <EmptyTodoList />

    return (
        <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount}/>
            <div className="top-panel d-flex">
                <SearchPanel onChangeSearch={(term: string) => setTerm(term)} />
                <ItemStatusFilter filter={filter} onClickFilter={(filter) => setFilter(filter)} />
            </div>

            { isTodoList }

            <ItemAddForm onItemAdded={ addItem } />
        </div>
    );
}