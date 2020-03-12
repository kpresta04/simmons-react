import React from "react";
import { Carousel } from "react-responsive-carousel";

class ImageCarousel extends React.Component {
  render() {
    return (
      <Carousel
        infiniteLoop={true}
        autoPlay={false}
        interval={10000}
        showThumbs={false}
        transitionTime={550}
        showStatus={false}
      >
        <div>
          <img src="./carousel/gunAndShells.jpg" />
          <div className="legend">
            <h3>In case you haven't heard...</h3>
            <h1>Simmons Restores Firearms</h1>
            <button>Browse Our Services</button>
          </div>
        </div>
        <div>
          <img src="./carousel/pistols.jpg" />
          <div className="legend">
            <h3>Since 1945</h3>
            <h1>We Sell Shotguns, rifles, and pistols - all brands</h1>
            <button>Shop Now</button>
          </div>
        </div>

        <div>
          <img src="./carousel/rifleScope.jpg" />
          <div className="legend">
            <h3>Repairs and Upgrades</h3>
            <h1>Professional gunsmithing with over 75 years of history!</h1>
            <button>Contact Us</button>
          </div>
        </div>
      </Carousel>
    );
  }
}

export default ImageCarousel;
