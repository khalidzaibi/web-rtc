import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { validateEmail } from '../../shared/utils/validators'
import { Dialog,DialogActions,DialogContent,DialogContentText, DialogTitle, Typography } from '@mui/material';
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { sendFriendInvitation } from '../../store/slices/friends/friendsSlice'


const AddFriendDialog = ({
  isDialogOpen,
  closeDialogHandler,
  // sendFriendInvitation = ()=>{}
})=>{

  const dispatch = useDispatch();
  const [email,setEmail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  const handleSendInvitation = () => {
    /**send friend request logic */
    dispatch(sendFriendInvitation({ targetEmailAddress : email }))
  }

  const handleCloseDialog = ()=>{
    closeDialogHandler();
    setEmail('');
  }

  useEffect(()=>{
    setIsFormValid(validateEmail(email));
  },[email,setIsFormValid])

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}> 
        <DialogTitle>
          <Typography> Invite a Friend </Typography>
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
              <Typography>Enter e-mail address of friend which you would like to invite</Typography>
            </DialogContentText>
            <InputWithLabel
              label='Email'
              type='text'
              value={email}
              setValue={setEmail}
              placeholder='Enter Email'
            />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton 
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label='Send'
            additionalStyles={{
             margin:'0 15px 10px 15px'
            }}
          />
        </DialogActions>
      </Dialog>
   </div>
  )

}

export default AddFriendDialog;