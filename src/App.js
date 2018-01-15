import React, { Component } from 'react';
import './App.css';

import { Nav, NavItem, Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">RequestAStellarATM.com <sup>BETA</sup></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                REQUEST ATM
				</NavItem>
              <NavItem eventKey={2} href="#">
                LOCATION IDEAS
				</NavItem>
        <NavItem eventKey={3} href="#">
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
      </div>
    );
  }
}

export default App;
