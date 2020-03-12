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
          </div>
        </div>
        <div>
          <img src="./carousel/pistols.jpg" />
          <p className="legend">Legend 1</p>
        </div>

        <div>
          <img src="./carousel/rifleScope.jpg" />

          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    );
  }
}

export default ImageCarousel;
