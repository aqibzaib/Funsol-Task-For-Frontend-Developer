import React from "react";
import ImageGrid from "./ImageGrid";
import ImageGridMobile from "./ImageGridMobile";

const Cards = () => {
  return (
    <section className="max-w-[1440px] mx-auto mt-[52px] px-6 lg:px-[120px] relative ">
      <div className="flex justify-end cursor-pointer absolute right-[60px] bottom-[-35px] ">
        <img src="./Images/ArrowUp.png" alt="up arrow" />
        
      </div>
      <div className="hidden md:block">
        <ImageGrid />
      </div>
      <div className="block md:hidden">
        <ImageGridMobile />
      </div>
    </section>
  );
};

export default Cards;
