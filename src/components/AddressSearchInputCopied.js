import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 249px;
  height: 48px;
`;

const SearchBoxS = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 193px;
  height: 20px;
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

const SearchS = styled.input`
  width: 193px;
  height: 20px;
  border: 0;
  background-color: #fff;
  &::placeholder {
    color: #ccc;
  }
  &:focus {
    outline: none;
  }
`;

const AddressSearchInputCopied = ({ handleModal, isModal, selectedAdr }) => {
  const handleClick = () => {
    if (!isModal) {
      //모달이 안켜졌다면
      handleModal(true);
    } else {
      return;
    }
  };
  return (
    <>
      {selectedAdr.roadAddress ? (
        <SearchBoxS>
          <MagnifyIcon />
          <SearchS
            disabled='disabled'
            value={selectedAdr.roadAddress}
          ></SearchS>
        </SearchBoxS>
      ) : (
        <SearchBox>
          <MagnifyIcon />
          <Search
            placeholder='주소 또는 건물명으로 검색'
            onClick={() => {
              handleClick();
            }}
          />
        </SearchBox>
      )}
    </>
  );
};

export default AddressSearchInputCopied;
