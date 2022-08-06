import { Avatar } from '@mui/material'
import React from 'react'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react';
import { useStateValue } from "./StateProvider"
import db from './firebase'
import firebase from 'firebase/compat/app'

function MessageSender() {
    const [{ user }, dispatch] = useStateValue(); // use of context api for passing the user info into the component. 
    const [input, setInput] = useState(''); // use of State hook to updates the input 
    const [imageUrl, setImageUrl] = useState('')


    const handleSumbit = (e) => {
        e.preventDefault(); // to prevent default action of the selected element from happening by the user. 
        db.collection('posts').add({ // add the contents of the post to the database in firebase. 
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(), // time of the posting according to server 
            profilePic: user.photoURL, // to get the user image 
            username: user.displayName, // to get the usr name 
            image: imageUrl, // to get the image posted by the user
        })
        // prevent default behaviour  after the sumbition 
        setInput("") // reset the input  
        setImageUrl(""); // reset the input 
    }

    return (
        <div className='messageSender'>

            <div className='messageSender_top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender_input'
                        placeholder={`what's on your mind,? ${user.displayName}`}
                    />
                    <input value={imageUrl} onChange={(e) =>
                        setImageUrl(e.target.value)} placeholder='image URL (Optional)' />

                    <button onClick={handleSumbit} type='sumbit'>
                        Hidden sumbit
                    </button>
                </form>
            </div>

            <div className="messageSender_bottom">

                <div className='messageSender_option'>

                    <VideocamIcon style={{ color: "red" }} />

                    <h3>
                        Live Video
                    </h3>
                </div>

                <div className='messageSender_option'>
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>
                        Photo/Video
                    </h3>

                </div>
                <div className='messageSender_option'>
                    <InsertEmoticonIcon style={{ color: "orange" }} />
                    <h3>
                        Feeling/Activity
                    </h3>
                </div>
            </div>
        </div>



    )
}

export default MessageSender