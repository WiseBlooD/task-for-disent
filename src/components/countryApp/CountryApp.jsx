import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CountrySearch from '../countrySearch/CountrySearch';
import CountryList from '../countryList/CountryList';
import CountryDetails from '../countryDetails/CountryDetails';

const CountryApp = () => {

    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setCountries(data);
                setFilteredCountries(data);
            })
            .catch(error => setError(error));
    }, []);

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
    };

    const handleSearch = (query) => {
        if (query === '') {
            setFilteredCountries(countries);
        } else {
            const filtered = countries.filter(country =>
                country.name.common.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCountries(filtered);
        }
    };

    const handleBackClick = () => {
        setSelectedCountry(null);
    };

    const handleBorderClick = (borderCode) => {
        const borderCountry = countries.find(country => country.cca3 === borderCode);
        if (borderCountry) {
            setSelectedCountry(borderCountry);
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container">

            {selectedCountry ? (
                <CountryDetails
                    country={selectedCountry}
                    onBackClick={handleBackClick}
                    countries={countries}
                    onBorderClick={handleBorderClick}
                />
            ) : (
                <div>
                    <CountrySearch onSearch={handleSearch} />
                    <CountryList countries={filteredCountries} onCountryClick={handleCountryClick} />
                </div>
            )}
        </div>
    );
};

export default CountryApp;