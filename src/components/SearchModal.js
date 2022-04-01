import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import AddressSearchInput from './AddressSearchInput';
import AddressBlock from './AddressBlock';
import { useState, useEffect } from 'react';
import { useGetAddrDataQuery } from '../redux/query/addrQuery';

const Container = styled.div`
  position: absolute;
  top: -200px;
  width: 360px;
  height: 812px;
  background-color: #fff;
  border: 1px solid #ccc;
`;

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 755px;
`;

const Title = styled.div`
  position: absolute;
  width: 20%;
  height: 56px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  line-height: 56px;
  font-weight: bold;
`;

const XIcon = styled(CloseIcon)`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 118px;
`;

const Text = styled.div`
  width: 257px;
  height: 54px;
  color: #b6b3b3;
  font-size: 12px;
  text-align: center;
`;

const NoticeBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 580px;
  font-size: 12px;
  background-color: #f6f6f6;
`;

const Notice = styled.p`
  width: 328px;
  height: 90px;
  color: #b6b3b3;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 440px;
  overflow: auto;
`;

const NoticeBox2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 260px;
  font-size: 12px;
  background-color: #f6f6f6;
`;

const SearchModal = ({ handleModal, handleSelectedAdr }) => {
  const [isSearched, setIsSearched] = useState(false);
  const [keyword, setKeyword] = useState('');
  const { data, isLoading, isFetching, isError, error } =
    useGetAddrDataQuery(keyword);

  const handleSearched = () => {
    setIsSearched(true);
  };

  const getAddress = e => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    handleSearched();
  }, [isSearched]);

  if (isLoading || isFetching) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    <div>{error}</div>;
  }

  console.log(data);

  return (
    <Container>
      <Header>
        <Title>주소검색</Title>
        <XIcon onClick={() => handleModal(false)} />
      </Header>
      <Body>
        <AddressSearchInput
          handleSearched={handleSearched}
          getAddress={getAddress}
        />
        {!isSearched ? (
          <>
            <Box>
              <Text>
                찾으시려는 도로명 주소의 건물번호 또는 시설명까지
                <br /> 상세히 입력 후 검색해주세요.
                <br /> 예) 중앙동, 불정로432번길
              </Text>
            </Box>
            <NoticeBox>
              <Notice>
                · 기본주소 선택 후 상세주소를 반드시 입력해주세요. 상세주소가
                없는 경우 주소지 특징을 입력해주세요. <br /> · 2016년 8월
                1일부터는 5가지 우편번호 사용이 의무화됩니다. <br /> 도로명주소
                + 5자리 우편번호로 등록하셔서 서비스 이용에 불편함이 없도록
                하시길 바랍니다.
              </Notice>
            </NoticeBox>
          </>
        ) : (
          <>
            <Box2>
              {['E0005', 'E0006'].includes(data.results.common.errorCode) ? (
                <div>{data.results.common.errorMessage}</div>
              ) : data.results.juso.length === 0 ? (
                <div>검색 결과가 없습니다.</div>
              ) : (
                data.results.juso?.map(el => {
                  return (
                    <AddressBlock
                      el={el}
                      key={el.admCd + el.bdMgtSn}
                      onClick={() => {
                        handleSelectedAdr(
                          '',
                          el.jibunAddr,
                          el.liNm,
                          el.lnbrMnnm,
                          el.lnbrSlno,
                          el.emdNm,
                          el.roadAddr,
                          el.siNm,
                          el.sggNm,
                        );
                        handleModal(false);
                      }}
                    />
                  );
                })
              )}
            </Box2>
            <NoticeBox2>
              <Notice>
                · 기본주소 선택 후 상세주소를 반드시 입력해주세요. 상세주소가
                없는 경우 주소지 특징을 입력해주세요. <br /> · 2016년 8월
                1일부터는 5가지 우편번호 사용이 의무화됩니다. <br /> 도로명주소
                + 5자리 우편번호로 등록하셔서 서비스 이용에 불편함이 없도록
                하시길 바랍니다.
              </Notice>
            </NoticeBox2>
          </>
        )}
      </Body>
    </Container>
  );
};

export default SearchModal;
