import React from 'react'
import Image from 'next/image'

const BlogBlock = () => {
  return (
    <div className="grid gap-4">
        <div className="grid grid-flow-col w-fit p-8 bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600 rounded-[40px] items-center">
            <div className="grid gap-[12px]">
                <Image 
                    src="/images/logo.png"
                    height={15}
                    width={49}
                    alt='Blog'
                    className='h-[15px] w-[49px]'
                />
                <span className='text-[20px] text-white max-w-[291px] border-b-2 border-white pb-[20px]'>How to the target your job description to get the right talent</span>
                <span className='italic text-white'>tcoc.com/blog</span>
            </div>
            <Image 
                src="/images/blog-icon.svg"
                height={72}
                width={104}
                alt='Blog'
                className='w-[104px] h-[72px]'
            />
        </div>
        <div className="grid gap-2 px-4 content-center">
            <div className="grid grid-flow-col justify-start items-center gap-3">
                <span className='text-[16px] text-[#113C80] uppercase'>Recruitment</span>
                <span className='rounded-full h-2 w-2 bg-gray-500'></span>
                <span className='text-[#4D4D4D] font-lighter text-[16px] uppercase'>1 day ago</span>
            </div>
            <span className='text-[#3A3A3C] font-medium text-[24px] max-w-[621px]'>
                How to the target your job description to get thr right talent
            </span>
            <span className='text-[#4D4D4D] font-lighter text-[20px] mt-4 max-w-[450px]'>
                When it comes to attracting the right talent for your organization, crafting...
            </span>
        </div>
    </div>
  )
}

export default BlogBlock