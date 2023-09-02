import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel';

const RegisterPageInputs = ({ email,setEmail,password,setPassword,username,setUserName })=>{
  return (
   <>
    <InputWithLabel 
      value={username}
      setValue={setUserName}
      label='User Name'
      type='text'
      placeholder='User Name'
    />
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

export default RegisterPageInputs;