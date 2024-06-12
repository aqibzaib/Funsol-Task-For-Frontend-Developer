import React from 'react'
import AspectRatio from './AspectRatio'

const RightSideBar = () => {
  return (
    <section className='max-w-[400px] p-4 border-[1px] border-[#EEEEEE] border-t-[0px] pt-[30px]'>
      <form>
        <div className='mb-4'>
          <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'>
            Your Message
          </label>
          <textarea
            id='message'
            name='message'
            className='block w-[360px] h-[120px] px-3 py-2 border border-gray-300 shadow-sm focus:outline-none rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm custom-border'
            placeholder='Enter your message'
            style={{resize: 'none'}}
          />
        </div>
      </form>
      <div className='flex items-center justify-center gap-[8px]'>
        <p className='text-[12px] font-[500] text-[#FA5711]  '>Additional settings</p>
        <img src="./Images/navigate_next.png" alt='loading' className='w-[5px] h-[5px]'/>
      </div>
      <div className='h-[1px] w-full bg-[#EEEEEE] mt-[15px] mb-[20px]'></div>
      <div className='flex gap-[5px]'>
        <p className='text-[16px] font-[500]'>Apect Ratio</p>
        <img src="./Images/Info.png" alt="loaing"  className='w-[20px] h-[20px] mt-[4px]'/>
      </div>
      <AspectRatio />
    </section>
  )
}

export default RightSideBar
