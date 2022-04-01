import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 328px;
  display: flex;
  align-items: center;
  margin-top: 32px;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #5b5555;
`;
const PageNum = styled.span`
  margin-left: 8px;
  margin-right: 2px;
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #ff8450;
  font-size: 12px;
`;
const TotalNum = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #d3d2d2;
  font-size: 12px;
`;

const Category = ({ text, pageNum }) => {
  return (
    <Container>
      {text}
      <PageNum>{pageNum}</PageNum>
      <TotalNum>/4</TotalNum>
    </Container>
  );
};

export default Category;
