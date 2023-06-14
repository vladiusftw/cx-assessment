import React, { useEffect } from "react";
import Hero from "../components/home/hero";
import Categories from "../components/home/categories";
import NewArrival from "../components/home/newArrival";
import Discount from "../components/reusable/discount";
import GridItems from "../components/reusable/gridItems";
import Reviews from "../components/reusable/reviews";
import { parent } from "../components/reusable/shareable";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="md:pb-52 pb-24">
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
      <div className={parent}>
        <GridItems title="Best Seller" hide={false} limit={4} />
      </div>
      <div className={parent}>
        <Reviews />
      </div>
    </div>
  );
};

export default Home;
