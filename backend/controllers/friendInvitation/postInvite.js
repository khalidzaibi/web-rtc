const User = require('./../../models/User');
const FriendInvitation = require('./../../models/FriendInvitation');

const postInvite = async (req,resp) =>{
  const { targetEmailAddress } = req.body;
  const { userId, email } = req.user;

  /** check if user invite himself -  that is flush */
  if(email.toLowerCase() === targetEmailAddress.toLowerCase()){
    return resp.status(409).send('You can not become friend of yourself!')
  }

  /** check user is exit into database */
  const targetUser = await User.findOne({
    email : targetEmailAddress.toLowerCase()
  });
  
  if(!targetUser){
    return resp.status(404).send(`Friend ${targetEmailAddress} has not been found `)
  }
  /** check if invitation already sent */

  const invitationAlreadySent = await FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id
  })
  if(invitationAlreadySent){
    return resp.status(409).send('Invitation already sent!')
  }

  /** check if user already friend */
  const userAlreadyFriend = targetUser.friends.find((friendId)=> friendId.toString() === userId.toString())
  if(userAlreadyFriend){
    return resp.status(409).send('Friend already added. check your friend list!')
  }

  /** send friend invitation */
  const newInvitaion = await FriendInvitation.create({
    senderId: userId,
    receiverId: targetUser._id
  })

  return resp.status(201).send({
    data: null,
    message: 'Invitation has been sent'
  })


  return resp.send('controllers invi');
}

module.exports = postInvite