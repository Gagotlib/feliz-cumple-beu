import { createSlice } from '@reduxjs/toolkit'

type ChallengeStageState = number

const initialState: ChallengeStageState = 0

const challengeStageSlice = createSlice({
	name: 'challengeStage',
	initialState,
	reducers: {
		nextStage: (state) => state + 1,
		resetStage: () => 1
	}
})

export const { nextStage, resetStage } = challengeStageSlice.actions
export default challengeStageSlice.reducer
