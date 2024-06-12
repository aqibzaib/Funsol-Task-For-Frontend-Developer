import React from 'react'

const Header = () => {
  return (
<>
<section className="max-w-[1440px] mx-auto ">
    <div className="flex justify-between py-[22px] px-[120px]">
     <div className="flex flex-row gap-[50px]">
     <p className="font-[400] text-[28px] leading-[35.7px] text-[#E57050] cursor-pointer">
        ART GENERATOR
      </p>
      <div className="hidden md:block">
        <div className="flex justify-between gap-[40px]">
        <button className="text-[16px]  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
        Text to image
        </button>
        <button className="text-[16px]  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
        Image to image
        </button>
        <button className="text-[16px]  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
        AI Avatar
        </button>
        <button className="text-[16px]  duration-300 ease-linear  font-[500] text-[#999999] hover:text-[#FA5711] leading-[27px] px-[29px] pt-[11px] pb-[11px] hover:bg-[#FA57111A] flex items-center rounded-[5px] cursor-pointer bg-[#9999991A]">
        Face Swap
        </button>
        </div>
      </div>
     </div>
      <button className="hidden md:block text-[16px] font-[500] text-[#FFFFFF] leading-[27px] px-[29px] pt-[11px] pb-[11px] bg-gradient-to-r from-[#E57050] to-[#DB2268]  rounded-[12px] cursor-pointer">
        Sign In
      </button>
    </div>
    
  </section>
  <div className='bg-[#EEEEEE] h-[1px] w-full'></div>
  </>
  )
}

export default Header