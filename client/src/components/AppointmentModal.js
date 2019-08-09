import React, { Component } from 'react';

class AppointmentModal extends Component {
  render() {
    return (
      <div className='appointment-modal'>
        <p className='modalX' onClick={this.props.click}>x</p>
        <form>
          <fieldset className='appointment-container'>
            <h2 className='title'>
              Request an appointment for your hair transformation with Julie G
            </h2>
            <p className='instructions'>
              Please use the following from to request an appointment time that is convenient. Your preferred time for your appointent will be confirmed by phone. 
            </p>
            <p className='walkins'>
              Please note that Julie G does not accept walk-in appointments
            </p>

            <div className='form-block'>
              <label>Your Name (Required)</label>
              <input type='text' name='name' id='name' />
              <label>Your Email (Required)</label>
              <input type='email' name='email' id='email' />
              <label>Phone Number (Required)</label>
              <input type='tel' name='phone' id='phone' />
              <label>Requested Service (Required)</label>
              <input type='text' name='service' id='service' />
              <label>Requested Date (Required)</label>
              <input type='date' name='date' id='date' />
              <label>Comments</label>
              <textarea rows='10' cols='100' />
              <button className='btn-submit'>
                Request Appointment
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AppointmentModal;