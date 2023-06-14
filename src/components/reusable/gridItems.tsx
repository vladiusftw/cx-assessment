import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  hide: boolean;
  limit: number;
  title: string;
};

const GridItems = (props: Props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products?limit=${props?.limit}`)
      .then((res) => {
        setItems(res.data);
      });
  }, []);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, translateX: -100, translateY: -100 },
    show: { opacity: 1, translateX: 0, translateY: 0 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, translateX: -100 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[100%] flex flex-col items-center max-w-[1600px]"
    >
      <h2 className=" md:text-[48px]  md:mb-14 mb-8 text-[32px] font-bold flex flex-col self-start">
        {props?.title}
      </h2>
      <motion.div
        variants={container}
        initial={"hidden"}
        whileInView={"show"}
        className="grid xl:grid-cols-4  md:grid-cols-2 grid-cols-1 w-[100%] gap-4"
      >
        {items.map((item: any, index: number) => {
          return (
            <Link
              to={{
                pathname: `/shop/${item?.category}/${item?.title}`,
                search: `?id=${item?.id}`,
              }}
            >
              <motion.div
                variants={listItem}
                className="relative flex py-4 flex-col items-center drop-shadow-lg rounded-[5px] bg-[#E2E2EA]"
              >
                <motion.button
                  initial={{ scale: 1, backgroundColor: "white" }}
                  whileHover={{ scale: 1.4, backgroundColor: "black" }}
                  className={` ${
                    props?.hide ? "hidden" : "block"
                  } z-10 absolute right-[5%] bg-white w-[40px] h-[40px] flex flex-col items-center justify-center rounded-[50px] `}
                >
                  <img
                    src={"/heart-orange.png"}
                    className="w-[24px] h-[24px]"
                  />
                </motion.button>
                <img
                  src={item?.image}
                  alt=""
                  className=" object-contain mix-blend-multiply w-[296px] h-[296px] mb-6"
                />
                <p className=" text-[14px] text-[#F3692E] capitalize ">
                  {item?.category}
                </p>
                <p className=" max-w-[300px] text-[24px] font-bold text-center line-clamp-1">
                  {item?.title}
                </p>
                <p className=" text-[12px]">{item?.category}</p>
                <p className=" text-[24px] font-bold text-[#F3692E]">
                  ${item?.price}
                </p>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default GridItems;
