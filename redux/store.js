import { configureStore } from '@reduxjs/toolkit';
import Navslice from './Navslice'

export const store = configureStore({
  reducer: {
    nav: Navslice
  }
})