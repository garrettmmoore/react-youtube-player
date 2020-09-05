import React, { useState } from 'react';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onInputChange = (term) => {
    setTerm(term);
    props.onSearchTermChange(term);
  };

  return (
    <div className='search-bar'>
      <input
        value={term}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
