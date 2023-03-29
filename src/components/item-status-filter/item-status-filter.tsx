import React from "react";

import { TypeFilter } from "../app/App";

import './item-status-filter.css';

interface ItemStatusFilterProps {
    filter: TypeFilter;
    onClickFilter: (str: TypeFilter) => void
}

type TypeButtons = {
    name: TypeFilter,
    label: string
}

export const ItemStatusFilter: React.FC<ItemStatusFilterProps> = ({ onClickFilter, filter }):JSX.Element => {
    const buttons: TypeButtons[] = [
        { name: "all", label: "All" },
        { name: "active", label: "Active" },
        { name: "done", label: "Done" }
    ]

    const renderButtons = buttons.map(({name, label}) => {
        const isActive = filter === name;
        const clazz = isActive ? "btn-info" : "btn-outline-secondary";
        return (
            <button
                key={name}
                type="button"
                className={`btn ${clazz}`}
                onClick={() => onClickFilter(name)}
            >
                { label }
            </button>
        );
    });

    return (
        <div className="btn-group">
            { renderButtons }
        </div>
    );
}