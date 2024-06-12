import React from 'react'

const SideBar = () => {
    const data = [
        {img: "./Images/Rectangle 30.png"},
        {img: "./Images/Rectangle 30.png"},
        {img: "./Images/Rectangle 30.png"},
        {img: "./Images/Rectangle 30.png"},
    ]
  return (
    <section className='max-w-[250px]'>
        <div className=''> 
             <p className='font-[600] text-[14px] leading-[24px] mb-[12px]'>My Creations</p>
             <div className='h-[1px] w-full bg-[#EEEEEE] mb-[16px]'></div>
             <div className='grid grid-cols-2 gap-[10px]'>
                {data.map((item, index )=>{
                    return(
                        <div>
                            <img src={item?.img} alt='loading' className='w-[104px] h-[130px]' />
                        </div>
                    )
                })}
             </div>
        </div>
    </section>
  )
}

export default SideBar