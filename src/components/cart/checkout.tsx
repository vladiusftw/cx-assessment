import { motion } from "framer-motion";

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className="w-full max-w-[1600px] flex flex-col gap-12">
      <p className="text-[48px] font-bold">Checkout</p>
      <div className="flex flex-col gap-8">
        <p className="text-[31px] font-bold">Customer Email</p>
        <div className="flex flex-col gap-4">
          <p className="md:text-[24px] text-[16px]  font-bold">Email Address</p>
          <input
            placeholder="Email address"
            className="w-full px-4 rounded-[8px] border-[#F86338] py-4 border-[2px]"
          />
          <p className="md:text-[24px] text-[16px]  text-[#9A9AB0]">
            Already have an account? Sign in
          </p>
        </div>
        <p className="text-[31px] font-bold mt-4">Shipping Address</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <p className="md:text-[24px] text-[16px]  font-bold">First Name</p>
            <input
              placeholder="Email address"
              className="w-full rounded-[8px] px-4 border-[#F86338] py-4 border-[2px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="md:text-[24px] text-[16px]  font-bold">Last Name</p>
            <input
              placeholder="Email address"
              className="w-full rounded-[8px] px-4 border-[#F86338] py-4 border-[2px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="md:text-[24px] text-[16px]  font-bold">Address Line</p>
          <textarea
            placeholder="Address line"
            className="w-full px-4 rounded-[8px] border-[#F86338] pt-4 md:pb-32 pb-20 border-[2px]"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="md:text-[24px] text-[16px]  font-bold">Country</p>
          <input
            placeholder="Indonesia"
            className="w-full px-4 rounded-[8px] border-[#F86338] py-4 border-[2px]"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <p className="md:text-[24px] text-[16px]  font-bold">Postal Code</p>
            <input
              placeholder="Email address"
              className="w-full rounded-[8px] px-4 border-[#F86338] py-4 border-[2px]"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="md:text-[24px] text-[16px] font-bold">Phone Number</p>
            <input
              placeholder="Email address"
              className="w-full rounded-[8px] px-4 border-[#F86338] py-4 border-[2px]"
            />
          </div>
          <p className="text-[31px] font-bold mt-6 col-span-2">
            Billing Address
          </p>
          <div className="flex gap-6 col-span-2">
            <img src={"/check.png"} className="w-[40px] h-[40px]" />
            <p className="md:text-[24px] text-[16px]  text-[#F86338]">
              Same as shipping address
            </p>
          </div>
          <motion.button
            initial={{ backgroundColor: "rgba(248, 99, 56, 1)" }}
            whileHover={{ backgroundColor: "rgba(0,0,0,1)" }}
            className="py-4 col-span-2 text-white rounded-[8px] flex flex-col items-center justify-center"
          >
            Continue
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
