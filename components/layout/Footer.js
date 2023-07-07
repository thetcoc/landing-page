import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="grid text-white bg-[#2E2E2E] py-20 px-8">
        <div className="grid justify-between w-full lg:grid-flow-col max-w-screen-xl mx-auto">
            <div className="grid grid-flow-col gap-[41px] content-start items-start">
                <div className="grid">
                    <span className='font-medium'>About TCOC</span>
                    <div className="grid mt-[14px] gap-[12px]">
                        <span className='text-[14px] text-gray-400'>About us</span>
                        <span className='text-[14px] text-gray-400'>Resources & Policies</span>
                        <span className='text-[14px] text-gray-400'>Careers</span>
                        <span className='text-[14px] text-gray-400'>Content Integrity</span>
                        <span className='text-[14px] text-gray-400'>Terms of Use</span>
                        <span className='text-[14px] text-gray-400'>Privacy & Cookies Statement</span>
                    </div>
                </div>

                <div className="grid">
                    <span className='font-medium'>Explore</span>
                    <div className="grid mt-[14px] gap-[12px]">
                        <span className='text-[14px] text-gray-400'>Write a review</span>
                        <span className='text-[14px] text-gray-400'>Join Our Community</span>
                        <span className='text-[14px] text-gray-400'>Help Center</span>
                    </div>
                </div>
            </div>
            <div className="grid items-start content-start gap-[30px]">
                <div className="grid">
                    <div className="grid grid-flow-col content-start items-start gap-[34px] justify-between">
                        <select name="" id="" className='border-2 border-white w-[207px] bg-transparent text-white rounded-lg p-2'>
                            <option value="NGN">NGN</option>
                        </select>

                        <select name="" id="" className='border-2 border-white w-[207px] bg-transparent text-white rounded-lg p-2'>
                            <option value="Nigeria">Nigeria</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-flow-col content-start items-start w-full justify-between">
                    <Image 
                        src="/images/fb.svg"
                        alt="fb"
                        height={36}
                        width={36}
                    />

                    <Image 
                        src="/images/inst.svg"
                        alt="fb"
                        height={36}
                        width={36}
                    />

                    <Image 
                        src="/images/tw.svg"
                        alt="fb"
                        height={36}
                        width={36}
                    />

                    <Image 
                        src="/images/li.svg"
                        alt="fb"
                        height={36}
                        width={36}
                    />

                    <Image 
                        src="/images/yt.svg"
                        alt="fb"
                        height={36}
                        width={36}
                    />


                </div>
            </div>
        </div>
        <div className="grid mt-[92px] max-w-screen-xl mx-auto w-full">
            <div className="relative h-[49px] w-[162px]">
                <Image 
                    src="/images/logo.png"
                    height={49}
                    width={162}
                    alt="Logo"
                    className="h-[49px] w-[162px]"
                />
            </div>
            <span className='mt-4 text-[14px] text-gray-300'>© 2023 TCOC LLC All rights reserved.</span>
        </div>
    </div>
  )
}

export default Footer