import React from 'react'
import { auth, provider } from './firebase' // for sign in t
import './Login.css'
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'

function Login() {

    const [state, dispatch] = useStateValue();


    const signIn = () => { // for using the google authentication from the firebase.
        auth.signInWithPopup(provider) // auth is firebase
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })

            })
            .catch((error) => alert(error.message))
    };
    return (
        <div className='login'>
            <div className="login_logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg" />
                <img src='https://i.stack.imgur.com/Ar2Uo.png' />
            </div>

            <button type="sumbit" onClick={signIn} >
                Sign In
            </button>


        </div>
    )
}


export default Login