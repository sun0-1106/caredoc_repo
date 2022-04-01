import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  useGetStaticDataQuery,
  usePostFromDataMutation,
} from '../redux/query/dataQuery';

const Container = styled.section`
  width: 360px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const Back = styled.div`
  width: 66px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;
const Next = styled.div`
  width: 278px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: ${({ completed }) => (completed ? 'white' : '#b6b3b3')};
  background: ${({ completed }) => (completed ? '#ff8551' : '#e2e2e2')};
  border-radius: 4px;
  cursor: pointer;
`;

const Footer = ({ back, next, completed, inputContent, submit }) => {
  // const navigate = useNavigate();
  // const state = useSelector(state => state.formData);

  // const [updatePost, { isLoading: isUpdating, data: result }] =
  //   usePostFromDataMutation();

  // const [isReady, setIsReady] = useState(false);

  // const gotoBack = () => {
  //   navigate(`/${back}`);
  // };
  // const gotoNext = () => {
  //   navigate(`/${next}`);
  // };
  // const cannotGo = () => {
  //   alert('입력 혹은 선택을 완료해주세요.');
  //   // 다음페이지 못넘어감 alert 뜸
  // };
  // const inputAndGo = () => {
  //   inputContent(); //dispatch를 통해 store에 입력하고
  //   gotoNext(); // 다음페이지로 넘어감
  // };
  // const postAndGo = () => {
  //   putInFor(); // post하며
  //   gotoNext(); // 다음페이지로 넘어감
  // };
  // const checkIsReady = () => {
  //   if (submit === 'true') {
  //     setIsReady(true);
  //   }
  //};
  // Footer가 실제 post하는 시점인지 아닌지 가르는 핸들러.

  //const putInFor = () => {
  // updatePost({
  //   phoneNumber: state.phoneNumber,
  //   workType: state.workType,
  //   schedule: {
  //     startDate: state.schedule.startDate,
  //     endDate: state.schedule.endDate,
  //     visitTime: state.schedule.visitTime,
  //     hour: state.schedule.hour,
  //   },
  //   address: {
  //     addressDetail: state.address.addressDetail,
  //     jibunAddress: state.address.jibunAddress,
  //     liName: state.address.liName,
  //     locationCode: state.address.locationCode,
  //     roadCode: state.address.roadCode,
  //     myundongName: state.address.myundongName,
  //     roadAddress: state.address.roadAddress,
  //     sidoName: state.address.sidoName,
  //     sigunguName: state.address.sigunguName,
  //   },
  // });
  //};
  // post 하는 핸들러

  // useEffect(() => {
  //   checkIsReady();
  // }, []);

  return (
    <Container>
      <Back>이전</Back>
      <Next>다음</Next>
    </Container>
  );
};

export default Footer;
