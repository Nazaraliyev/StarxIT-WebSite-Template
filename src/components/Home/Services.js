import React from "react";
import bgImg1 from "../../Image/Home/Services/service1.png";
import bgImg2 from "../../Image/Home/Services/service2.png";
import icon from "../../Image/Home/Services/icon1.png";

function Services() {
  return (
    <section id="home-services">
      <div className="row">
        <div className="col-6 offset-6 services-wrapper">
          <div className="services-img-block">
            <img src={bgImg2}></img>
          </div>
        </div>
        <div className="my-container">
          <div className="services-icon">
            <img src={icon}></img>
          </div>
          <h2>Web & Mobile Development</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div className="services-items">
            <div className="row">
              <div className="col-6 services-item-col">
                <div className="services-item-wrapper">Responsive Design</div>
              </div>
              <div className="col-6 services-item-wrapper">UI / UX Design</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 services-wrapper">
          <div className="services-img-block">
            <img src={bgImg2}></img>
          </div>
        </div>
        <div className="my-container"></div>
      </div>
    </section>
  );
}

export default Services;
