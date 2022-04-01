import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  max-height: 116px;
  border-bottom: 1px solid #f6f6f6;
  &:hover {
    background: #f6f6f6;
    cursor: pointer;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 270px;
  height: 80px;
  max-height: 116px;
  margin-left: 16px;
`;

const LeftInside = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
  /* height: 47px;
  max-height: 84px; */
`;

const Top = styled.div`
  font-size: 14px;
  font-weight: 700;
  width: 270px;
  color: #5b5555;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  width: 270spx;
  white-space: nowrap;
  height: 18px;
  max-height: 36px;
  font-size: 12px;
  color: #7d7878;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 20px;
  background-color: #f6f6f6;
  margin-right: 12px;
  border-radius: 10px;
  font-weight: 700;
  font-size: 10px;
  color: #b6b3b3;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 74px;
  height: 20px;
  font-size: 14px;
  font-weight: 700;
  color: #5b5555;
`;

const Address = styled.p`
  display: block;
  word-break: break-all;
  white-space: normal;
`;

const AddressBlock = ({ el, onClick }) => {
  return (
    <Container onClick={onClick}>
      <Left>
        <LeftInside>
          <Top>{el.roadAddr}</Top>
          <Bottom>
            <Icon>지번</Icon>
            <Address>{el.jibunAddr}</Address>
          </Bottom>
        </LeftInside>
      </Left>
      <Right>{el.zipNo}</Right>
    </Container>
  );
};

export default AddressBlock;
