// src/redux/attemptsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type AttemptsState = number

const initialState: AttemptsState = 3

const attemptsSlice = createSlice({
	name: 'attempts',
	initialState,
	reducers: {
		decrementAttempt: (state) => (state > 0 ? state - 1 : 0),
		resetAttempts: (state, action: PayloadAction<number>) => action.payload
	}
})

export const { decrementAttempt, resetAttempts } = attemptsSlice.actions
export default attemptsSlice.reducer
