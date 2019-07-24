import React from 'react';
import { Link } from "react-router-dom";
import Scrollspy from 'react-scrollspy';

const BurgerMenu = props => (
    <div className='menuList'>
        <Scrollspy
            items={['home', 'about', 'contact', 'services']} offset={-1000}>
            <li>
                <a href={'#home'} onClick={props.click}>Home</a>
                <a href={'#services'} onClick={props.click}>Services</a>
                <a href={'#about'} onClick={props.click}>About</a>
                <a href={'#contact'} onClick={props.click}>Contact</a>
            </li>
        </Scrollspy>

        <ul className='nav-buttons'>
          <li className="appointment-button"><Link to='/Appointment' class='appointment-link'>Request Appointment</Link></li>
          <li><a href={'https://www.facebook.com/HairbyJulieG66/'} target={"_blank"}><i class="fab fa-facebook-square"></i></a></li>
          <li><a href={'https://www.instagram.com/hairbyjuliegsalon/?hl=en'} target={"_blank"}><i class="fab fa-instagram"></i></a></li>
          <li><a href={'https://www.yelp.com/biz/hair-by-julieg-katy'} target={"_blank"}><i class="fab fa-yelp"></i></a></li>
        </ul>
    </div>
)

export default BurgerMenu;