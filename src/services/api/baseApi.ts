import { createApi } from '@reduxjs/toolkit/query/react'
import axiosQuery from './axiosBaseQuery'

export const baseApi = createApi({
  baseQuery: axiosQuery({
    baseUrl: import.meta.env.VITE_DUPACO_API_URL,
  }),
  endpoints: () => ({}),
})
