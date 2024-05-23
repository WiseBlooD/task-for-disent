import React, {useState} from 'react';

const CountrySearch = ({onSearch}) => {
    const [query, setQuery] = useState('')

    const handleChange = (event) => {
        const value = event.target.value;
        setQuery(value)
        onSearch(value)
    }
    return (
        <div className="mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search for a country..."
                value={query}
                onChange={handleChange}
                />
        </div>
    );
};

export default CountrySearch;