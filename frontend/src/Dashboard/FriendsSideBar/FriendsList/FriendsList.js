import React from 'react'
import { styled } from '@mui/system'
import FriendsListItem from './FriendsListItem'

const MainContainer  = styled('div')({
 flexGrow:1,
 width:'100%'
})

const dummyFriendList =[
  {
    id:1,
    username:'Khalid',
    isOnline:true
  },
  {
    id:2,
    username:'Pakistan',
    isOnline:false
  },
  {
    id:3,
    username:'Ali',
    isOnline:false
  },
]


const FriendsList = ()=>{

  return (
    <MainContainer>
      {dummyFriendList.map((f)=>{
        return (<FriendsListItem 
          username={f.username}
          id={f.id}
          key={f.id}
          isOnline={f.isOnline}
        />)
          
      })}
    </MainContainer>
  )

}

export default FriendsList;