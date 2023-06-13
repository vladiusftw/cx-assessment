import React, { useEffect } from "react";
import Hero from "../components/home/hero";
import Categories from "../components/home/categories";
import NewArrival from "../components/home/newArrival";
import Discount from "../components/reusable/discount";

type Props = {};

const Home = (props: Props) => {
  const parent = "md:pt-40 pt-24 px-6 flex flex-col items-center w-[100%]";
  return (
    <div>
      <div className={parent}>
        <Hero />
      </div>

      <div className={parent}>
        <Categories />
      </div>
      <div className={parent}>
        <NewArrival />
      </div>
      <div className={parent}>
        <Discount />
      </div>
    </div>
  );
};

export default Home;
