import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  item_id: string;
};

const Main = (props: Props) => {
  const [item, setItem] = useState<any>();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/1").then((res) => {
      setItem(res?.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div className="w-full max-w-[1600px] flex flex-col items-center">
      <div className="grid md:grid-cols-2 w-full">
        <div className="flex w-full gap-2">
          <div className="flex flex-col gap-2">
            {Array.from({ length: 4 }).map((item2: any, index: number) => {
              return (
                <div className="bg-[#E2E2EA] p-2 ">
                  <img
                    src={item?.image}
                    className=" mix-blend-multiply w-[88px] h-[126px]"
                  />
                </div>
              );
            })}
          </div>
          <div className="bg-[#E2E2EA] p-2 ">
            <img
              src={item?.image}
              className=" mix-blend-multiply w-[608px] h-[560px]"
            />
          </div>

          <img />
        </div>
        <div className="w-full "></div>
      </div>
    </div>
  );
};

export default Main;
