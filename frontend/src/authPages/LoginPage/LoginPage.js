import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader';
import LoginPageInputs from './LoginPageInputs';
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/validators';
import { userLogin } from '../../store/slices/userManagement/userSlice'
// import { openAlertMessage } from '../../store/slices/alertNotification/alertSlice';

import { useNavigate } from 'react-router-dom';

const LoginPage = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = localStorage.getItem('userData') || null;

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [isFormValid,setIsFormValid]=useState(false);

useEffect(()=>{
  setIsFormValid(validateLoginForm({email,password}));
},[email,password,setIsFormValid])

useEffect(() => {
  if (userDetails !== null ) {
    navigate('/dashboard');
  }
});


const handelLogin = ()=>{
  const data = {email,password};
  dispatch(userLogin(data)).then((result) =>{
    if(result.payload?.user){
      navigate('/dashboard');
    }
  })
}
  return  <AuthBox> 
            <LoginPageHeader />
            <LoginPageInputs 
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
            <LoginPageFooter 
            isFormValid={isFormValid}
            handelLogin={handelLogin}
            />
          </AuthBox>
}

export default LoginPage;