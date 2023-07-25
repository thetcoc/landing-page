import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavigationBar = ({navBarStyle}) => {
    const router = useRouter()
  return (
    <div className={`grid grid-flow-col text-white ${navBarStyle}`}>
        <div className="grid gap-4 grid-flow-col">
            <Link href="/services" className='px-4 py-2 text-[18px]'>Services</Link>
            <Link href="/about" className='px-4 py-2 text-[18px]'>About</Link>
            <Link href="/blog" className='px-4 py-2 text-[18px]'>Blog</Link>
            <Link href="/career" className='px-4 py-2 text-[18px]'>Career</Link>
        </div>
        <div className="grid ml-8 grid-flow-col gap-4">
            <div className="grid px-8 py-2 gap-4 justify-center grid-flow-col bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600 rounded-[60px] items-center">
                <span className='text-[18px] text-white'>Sign Up</span>
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
                    src={router.pathname !== "/" ? "/images/dropdown-black.svg" : "/images/arrow-down.svg"}
                    height={30}
                    width={30}
                    alt="Arrow"
                    className='h-[20px] w-[20px] object-contain'
                />
            </div>
        </div>
    </div>
  )
}

export default NavigationBar