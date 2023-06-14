import React from "react";
import Hero from "../components/reusable/hero";
import Main from "../components/shop/main";
import GridItems from "../components/reusable/gridItems";
import { parent } from "../components/reusable/shareable";

type Props = {};

const Shop = (props: Props) => {
  return (
    <div className="md:pb-52 pb-24">
      <div className="md:pt-40 pt-24 flex flex-col w-[100%]">
        <Hero title="Home > Shop" subtitle="Shop" />
      </div>
      <div>
        <Main />
      </div>
      <div className={parent}>
        <GridItems title="Recommended for you" hide limit={8} />
      </div>
    </div>
  );
};

export default Shop;
