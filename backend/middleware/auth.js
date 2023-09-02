const jwt = require('jsonwebtoken');

const config = process.env;
const verifyToken = (req,resp,next)=>{
  let token = req.body.token || req.query.token || req.headers['authorization'];

  if(!token){
    return resp.status(403).send('you are not authorized');
  }

  try{
    token = token.replace(/^Bearer\s+/,'');
    const decoded = jwt.verify(token, config.TOKEN_KEY);

    req.user = decoded;

  } catch(err){
    return resp.status(401).send('Invalid Token');
  }

  next();
}

module.exports = verifyToken;