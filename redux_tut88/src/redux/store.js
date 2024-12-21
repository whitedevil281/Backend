import { configureStore } from '@reduxjs/toolkit'
import  countslice  from '../features/counter/counterslice'

export const store = configureStore({
  reducer: {
    count: countslice,
  },
})