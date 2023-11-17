import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';
import { BiLogoGmail,BiLogoLinkedinSquare } from "react-icons/bi";

let NavBar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='navbar-logo'>PortFolio</div>
            <div className='navbar-tabs'>
                <ul>
                    <li><Link to = '/home'>Home</Link></li>
                    <li><Link to = '/abtme'>AboutMe</Link></li>
                    <li><Link to = '/edu'>Education</Link></li>
                    <li><Link to = '/pro'>Projects</Link></li>
                </ul>
            </div>
            <div className='navbar-user'><a>Contact</a><a href='https://mail.google.com/mail/u/0/#inbox?compose=new' target='_blank'><BiLogoGmail fontSize={'1.5rem'} cursor={'pointer'}/></a>
            <a href='https://www.linkedin.com/in/rahul-gunjotikar-40b451141/' target='_blank'><BiLogoLinkedinSquare fontSize={'1.5rem'} cursor={'pointer'}/></a></div>
        </div>
    </div>
  )
}

export default NavBar
