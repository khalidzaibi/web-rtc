import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { styled } from '@mui/system'
import SideBar from './SideBar/SideBar'
import FriendsSideBar from './FriendsSideBar/FriendsSideBar'
import Messanger from './Messanger/Messanger'
import AppBar from './AppBar/AppBar'
import { logout } from '../shared/utils/auth'
import { setUserDetails } from '../store/slices/userManagement/userSlice'
import { connectWithSocketServer } from '../realtimeCommunication/socketConnection';


const Wrapper  = styled('div')({
  width:'100%',
  height:'100vh',
  display:'flex'
})

const Dashboard = ()=>{
  const dispatch = useDispatch();

  useEffect(()=>{
    const userDetails = localStorage.getItem('userData');
    if(!userDetails){
      logout();
    }else{
      dispatch(setUserDetails(JSON.parse(userDetails)));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  },[])

  return (
    <Wrapper>
      
      <SideBar />
      <FriendsSideBar />
      <Messanger />
      <AppBar />

    </Wrapper>
  )

}

export default Dashboard;