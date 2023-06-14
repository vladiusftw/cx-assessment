import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const socials = [
    {
      title: "Facebook",
      link: "/",
    },
    {
      title: "Twitter",
      link: "/",
    },
    {
      title: "Instagram",
      link: "/",
    },
    {
      title: "Youtube",
      link: "/",
    },
  ];
  return (
    <div className=" text-white w-full flex flex-col items-center bg-[#F86338]">
      <div className="md:py-16 py-8 w-full max-w-[1600px] md:px-6 px-4">
        <img src={"/logo-white.png"} className=" w-[240px] h-[96px]" />
        <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-8">
          <div className="max-w-[500px]">
            <p className="text-[16px]">
              OurStudio is a digital agency UI / UX Design and Website
              Development located in Ohio, United States of America
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-bold">Our Social Media</p>
              {socials.map((item: any, index: number) => {
                return (
                  <a key={index}>
                    <p>{item?.title}</p>
                  </a>
                );
              })}
            </div>
            <div className="flex flex-col gap-8 md:mt-0 pt-6">
              <p className="text-[16px] font-bold">Contact</p>
              <div className="flex md:gap-4 gap-2 items-center">
                <img src={"/pin.png"} className="w-[24px] h-[24px]" />
                <p className=" text-[16px]">
                  8819 Ohio St. South Gate, California 90280
                </p>
              </div>
              <div className="flex md:gap-4 gap-2 items-center ">
                <img src={"/mail.png"} className="w-[24px] h-[24px]" />
                <p className=" text-[16px]">ourstudio@hello.com</p>
              </div>
              <div className="flex md:gap-4 gap-2 items-center">
                <img src={"/phone-white.png"} className="w-[24px] h-[24px]" />
                <p className=" text-[16px]">+271 386-647-3637</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
