import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { Nav, NavItem, Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">RequestAStellarATM.com</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                REQUEST ATM
				</NavItem>
              <NavItem eventKey={2} href="#">
                FAQ
				</NavItem>
              {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown> */}
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                ABOUT
				</NavItem>
              <NavItem eventKey={2} href="#">
                CONTACT
				</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
