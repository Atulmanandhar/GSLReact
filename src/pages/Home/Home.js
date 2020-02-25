import React, { Component } from 'react';
import TopNavbar from '../../components/TopNavbar';
import Loremtest from '../../components/Loremtest';
export default class Home extends Component {
  render() {
    return (
        <>
        <div className="header">
        <TopNavbar />
        </div>
        <div >
        <Loremtest />
        </div>
        </>
    );
  }
}
