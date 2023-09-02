export const validateLoginForm=({email,password})=>{
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  return isEmailValid && isPasswordValid;
}
export const validateRegisterForm = ({username,email,password})=>{
  return (validateEmail(email) && validatePassword(password) && validateUsername(username));
}


const validatePassword =(password)=>{
  return password.length > 5 && password.length < 13;
}
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateUsername = (username)=>{
  return username.length > 2 && username.length < 13;
}