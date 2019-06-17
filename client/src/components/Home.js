import React, { Component } from 'react';
import Logo from './Logo';

class Home extends Component {
  render() {
    return (
      <section id="home" className="home">
        <div className='home-container'>
          <Logo />
          <div className='hero'>
            
          </div>
        </div>
      </section>
      
    );
  }
}

export default Home;