import React from 'react';

const CountryList = ({countries, onCountryClick}) => {
    return (
        <ul className="list-group">
            {countries.map(country => (
                <li
                    key={country.cca3}
                    className="list-group-item"
                    onClick={() => onCountryClick(country)}
                >
                    {country.name.common}
                </li>
            ))}
        </ul>
    );
};

export default CountryList;