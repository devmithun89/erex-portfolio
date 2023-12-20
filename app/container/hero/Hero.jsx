"use client";
import React from "react";
import { styles } from "../../styles";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  //
  return (
    <>
      <section
        className={`${styles.xPadding} w-full h-screen bg-[url('./assets/background/background_hero.png')] bg-cover  overflow-hidden`}
      >
        <div className="w-full h-full items-center justify-between flex flex-row">
          <div className="w-full">
            <h2 className="text-primary uppercase underline underline-offset-4 text-[14px] font-poppins font-medium tracking-[1px] mb-10 md:text-[16px]">
              We're Provide The Best Services
            </h2>
            <div className="md:h-[120px] h-[135px]">
              <TypeAnimation
                sequence={[
                  "We Help You To Boost Your Business",
                  2000,
                  "We Help You To Create Your Application",
                  2000,
                  "We Help You To Build Your Website",
                  2000,
                  "We Help You To Make Your Apis",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-heading uppercase font-rubik font-semibold text-[32px] leading-[48px] md:leading-[62px] md:text-[48px] drop-shadow-xl"
                repeat={Infinity}
              />
            </div>
            <h2 className="text-gray font-poppins text-[16px] font-normal my-10">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              sequinesciunt.
            </h2>
            <button class="relative rounded-[100px] h-14 w-40 overflow-hidden border border-primary text-primary shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-primary before:duration-300 before:ease-out hover:text-white hover:shadow-primary hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
              <span class="relative z-10 font-poppins font-semibold uppercase text-[14px]">
                Hire Us
              </span>
            </button>
          </div>
          <div className="w-full h-full items-center hidden justify-center md:flex">
            <Spline scene="https://prod.spline.design/FkKdUo4c3zX2AfkM/scene.splinecode" />
          </div>
        </div>
        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center z-10 right-0"
        >
          <a href="#service">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-subheading  flex
            justify-center items-start p-2 z-10"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-4 h-4 rounded-full bg-primary mb-1"
              />
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
