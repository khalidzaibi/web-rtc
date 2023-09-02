import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Snackbar } from '@mui/material'
import { openAlertMessage,closeAlertMessage } from '../../store/slices/alertNotification/alertSlice';



const   AlertNotification = (props)=>{
  const dispatch = useDispatch()
  const {alertMessageContent,showAlertMessage} = useSelector(state => state.alertSlice);

  return (
    <Snackbar 
      anchorOrigin={{vertical:'bottom', horizontal:'center'}}
      open={showAlertMessage}
      onClose={()=>dispatch(closeAlertMessage())}
      autoHideDuration={3000}
    >
      <Alert security='info'>{alertMessageContent}</Alert>
    </Snackbar>
  )

}

export default  AlertNotification;