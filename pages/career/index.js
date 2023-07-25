import React from 'react'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'


const Career = () => {
  return (
    <Layout>
        <div className="grid py-[170px] bg-[url('/images/careers.png')] text-white justify-center text-center bg-no-repeat bg-cover bg-top">
            <span className='text-[50px] font-bold'>Come Grow With Us</span>
            <span className='mt-[40px] max-w-[710px] text-[28px]'>
                If you love to make a difference, and have fun while at it, apply to one of these open positions from great companies!
            </span>
        </div>
        <div className="grid max-w-screen-xl w-full justify-center mx-auto my-[70px]">
            <span className='text-[#113C80] text-[32px] text-left font-medium'>Open Job Opportunites</span>
            <div className="grid mt-[70px]">
                <Image 
                    src="/images/blog.svg"
                    alt="Careers"
                    height={196}
                    width={65}
                    className='h-[196px] w-[65px] mx-auto'
                />
                <span className='text-center mt-[50px] text-[17px] text-[#3A3A3C]'>No Job openings, check later</span>
            </div>

            <div className="block mt-[40px]">
                <span>Let us help you publicize your Job Openings for</span> <span className='text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600'>FREE</span>
            </div>

        </div>
    </Layout>
  )
}

export default Career