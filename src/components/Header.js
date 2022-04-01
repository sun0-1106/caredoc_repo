import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.section`
  width: 360px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: #5b5555;
`;

const Header = ({ back }) => {
  const navigate = useNavigate();

  const gotoBack = () => {
    navigate(`/${back}`);
  };

  return (
    <Container>
      <Text>돌보미 신청하기</Text>
    </Container>
  );
};

export default Header;
