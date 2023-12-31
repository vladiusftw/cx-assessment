import React, { useEffect, useState } from "react";
import Hero from "../components/reusable/hero";
import { parent } from "../components/reusable/shareable";
import { useParams, useSearchParams } from "react-router-dom";
import Main from "../components/productDetails/main";
import Info from "../components/productDetails/info";
import Reviews from "../components/reusable/reviews";
import GridItems from "../components/reusable/gridItems";
import axios from "axios";

type Props = {};

const ProductDetail = (props: Props) => {
  const { category, product_title }: any = useParams();
  const [searchParams, setSearchParams]: any = useSearchParams();
  const [item, setItem] = useState<any>();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${searchParams.get("id")}`)
      .then((res) => {
        setItem(res?.data);
        console.log(res.data);
      });
  }, []);
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
        <Main item={item} />
      </div>
      <div className={parent}>
        <Info item={item} />
      </div>
      <div className={parent}>
        <Reviews />
      </div>
      <div className={parent}>
        <GridItems title="Related Items" hide={false} limit={4} />
      </div>
    </div>
  );
};

export default ProductDetail;
