import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const initialState = {
	showAlertMessage:false,
  alertMessageContent:null,
	msgError:false,
	msgSuccess:false
}
export const openAlertMessage = createAsyncThunk('openAlertMessage', async (data) => {
	return data;
});

// export const closeAlertMessage = createAsyncThunk('closeAlertMessage', async () => {
	
// })


export const alertSlice = createSlice({
	name: 'alerSlice',
	initialState,
	reducers: {
		openSuccessMessage: (state, action) => {
			state.showAlertMessage = true
			state.alertMessageContent = action.payload
			state.msgError = false
			state.msgSuccess = true
		},
		openErrorMessage: (state, action) => {
			state.showAlertMessage = true
			state.alertMessageContent = action.payload
			state.msgError = true
			state.msgSuccess = false
		},
		closeAlertMessage:(state) => {
			state.showAlertMessage = false
			state.alertMessageContent = ''
			state.msgError = false
			state.msgSuccess = false
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(openAlertMessage.fulfilled, (state, action) => {
        // return {
        //     ...state,
        //     showAlertMessage: true,
        //     alertMessageContent: action.payload
        // }				
			})
			// .addCase(closeAlertMessage.fulfilled, (state, action) => {
      //   return {
      //     ...state,
      //     showAlertMessage: false,
      //     alertMessageContent:null
      //   }				
			// })
	},
})

export const { 
	openSuccessMessage,
	openErrorMessage,
	closeAlertMessage

 } = alertSlice.actions

export default alertSlice.reducer