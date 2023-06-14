import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Discount = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateX: 180 }}
      whileInView={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 1 }}
      className="w-[100%] max-w-7xl md:py-40 py-20 bg-[#F86338]"
    >
      <div className=" flex flex-col items-center justify-center text-white gap-8">
        <p className="text-[24px] font-bold">March Discount</p>
        <p className="md:text-[64px] text-[40px] font-bold text-center">
          Up to 70% off
        </p>
        <button className="bg-white flex flex-row items-center px-6 py-4 rounded-[8px]">
          <p className="text-[#7A6005] text-[16px] font-bold">Got it</p>
          <img src={"/right-arrow-brown.png"} className=" w-[24px] h-[24px]" />
        </button>
      </div>
    </motion.div>
  );
};

export default Discount;
