import { Avatar } from '@mui/material'
import React from 'react';
import './SidebarRow.css';


// src, Icon and title is used as props so that we can send the data from the parent component later. 

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">

            {src && <Avatar src={src} />}

            {Icon && <Icon />}

            <h4>{title}</h4>

        </div>
    )
}


export default SidebarRow

