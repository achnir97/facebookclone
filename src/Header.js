import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Avatar, IconButton } from '@mui/material';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { useStateValue } from "./StateProvider"

function Header() {
    const [{ user }, dispatch] = useStateValue();  

    return (
        <div className='header'>

            <div className='header_left'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" alt="" />
                <div className='header_input'>
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text" />
                </div>
            </div>

            <div className='header_middle'>
                <div className='header_option
                header_option-active'>
                    <HomeIcon fontSize="large" />
                </div>

                <div className='header_option'>
                    <FlagIcon fontSize="large" />
                </div>

                <div className='header_option'>
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>

                <div className='header_option'>
                    <StorefrontIcon fontSize="large" />
                </div>


                <div className='header_option'>
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className='header_right'>
                <div className='header_info'>
                    <Avatar src={user.photoURL} />
                    <h4>
                        {user.displayName}
                    </h4>
                    <IconButton>
                        <AddOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ForumOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        < NotificationsActiveOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreOutlinedIcon />
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Header