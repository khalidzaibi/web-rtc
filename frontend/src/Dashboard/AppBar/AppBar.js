import React from 'react'
import { styled } from '@mui/system'
import DropdownMenu from './DropdownMenu'

const MainContainer  = styled('div')({
  backgroundColor:'#36393f',
  position:'absolute',
  right:'0',
  top:'0',
  height:'48px',
  borderBottom:'1px solid black',
  width:'calc(100% - 326px)',
  display:'flex',
  alignItems:'center',
  justifyContent:'space-between',
  padding:'0 15px'
})

const AppBar = ()=>{
  return (
    <MainContainer>
        <DropdownMenu />
    </MainContainer>
  )

}

export default AppBar;