import React from 'react'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import BlogBlock from '@/components/BlogBlock'


const Blog = () => {
  return (
    <Layout>
        <div className="mt-[-10%] grid lg:pt-[200px] text-center justify-center lg:pb-[200px] bg-[url('/images/blog-bg.svg')] bg-bottom">
            <div className="grid">
                <span className='text-[50px] font-medium'>The TCOC Blog</span>
                <span className='max-w-[430px] mx-auto mt-4 text-center text-[#3A3A3C]'>
                    Personal development blog for the career professionals and providing insights to what employers of labor require.
                </span>
            </div>
        </div>
        
        <div className="grid mt-[80px]">
            <div className="grid grid-flow-col w-full max-w-screen-xl mx-auto gap-x-[40px]">
                <div className="grid grid-flow-col w-fit px-20 py-12 gap-x-[63px] bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600 rounded-[60px] items-center">
                    <div className="grid gap-[20px]">
                        <Image 
                            src="/images/logo.png"
                            height={23}
                            width={80}
                            alt='Blog'
                            className='h-[23px] w-[80px]'
                        />
                        <span className='text-[32px] text-white max-w-[291px] border-b-2 border-white pb-[20px]'>How to the target your job description to get the right talent</span>
                        <span className='italic text-white'>tcoc.com/blog</span>
                    </div>
                    <Image 
                        src="/images/blog.svg"
                        height={153}
                        width={51}
                        alt='Blog'
                        className='w-[51px] h-[153px]'
                    />
                </div>
                <div className="grid gap-3 content-center">
                    <div className="grid grid-flow-col justify-start items-center gap-3">
                        <span className='text-[18px] text-[#113C80] uppercase'>Recruitment</span>
                        <span className='rounded-full h-2 w-2 bg-gray-500'></span>
                        <span className='text-[#4D4D4D] font-lighter text-[18px] uppercase'>1 day ago</span>
                    </div>
                    <span className='text-[#3A3A3C] font-medium text-[40px] max-w-[621px]'>
                        How to the target your job description to get thr right talent
                    </span>
                    <span className='text-[#4D4D4D] font-lighter text-[24px] mt-4 max-w-[450px]'>
                        When it comes to attracting the right talent for your organization, crafting...
                    </span>
                </div>
            </div>
        </div>

        <div className="grid my-[100px] grid-cols-3 justify-center max-w-screen-xl mx-auto gap-[120px]">
            <BlogBlock />
            <BlogBlock />
            <BlogBlock />
            <BlogBlock />
        </div>
    </Layout>
  )
}

export default Blog