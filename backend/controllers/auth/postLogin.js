const User = require('./../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const postLogin = async (req,resp)=>{
  try{
    const { email,password } = req.body;

    /**check user is exit in DB */
    const user = await User.findOne({email: email.toLowerCase()});

    /**check paswword match or not */
    if(user && (await bcrypt.compare(password, user.password))){
      /**create TOKEN for user */
      const token = jwt.sign({
        userId: user._id,
        email
      },
      process.env.TOKEN_KEY,
      {
        expiresIn:'24h'
      });
      return resp.status(200).json({
        user:{ 
          email: user.email, 
          token,
          username: user.username 
        }
      });
    }

    return resp.status(400).send('Invalid credentials. Please try again');
  } catch(err){
    return resp.status(500).send('Something went wrong. Please try again');
  }
};

 module.exports = postLogin;