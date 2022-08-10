import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin: null,
  destination: null,
  trevelTimeInformation: null,
}

export const Navslice = createSlice({
  name: 'nav',
  initialState,
  reducers: {

    setOrigin: (state, action) => {
      state.origin = action.payload;
    },

    setDestination: (state, action) => {
      state.destination = action.payload
    },

    setTrevelTimeInformation: (state, action) => {
      state.trevelTimeInformation = action.payload
    },


  }
})


export const { setOrigin, setDestination, setTrevelTimeInformation } = Navslice.actions

export default Navslice.reducer