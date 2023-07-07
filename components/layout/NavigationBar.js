import React from 'react'
import Image from 'next/image'

const NavigationBar = () => {
  return (
    <div className="grid grid-flow-col text-white">
        <div className="grid gap-4 grid-flow-col">
            <span className='px-4 py-2 text-[18px]'>Services</span>
            <span className='px-4 py-2 text-[18px]'>About</span>
            <span className='px-4 py-2 text-[18px]'>Blog</span>
            <span className='px-4 py-2 text-[18px]'>Career</span>
        </div>
        <div className="grid ml-8 grid-flow-col gap-4">
            <div className="grid px-8 py-2 gap-4 justify-center grid-flow-col bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600 rounded-[60px] items-center">
                <span className='text-[18px]'>Sign Up</span>
                <Image 
                    src="/images/arrow-down.svg"
                    height={30}
                    width={30}
                    alt="Arrow"
                />
            </div>
            <div className="grid grid px-8 py-2 gap-4 justify-center grid-flow-col rounded-[60px] items-center">
                <span className='ext-[18px]'>Login</span>
                <Image 
                    src="/images/arrow-down.svg"
                    height={30}
                    width={30}
                    alt="Arrow"
                />
            </div>
        </div>
    </div>
  )
}

export default NavigationBar