import React from 'react';

const Search = ({ onSearch }) => {
  // Define handlesearch as an arrow function
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter country name to search"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
