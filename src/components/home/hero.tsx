import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className=" w-[100%] max-w-[1600px] flex md:flex-row flex-col justify-between gap-4 lg:h-[620px]">
      <div className="flex flex-col md:gap-12 gap-6 md:mt-20 mt-2">
        <h1 className=" text-[48px] max-w-md w-[100%] font-bold leading-[57px]">
          {"Sort out Your Spring Look"}
        </h1>
        <p className=" max-w-[380px] text-[#9A9AB0]">
          We will help to develop every smallest thing into a big one for your
          company.
        </p>
        <a
          href="/shop"
          className="max-w-[120px] bg-[#F86338] flex items-center justify-center py-4 rounded-[8px] text-white"
        >
          <p>Shop</p>
          <img src={"/right-arrow.png"} className="w-[24px] h-[24px]" />
        </a>
      </div>

      <div className="flex gap-4 lg:absolute right-0 md:mt-0 mt-4">
        <div className="w-[504px] md:h-[620px] h-[450px] bg-[#E2E2EA]" />

        <div className="hidden xl:block w-[250px] h-[620px] bg-[#E2E2EA]" />
      </div>
    </div>
  );
};

export default Hero;
