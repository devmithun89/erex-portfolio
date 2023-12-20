"use client";
import React from "react";
import { styles } from "../../styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ourClient } from "@/app/constants";

const SlickCarousel = ({ title, icon }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <>
      <Slider {...settings}>
        <Image src={icon} alt={title} />
      </Slider>
    </>
  );
};

const Client = () => {
  return (
    <section
      className={`${styles.xPadding} ${styles.yPadding} w-full bg-backgroundGray border-y-2 border-lightGray`}
    >
      <div>
        <h2 className="text-primary font-poppins font-semibold uppercase underline underline-offset-2 text-[16px] tracking-[1px]">
          Our Clients
        </h2>
        <h1 className="text-heading font-rubik font-semibold uppercase md:text-[42px] text-[32px] md:leading-[48px] leading-[38px] py-5">
          Who already
          <br />
          believe in our service.
        </h1>
      </div>

      <div className="w-full flex flex-row justify-between">
        {ourClient.map((client, index) => (
          <SlickCarousel key={client.title} index={index} {...client} />
        ))}
      </div>
    </section>
  );
};

export default Client;
