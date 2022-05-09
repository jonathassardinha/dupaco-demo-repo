import { configureStore } from '@reduxjs/toolkit'
import { dupacoApi } from '../api'
import wrapperSlice from './wrapper/wrapperSlice'

export const store = configureStore({
  reducer: {
    wrapper: wrapperSlice,
    [dupacoApi.reducerPath]: dupacoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dupacoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
