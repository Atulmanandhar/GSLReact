import React, { Component } from 'react';
import NavigationLinks from './NavigationLinks';


export default class NavigationOptions extends Component {
  render() {
    return (
     
          <div className="navigation-links">
              <NavigationLinks title="Home" />
              <NavigationLinks title="About" />
              <NavigationLinks title="Contact" />
              <NavigationLinks title="Login" />
          </div>
        
    
    );
  }
}
