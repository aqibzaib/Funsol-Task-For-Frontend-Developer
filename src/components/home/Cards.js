import React from "react";
import img_13 from "../../assets/images/img_13.png";
import img_14 from "../../assets/images/img_14.png";
import img_15 from "../../assets/images/img_15.png";
import img_16 from "../../assets/images/img_16.png";
import img_17 from "../../assets/images/img_17.png";
import img_18 from "../../assets/images/img_18.png";
import img_19 from "../../assets/images/img_19.png";
import img_20 from "../../assets/images/img_20.png";
import img_21 from "../../assets/images/img_21.png";
import img_22 from "../../assets/images/img_22.png";
import img_23 from "../../assets/images/img_23.png";
import img_24 from "../../assets/images/img_24.png";
import img_25 from "../../assets/images/img_25.png";
import img_26 from "../../assets/images/img_26.png";

const Cards = () => {
  const data = [
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
    {
      img: "./Images/Rectangle 30.png",
      tagline: "A painting of a woman with long hairs",
    },
  ];
  return (
    <section className="max-w-[1440px] mx-auto mt-[52px] px-6 lg:px-[120px] relative ">
      {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[24px]'>
  {data.map((item, index) => {
    return(
        <div key={index} className=''>
          <img src={item?.img} alt={item?.tagline} />
          <p className='mt-[8px] text-[18px] font-[400] text-center px-[40px]'>{item?.tagline}</p>
        </div>
    )   
   })}
  </div> */}
      <div className="flex justify-end cursor-pointer absolute right-[60px] bottom-[-35px] ">
        <img src="./Images/ArrowUp.png" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
        <img
          src={img_13}
          alt="loading"
          className="w-w-[196px] h-full md:h-[280px]  rounded-lg md:w-[280px] object-cover"
        />
        <div className="flex flex-col md:flex-row gap-[2 rounded-lg 4px]">
          <img
            src={img_14}
            alt="loading"
            className="w-full md:w-full h-[104px] md:h- rounded-lg [280px] object-cover"
          />
          <img
            src={img_15}
            alt="loading"
            className="w-full md:w-full h-[104px] md:h- rounded-lg [280px] object-cover"
          />
        </div>
        <img
          src={img_16}
          alt="loading"
          className="w-[250px] h-[280px] object-cover rounded-lg "
        />
        <img
          src={img_17}
          alt="loading"
          className="w-[250px] h-[280px] object-cover rounded-lg "
        />
        <img
          src={img_18}
          alt="loading"
          className="w-[250px] h-[280px] object-cover rounded-lg "
        />
        <img
          src={img_19}
          alt="loading"
          className="w-[250px] h-[280px] object-cover rounded-lg "
        />
        <img
          src={img_20}
          alt="loading"
          className="w-[250px] h-[280px] object-cover rounded-lg "
        />
        <img
          src={img_21}
          alt="loading"
          className="w-[250px] h-[280px] object-cover rounded-lg "
        />
        <img
          src={img_22}
          alt="loading"
          className="w-[250px] h-[280px] object-cover rounded-lg "
        />
        <img
          src={img_22}
          alt="loading"
          className="w-[250px] h-[280px] object-cover rounded-lg "
        />
      </div>
    </section>
  );
};

export default Cards;
