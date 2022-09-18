import React from "react";
import Sliderx from "../Elements/Sliderx";
import imageA from "../assets/imageA.jpg";
import imageB from "../assets/imageB.jpg";
import imageC from "../assets/imageC.jpg";
import imageD from "../assets/imageD.jpg";
import imageE from "../assets/imageE.jpg";
import imageF from "../assets/imageF.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useParams } from "react-router-dom";

const SlideComponent = () => {
  // const { product } = useParams();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "gold" }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", background: "gold" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    // className: "slider variable-width",
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "60px",
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="">
      <div className="my-4">
        <Slider {...settings}>
          <Sliderx
            productImg={imageA}
            productName="Apple Macbook"
            productPercentage="25"
            productType="Electronics"
          />
          <Sliderx
            productImg={imageB}
            productName="Apple Iwatch"
            productPercentage="10"
            productType="Electronics"
          />
          <Sliderx
            productImg={imageC}
            productName="Nike"
            productPercentage="40"
            productType="Shoe"
          />
          <Sliderx
            productImg={imageD}
            productName="Iwatch"
            productPercentage="28"
            productType="Accessories"
          />
          <Sliderx
            productImg={imageE}
            productName="Long Sleeve"
            productPercentage="50"
            productType="Shirts"
          />
          <Sliderx
            productImg={imageF}
            productName="Jackets IIs"
            productPercentage="17"
            productType="Clothes"
          />
        </Slider>
      </div>
    </div>
  );
};

export default SlideComponent;
