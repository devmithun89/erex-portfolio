import React from "react";
import { services } from "@/app/constants";
import { styles } from "../../styles";
import Image from "next/image";

const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="group relative rounded-[15px] bg-background  md:w-[350px] w-full transition-all duration-300  hover:-translate-y-2 ">
      <div className="p-10 items-center justify-center flex flex-col">
        <div className="p-5 bg-primary rounded-[100px] bg-opacity-25">
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
        </div>
        <h1 className="text-heading font-rubik font-normal text-[18px] text-center pt-6 pb-3 leading-[22px] ">
          {title}
        </h1>
        <h1 className="text-subheading font-poppins font-normal text-center text-[12px] ">
          {description}
        </h1>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <section
      id="service"
      className={`${styles.xPadding} ${styles.yPadding} w-full bg-backgroundGray `}
    >
      <div className="flex flex-col justify-between items-center md:flex-row">
        <div className="w-full">
          <h2 className="text-primary font-poppins font-semibold uppercase underline underline-offset-2 text-[16px] tracking-[1px]">
            Our Services
          </h2>
          <h1 className="text-heading font-rubik font-semibold uppercase md:text-[42px] text-[32px] md:leading-[48px] leading-[38px] py-5">
            We Shape The
            <br />
            Perfect Solution
          </h1>
        </div>
        <div className="w-full">
          <h2 className="text-subheading font-poppins font-normal text-[16px] text-justify">
            We are committed to providing our customers with not service while
            offering our emod tempor incididunt ut labore employees the best
            training.
          </h2>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap justify-between gap-5 md:gap-16">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Service;
