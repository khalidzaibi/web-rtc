import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  apiClient  from '../../../api'

export const initialState = {
	friends:[],
	pendingFriendsInvitations:[],
	onlineUsers:[]
}

export const sendFriendInvitation = createAsyncThunk('sendFriendInvitation',async(data) =>{
	try{
		return  await apiClient.post('/friend-invitation/invite',data)
  } catch(err){
   	return err;
  }

});

export const getPendingFriendsInvitations = createAsyncThunk('getPendingFriendsInvitations', async (data) => {
	return data;
});
export const getFriends = createAsyncThunk('getFriends', async (data) => {
	return data;
});
export const getOnlineUsers = createAsyncThunk('getOnlineUsers', async (data) => {
	return data;
});


export const friendsSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
	
	},
	extraReducers: (builder) => {
		builder
			.addCase(getPendingFriendsInvitations.fulfilled, (state, action) => {
					state.pendingFriendsInvitations = action.payload.data;
			})
			.addCase(getFriends.fulfilled, (state, action) => {
				state.friends = action.payload.data;
			})
			.addCase(getOnlineUsers.fulfilled, (state, action) => {
				state.onlineUsers = action.payload.data;
			})
	},
})

export const {
	
 } = friendsSlice.actions

export default friendsSlice.reducer