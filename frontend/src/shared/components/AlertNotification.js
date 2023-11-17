import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { Alert, Snackbar } from '@mui/material'
import { closeAlertMessage } from '../../store/slices/alertNotification/alertSlice';



const   AlertNotification = (props)=>{
  const dispatch = useDispatch()
  const { alertMessageContent, showAlertMessage, msgSuccess } = useSelector(state => state.alertSlice);
  
  return (
    <Snackbar 
      anchorOrigin={{vertical:'bottom', horizontal:'center'}}
      open={showAlertMessage}
      onClose={()=>dispatch(closeAlertMessage())}
      autoHideDuration={3000}
    >
      <Alert severity={msgSuccess ? "success":"error"}>{ alertMessageContent }</Alert> 
    </Snackbar>
  )

}

export default  AlertNotification;