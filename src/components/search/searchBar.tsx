import React from 'react';
import Search from 'antd/es/input/Search';

interface SearchProps {
  onSearch: (value: any) => void;
  // other properties...
}

const SearchBar = (props: SearchProps) => {
  const { onSearch } = props;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(value);
    onSearch(value);
  };

  return (
    <div>
      <Search
        placeholder="search for country"
        allowClear
        onChange={handleSearch}
        style={{ width: 400 }}
      />
    </div>
  );
};

export default SearchBar;