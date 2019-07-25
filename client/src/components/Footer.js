import React, { Fragment, Component } from 'react';
import API from '../utils/API';
import Scrollspy from 'react-scrollspy';

class Footer extends Component {

  state = {
    hours: [],
    contact: []
  }

  componentDidMount() {
    this.loadHours();
    this.loadContact();
  }

  loadHours = () => {
    API.getHours() 
    .then(res =>
      this.setState({
        hours: res.data
      }, () => {console.log(this.state.hours)})
    )
    .catch(err => console.log(err))
  }

  loadContact = () => {
    API.getContact() 
    .then(res =>
      this.setState({
        contact: res.data[0]
      }, () => {console.log(this.state.contact)})
    )
    .catch(err => console.log(err))
  }

  render() {
    const { hours, contact } = this.state;

    return (
      <Fragment>
        <div className='link-container'>
          <div className='quicklinks'>
            <h2>Quick Links</h2>
            <Scrollspy className='nav-list'
                items={ ['home', 'about', 'contact', 'services'] } offset={ -1000 }>
                  <li>
                    <a href={'#home'}>Home</a>
                    <a href={'#services'}>Services</a>
                    <a href={'#about'}>About</a>
                    <a href={'#contact'}>Contact</a>
                  </li>
              </Scrollspy>
              <p onClick={this.props.click}>Login Modal</p>
          </div>

          <div className='hours-container'>
            
            <h2>Hours</h2>
            <div className='hours'>
              {hours.map(hour => (
                <p className='hour' key={hour._id}>
                    {hour.day}: {hour.hours}
                </p>
              ))}
            </div>

          </div>

          <div className='contact-container'>

            <h2>How to Find Me</h2>
            <div className='contact'>
                <div className='address-container'>
                  <p className='street'>
                    {contact.address}, Suite {contact.suite}
                  </p>
                  <p className='city-state-zip'>
                    {contact.city}, {contact.state} {contact.zip}
                  </p>
                </div>  

                <div className='phone-container'>
                  <p className='phone'>
                    {contact.phone}
                  </p>
                </div>  

                <div className='icon-container'>
                <ul className='nav-buttons'>
                  <li><a href={'https://www.facebook.com/HairbyJulieG66/'} target={"_blank"}><i class="fab fa-facebook-square"></i></a></li>
                  <li><a href={'https://www.instagram.com/hairbyjuliegsalon/?hl=en'} target={"_blank"}><i class="fab fa-instagram"></i></a></li>
                  <li><a href={'https://www.yelp.com/biz/hair-by-julieg-katy'} target={"_blank"}><i class="fab fa-yelp"></i></a></li>
                </ul>
                </div>
            </div>

          </div>
        </div>

        <div className='copyright-container'>
          <div className='copyright'>
            © 2019 Hair by Julie G
          </div>
        </div>
      </Fragment>
      
    );
  }
}

export default Footer;