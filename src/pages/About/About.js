import React, { Component } from "react";
import TopNavbar from "../../components/TopNavbar";
import AboutMission from '../../assets/about-mission.jpg';
import AboutPlan from '../../assets/about-plan.jpg';
import AboutVision from '../../assets/about-vision.jpg';
export default class About extends Component {
  render() {
    return (
      <>
        <div className="header">
          <TopNavbar />
        </div>
        <section className="about">
      <div className="container">
        <header className="section-header about-section">
          <h3>About Us</h3>
           <p>Moving someplace new ? Need to move stuff ? We help you do that.</p>
        </header>
        <div className="row about-cols">
          <div className="col-md-4 wow fadeInUp">
            <div className="about-col">
              <div className="img">
                <img src={AboutMission} alt="" className="img-fluid" />
                <div className="icon"><i className="ion-ios-speedometer-outline"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Mission</a></h2>
              <p>
                To provide an easy and convenient method of moving your stuff with a service tailored to your needs.
              </p>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
            <div className="about-col">
              <div className="img">
                <img src={AboutPlan} alt="" className="img-fluid" />
                <div className="icon"><i className="ion-ios-list-outline"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Plan</a></h2>
              <p>
                To use technology to provide a fast and efficient service saving you your time and money.
              </p>
            </div>
          </div>
          <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
            <div className="about-col">
              <div className="img">
                <img src={AboutVision} alt="" className="img-fluid" />
                <div className="icon"><i className="ion-ios-eye-outline"></i></div>
              </div>
              <h2 className="title"><a href="#">Our Vision</a></h2>
              <p>
                To establish a service that you can access from anywhere and at anytime to fulfill your moving desires.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  
      
      </>
    );
  }
}
