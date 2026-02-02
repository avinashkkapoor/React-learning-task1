import React from "react";
import "./SearchForm.css";

export const SearchForm = ({ initialQuery, onSearch }) => {
    const [query, setQuery] = React.useState(initialQuery || "");

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = () => {
        if (typeof onSearch === "function") {
            onSearch(query);
        }
    };
    return(
        <div className="search-form">
            <input 
                placeholder="search-text"
                type="text" 
                value={query} 
                onChange={handleChange} 
                onKeyDown={handleKeyDown} 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );

};