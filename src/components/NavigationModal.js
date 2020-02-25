import React, { Component } from "react";
import menu from "../assets/menu.png";
import logo from "../assets/favicon.png";
import NavigationOptions from './NavigationOptions';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody } from "mdbreact";

export default class NavigationModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  render() {
    return (
      <div className="NavModal">
        <MDBContainer>
          <img
            src={menu}
            className="img-fluid"
            onClick={this.toggle}
            width="80"
            height="80"
            className="d-inline-block align-top"
          />
          <MDBModal
            isOpen={this.state.modal}
            toggle={this.toggle}
            size="fluid"
            full-height
            position="top"
          >
            <MDBModalBody>
              <div className="container">
              <img
                src={logo}
                width="80"
                height="80"
                className="d-inline-block align-top"
              />              
              
                <img
                  src="https://movon.com/wp-content/themes/ns-theme-child/assets/images/menu-close.svg"
                  height="50px"
                  width="100px"
                  onClick={this.toggle}
                />
                </div>
            <NavigationOptions />
             
            </MDBModalBody>
          </MDBModal>
        </MDBContainer>
      </div>
    );
  }
}
