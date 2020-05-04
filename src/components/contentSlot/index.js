import React from "react";
import Promo from "../promo/index";

const ContentSlot = () => {
  const promoSlot = [
    {
      img: "./promo-slot.png",
      title: "Foo",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      img: "./promo-slot.png",
      title: "Foo",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
    {
      img: "./promo-slot.png",
      title: "Foo",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
    },
  ];
  return (
    <div>
      {promoSlot.map((item, key) => (
        <Promo
          key={key}
          src={item.img}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};
export default ContentSlot;
