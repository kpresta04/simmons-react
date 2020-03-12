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
          <img src="./carousel/stock-photo-hunter-with-shotgun-gun-on-hunt-illegal-hunting-poacher-in-the-forest-american-hunting-rifles-1500819701.jpg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="./carousel/gunAndShells.jpg" />
          <p className="legend">Legend 3</p>
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
