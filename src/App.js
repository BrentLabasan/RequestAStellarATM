import React, { Component } from 'react';
import './App.css';

import { Nav, NavItem, Navbar, Button, Modal } from 'react-bootstrap';
// import { Nav, NavItem, Navbar, Button, Modal, NavDropdown, MenuItem } from 'react-bootstrap';

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
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    // 	</Popover>
    // );
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    const mc1 = <div>Instructions on how to request an ATM are located at the bottom of the page, below the map.
      I plan to put videos of the process for different wallets in the future.
    </div>;

    const mc2 = <div>
      Here are some ideas for locations where a Stellar ATM would be useful.
      <ul>
        <li>foreign countries that your relatives live in</li>
        <li>cities with developing startup communities</li>
        <li>tech incubators</li>
        <li>colleges</li>
        <li>stores with traditional ATMs</li>
      </ul>

      TODO: Elaborate on these possibilities with distinct locations. Implement copying of their coordinates to clipboard.
    </div>;

    const mc3 = <div>
      WORK IN PROGRESS

      <h3>What is the status of this project?</h3>
      <p>This project is currently in beta testing.</p>

      <h3>Do I have to donate a certain amount of XLM?</h3>
      <p>Any donation amount helps!</p>

      <h3>What happens to the funds that I donate?</h3>
      <p>They get sent to a public key address that I created myself. View the address' activity at &nbsp;
        <a href="https://stellarchain.io/address/GDZAZWBLGY3FVHRSYFRQ2IT6J5XTNWQHZMRFOYIRGTBX7AOSF767JOLT" target="_blank">
          StellarChain.io</a>. The address balance is currently managed in a desktop software wallet, and I plan to move them to a Ledger Nano S when it
          comes in the mail.
        
      </p>

      <h3>How do we know that you're not just going to run off with the donated money? Are you a Stellar employee?</h3>
      <p>Great question! My name is Brent Labasan, I'm a web app developer in Seattle, and I just started learning about 
      Stellar in December 2017 after getting into cryptocurrencies through Bitcoin and IOTA. You can check out my &nbsp;
      <a href="https://www.linkedin.com/in/brentlabasan/" target="_blank">LinkedIn</a> and &nbsp;
      <a href="https://www.brentvlabasan.com/" target="_blank">portfolio</a>.
      <br/><br/>
      I don't have official ties to the Stellar Team or the Stellar Development Foundation. I'm just a developer
      who wanted to start exploring the Stellar network and protocol and see what it's capable of. To further my learning,
      I thought of various app ideas to make use of the network,
      and a web app to encourage people to donate to set up ATMs in different locations was the idea that best fit
      with Stellar's mission statement and goals.
      <br/><br/>
      <span className="bold">I hope to work closely with the Stellar Team to directly use the donated funds
       to further adoption of Stellar's products.</span>

      </p>

      {/* <h3></h3>
      <p></p>

      <h3></h3>
      <p></p> */}
    </div>;

    const mc4 = <div>
      Request A Stellar ATM is a passion project by Brent Labasan.
Current Goals For Project
<ul>
        <li>Encourage people to donate XLM to encourage ATMs in various locations, especially the underbanked.</li>
        <li>Distribute the donated XLM to the Stellar Development Foundation to further adoption.</li>
        {/* <li></li>
  <li></li> */}

      </ul>
    </div>;

    const mc5 = <div>
      BrentLabasan@gmail.com

</div>;

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
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#" onClick={() => this.handleShow(mc4)}>
                ABOUT
				        </NavItem>
              <NavItem eventKey={2} href="#" onClick={() => this.handleShow(mc5)}>
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

            {mc}

            {/* <p>
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
						</p> */}

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
