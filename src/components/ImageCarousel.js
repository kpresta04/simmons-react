import React from "react";
import { Carousel } from "react-responsive-carousel";

class ImageCarousel extends React.Component {
  render() {
    return (
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
        transitionTime={550}
        showStatus={false}
      >
        <div>
          <img src="./carousel/img_lights_wide.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="./carousel/img_mountains_wide.jpg" />

          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="./carousel/img_nature_wide.jpg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

export default ImageCarousel;
