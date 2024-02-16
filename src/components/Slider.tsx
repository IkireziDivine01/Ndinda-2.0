import { useState, useEffect } from "react";
import "./styles/slider.css";

type ISliderProps = {
  slides: {
    city: string,
    country: string,
    img: string,
  }[];
};

const IMAGE_PARTS = 4;
const AUTOCHANGE_TIME = 4000;

export default function Slider({ slides }: ISliderProps) {
  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1);
  const [sliderReady, setSliderReady] = useState(false);

  const runAutochangeTO = () => {
    return setTimeout(() => {
      changeSlides(1);
    }, AUTOCHANGE_TIME);
  };

  useEffect(() => {
    const changeTO = runAutochangeTO();

    setTimeout(() => {
      setActiveSlide(0);
      setSliderReady(true);
    }, 0);

    return () => {
      clearTimeout(changeTO);
    };
  }, []);

  const changeSlides = (change: number) => {
    const length = slides.length;
    let newActiveSlide = activeSlide + change;
    if (newActiveSlide < 0) newActiveSlide = length - 1;
    if (newActiveSlide >= length) newActiveSlide = 0;
    setPrevSlide(activeSlide);
    setActiveSlide(newActiveSlide);
  };

  return (
    <div className={`slider ${sliderReady ? "s--ready" : ""}`}>
      {/* <p className="slider__top-heading">Travelers</p> */}
      <div className="slider__slides">
        {slides.map((slide, index) => (
          <div
            className={`slider__slide ${
              activeSlide === index ? "s--active" : ""
            } ${prevSlide === index ? "s--prev" : ""}`}
            key={slide.city}
          >
            <div className="slider__slide-content">
              <h3 className="slider__slide-subheading">
                {slide.country || slide.city}
              </h3>
              <a href="/projectInfo" className="text-main-light hover:text-main">
                <h2 className="slider__slide-heading">
                {slide.city.split("").map((l, i) => (
                  <span key={i}>{l}</span>
                ))}
              </h2>
              </a>
            </div>
            <div className="slider__slide-parts">
              {/* {[...Array(IMAGE_PARTS).fill()].map((_, i) => (
                <div className="slider__slide-part" key={i}>
                  <div
                    className="slider__slide-part-inner"
                    style={{ backgroundImage: `url(${slide.img})`, paddingTop: "20%", width: "100%"}}
                  />
                </div>
              ))} */}
            </div>
          </div>
        ))}
      </div>
      <div className="slider__control" onClick={() => changeSlides(-1)} />
      <div
        className="slider__control slider__control--right"
        onClick={() => changeSlides(1)}
      />
    </div>
  );
}
