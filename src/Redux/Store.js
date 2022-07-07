import { configureStore } from '@reduxjs/toolkit'
import shoppingReducer from '../features/shoppingSlice/shoppingSlice'

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
})