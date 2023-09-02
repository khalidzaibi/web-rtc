import React from 'react'
import { styled } from '@mui/system'
import PendingInvitationsListItem from './PendingInvitationsListItem';


const MainContainer  = styled('div')({
 width:'100%',
 height:'22%',
 display:'flex',
 flexDirection:'column',
 alignItems:'center',
 overflow:'auto'
})

const pendingInvitationList = [
  {
    _id:1,
    senderId:{
      username:'Khalid',
      email:'khalid@gmail.com'
    }
  },
  {
    _id:2,
    senderId:{
      username:'Khan',
      email:'khan@gmail.com'
    }
  }
];

const PendingInvitationsList = ()=>{

  return (
  <MainContainer>
    
    {
      pendingInvitationList.map(invitation=>(
        
        <PendingInvitationsListItem 
          key={invitation._id}
          id={invitation._id}
          username={invitation.senderId.username}
          email={invitation.senderId.email}
        />
      ))
    }
  </MainContainer>
  )

}

export default PendingInvitationsList;