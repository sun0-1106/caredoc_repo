import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 344px;
  height: 48px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MagnifyIcon = styled(SearchIcon)`
  margin-left: 10px;
  color: #ccc;
  &:hover {
    cursor: pointer;
  }
`;

const Search = styled.input`
  width: 250px;
  height: 38px;
  border: none;
  &::placeholder {
    color: #ccc;
  }
  &:focus {
    outline: none;
  }
`;

const AddressSearchInput = ({ handleSearched, getAddress }) => {
  return (
    <SearchBox>
      <MagnifyIcon />
      <Search
        placeholder='주소 또는 건물명으로 검색'
        onKeyDown={e => {
          if (window.event.keyCode == 13) {
            getAddress(e);
            handleSearched();
          }
        }}
      />
    </SearchBox>
  );
};

export default AddressSearchInput;
