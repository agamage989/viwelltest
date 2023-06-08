import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rewardsApi = createApi({
  reducerPath: 'rewardsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dev-py9ho42pr678rnm.api.raw-labs.com/' }),
  endpoints: (builder) => ({
    getAllRewards: builder.query({
      query: () => `rewards`,
    }),
  }),
})

export const {
  useLazyGetAllRewardsQuery,
} = rewardsApi;