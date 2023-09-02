import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel';

const LoginPageInputs = ({ email,setEmail,password,setPassword })=>{
  return (
   <>
    <InputWithLabel 
      value={email}
      setValue={setEmail}
      label='E-mail'
      type='text'
      placeholder='Email'
    />

    <InputWithLabel 
      value={password}
      setValue={setPassword}
      label='Password'
      type='password'
      placeholder='Password'
    />
   </>


  )

}

export default LoginPageInputs;