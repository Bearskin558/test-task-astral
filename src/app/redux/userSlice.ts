import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface UserSlice {
	isAuthentificated: boolean
}

const initialState: UserSlice = {
	isAuthentificated: false,
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setIsAuthentificated(state, action: PayloadAction<boolean>) {
			state.isAuthentificated = action.payload
		},
	},
})

export const { setIsAuthentificated } = userSlice.actions

export default userSlice.reducer
