import React,{ useState ,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import AuthBox from '../../shared/components/AuthBox';
import { Typography } from '@mui/material';
import RegisterPageInputs from './RegisterPageInputs';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import { userRegister } from '../../store/slices/userManagement/userSlice'
import { useNavigate } from 'react-router-dom';
// import { openAlertMessage } from '../../store/slices/alertNotification/alertSlice';


const RegisterPage = ()=>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = localStorage.getItem('userData') || null;

  const [email,setEmail]=useState('');
  const [username,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const [isFormValid,setIsFormValid]=useState(false);

  useEffect(()=>{
    setIsFormValid(validateRegisterForm({username,email,password}));
  },[username,email,password,setIsFormValid])

  useEffect(() => {
    if (userDetails !== null ) {
      navigate('/dashboard');
    }
  });

  const handelRegister =()=>{
    const data = {email,username,password};
    dispatch(userRegister(data)).then((result) =>{
      if(result.payload?.user){
        navigate('/dashboard');
      }
    })
  }
  return (
    <AuthBox>
       <Typography variant='h5' sx={{color:'white'}}>
        Create an account
       </Typography>
      <Typography sx={{ color:'#b9bbbe'}}>You can enjoy real time video chat and messages!</Typography>

       <RegisterPageInputs 
        email={email}
        setEmail={setEmail}
        username={username}
        setUserName={setUserName}
        password={password}
        setPassword={setPassword}
       />

       <RegisterPageFooter 
        handelRegister={handelRegister}
        isFormValid={isFormValid}
       />
    </AuthBox>
  )

}

export default RegisterPage;