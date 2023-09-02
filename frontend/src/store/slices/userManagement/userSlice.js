import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { login,register } from '../../../api';
import { openAlertMessage } from '../alertNotification/alertSlice'
import store from '../../../store';

export const initialState = {
	loading: false,
	user: null,
	success:false,
}

export const userLogin = createAsyncThunk('userLogin', async (data) => {
	const response = await login(data);
	if(response.error) {
		store.dispatch(openAlertMessage(response?.err?.response?.data))
	}else{
		localStorage.setItem('userData',JSON.stringify(response?.user));	
	}
		return response;
});

export const userRegister = createAsyncThunk('userRegister', async (data) => {
	const response = await register(data);
	if(response?.error) {
		store.dispatch(openAlertMessage(response?.err?.response?.data))
	}else{
		localStorage.setItem('userData',JSON.stringify(response?.user));	
	}
	return response;
})

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserDetails: (state, action) =>{
			state.user = action.payload
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(userLogin.fulfilled, (state, action) => {
				if(!action.payload?.error){
					state.success = true;
					state.user = action.payload?.user;
				}
			})
			.addCase(userRegister.fulfilled, (state, action) => {
				if(!action.payload?.error){
					state.success = true;
					state.user = action.payload?.user;
				}
			})
	},
})

export const {
	setUserDetails
 } = userSlice.actions

export default userSlice.reducer