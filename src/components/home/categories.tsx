import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const Categories = (props: Props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });
  }, []);
  const categoriesContainer = {
    hidden: { width: 0 },
    show: {
      width: "100%",
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const categoriesListItem = {
    hidden: { opacity: 0, translateX: -100, translateY: -100 },
    show: { opacity: 1, translateX: 0, translateY: 0 },
  };

  return (
    <div className="w-[100%] max-w-[1600px]">
      <motion.div
        variants={categoriesContainer}
        initial={"hidden"}
        whileInView={"show"}
        className="grid lg:grid-cols-3 md:grid-cols-2 gap-4"
      >
        {categories.map((item: any, index: any) => {
          return (
            <motion.a
              variants={categoriesListItem}
              className="h-[560px] bg-[#E2E2EA] px-8 flex flex-col gap-4 justify-end pb-8"
            >
              <p className="text-[48px] capitalize font-bold">{item}</p>
              <p className="text-[16px] text-[#9A9AB0] mb-8 leading-[20px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <motion.button
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.4 }}
                transition={{ duration: 0.2, stiffness: 2 }}
                className=" w-[40px] h-[40px] flex flex-col items-center justify-center rounded-[28px] bg-[#F86338] "
              >
                <img
                  src={"/right-arrow-line.png"}
                  className=" w-[24px] h-[24px]"
                />
              </motion.button>
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Categories;
