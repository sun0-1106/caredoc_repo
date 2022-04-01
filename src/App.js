import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Address from './pages/Address';
import { useDispatch, useSelector } from 'react-redux';
import {
  useGetStaticDataQuery,
  usePostFromDataMutation,
} from './redux/query/dataQuery';

const Layout = styled.section`
  display: flex;
  justify-content: center;
`;

const PhoneSize = styled.div`
  width: 360px;
  height: 812px;
  border: 1px solid black;
  overflow-x: hidden;
  overflow-y: overlay;
`;

function App() {
  const dispatch = useDispatch();

  const state = useSelector(state => state.formData);
  // static data 입니다.
  const { data, isLoading } = useGetStaticDataQuery();

  // post 요청할때 사용합니다.
  // updatePosts : mutaion 트리거입니다.
  // { isLoading: isUpdating, data: result } 이렇게 사용안하시고 그냥 result만 넣으시고 result.isLoading, result.data 이렇게 사용하셔도 무방합니다.
  const [updatePost, { isLoading: isUpdating, data: result }] =
    usePostFromDataMutation();

  // post 샘플입니다. 최종 제출하기 누르실때 이런식으 포맷을 지켜서 보내주세요
  const onClick = () => {
    updatePost({
      phoneNumber: '12121212',
      workType: '121212',
      schedule: {
        startDate: '12121',
        endDate: '121212',
        visitTime: '121212',
        hour: null,
      },
      address: {
        addressDetail: '121212',
        jibunAddress: '121212',
        liName: null,
        locationCode: '121212',
        roadCode: '121212',
        myundongName: '121212',
        roadAddress: '1212',
        sidoName: '123123',
        sigunguName: '123123',
      },
    });
  };

  return (
    <Layout>
      <PhoneSize>
        <Address state={state} />
      </PhoneSize>
    </Layout>
  );
}

export default App;
