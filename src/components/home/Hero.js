import React from 'react'

const Main = () => {
  return (
  <section className='max-w-[925px] mx-auto'>
    <div>
        <h2 className="text-[50px] font-[600] text-center leading-[75px] mt-[60px] cursor-pointer">
          AI Art Generator
        </h2>
        <div className=" mx-auto mt-[20px] mb-[60px]">
          <p className="text-[20px] font-[400] leading-[30p] text-center text-[#666666]">
            Create awe-inspiring masterpieces effortlessly and explore the
            endless possibilities of AI generated art. Enter a prompt, and
            choose a style, AI art generator bring your ideas to life!
          </p>
        </div>
        <div className='bg-red-600 relative'>
        <div className=''>
        <input type="text"  placeholder='Enter Prompt here'/>
        </div>
        <button className='absolute right-0'>Generate</button>
        </div>
        <div>
          <p className='text-[40px] font-[600] text-center leading-[60px] mt-[60px] mb-[40px]'>Inspirations</p>
        </div>
        
      </div>
  </section>
  )
}

export default Main