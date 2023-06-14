import React from "react";

type Props = {
  item: any;
};

const Info = (props: Props) => {
  const { item } = props;
  return (
    <div className="w-full max-w-[1600px] border-t-2 border-t-[#E1E1E1]">
      <div className="grid grid-cols-5 mt-8 gap-8">
        <div className=" md:col-span-3 col-span-5 flex flex-col gap-4">
          <p className="text-[24px] font-bold">Description</p>
          <p className="text-[#515151]">{item?.description}</p>
        </div>
        <div className=" md:col-span-2 col-span-5">
          <p className="text-[24px] font-bold">Fabric Details</p>
          <div className="flex flex-col gap-4 mt-4">
            {[
              "100% Cotton",
              "Quick Dry",
              "Ties as Shoulder",
              "Accusantium doloremque ",
            ].map((item: any, index) => {
              return (
                <div className="flex gap-4">
                  <img src={"/check.png"} className={" w-[20px] h-[20px]"} />
                  <p className="text-[#515151]">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
