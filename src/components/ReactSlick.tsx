"use client";

import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/styles/react-slick.css";

const images = [
  "/carousalImage1.jpg",
  "/carousalImage2.jpg",
  "/carousalImage3.jpg",
  "/carousalImage4.jpg",
];

export default function ImageSlider() {
  const [centerIndex, setCenterIndex] = useState(0);

  const settings = {
    centerMode: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    speed: 500,
    centerPadding: "0px",
    afterChange: (currentLeftIndex: number) => {
      // For example, calculate centerIndex here
      const newCenter = (currentLeftIndex - 2) % images.length;
      setCenterIndex(newCenter);
    },
    responsive: [
      {
        breakpoint: 768, // any screen under 768px wide
        settings: {
          slidesToShow: 1, // Only show 1 image on mobile
          centerMode: false, // Often you disable centerMode on mobile
          centerPadding: "0px", // 0 padding so it fits nicely
        },
      },
    ],
  };

  return (
    <div className="slider-container absolute inset-0 -top-1/2 transform -translate-y-1/2">
      <Slider {...settings}>
        {images.map((src, index) => {
          // figure out which index is "two left" of the center
          const secondLeftIndex =
            (centerIndex - 2 + images.length) % images.length;

          // If this is the second-left slide, add a custom class
          const isSecondLeft = index === secondLeftIndex;
          const slideClass = isSecondLeft ? "slide second-left" : "slide";

          return (
            <div className={slideClass} key={index}>
              <img src={src} alt={`Slide ${index}`} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
