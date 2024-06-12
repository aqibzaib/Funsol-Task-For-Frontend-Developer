import React from 'react';

export const ModelAndStyle = () => {
    const myCards = [
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
        { img: "./Images/Rectangle 30.png", title: "ICON" },
        { img: "./Images/Render.png", title: "ICON" },
    ];

    return (
        <section className='relative'>
            <div className='flex items-center gap-[5px] mt-[20px] mb-[15px]'>
                <p className='text-[16px] font-[500] leading-[24px]'>Models & Styles</p>
                <img src='./Images/Info.png' alt='info' className='w-[20px] h-[20px]' />
            </div>
            <div className='flex gap-[12px]'>
                <div className='flex justify-between gap-[58px] cursor-pointer pl-[10px] pr-[10px] py-[5px] border-[#FA57111A] border-[1px] hover:border-[#FA5711] rounded-[12px] hover:bg-[#FA57111A]'>
                    <div>
                        <p className='text-[10px] font-[500] leading-[15px]'>Model</p>
                        <p className='text-[14px] font-[600] leading-[21px] mt-[5px]'>Realistic</p>
                    </div>
                    <img src='./Images/Rectangle 30.png' alt='model' className='w-[40px] h-[40px]' />
                </div>
                <div className='flex justify-between gap-[58px] cursor-pointer pl-[10px] pr-[10px] py-[5px] border-[#FA57111A] border-[1px] hover:border-[#FA5711] rounded-[12px] hover:bg-[#FA57111A]'>
                    <div>
                        <p className='text-[10px] font-[500] leading-[15px]'>Model</p>
                        <p className='text-[14px] font-[600] leading-[21px] mt-[5px]'>Realistic</p>
                    </div>
                    <img src='./Images/Rectangle 30.png' alt='model' className='w-[40px] h-[40px]' />
                </div>
            </div>
            <div className='grid grid-cols-3 gap-[10px] mt-[15px] lg:overflow-none overflow-y-auto h-[270px] lg:h-auto'>
                {myCards.map((item, index) => (
                    <div key={index} className='relative'>
                        <img src={item.img} alt='icon' className='w-[113px] h-[90px] rounded-[10px] object-cover' />
                        {/* <p className='absolute z-[99] text-white bottom-[15px] left-[22px]'>{item.title}</p> */}
                    </div>
                ))}
            </div>
            <div className='absolute lg:static mt-[140px] bottom-0 left-0 right-0'>
                <button className='text-white py-[15px] px-[137px] text-[18px] font-[600] leading-[27px] bg-gradient-to-r from-[#E57050] to-[#DB2268] rounded-[12px] w-full'>
                    Generate
                </button>
            </div>
        </section>
    );
};
