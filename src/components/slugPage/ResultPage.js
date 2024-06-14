import React from "react";
import Header from "../creations/Header";
import BackArrowAvg from "../../assets/images/img_27.png";
import myImage from "../../assets/images/img_06.png";

const ResultPage = () => {
  return (
    <section className="max-w-[375px] mx-auto">
      <div className="flex justify-between px-[16px] py-[10px]">
        <p className="font-audiowide font-[400] text-[16px] leading-[35.7px] bg-clip-text text-transparent bg-gradient-to-r from-[#E57050] to-[#DB2268] cursor-pointer">
          ART GENERATOR
        </p>
        <img
          src="./Images/man.png"
          alt="loading..."
          className=" w-[20px] h-[20px] mt-[10px]"
        />
      </div>
      <div className="h-[1px] w-full bg-[#EEEEEE]"></div>
      <div className="px-[20px]">
        <div className="flex items-center mt-[17px]  gap-[14px]">
          <img
            src={BackArrowAvg}
            alt="loading..."
            className="w-[5.46px] h-[9.26px]"
          />
          <p className="text-[12px] font-[500] leading-[18px]">Result</p>
        </div>
        <img
          src={myImage}
          alt="loading..."
          className="w-[335px] h-[335px] mt-[17px]"
        />
        <p className="text-[10px] font-[600] leading-[20px] text-[#666666] mt-[20px] mb-[10px]">
          Prompt
        </p>
        <p className="border-[#FA57111A] border-[1px] p-[10px] rounded-[10px] text-[12px] font-[400]">
          A painting of a woman with long hair, by Mandy Jurgens, charlie
          bowater at art style, charlie bowater rich deep colors, trending in
          art station
        </p>
        <div className="flex gap-[15px] mt-[150px]">
            <button className="border-[1px] border-[#FA5711] rounded-[10px] px-[56px] py-[10px] text-[#FA5711] text-[16px] font-[500] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] hover:text-white duration-300 ease-linear">Share</button>
            <button className="border-[1px] border-[#FA5711] rounded-[10px] px-[56px] py-[10px] text-[#FA5711] text-[16px] font-[500] hover:bg-gradient-to-r from-[#E57050] to-[#DB2268] hover:text-white duration-300 ease-linear">Share</button>
        </div>
      </div>
    </section>
  );
};

export default ResultPage;
