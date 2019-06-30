import React from 'react';

const BurgerButton = props => (
  <button className="burgerButton" onClick={props.click}>
    <div className="buttonLine" />
    <div className="buttonLine" />
    <div className="buttonLine" />
  </button>
);

export default BurgerButton; 