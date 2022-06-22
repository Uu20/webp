import React  from 'react';
import tmpPicture from './20220225004.jpg';
import './Post.css'
import { Avatar } from '@mui/material';

function Post({ username,caption,imageUrl}) {
  return (
    <div className='post'>
        <div className='postHeader'>
        <Avatar 
            className='postAvatar'
            alt=""
            src="/static/image/avatar/1.jpg"
        > 
        </Avatar>
        <h4>{username}</h4>
        </div>
        
        {/* Header avatar + name */}

        <img  className="postImage" src={imageUrl} alt=""></img>
        {/* image */}

        <h5 className='postText'><strong>{username} : </strong>{caption}</h5>
        {/* username + caption */}
    </div>
  )
}

export default Post