import React, { useEffect } from "react";
import { parent } from "../components/reusable/shareable";
import Hero from "../components/reusable/hero";
import GridItems from "../components/reusable/gridItems";
import Main from "../components/cart/main";
import Checkout from "../components/cart/checkout";

type Props = {};

const Cart = (props: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="md:pb-52 pb-24">
      <div className={parent}>
        <Hero title="Home > Shopping Bag" subtitle="Shopping Bag" />
      </div>
      <div className={parent}>
        <Main />
      </div>
      <div className={parent}>
        <Checkout />
      </div>
      <div className={parent}>
        <GridItems title="Related Items" hide={false} limit={4} />
      </div>
    </div>
  );
};

export default Cart;
