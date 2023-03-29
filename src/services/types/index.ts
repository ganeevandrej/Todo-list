
// app
export type ItemTodo = {
    id: number;
    label: string;
    important: boolean;
    done: boolean;
}

export type TypePropName = "important" | "done";

export type TypeFilter = "active" | "done" | "all";

// app-header
export interface AppHeaderProps {
    toDo: number,
    done: number
}

// search-panel
export interface SearchPanelProps {
    onChangeSearch: (str: string) => void
}

// item-status-filter
export interface ItemStatusFilterProps {
    filter: TypeFilter;
    onClickFilter: (str: TypeFilter) => void
}

export type TypeButtons = {
    name: TypeFilter,
    label: string
}

// todoList
export interface  TodoListProps {
    todos: ItemTodo[],
    onDeleted: (id: number) => void,
    onToggleDone: (id: number) => void,
    onToggleImportant: (id: number) => void
}

// todoListItem
export interface TodoListItemProps {
    label: string,
    important: boolean,
    done: boolean,
    onDeleted: () => void,
    onToggleDone: () => void,
    onToggleImportant: () => void
}

// item-add-form
export interface ItemAddFormProps {
    onItemAdded: (str: string) => void,
}