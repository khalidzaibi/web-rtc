import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material'

const getFormNotValidMessage = ()=>{
  return 'Enter valid email, username should contain between 3 to 12 character! and password should contain between 6 to 12 character!';
}
const getFormValidMessage =()=>{
  return 'Press to Register';
}

const   RegisterPageFooter = ({
 handelRegister,isFormValid
})=>{
  const navigate = useNavigate();

  const handlePushToLoginPage =()=>{
    navigate('/login');
  }
  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          <CustomPrimaryButton
          label='Register'
          additionalStyles={{marginTop:'30px'}} 
          disabled={!isFormValid}
          onClick={handelRegister}
          />  
        </div>
      </Tooltip>
      <RedirectInfo
        text=''
        redirectText='Already have an account? '
        additionalStyles={{marginTop:'5px'}}
        redirectHandler={handlePushToLoginPage}
      />
    </>

  )

}

export default  RegisterPageFooter;