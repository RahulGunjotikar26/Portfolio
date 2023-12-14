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
                    <li><Link to = '/'>Home</Link></li>
                    <li><Link to = '/abtme'>AboutMe</Link></li>
                    <li><Link to = '/edu'>Education</Link></li>
                    <li><Link to = '/pro'>Projects</Link></li>
                </ul>
            </div>
            <div className='navbar-user'><a>Contact</a><a href='mailto:rahul2610.g@gmail.com'><BiLogoGmail fontSize={'1.5rem'} cursor={'pointer'}/></a>
            <a href='https://www.linkedin.com/in/rahul-gunjotikar-40b451141/'><BiLogoLinkedinSquare fontSize={'1.5rem'} cursor={'pointer'}/></a></div>
        </div>
    </div>
  )
}

export default NavBar
