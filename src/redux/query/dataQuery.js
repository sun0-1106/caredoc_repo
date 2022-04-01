import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataQuery = createApi({
  reducerPath: 'dataQuery',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://caredoc-fe-server.herokuapp.com',
  }),
  endpoints: builder => ({
    getStaticData: builder.query({
      query: () => '/static',
    }),
    postFromData: builder.mutation({
      query: data => {
        return {
          url: `/application`,
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: data,
        };
      },
    }),
  }),
});

export const { useGetStaticDataQuery, usePostFromDataMutation } = dataQuery;
