import React from 'react';
import { Drawer } from 'antd';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import logo from '../media/DSC_6258.JPG';
import poto from "../media/poto.jpg";
import "../styles/profile.css";
import {AiOutlineHome} from "react-icons/ai";
import {MdLibraryBooks} from "react-icons/md";
import {GiSkills} from "react-icons/gi";
import {BsPersonWorkspace} from "react-icons/bs";
import {SiCodeproject} from "react-icons/si";
import {TiContacts} from "react-icons/ti";



const Profile = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div>

            <Avatar onClick={showDrawer} className="nav-profile" alt="K" src={logo} />

            <Drawer title="PROFILE" placement="right" onClose={onClose} open={open}>
                <div className="nav-profile-container">
                    <div><img className='profile-poto' alt='poto' src={poto} /></div>
                    <p className='profile-skills'>
                        <span> <AiOutlineHome className='profile-icons'/> </span>
                        <span>Home</span>
                    </p>
                    <p className='profile-skills'>
                        <span><MdLibraryBooks className='profile-icons'/></span>
                        <span>Qualification</span>
                    </p>
                    <p className='profile-skills'>
                        <span><GiSkills className='profile-icons'/></span>
                        <span>Skills</span>
                    </p>
                    <p className='profile-skills'>
                        <span><BsPersonWorkspace className='profile-icons'/></span>
                        <span>Experience</span>
                    </p>
                    <p className='profile-skills'>
                        <span><SiCodeproject className='profile-icons'/></span>
                        <span>Projects</span>
                    </p>
                    <p className='profile-skills'>
                        <span><TiContacts className='profile-icons'/></span>
                        <span>Contacts</span>
                    </p>
                </div>
            </Drawer>
        </div>
    )
}

export default Profile;