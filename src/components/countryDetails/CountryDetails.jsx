import React from 'react';

const CountryDetails = ({ country, onBackClick, countries, onBorderClick }) => {
    const getCountryName = (code) => {
        const country = countries.find(country => country.cca3 === code);
        return country ? country.name.common : code;
    };

    const getCurrencies = (currencies) => {
        if (!currencies) return 'N/A';
        return Object.values(currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ');
    };

    const getLanguages = (languages) => {
        if (!languages) return 'N/A';
        return Object.values(languages).join(", ");
    };

    return (
        <div>
            <h2>{country.name.common}</h2>
            <p>Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
            <p>Currencies: {getCurrencies(country.currencies)}</p>
            <p>Languages: {getLanguages(country.languages)}</p>
            <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
            <p>
                Bordered by:
                {country.borders ? (
                    country.borders.map((border, index) => (
                        <span key={border}>
              <a href="#" onClick={() => onBorderClick(border)}>
                {getCountryName(border)}
              </a>
                            {index < country.borders.length - 1 ? ', ' : ''}
            </span>
                    ))
                ) : 'None'}
            </p>
            <button
                className={`btn btn-primary mt-3`}
                onClick={onBackClick}
            >
                Back to list
            </button>
        </div>
    );
};

export default CountryDetails;
