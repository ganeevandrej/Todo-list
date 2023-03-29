import { ItemTodo, TypePropName } from "../types";

// app
export const toggleProperty = (arr: ItemTodo[], id: number, propName: TypePropName) => {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];

    const newItem = {
        ...oldItem,
        [propName]: !oldItem[propName],
    }

    return [...arr.slice(0, idx), newItem , ...arr.slice(idx + 1 )]
}