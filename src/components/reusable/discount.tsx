import React from "react";

type Props = {};

const Discount = (props: Props) => {
  return (
    <div className="w-[100%] max-w-7xl md:py-40 py-24 bg-[#F86338]">
      <div className=" flex flex-col items-center justify-center text-white gap-8">
        <p className="text-[24px] font-bold">March Discount</p>
        <p className="text-[64px] font-bold text-center">Up to 70% off</p>
        <button className="bg-white flex flex-row items-center px-6 py-4 rounded-[8px]">
          <p className="text-[#7A6005] text-[16px] font-bold">Got it</p>
          <img src={"/right-arrow-brown.png"} className=" w-[24px] h-[24px]" />
        </button>
      </div>
    </div>
  );
};

export default Discount;
