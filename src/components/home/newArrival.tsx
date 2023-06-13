import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

type Props = {};

const NewArrival = (props: Props) => {
  const [items, setItems] = useState([]);
  const isDesktop = useMediaQuery({ query: "(max-width: 1400px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [swiper, setSwiper] = useState<any>();

  useEffect(() => {
    if (isMobile) setSlidesPerView(1);
    else if (isTablet) setSlidesPerView(2.2);
    else if (isDesktop) setSlidesPerView(3.6);
    else setSlidesPerView(4.6);
  }, [isTablet, isMobile, isDesktop]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setItems(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="w-[100%] relative">
      <div className="w-[100%] flex flex-col items-center">
        <div className="flex items-center justify-between mb-8 w-full max-w-[1600px]  self-center ">
          <h2 className=" text-[48px] font-bold">New Arrival</h2>
          <button className="text-[#F86338] text-[24px]">See All</button>
        </div>
      </div>
      <Swiper
        spaceBetween={2}
        slidesPerView={slidesPerView}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => setSwiper(swiper)}
        centeredSlides={true}
        initialSlide={2}
        loop
      >
        {items.map((item: any, index: number) => {
          return (
            <SwiperSlide
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "auto",
                gap: 6,
              }}
            >
              <img
                src={item?.image}
                alt=""
                className=" object-contain w-[296px] h-[296px] mb-6"
              />
              <p className=" text-[14px] text-[#F3692E] capitalize ">
                {item?.category}
              </p>
              <p className=" text-[24px] font-bold text-center line-clamp-1">
                {item?.title}
              </p>
              <p className=" text-[12px]">{item?.category}</p>
              <p className=" text-[24px] font-bold text-[#F3692E]">
                {item?.price}
              </p>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <motion.button
        onClick={() => swiper.slidePrev()}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="absolute z-10 top-[40%] xl:left-[2%] left-0 bg-black w-[65px] h-[65px] flex flex-col items-center justify-center rounded-[50px]"
      >
        <img src={"/left-arrow-orange.png"} className=" w-[40px] h-[40px]" />
      </motion.button>
      <motion.button
        onClick={() => swiper.slideNext()}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.4 }}
        transition={{ duration: 0.5 }}
        className="absolute z-10 top-[40%] xl:right-[2%] right-0 bg-black w-[65px] h-[65px] flex flex-col items-center justify-center rounded-[50px]"
      >
        <img src={"/right-arrow-orange.png"} className=" w-[40px] h-[40px]" />
      </motion.button>
    </div>
  );
};

export default NewArrival;
