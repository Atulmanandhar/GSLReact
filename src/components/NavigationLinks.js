import React from "react";
import {NavLink} from 'react-router-dom';

const NavigationLinks = ({ title }) => {
  return (
    <div>
      <li className="navigation-title">{title}</li>
    </div>
  );
};

export default NavigationLinks;
