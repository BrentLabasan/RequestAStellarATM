import React, { Component } from 'react';
import './App.css';

import { Nav, NavItem, Navbar, Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';
let mc = "";
class App extends Component {



  constructor(...args) {
    super(...args);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = { 
      showModal: false
     };

  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleShow(i) {
    mc = i;
    this.setState({ showModal: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
			</Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    const mc1 = <span>foo</span>;
    const mc2 = <span>bar</span>;
    const mc3 = <span>baz</span>;

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
              <NavItem eventKey={1} href="#" onClick={() => this.handleShow(mc1)}>
                REQUEST ATM
				</NavItem>
              <NavItem eventKey={2} href="#" onClick={() => this.handleShow(mc2)}>
                LOCATION IDEAS
				</NavItem>
              <NavItem eventKey={3} href="#" onClick={() => this.handleShow(mc3)}>
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

        {/* <Button bsStyle="primary" bsSize="large" onClick={() => this.handleShow(0)}>
          Launch demo modal
				</Button> */}

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>

            {mc}

            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
						</p>

            <h4>Popover in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={popover}>
                <a href="#popover">popover</a>
              </OverlayTrigger>{' '}
              here
						</p>

            <h4>Tooltips in a modal</h4>
            <p>
              there is a{' '}
              <OverlayTrigger overlay={tooltip}>
                <a href="#tooltip">tooltip</a>
              </OverlayTrigger>{' '}
              here
						</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>


      </div>
    );
  }
}

export default App;
