import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

export interface AxiosBaseQueryConfig {
  baseUrl: string
}

export type AxiosQueryData = BaseQueryFn<
  {
    url: string
    method?: AxiosRequestConfig['method']
    body?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
  },
  unknown,
  {
    status?: number
    data: string | object
  }
>

function axiosQuery(baseQueryConfig: AxiosBaseQueryConfig) {
  const queryFn: AxiosQueryData = async (axiosConfig) => {
    try {
      const result = await axios({
        ...axiosConfig,
        data: axiosConfig.body,
        url: baseQueryConfig.baseUrl + axiosConfig.url,
      })
      return { data: result.data }
    } catch (axiosError) {
      const err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

  return queryFn
}

export default axiosQuery
