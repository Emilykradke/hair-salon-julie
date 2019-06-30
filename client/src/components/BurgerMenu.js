import React from 'react';
import Scrollspy from 'react-scrollspy';

const BurgerMenu = props => (
    <div className='menuList'>
        <Scrollspy
            items={['home', 'about', 'contact', 'services']} offset={-1000}>
            <li>
                <a href={'#home'}>Home</a><br/>
                <a href={'#services'}>Services</a><br/>
                <a href={'#about'}>About</a><br/>
                <a href={'#contact'}>Contact</a>
            </li>
        </Scrollspy>
    </div>
)

export default BurgerMenu;