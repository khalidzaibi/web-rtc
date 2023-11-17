import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  apiClient  from '../../../api'

export const initialState = {
	loading: false,
	user: null,
	success:false,
}

export const userLogin = createAsyncThunk('userLogin', async (data) => {
	try{
		const response = await apiClient.post('/auth/login',data);
		localStorage.setItem('userData',JSON.stringify(response?.user));	
		return response;
	} catch(err){
		return err
	}
});

export const userRegister = createAsyncThunk('userRegister', async (data) => {	
	try{
		const response = await apiClient.post('/auth/register',data);
		localStorage.setItem('userData',JSON.stringify(response?.user));
		return response;
	} catch(err){		
		return err
	}
	// if(response?.error) {
	// 	store.dispatch(openAlertMessage(response?.err?.response?.data))
	// }else{
	// 	localStorage.setItem('userData',JSON.stringify(response?.user));	
	// }
	// return response;
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
					state.success = true;
					state.user = action.payload?.user;				
			})
			.addCase(userRegister.fulfilled, (state, action) => {				
					state.success = true;
					state.user = action.payload?.user;				
			})
	},
})

export const {
	setUserDetails
 } = userSlice.actions

export default userSlice.reducer