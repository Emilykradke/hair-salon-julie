import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import BurgerMenu from './components/BurgerMenu';
import MenuBackdrop from './components/Backdrop';
import LoginModal from './components/LoginModal';
import ModalBackdrop from './components/ModalBackdrop';
import AppointmentModal from './components/AppointmentModal';
import AppointmentBackdrop from './components/AppointmentBackdrop';

class App extends Component {
  state = {
    burgerMenuOpen: false,
    modalOpen: false,
    appointmentOpen: false
  }

  appointmentClickHandler = () => {
    this.setState((prevState) => {
      return {appointmentOpen: !prevState.appointmentOpen}
    })
  }

  burgerToggleClickHndler = () => {
    this.setState((prevState) =>{
      return {burgerMenuOpen: !prevState.burgerMenuOpen}
    })
  } 

  modalToggleClickHndler = () => {
    this.setState((prevState) =>{
      return {modalOpen: !prevState.modalOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({burgerMenuOpen: false})
  }

  modalCloseHandler = () => {
    this.setState({modalOpen: false})
  }

  appointmentCloseHandler = () => {
    this.setState({appointmentOpen: false})
  }

  render() {
    let burgerMenu;
    let backdrop;
    let modal;
    let modalBackdrop;
    let appointmentModal;
    let appointmentBackdrop;

    if (this.state.modalOpen) {
      modal = <LoginModal click={this.modalCloseHandler} />
      modalBackdrop = <ModalBackdrop click={this.modalCloseHandler} />
    }

    if (this.state.burgerMenuOpen) {
      burgerMenu = <BurgerMenu click={this.backdropClickHandler} />
      backdrop = <MenuBackdrop click={this.backdropClickHandler} />
    }

    if (this.state.appointmentOpen) {
      appointmentModal = <AppointmentModal click={this.appointmentCloseHandler} />
      appointmentBackdrop = <AppointmentBackdrop click={this.appointmentCloseHandler} />
    }

    return <Router>
      <Fragment>
        <Nav burgerClickHandler={this.burgerToggleClickHndler} />
        {burgerMenu}
        {backdrop}
        {modal}
        {modalBackdrop}
        {appointmentModal}
        {appointmentBackdrop}
        <Home />
        <Services />
        <About />
        <Contact />
        <Footer click={this.modalToggleClickHndler} />
      </Fragment>
    </Router>
  }
};

export default App;
