import React from 'react';
import styled from 'styled-components';
import AddressSearchInputCopied from './AddressSearchInputCopied';
import SearchModal from './SearchModal';
import { useState, useEffect } from 'react';

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 200px;
  width: 360px;
  height: 550px;
`;
const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 328px;
  height: 48px;
  margin-bottom: 8px;
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 328px;
  height: 48px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Top2 = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 250px;
  height: 48px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const DetailedAddress = styled.input`
  width: 328px;
  height: 48px;
  border: 1px solid #ccc;
  padding: 0;
  border-radius: 5px;
  &::placeholder {
    padding-left: 25px;
    color: #ccc;
  }
`;

const ResearchButton = styled.div`
  width: 39px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  margin-left: 8px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 4px;
  background: #ff8450;
  color: white;
  white-space: nowrap;
  cursor: pointer;
`;

const AddressSearch = ({
  selectedAdr,
  handleSelectedAdr,
  detailAdr,
  handleDetailAdr,
}) => {
  //모달창 열고닫는 상태
  const [isModal, setIsModal] = useState(false);

  const handleModal = boolean => {
    setIsModal(boolean);
  };

  return (
    <Container>
      {selectedAdr.roadAddress ? (
        <TopBox>
          <Top2>
            <AddressSearchInputCopied
              handleModal={handleModal}
              isModal={isModal}
              selectedAdr={selectedAdr}
            />
          </Top2>
          <ResearchButton
            onClick={() => {
              handleSelectedAdr({
                addressDetail: '',
                jibunAddress: '',
                liName: '',
                locationCode: '',
                roadCode: '',
                myundongName: '',
                roadAddress: '',
                sidoName: '',
                sigunguName: '',
              });
              setIsModal(true);
            }}
          >
            재검색
          </ResearchButton>
        </TopBox>
      ) : (
        <Top>
          <AddressSearchInputCopied
            handleModal={handleModal}
            isModal={isModal}
            selectedAdr={selectedAdr}
          />
        </Top>
      )}
      <DetailedAddress
        placeholder='상세 주소를 입력해주세요'
        onChange={handleDetailAdr}
      ></DetailedAddress>
      {isModal ? (
        <SearchModal
          handleModal={handleModal}
          isModal={isModal}
          handleSelectedAdr={handleSelectedAdr}
        />
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default AddressSearch;
