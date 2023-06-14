import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {};

const Main = (props: Props) => {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    const res1 = await axios.get("https://fakestoreapi.com/carts/1");

    const products = res1?.data?.products;

    const temp: any[] = [];
    for (var product of products) {
      const res2 = await axios.get(
        `https://fakestoreapi.com/products/${product?.productId}`
      );
      temp.push(res2?.data);
    }
    setItems([...temp]);
  };

  return (
    <div className="w-full max-w-[1600px] flex flex-col gap-12">
      <h1 className="text-[48px] font-bold">Cart</h1>
      <div className="flex flex-col">
        <div className="flex px-10  bg-[#F86338] rounded-[8px] text-white py-4">
          <p className="text-start text-[24px] font-bold flex-[2]">
            Product Name
          </p>
          <p className="hidden md:block text-center text-[24px] font-bold flex-[1]">
            Price
          </p>
          <p className="hidden lg:block text-center text-[24px] font-bold flex-[1]">
            Quantity
          </p>
          <p className="text-center text-[24px] font-bold flex-[1]">Total</p>
        </div>
        <div className="flex flex-col gap-8 mt-8">
          {items.length != 0 &&
            items.map((item: any, index: number) => {
              return (
                <div className="flex px-10 ">
                  <div className="flex sm:flex-[2] flex-[0.5] overflow-clip items-center">
                    <img src={item?.image} className="w-[80px] h-[80px]" />
                    <p className="hidden sm:block text-[24px] font-bold truncate">
                      {item?.title}
                    </p>
                  </div>
                  <div className="hidden lg:flex flex-[1] flex-col items-center  justify-center">
                    <p className="text-[24px] font-bold">${item?.price}</p>
                  </div>
                  <div className="cart-item hidden flex-[1] flex-col items-center  justify-center">
                    <p className="text-[24px] font-bold">${item?.price}x2</p>
                  </div>

                  <div className="hidden lg:flex flex-[1] flex-col items-center justify-center">
                    <p className="text-[24px] font-bold">2</p>
                  </div>
                  <div className="flex flex-[1] flex-row items-center md:justify-center">
                    <div className="flex flex-col flex-[1.6] md:items-end items-start">
                      <div className="md:hidden flex items-end flex-col justify-center">
                        <p className="text-[24px] font-bold w-full">
                          ${item?.price}x2
                        </p>
                      </div>
                      <p className="text-[24px] text-end font-bold flex-[1.6] ">
                        ${item?.price * 2}
                      </p>
                    </div>

                    <button className="w-full flex-col items-end md:flex-[1]">
                      <img src={"/bin.png"} className=" w-[24px] h-[24px]" />
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-24 mt-12">
        <div className="bg-[#FFEFEB] md:py-0 py-12 md:order-none order-1 rounded-[8px] justify-center px-8 flex flex-col gap-10">
          <p className="text-[24px] font-bold">Have a Coupon?</p>
          <input
            className="w-full border-[#F86338] border-[2px] py-4 px-4 bg-transparent rounded-[8px]"
            placeholder="Input your email here"
          />
          <motion.button
            initial={{ backgroundColor: "rgba(248, 99, 56, 1)" }}
            whileHover={{ backgroundColor: "rgba(0,0,0,1)" }}
            className="py-4 text-white max-w-[200px] rounded-[8px] flex flex-col items-center justify-center"
          >
            Apply Coupon
          </motion.button>
        </div>
        <div>
          <p className="text-[24px] font-bold">Cart Totals</p>
          <div className=" grid grid-cols-3 gap-y-12 mt-8">
            <p className="text-[16px] font-bold">Subtotal</p>
            <p className=" col-span-2">
              ${items.reduce((n, { price }) => n + price * 2, 0)}
            </p>
            <p className="text-[16px] font-bold">Shipping</p>
            <p className=" col-span-2">Free Shipping</p>
            <div />
            <div className=" col-span-2 flex gap-16">
              <p>Shipping to Sidney</p>
              <button className="text-[#F3692E]">Change</button>
            </div>
            <p className="text-[16px] font-bold">Total</p>
            <p className=" col-span-2 font-bold">
              ${items.reduce((n, { price }) => n + price * 2, 0)}
            </p>
            <motion.button
              initial={{ backgroundColor: "rgba(248, 99, 56, 1)" }}
              whileHover={{ backgroundColor: "rgba(0,0,0,1)" }}
              className="py-4 text-white rounded-[8px] col-span-3 flex flex-col items-center justify-center"
            >
              Checkout
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
