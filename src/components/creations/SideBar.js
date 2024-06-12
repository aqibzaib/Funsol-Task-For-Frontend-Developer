import React from 'react'

const SideBar = () => {
    const data = [
        {img: "./Images/Rectangle 30.png"},
        {img: "./Images/Rectangle 30.png"},
        {img: "./Images/Rectangle 30.png"},
        {img: "./Images/Rectangle 30.png"},
    ]
  return (
    <section className='max-w-[250px] border-[1px] border-[#EEEEEE] border-t-[0px] hidden lg:block'>
        <div className=''> 
             <p className='font-[600] text-[14px] leading-[24px] mb-[12px] pl-[20px]'>My Creations</p>
             <div className='h-[1px] w-full bg-[#EEEEEE] mb-[16px]'></div>
             <div className='grid grid-cols-2 gap-[10px] px-[16px]'>
                {data.map((item, index )=>{
                    return(
                        <div key={index}>
                            <img src={item?.img} alt='loading' className='w-[104px] h-[130px] object-cover rounded-[10px]' />
                        </div>
                    )
                })}
             </div>
        </div>
    </section>
  )
}

export default SideBar