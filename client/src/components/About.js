import React, { Component } from 'react';
import API from '../utils/API';

class About extends Component {

  state = {
    about: []
  }

  componentDidMount() {
    this.loadAbout();
  }

  loadAbout = () => {
    API.getAbout()
      .then(res =>
        this.setState ({
          about: res.data[0]
        }, () => {console.log(this.state.about)})
      )
      .catch(err => console.log(err))
  }

  render() {
    const { about } = this.state;

    return (
      <section id="about" className="about">
        <div className='about-container'>  
          <div className='about-contents'>
            <div className='image-container'>
              <img src={about.image} />
            </div>
            <div className='bio-container'>
              <h2 className='title'>{about.title}</h2>
              <p className='header'>{about.header}</p>
              <p className='description'>{about.description}</p>
              <p className='about'>{about.about}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;