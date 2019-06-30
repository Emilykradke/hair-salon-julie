import React from 'react';
import Scrollspy from 'react-scrollspy';

const BurgerMenu = props => (
    <div className='menuList'>
        <Scrollspy
            items={['home', 'about', 'contact', 'services']} offset={-1000}>
            <li>
                <a href={'#home'} onClick={props.click}>Home</a><br/>
                <a href={'#services'} onClick={props.click}>Services</a><br/>
                <a href={'#about'} onClick={props.click}>About</a><br/>
                <a href={'#contact'} onClick={props.click}>Contact</a>
            </li>
        </Scrollspy>
    </div>
)

export default BurgerMenu;