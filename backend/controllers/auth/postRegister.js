const User = require('./../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const postRegister = async (req,resp)=>{
  try{
    const {username,email,password} = req.body;

    //check if user already exist
    const userExist =await User.exists({email:email.toLowerCase()});
    if(userExist) 
      return resp.status(409).send('E-mail already in use');

    //ecrypt password
    const encryptPassword = await bcrypt.hash(password,10);
    /**create User */
    const user = await User.create({
      username,
      email:email.toLowerCase(),
      password:encryptPassword
    });

    /**create TOKEN for user */
    const token = jwt.sign({
      userId: user._id,
      email
    },
    process.env.TOKEN_KEY,
    {
      expiresIn:'24h'
    });
    resp.status(200).json({
      user:{ email: user.email, token,username: user.username }
    });
  }catch(err){
    resp.status(500).send('Error occured. Try again');
  }
};

module.exports = postRegister;