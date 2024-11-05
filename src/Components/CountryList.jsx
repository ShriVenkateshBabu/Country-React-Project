import React, { useEffect, useState } from 'react';
import Search from './Search';

const CountryList = () => {
  let [countries, setCountries] = useState([]);
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(true);
  let [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError('Error: Check fetch and API call statement');
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchCountries();
    }, 2000);
    
  }, []);

  // Filter countries based on search term
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Countries</h1>
      <Search onSearch={setSearchTerm} />
      <ul>
        {filteredCountries.length === 0 ? (
          <li>No countries found</li>
        ) : (
          filteredCountries.map((country,index) => (
            <ol key={country.cca3}>{index+1}.  {country.name.common}</ol>
          ))
        )}
      </ul>
    </div>
  );
};

export default CountryList;
