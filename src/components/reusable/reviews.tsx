import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
type Props = {};

const Reviews = (props: Props) => {
  const [swiper, setSwiper] = useState<any>();
  const reviews = [
    {
      review:
        "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
      name: "Shalima Hayden",
      title: "Product Designer",
    },
    {
      review:
        "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
      name: "Shalima Hayden",
      title: "Product Designer",
    },
    {
      review:
        "Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company",
      name: "Shalima Hayden",
      title: "Product Designer",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-[100%] flex flex-col items-center relative"
    >
      <div className="hidden max-w-7xl w-[100%] absolute md:flex flex-row top-[55%] z-[5] justify-between">
        <button onClick={() => swiper.slidePrev()}>
          <img src={"/left-arrow-orange.png"} className=" w-[30px] h-[40px] " />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <img
            src={"/right-arrow-orange.png"}
            className=" w-[30px] h-[40px] "
          />
        </button>
      </div>

      <div className=" w-[100%] max-w-5xl flex flex-col items-center">
        <h2 className="md:text-[48px] text-[32px] font-bold mb-20">
          What Our Customer Says
        </h2>
        <div className=" md:hidden flex flex-row self-end gap-4 mb-[-25px] z-[5]">
          <button
            onClick={() => swiper.slidePrev()}
            className="w-[40px] h-[40px] bg-black rounded-[50px] flex flex-col items-center justify-center"
          >
            <img
              src={"/left-arrow-orange.png"}
              className=" w-[15px] h-[20px] "
            />
          </button>
          <button
            onClick={() => swiper.slideNext()}
            className="w-[40px] h-[40px] bg-black rounded-[50px] flex flex-col items-center justify-center"
          >
            <img
              src={"/right-arrow-orange.png"}
              className=" w-[15px] h-[20px] "
            />
          </button>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => setSwiper(swiper)}
          centeredSlides={true}
          initialSlide={2}
          loop
          style={{ width: "100%" }}
        >
          {reviews.map((item: any, index: number) => {
            return (
              <SwiperSlide style={{ paddingTop: 40 }}>
                <div className=" flex flex-col py-20  items-center rounded-[8px] md:px-40 px-10 bg-[#FFEFEB]">
                  <div className=" w-[88px] h-[88px] rounded-[50px] bg-[#E2E2EA] absolute z-[100] top-0" />
                  <p className=" text-[16px] text-[#515151] mb-10">
                    {item?.review}
                  </p>
                  <p className=" text-[24px] font-bold mb-2">{item?.name}</p>
                  <p className=" text-[16px] text-[#515151]">{item?.title}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </motion.div>
  );
};

export default Reviews;
