import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const addrQuery = createApi({
  reducerPath: 'address',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://www.juso.go.kr',
  }),
  endpoints: builder => ({
    getAddrData: builder.query({
      query: keyword => ({
        url: `/addrlink/addrLinkApi.do?confmKey=devU01TX0FVVEgyMDIyMDEyODIzMjIyNjExMjE5NjE=&resultType=json&keyword=${keyword}`,
        transformResponse: response => JSON.parse(response),
      }),
    }),
  }),
});

export const { useGetAddrDataQuery } = addrQuery;
