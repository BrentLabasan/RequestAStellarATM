import React, { Component } from 'react';
import './App.css';

import { Nav, NavItem, Navbar, Popover, Tooltip, Button, Modal, OverlayTrigger } from 'react-bootstrap';

class App extends Component {
  constructor(...args) {
    super(...args);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = { showModal: false };
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
			</Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

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


        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Launch demo modal
				</Button>

        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
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

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
							dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
							ac consectetur ac, vestibulum at eros.
						</p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
							et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
							auctor.
						</p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
							cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
							dui. Donec ullamcorper nulla non metus auctor fringilla.
						</p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
							dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
							ac consectetur ac, vestibulum at eros.
						</p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
							et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
							auctor.
						</p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
							cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
							dui. Donec ullamcorper nulla non metus auctor fringilla.
						</p>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
							dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
							ac consectetur ac, vestibulum at eros.
						</p>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
							et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
							auctor.
						</p>
            <p>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
							cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
							dui. Donec ullamcorper nulla non metus auctor fringilla.
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
