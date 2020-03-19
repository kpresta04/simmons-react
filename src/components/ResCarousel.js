import React from "react";

class ResCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.slideIndex = 1;
  }
  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }
  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }
  componentDidMount() {
    this.showSlides(this.slideIndex);
  }
  showSlides(n) {
    var i;
    var slides = [...document.getElementsByClassName("mySlides")];
    var dots = [...document.getElementsByClassName("dot")];
    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides) {
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    }
  }
  render() {
    return (
      <div>
        <div className="slideshow-container">
          <div className="mySlides fade">
            <img src="./carousel/pistols.jpg" style={{ width: "100%" }} />
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides fade">
            <img src="./carousel/gunAndShells.jpg" style={{ width: "100%" }} />
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides fade">
            <img src="./carousel/rifleScope.jpg" style={{ width: "100%" }} />
            <div className="text">Caption Three</div>
          </div>

          <a className="prev" onClick={() => this.plusSlides(-1)}>
            &#10094;
          </a>
          <a className="next" onClick={() => this.plusSlides(1)}>
            &#10095;
          </a>
        </div>
        <br />

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => this.currentSlide(1)}></span>
          <span className="dot" onClick={() => this.currentSlide(2)}></span>
          <span className="dot" onClick={() => this.currentSlide(3)}></span>
        </div>
      </div>
    );
  }
}

export default ResCarousel;
