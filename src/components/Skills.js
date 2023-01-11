import meter1 from "../assets/img/meter1.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logos from "../assets/img/logos.svg";
import js from "../assets/img/js1.png";
import nodeJs from "../assets/img/nodejs.png";
import php from "../assets/img/php.png";
import laravel from "../assets/img/laravel.png";
import express from "../assets/img/express.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills Programming language</h2>
              <br></br>
              {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p> */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={js} height="100px" alt="Image" />
                  <h5> JavaScript</h5>
                  <small>(been used in real projects)</small>
                </div>
                <div className="item">
                  <img src={logos} alt="Image" className="mt-4" />
                  <h5 className="mt-3">React JS</h5>
                  <small>(been used in real projects)</small>
                </div>
                <div className="item">
                  <img src={nodeJs} alt="Image" className="mt-4" />
                  <h5 className="mt-4">Node JS</h5>
                </div>
                <div className="item">
                  <img src={express} alt="Image" className="mt-5" />
                  <h5 className="mt-4">Express JS</h5>
                </div>
                <div className="item">
                  <img src={php} alt="Image" className="mt-4" />
                  <h5 className="mt-4">PHP</h5>
                  <small>(basic)</small>
                </div>
                <div className="item">
                  <img src={laravel} alt="Image" className="mt-4" />
                  <h5 className="mt-2">Laravel</h5>
                  {/* <small>(basic)</small> */}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
