import React, {useState} from "react";

import "./search-panel.css";

interface SearchPanelProps {
    onChangeSearch: (str: string) => void
}

export const SearchPanel: React.FC<SearchPanelProps> = ({ onChangeSearch }):JSX.Element => {
    const [term, setTerm] = useState<string>("");

    const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setTerm(term);
        onChangeSearch(term);
    }

    return (
        <input type="text"
               className="form-control search-input"
               value={term}
               onChange={ onSearchChange }
               placeholder="type to search" />
    );
}