import React from "react";
import Slider from "react-slick";
import slider1 from "/slider1.jpg";
import slider2 from "/slider2.jpg";
import slider3 from "/slider3.jpg";
import slider4 from "/slider4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container ml-2 overflow-hidden">
      <Slider {...settings}>
        <div>
          <div className="w-[98vw]  overflow-hidden">
            <img src={slider1} alt="" className="w-full rounded-lg " />
          </div>
        </div>
        <div>
          <div className="w-[98vw] h-[90vh] my-2 ">
            <img src={slider2} alt="" className="w-full rounded-lg " />
          </div>
        </div>
        <div>
          <div className="w-[98vw] h-[90vh] my-2 ">
            <img src={slider3} alt="" className="w-full rounded-lg " />
          </div>
        </div>
        <div>
          <div className="w-[98vw] h-[90vh] my-2 ">
            <img src={slider4} alt="" className="w-full rounded-lg " />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderImage;
