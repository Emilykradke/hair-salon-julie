import React, { Component, Fragment } from 'react';
import logo from '../images/julieg-logo-black.PNG';

class Logo extends Component {
  render() {
    return (
      <Fragment>
        <div className='logo-container'>
          <img src={logo} alt='Hair by JulieG'></img>
        </div>
      </Fragment>
    );
  }
}

export default Logo;