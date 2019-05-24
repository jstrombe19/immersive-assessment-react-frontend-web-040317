import React from 'react';

const Search = ({ updateSearchState }) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        onChange={updateSearchState}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search
