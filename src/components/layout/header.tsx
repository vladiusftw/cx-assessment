import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  useAnimate,
  motion,
  stagger,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useLocation } from "react-router-dom";

type Props = {};

const Header = (props: any) => {
  const [isOpen, setOpen] = useState(false);
  const [socialsIsOpen, setSocialsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(-1000, -1000);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) setScrolled(true);
    else setScrolled(false);
  });

  const Socialscontainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const SocialslistItem = {
    hidden: { translateY: 0, opacity: 0 },
    show: { translateY: 10, opacity: 1 },
  };

  const LinksContainer = {
    hidden: { width: 0 },
    show: {
      width: "100%",
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

  const socials = [
    {
      title: "Fb",
      link: "",
    },
    {
      title: "Tw",
      link: "",
    },
    {
      title: "Ig",
      link: "",
    },
    {
      title: "Yt",
      link: "",
    },
  ];

  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "FAQ",
      link: "/faq",
    },
    {
      title: "Blog",
      link: "/blog",
    },
  ];
  return (
    <div
      className={`z-10 flex flex-col items-center fixed w-[100%] ${
        isScrolled ? "bg-[#F86338]" : ""
      }`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={"hidden"}
            animate={"show"}
            transition={{ stiffness: 2, duration: 0.5 }}
            exit={"hidden"}
            variants={LinksContainer}
            className=" z-10 md:hidden flex flex-col items-center justify-center gap-16 self-start h-screen absolute bg-[#F86338]"
          >
            {links.map((item: any, index: number) => {
              return (
                <motion.a key={index} href={item.link} variants={LinksListItem}>
                  <p
                    className={` text-3xl ${
                      location.pathname == item.link ? " font-bold" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
      <div className=" hidden py-6 px-6 md:flex md:flex-col items-center w-[100%]">
        <div className="w-full max-w-[1600px]">
          <div className=" grid grid-cols-3 w-full">
            <div className="flex items-center">
              <img src={"/phone.png"} className=" w-[24px] h-[24px] mr-2" />
              <p>+022 319 821 967</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={"/logo.png"} className=" w-[166.58px] h-[32.63px]" />
            </div>
            <div className=" flex flex-col items-end">
              <div className="flex justify-between gap-4">
                {socials.map((item: any, index: number) => {
                  return (
                    <div className=" w-[40px] h-[40px] border-[1px] border-black rounded-[50px] flex flex-col items-center justify-center">
                      <p>{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between w-full mt-8">
            <div className="flex flex-row gap-12">
              {links.map((item: any, index: number) => {
                return (
                  <a href={item.link} key={index}>
                    <p
                      className={`text-[16px] ${
                        location.pathname == item.link ? "font-bold" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                  </a>
                );
              })}
            </div>
            <div className="flex flex-row gap-6">
              <img src={"/heart.png"} className=" w-[32px] h-[32px]" />
              <img src={"/cart.png"} className=" w-[32px] h-[32px]" />
              <img src={"/profile.png"} className=" w-[32px] h-[32px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden block w-full px-2 py-4">
        <div className="grid grid-cols-3 align-top relative">
          <div className=" z-20">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={"/logo.png"}
              className=" w-[166.58px] h-[32.63px] object-contain"
            />
          </div>
          <div className="absolute right-0 flex  justify-start gap-2">
            <div className="mt-1">
              <img src={"/cart.png"} className=" w-[32px] h-[32px]" />
            </div>
            <div>
              <button
                className=" bg-[#F86338] w-[40px] h-[40px] border-[1px] border-black rounded-[50px] flex flex-col items-center justify-center"
                onClick={() => setSocialsOpen((val) => !val)}
              >
                <p>{"S"}</p>
              </button>
              <AnimatePresence>
                {socialsIsOpen && (
                  <motion.div
                    variants={Socialscontainer}
                    initial="hidden"
                    animate="show"
                    exit={"hidden"}
                  >
                    {socials.map((item: any, index: number) => {
                      return (
                        <motion.div
                          key={index}
                          variants={SocialslistItem}
                          className=" bg-[#F86338] w-[40px] h-[40px] border-[1px] mt-4 border-black rounded-[50px] flex flex-col items-center justify-center"
                        >
                          <p>{item.title}</p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
