import React, {useState} from "react";

import "./item-add-form.css";

interface ItemAddFormProps {
    onItemAdded: (str: string) => void,
}

export const ItemAddForm: React.FC<ItemAddFormProps> = ({onItemAdded }): JSX.Element => {
    const [label, setLabel] = useState<string>("");

    const onLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setLabel(value);
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onItemAdded(label);
        setLabel("");
    }

    return (
        <form onSubmit={onSubmit} className="item-add-form d-flex">
            <input
                type="text"
                className="form-control"
                onChange={onLabelChange}
                value={label}
                placeholder="What needs to be done"
            />
            <button
                className="btn btn-outline-secondary">
                Add Item
            </button>
        </form>
    );
}