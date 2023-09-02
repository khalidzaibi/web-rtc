import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login,register } from '../../../api';

export const initialState = {
	showAlertMessage:false,
  alertMessageContent:null
}
export const openAlertMessage = createAsyncThunk('openAlertMessage', async (data) => {
	return data;
});

export const closeAlertMessage = createAsyncThunk('closeAlertMessage', async () => {
	
})


export const alertSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		
	},
	extraReducers: (builder) => {
		builder
			.addCase(openAlertMessage.fulfilled, (state, action) => {
        return {
            ...state,
            showAlertMessage: true,
            alertMessageContent: action.payload
        }
				
			})
			.addCase(closeAlertMessage.fulfilled, (state, action) => {
        return {
          ...state,
          showAlertMessage: false,
          alertMessageContent:null
        }
				console.log('KKK')
			})
	},
})

export const { } = alertSlice.actions

export default alertSlice.reducer