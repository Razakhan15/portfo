import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: "Tina snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam saepe cum quis provident atque modi voluptate dolores molestiae ad architecto aut quidem vitae nihil inventore necessitatibus, ipsa, sequi perferendis fuga.",
  },
  {
    avatar: AVTR2,
    name: "Tina snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam saepe cum quis provident atque modi voluptate dolores molestiae ad architecto aut quidem vitae nihil inventore necessitatibus, ipsa, sequi perferendis fuga.",
  },
  {
    avatar: AVTR3,
    name: "Tina snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam saepe cum quis provident atque modi voluptate dolores molestiae ad architecto aut quidem vitae nihil inventore necessitatibus, ipsa, sequi perferendis fuga.",
  },
  {
    avatar: AVTR4,
    name: "Tina snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam saepe cum quis provident atque modi voluptate dolores molestiae ad architecto aut quidem vitae nihil inventore necessitatibus, ipsa, sequi perferendis fuga.",
  },
];

function Testimonial() {
  return (
    <section>
      <h5>review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
