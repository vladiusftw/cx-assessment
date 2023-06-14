import React from "react";

type Props = {
  title: string | undefined;
  subtitle: string | undefined;
};

const Hero = (props: Props) => {
  return (
    <div className=" w-[100%] max-w-[1780px] pl-6 self-end flex md:flex-row flex-col justify-between gap-4 lg:h-[400px]">
      <div className="flex flex-col md:gap-12 gap-2 md:mt-20 mt-2 flex-[1]">
        <p className=" max-w-[800px] truncate whitespace-nowrap text-[24px] font-bold text-[#333333]">
          {props?.title}
        </p>
        <h1 className=" text-[48px] max-w-md w-[100%] font-bold leading-[57px]">
          {props?.subtitle}
        </h1>
      </div>

      <div className="flex gap-4 md:mt-0 mt-4 w-full flex-[3]">
        <div className="w-full md:h-[400px] h-[300px] bg-[#E2E2EA]" />
      </div>
    </div>
  );
};

export default Hero;
