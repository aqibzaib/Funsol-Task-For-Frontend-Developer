import React from "react";

const Tabs = () => {
  return (
    <section className="max-w-[1094px] mx-auto hidden md:block ">
      <div className="flex justify-between">
        <button className="text-[16px] border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] hover:text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer">
        Realistic
        </button>
    <button className="text-[16px] border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] hover:text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer">
    Science Fiction
    </button>
        <button className="text-[16px] border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] hover:text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer">
        Cartoon
        </button>
        <button className="text-[16px] border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] hover:text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer">
        Anime
        </button>
        <button className="text-[16px] border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] hover:text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer">
        Oil Painting
        </button>
        <button className="text-[16px] border-[1px] duration-300 ease-linear border-[#666666] font-[500] text-[#666666] hover:text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] flex items-center rounded-[12px] cursor-pointer">
        Landscape
        </button>
      </div>
    </section>
  );
};

export default Tabs;
