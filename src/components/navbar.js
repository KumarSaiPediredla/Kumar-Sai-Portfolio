import React from 'react';
import Profile from '../profile/profile';
import CustomizedSwitches from '../toggle/navbarToggle';
import "../styles/navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (

        <div className='nav-container'>
            <aside>
                <CustomizedSwitches />
                <div>
                    <Profile />

                    <Link to="/"><p>KUMAR SAI PEDIREDLA</p></Link>
                </div>
            </aside>

            <article>

                <ul>
                    <Link to="/qualification"><li>Qualification</li></Link>
                    <Link to="/skills"><li>Skills</li></Link>
                    <li>Experience</li>
                    <Link to="/projects"><li>Projects</li></Link>
                    <Link to="/contacts"><li>Contacts</li></Link>
                </ul>

            </article>
        </div>
    )
}

export default Navbar