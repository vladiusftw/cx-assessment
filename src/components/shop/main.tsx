import axios from "axios";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {};

const Main = (props: Props) => {
  const [maxValue, setMaxValue] = useState(1000);
  const [range, setRange] = useState([0, maxValue]);
  const [categories, setCategories] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [currItems, setCurrItems] = useState<any[]>([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategories(res.data);
    });

    axios.get("https://fakestoreapi.com/products").then((res) => {
      setAllItems(res.data);
      setCurrItems(res.data);
      const max = Math.max(...res?.data?.map((item: any) => item?.price));
      setMaxValue(max);
      setRange([0, max]);
    });
  }, []);

  useEffect(() => {
    checkSort([...currItems]);
  }, [sort]);

  useEffect(() => {
    checkSearch();
  }, [search]);

  useEffect(() => {
    checkSearch();
  }, [range]);

  const checkSearch = async () => {
    const newArr = [
      ...allItems.filter((item: any) =>
        item?.title != "" ? item?.title?.toLowerCase().startsWith(search) : true
      ),
    ];
    const newArr2 = await checkRange([...newArr]);
    checkSort([...newArr2]);
  };

  const checkRange = async (arr: any[]) => {
    const newArr = arr.filter(
      (item: any) => item?.price >= range[0] && item?.price <= range[1]
    );
    return newArr;
  };

  const checkSort = (arr: any[]) => {
    if (sort == "asc")
      setCurrItems([...arr.sort((a: any, b: any) => a.price - b.price)]);
    else if (sort == "desc")
      setCurrItems([...arr.sort((a: any, b: any) => b.price - a.price)]);
  };

  const LinksContainer = {
    hidden: { translateY: "100%" },
    show: {
      translateY: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const LinksListItem = {
    hidden: { opacity: 0, translateX: -100 },
    show: { opacity: 1, translateX: 0 },
  };

  return (
    <div className="w-full ">
      <div className="md:pt-40 pt-24 px-6 flex flex-col items-center w-[100%] ">
        <div className="flex flex-row gap-4 w-full max-w-[1600px]">
          <div className="hidden flex-[1] gap-8 md:flex flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <p className="text-[24px] font-bold">Price</p>
                <button className="">
                  <img src={"/filter.png"} className=" w-[24px] h-[24px]" />
                </button>
              </div>
              {maxValue && (
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, maxValue]}
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  pearling
                  minDistance={1}
                  value={range}
                  max={maxValue}
                  onChange={(value) => setRange(value)}
                />
              )}

              <div className="flex flex-row justify-between w-full">
                <p className="text-[16px]">Range</p>
                <p className="text-[16px]">{`$${range[0]}-$${range[1]}`}</p>
              </div>
            </div>
            <div className="flex flex-col w-full gap-6">
              <p className=" text-[24px] font-bold">Color</p>
              <div className="grid grid-cols-4 w-full gap-y-4">
                {Array.from({ length: 8 }).map(() => {
                  return (
                    <div className="w-[40px] h-[40px] rounded-[50px] bg-[#E2E2EA]" />
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col w-full gap-5">
              <p className=" text-[24px] font-bold">Categories</p>
              {categories.map((item: any, index: number) => {
                return (
                  <button key={index} className=" flex justify-between">
                    <p className="text-[16px] font-semibold">{item}</p>
                    <img
                      src={"/right-arrow-black.png"}
                      className=" w-[16px] h-[16px]"
                    />
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex-[3]">
            <div className=" border-[2px] py-2 px-2 items-center rounded-[4px] border-[#F86338] w-full flex">
              <input
                className="w-full outline-none"
                placeholder="Search products"
                onChange={(e) => setSearch(e.target.value)}
              />
              <img src={"/search.png"} className=" w-[16px] h-[16px]" />
            </div>
            <div className="flex md:flex-row flex-col justify-between mt-8 md:items-center items-start md:gap-0 gap-4">
              <div className="flex md:w-auto w-full flex-row gap-4 justify-between items-center">
                <p className="text-[#9A9AB0]">Showing 1-9 Results</p>
                <button
                  onClick={() => setOpen((prev) => !prev)}
                  className="md:hidden flex"
                >
                  <img src={"/filter.png"} className=" w-[24px] h-[24px]" />
                </button>
              </div>
              <div className="flex w-full gap-8 justify-between">
                <div className="flex w-full md:justify-end gap-4 justify-between items-center">
                  <div className="flex gap-4">
                    <p>Sort by</p>
                    <div className="flex flex-row items-center gap-2">
                      <button
                        onClick={() => setSort("asc")}
                        className=" bg-[#F3692E] rounded-[50px] flex flex-col items-center justify-center w-[30px] h-[30px]"
                      >
                        <img
                          src={"/right-arrow-line.png"}
                          className="w-[24px] h-[24px] rotate-[270deg]"
                        />
                      </button>
                      <button
                        onClick={() => setSort("desc")}
                        className=" bg-[#F3692E] rounded-[50px] flex flex-col items-center justify-center w-[30px] h-[30px]"
                      >
                        <img
                          src={"/right-arrow-line.png"}
                          className="w-[24px] h-[24px] rotate-90"
                        />
                      </button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button>
                      <img src={"/list.png"} className="w-[24px] h-[24px]" />
                    </button>
                    <button>
                      <img src={"/grid.png"} className="w-[24px] h-[24px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-x-4 gap-y-6 mt-12">
              {currItems &&
                currItems.slice(0, 9).map((item: any, index: number) => {
                  return (
                    <Link
                      to={{
                        pathname: `/shop/${item?.category}/${item?.title}`,
                        search: `?id=${item?.id}`,
                      }}
                    >
                      <motion.div
                        key={`${item.id}${search}}`}
                        initial={{
                          opacity: 0,
                          translateX: -100,
                          translateY: -100,
                        }}
                        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative flex py-4 flex-col items-center drop-shadow-lg rounded-[5px] bg-[#E2E2EA]"
                      >
                        <motion.button
                          initial={{
                            scale: 1,
                            backgroundColor: "rgba(255,255,255,1)",
                          }}
                          whileHover={{
                            scale: 1.4,
                            backgroundColor: "rgba(0,0,0,1)",
                          }}
                          className=" z-10 absolute right-[5%] bg-white w-[40px] h-[40px] flex flex-col items-center justify-center rounded-[50px] "
                        >
                          <img
                            src={"/heart-orange.png"}
                            className="w-[24px] h-[24px]"
                          />
                        </motion.button>
                        <img
                          src={item?.image}
                          alt=""
                          className=" object-contain mix-blend-multiply w-[296px] h-[296px] mb-6"
                        />
                        <p className=" text-[14px] text-[#F3692E] capitalize ">
                          {item?.category}
                        </p>
                        <p className=" max-w-[300px] text-[24px] font-bold text-center line-clamp-1">
                          {item?.title}
                        </p>
                        <p className=" text-[12px]">{item?.category}</p>
                        <p className=" text-[24px] font-bold text-[#F3692E]">
                          ${item?.price}
                        </p>
                      </motion.div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={"hidden"}
            animate={"show"}
            transition={{ stiffness: 2, duration: 0.5 }}
            exit={"hidden"}
            variants={LinksContainer}
            className=" z-10 md:hidden flex flex-col items-center justify-center gap-16 self-start h-screen w-full fixed top-0 bg-[#F86338]"
          >
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="md:hidden flex absolute top-[2.5%] right-[2.5%]"
            >
              <img src={"/close.png"} className=" w-[40px] h-[30px]" />
            </button>
            <div className="flex flex-col gap-12 w-full px-12">
              <div className="flex flex-row justify-between">
                <p className="text-[24px] font-bold">Price</p>
                <button className="">
                  <img src={"/filter.png"} className=" w-[24px] h-[24px]" />
                </button>
              </div>
              {maxValue && (
                <ReactSlider
                  className="horizontal-slider"
                  thumbClassName="example-thumb"
                  trackClassName="example-track"
                  defaultValue={[0, maxValue]}
                  ariaLabel={["Lower thumb", "Upper thumb"]}
                  ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
                  pearling
                  minDistance={1}
                  value={range}
                  max={maxValue}
                  onChange={(value) => setRange(value)}
                />
              )}

              <div className="flex flex-row justify-between w-full">
                <p className="text-[16px]">Range</p>
                <p className="text-[16px]">{`$${range[0]}-$${range[1]}`}</p>
              </div>
              <div className="flex flex-col w-full gap-6">
                <p className=" text-[24px] font-bold">Color</p>
                <div className="grid grid-cols-4 w-full gap-y-4">
                  {Array.from({ length: 8 }).map(() => {
                    return (
                      <div className="w-[40px] h-[40px] rounded-[50px] bg-[#E2E2EA]" />
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col w-full gap-5">
                <p className=" text-[24px] font-bold">Categories</p>
                {categories.map((item: any, index: number) => {
                  return (
                    <button key={index} className=" flex justify-between">
                      <p className="text-[16px] font-semibold">{item}</p>
                      <img
                        src={"/right-arrow-black.png"}
                        className=" w-[16px] h-[16px]"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Main;
