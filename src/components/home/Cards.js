import React from 'react'

const Cards = () => {
    const data = [
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },
        {
            img:"./Images/Rectangle 30.png",
            tagline: "A painting of a woman with long hairs"
        },

    ]
  return (
   <section className='max-w-[1440px] mx-auto mt-[52px] px-6 lg:px-[120px] relative '>
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
  <div className='flex justify-end cursor-pointer absolute right-[60px] bottom-[-35px] '>
    <img src="./Images/ArrowUp.png" />
  </div>
  <div className='grid grid-cols-2 md:grid-cols-4 gap-[24px]'>
    <img src='./Images/Rectangle 30.png' alt='loading'className='w-w-[196px] h-full md:h-[280px] md:w-[280px] object-cover' />
    <div className='flex flex-col md:flex-row gap-[24px]'>
    <img src='./Images/Rectangle 30.png'  alt='loading'className='w-full md:w-full h-[104px] md:h-[280px] object-cover' />
    <img src='./Images/Rectangle 30.png' alt='loading'className='w-full md:w-full h-[104px] md:h-[280px] object-cover' />
    </div>
    <img src='./Images/Rectangle 30.png' alt='loading'className='w-[250px] h-[280px] object-cover' />
    <img src='./Images/Rectangle 30.png' alt='loading'className='w-[250px] h-[280px] object-cover' />
    <img src='./Images/Rectangle 30.png' alt='loading'className='w-[250px] h-[280px] object-cover' />
    <img src='./Images/Rectangle 30.png' alt='loading'className='w-[250px] h-[280px] object-cover' />

  </div>
   </section>
  )
}

export default Cards
