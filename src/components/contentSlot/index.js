import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, BrowserRouter as Router} from 'react-router-dom';
import ContentDetails from "./contentDetails"


const photos = [
  {
    name: "photo1",
    url:
      "https://images.unsplash.com/photo-1552729434-c464571b2b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo2",
    url:
      "https://images.unsplash.com/photo-1565492206132-b48aa1ca7ac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo3",
    url:
      "https://images.unsplash.com/photo-1585801441150-1cd92b29e68e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo4",
    url:
      "https://images.unsplash.com/photo-1542693209-f2b4ed97f70d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo5",
    url:
      "https://images.unsplash.com/photo-1551584277-a31a25e08fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 3,
    className: "slides",
  };

  return (
    <div>
      <Slider {...settings}>
        {photos.map((photo) => {
          return (
            <div>
              <img alt="" width="100%" src={photo.url}></img>
              <div className="image-text">
                <Router>
                    <Link to="/react">Some text</Link>
              </Router>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Banner;
