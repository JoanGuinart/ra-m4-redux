import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'joan',
  surnames: {
    first: 'guinart',
    second: 'casas',
  },
}

const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload
    },
    updateFirstSurname(state, action) {
      state.surnames.first = action.payload
    },
    updateSecondSurname(state, action) {
      state.surnames.second = action.payload
    },
  },
})

export const { updateName, updateFirstSurname, updateSecondSurname } = userSlice.actions
export default userSlice.reducer
