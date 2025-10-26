import { FaTruckFast } from "react-icons/fa6";

const page = () => {
  return (
    <div className="px-[30px]">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 py-[80px] lg:px-[30px]">
        <div className="">
          <p className="flex flex-row items-center gap-2 text-[12px]">
            <FaTruckFast /> FREE DELIVERY WORLDWIDE
          </p>
          <h1 className="text-[50px] leading-tight lg:text-[68px]">
            Love Your Skin, Every Day
          </h1>
          <p className="mt-3">
            Elevate Your Glow with Clean, Science-Backed Skincare-Cruelty-Free,
            Sustainable, and Packed with Antioxidants for Skin That Looks
            Healthy at Every Age
          </p>

          {/* Buttons */}
          <div className="flex items-center mt-5 gap-4">
            <button className="blackButton">Order Now</button>

            <button className="font-semibold cursor-pointer">
              Find Out More
            </button>
          </div>
        </div>

        <div className="bg-blue-300">Image</div>
      </section>
    </div>
  );
};

export default page;
