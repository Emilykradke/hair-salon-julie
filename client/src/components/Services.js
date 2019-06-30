import React, { Component } from 'react';
import { appendFile } from 'fs';
import API from '../utils/API';

class Services extends Component {

  state = {
    services: []
  }

  componentDidMount() {
    this.loadServices();
  }

  loadServices = () => {
    API.getServices() 
      .then(res =>
        this.setState({
          services: res.data
        }, () => {console.log(this.state.services)})
      )
      .catch(err => console.log(err))
  }
  

  render() {
    const { services } = this.state;

    return (
      <section id='services' className='services'>
        <h1 className='services-container-title'>Services</h1>
        <div className='services-container'>
          {services.map(service => (
            <div className='service' key={service._id}>
              <img src={service.image} alt={service.title} />
              <h2 className='title'>{service.title}</h2>
              <p className='description'>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Services;