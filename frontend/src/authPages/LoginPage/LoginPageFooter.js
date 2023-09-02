import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import RedirectInfo from '../../shared/components/RedirectInfo';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material'

const getFormNotValidMessage = ()=>{
  return 'Enter valid email and password should contain between 6 to 12 character!';
}
const getFormValidMessage =()=>{
  return 'Press to Login';
}

const   LoginPageFooter = ({
 handelLogin,isFormValid
})=>{
  const navigate = useNavigate();

  const handlePushToRegisterPage =()=>{
    navigate('/register');
  }
  return (
    <>
      <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
        <div>
          <CustomPrimaryButton
          label='Login'
          additionalStyles={{marginTop:'30px'}} 
          disabled={!isFormValid}
          onClick={handelLogin}
          />  
        </div>
      </Tooltip>
      <RedirectInfo
        text='Need an account?'
        redirectText='Create an account'
        additionalStyles={{marginTop:'5px'}}
        redirectHandler={handlePushToRegisterPage}
      />
    </>

  )

}

export default  LoginPageFooter;