import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import { Link } from "react-router-dom";
import BurgerButton from './HamburgerButton';

class Nav extends Component {
  render() {
    return (
      <div className='nav-container'>
        <nav>
          <div className='burgerNav'>
          <BurgerButton click={this.props.burgerClickHandler} />
          </div>

          <div className='nav-contents'>

            <Scrollspy className='nav-list'
              items={ ['home', 'about', 'contact', 'services'] } offset={ -1000 }>
                <li>
                  <a href={'#home'}>Home</a>
                  <a href={'#services'}>Services</a>
                  <a href={'#about'}>About</a>
                  <a href={'#contact'}>Contact</a>
                </li>
            </Scrollspy>

            <ul className='nav-buttons'>
              <li><Link to='/Appointment' class='appointment-link'>Request Appointment</Link></li>
              <li><a href={'https://www.facebook.com/HairbyJulieG66/'} target={"_blank"}><i class="fab fa-facebook-square"></i></a></li>
              <li><a href={'https://www.instagram.com/hairbyjuliegsalon/?hl=en'} target={"_blank"}><i class="fab fa-instagram"></i></a></li>
              <li><a href={'https://www.yelp.com/biz/hair-by-julieg-katy'} target={"_blank"}><i class="fab fa-yelp"></i></a></li>
            </ul>

          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;