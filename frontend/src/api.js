import axios from 'axios';
import { logout } from './shared/utils/auth'

const apiClient = axios.create({
  baseURL:'http://localhost:5000/api',
  timeout:1000
});

// Config
const TOKEN_PAYLOAD_KEY = 'Authorization'

/** add Token into request for security */
apiClient.interceptors.request.use((config)=>{
  const userData  = localStorage.getItem('userData');
  if(userData){
    const token = JSON.parse(userData).token;
    config.headers[TOKEN_PAYLOAD_KEY]= `Bearer ${token}`;
  }
  return config;
}, (err)=>{
  return Promise.reject(err);

});

// API respone interceptor
apiClient.interceptors.response.use((response) => {
	return response.data
}, (error) => {
  const responseCode = error?.response?.status;
  if(responseCode) {
    (responseCode===401 || responseCode===403) && logout();
  }
	return Promise.reject(error);
});

/**public routes */
export const login =async(data)=>{
  try{
    return await apiClient.post('/auth/login',data);
  } catch(err){
    return {
      error:true,
      err
    }
  }
}
export const register =async(data)=>{
  try{
    return await apiClient.post('/auth/register',data);
  } catch(err){
    return {
      error:true,
      err
    }
  }
}

/**secure routes */
// export const sendFriendInvitation = async (data) =>{
//   try{
//     return await apiClient.post('')
//   } catch(err){
//     checkResponseCode()
//   }
// }

// const checkResponseCode = (exception) =>{
//   const responseCode = exception?.response?.status;
//   if(responseCode) {
//     (responseCode===401 || responseCode===403) && logout();
//   }
// }

export default apiClient
