import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined';
import Storefront from '@mui/icons-material/Storefront';
import React from 'react';
import './sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ChatIcon from '@mui/icons-material/Chat';
import { useStateValue } from './StateProvider'
import { useState } from 'react'

function Sidebar() {
    const [{ user }, dispatch] = useStateValue('')

    return (
        <div className='sidebar'>

            <SidebarRow src={user.photoURL} title={user.displayName} />  {/* for the image of the user and name of the user*/}
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messanger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar

/* 
Also I would the job maket is  higher in react so it is importatn 

*/