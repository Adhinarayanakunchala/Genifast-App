import React, { useState } from 'react';
import Searchimage from '../../assets/images/Searchimage.png';
import './SearchBar.css';
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search text:', searchText);
  };

  return (
    <>
    <div className='containers'>
      <form onSubmit={handleSubmit}>
        <img src={Searchimage} alt='SearchContent'/>
          <input
            type='text'
            value={searchText}
            onChange={handleInputChange}
            placeholder='Search'
          />
       
      </form>
      </div>
    </>
  );
};

export default SearchBar;
