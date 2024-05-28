import React from 'react'
import { useState } from 'react'
const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleChange = (event) => {
        setQuery(event.target.value);
        onSearch(event.target.value); // Call the passed-in function with query
    };

    return (
        <div className='search-bar'>
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
            />
        </div>
    )
}

export default SearchBar