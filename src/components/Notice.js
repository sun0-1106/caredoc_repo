import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  width: 328px;
  display: flex;
  margin-top: 24px;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #5b5555;
`;

const Notice = ({ text }) => {
  return <Text>{text}</Text>;
};

export default Notice;
