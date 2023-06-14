import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  item: any;
};

const Main = (props: Props) => {
  const {item} = props;

  
  return (
    <motion.div
      initial={{ translateX: -100, translateY: -100, opacity: 0 }}
      whileInView={{ translateX: 0, translateY: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[1600px] flex flex-col items-center"
    >
      <div className="grid md:grid-cols-2 w-full gap-6">
        <div className="flex w-full gap-2">
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((item2: any, index: number) => {
              return (
                <div className="bg-[#E2E2EA] p-2 ">
                  <img
                    src={item?.image}
                    className=" object-contain mix-blend-multiply w-[126px] h-[126px]"
                  />
                </div>
              );
            })}
          </div>
          <div className="bg-[#E2E2EA] p-2 ">
            <img
              src={item?.image}
              className=" object-contain mix-blend-multiply w-[608px] h-[560px]"
            />
          </div>

          <img />
        </div>
        <div className="w-full flex flex-col gap-6 ">
          <h1 className=" text-[48px] font-bold">{item?.title}</h1>
          <div className="flex md:gap-4 gap-2">
            <p className=" text-[#515151] font-bold">Availability:</p>
            <p className="font-bold">48 in stocks</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-[39px] text-[#F3692E]">${item?.price}</p>
            <p className="font-bold line-through text-[#9A9AB0]">
              ${item?.price + 500}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex  gap-6">
              <p className="flex-[1]">SKU</p>
              <p className="flex-[6]">: AA0031</p>
            </div>
            <div className="flex gap-6">
              <p className="flex-[1]">Category</p>
              <p className="flex-[6]">: {item?.category}</p>
            </div>
            <div className="flex gap-6">
              <p className="flex-[1]">Tags</p>
              <p className="flex-[6]">: Fashion, Classic, Blouses, Dresses</p>
            </div>
          </div>

          <div></div>
          <div className="flex gap-2">
            <motion.button
              initial={{ backgroundColor: "rgba(248, 99, 56, 1)" }}
              whileHover={{ backgroundColor: "rgba(0,0,0,1)" }}
              className="flex gap-2 py-4 px-6 rounded-[8px]"
            >
              <p className="text-white">Add to Cart</p>
              <img src={"/cart-white.png"} className=" w-[24px] h-[24px]" />
            </motion.button>
            <motion.button
              initial={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
              whileHover={{ backgroundColor: "rgba(0,0,0,1)" }}
              className=" w-[56px] h-[56px] flex flex-col items-center justify-center border-[2px] border-[#F86338] rounded-[8px]"
            >
              <img src={"/star.png"} className="w-[24px] h-[24px]" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
