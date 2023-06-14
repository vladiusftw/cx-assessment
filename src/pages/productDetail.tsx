import React from "react";
import Hero from "../components/reusable/hero";
import { parent } from "../components/reusable/shareable";
import { useParams, useSearchParams } from "react-router-dom";
import Main from "../components/productDetails/main";
import Info from "../components/productDetails/info";
import Reviews from "../components/reusable/reviews";

type Props = {};

const ProductDetail = (props: Props) => {
  const { category, product_title }: any = useParams();
  const { id }: any = useSearchParams();
  return (
    <div className="md:pb-52 pb-24">
      <div className={parent}>
        <Hero
          title={`Home > Shop > ${
            category?.charAt(0).toUpperCase() + category?.substring(1)
          } > ${product_title
            .split("%20")
            .map(
              (item: string) => item.charAt(0).toUpperCase() + item.substring(1)
            )
            .join(" ")}`}
          subtitle={product_title
            .split("%20")
            .map(
              (item: string) => item.charAt(0).toUpperCase() + item.substring(1)
            )
            .join(" ")}
        />
      </div>
      <div className={parent}>
        <Main item_id={id} />
      </div>
      <div className={parent}>
        <Info />
      </div>
      <div className={parent}>
        <Reviews />
      </div>
    </div>
  );
};

export default ProductDetail;
