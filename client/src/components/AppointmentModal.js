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
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AppointmentModal;