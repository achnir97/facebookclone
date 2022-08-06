import { Avatar } from '@mui/material'
import React from 'react'
import './Post.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NearMeIcon from '@mui/icons-material/NearMe';

function Post({ profilePic, image, username, timestamp, message }) {
    // using the props to pass the data from the parent component. 
    return (
        <div className='post'>
            <div className='post_top'>
                <Avatar src={profilePic} className='post_avatar' />  {/*  for the  image of of user posting the pic  button */}
                <div className='post_topInfo'>
                    <h3> {username} </h3>      {/*  for the user  name  */}
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>   {/*  date of the post maded */}
                </div>
            </div>

            <div className='post_bottom'>  {/*  message posting */}
                <p> {message}</p>
            </div>

            <div className='post_image'>
                <img src={image} alt="" />   {/* image posting */}
            </div>
            <div>

                <div className='post_options'>
                    <div className='post_option'>   {/*  for the like button */}
                        <ThumbUpIcon />
                    </div>
                    <div className='post_option'>   {/*  for the Comment button button */}
                        <ChatBubbleOutlineIcon />
                    </div>
                    <div className='post_option'> {/*  for the near me icon */}
                        <NearMeIcon />
                    </div>
                    <div className='post_option'>  {/*  for the like  button */}
                        <AccountCircleIcon />
                        <ExpandMoreIcon />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Post