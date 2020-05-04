import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
  {
    name: "photo1",
    url:
      "https://images.unsplash.com/photo-1542555077-9dd5ac70081a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo2",
    url:
      "https://images.unsplash.com/photo-1578559617980-1eeb192888df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo3",
    url:
      "https://images.unsplash.com/photo-1544136513-67ec7ea24345?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo4",
    url:
      "https://images.unsplash.com/photo-1572739275114-ec3764ba1477?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "photo5",
    url:
      "https://images.unsplash.com/photo-1566843968431-2f2722e0d019?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    className: "slides",
  };

  return (
    <div className={"banner"}>
      <Slider {...settings}>
        {photos.map((photo, key) => (
          <div key={key}>
            <img alt="" width="100%" src={photo.url}></img>
            <p>test</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default Banner;
