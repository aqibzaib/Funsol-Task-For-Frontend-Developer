import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <section className="max-w-[1440px] mx-auto">
      <div className="flex justify-between py-[22px] px-[120px]">
        <div className="flex flex-row gap-[50px]">
          <p className="font-[400] text-[28px] leading-[35.7px] text-[#E57050] cursor-pointer">
            ART GENERATOR
          </p>
          <div className="hidden md:block">
            <ul className="flex justify-between gap-[40px]">
              <Link
                to="/text-to-image"
                className="text-[16px] font-[400] leading-[28px]"
              >
                Photo Editing Tools
              </Link>
              <li className="text-[16px] font-[400] leading-[28px]">
                AI Tools
              </li>
              <li className="text-[16px] font-[400] leading-[28px]">Support</li>
            </ul>
          </div>
        </div>
        <button className="hidden md:block text-[16px] font-[500] text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] bg-gradient-to-r from-[#E57050] to-[#DB2268]  rounded-[12px] cursor-pointer">
          Sign In
        </button>
      </div>
    </section>
  );
};

export default Navbar;
