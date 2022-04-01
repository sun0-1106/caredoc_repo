import React from 'react';
import styled from 'styled-components';
import { Container } from '../components/Layout';
import { SubContainer } from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../components/Category';
import Notice from '../components/Notice';
import AddressSearch from '../components/AddressSearch';
import { useDispatch } from 'react-redux';
import { updateFormData } from '../redux/formData/formDataSlice';
import { useState, useEffect } from 'react';

const Address = () => {
  const dispatch = useDispatch();
  //선택된 주소
  const [selectedAdr, setSelectedAdr] = useState({
    roadAddress: '',
    jibunAddress: '',
  });
  //상세 주소
  const [detailAdr, setDetailAdr] = useState('');
  //다음 버튼(다음 페이지 이동) 상태
  const [completed, setCompleted] = useState(true);

  useEffect(() => {}, [detailAdr]);

  const handleSelectedAdr = (
    detailAdr,
    jibun,
    li,
    locCode,
    roadCode,
    md,
    roadAd,
    sido,
    sigun,
  ) => {
    setSelectedAdr({
      addressDetail: detailAdr,
      jibunAddress: jibun,
      liName: li,
      locationCode: locCode,
      roadCode: roadCode,
      myundongName: md,
      roadAddress: roadAd,
      sidoName: sido,
      sigunguName: sigun,
    });
  };

  const handleDetailAdr = e => {
    setDetailAdr(e.target.value);
  };

  //입력한 내용을 저장시키는 핸들러
  const inputContent = () => {
    dispatch(
      updateFormData({
        address: {
          addressDetail: detailAdr,
          jibunAddress: selectedAdr.jibunAddress,
          liName: selectedAdr.liName,
          locationCode: selectedAdr.locationCode,
          roadCode: selectedAdr.roadCode,
          myundongName: selectedAdr.myundongName,
          roadAddress: selectedAdr.roadAddress,
          sidoName: selectedAdr.sidoName,
          sigunguName: selectedAdr.sigunguName,
        },
      }),
    );
  };

  return (
    <Container>
      <Header back='schedule' />
      <SubContainer>
        <Category text='돌봄 주소' pageNum='3'></Category>
        <Notice text='돌봄 주소를 입력해주세요' />
        <AddressSearch
          selectedAdr={selectedAdr}
          handleSelectedAdr={handleSelectedAdr}
          detailAdr={detailAdr}
          handleDetailAdr={handleDetailAdr}
        />
      </SubContainer>
      {selectedAdr.roadAddress && detailAdr ? (
        <Footer
          back='schedule'
          next='confirmation'
          // completed={completed}
          // inputContent={inputContent}
        />
      ) : (
        <Footer
          back='schedule'
          next='confirmation'
          // completed=''
          // inputContent={inputContent}
        />
      )}
    </Container>
  );
};

export default Address;
