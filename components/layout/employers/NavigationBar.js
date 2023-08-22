import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavigationBar = ({navBarStyle}) => {
    const router = useRouter()
  return (
    <div className={`grid grid-flow-col text-white ${navBarStyle}`}>
        <div className="grid gap-4 grid-flow-col">
            <Link href="/employers" className='px-4 py-2 text-[18px]'>Employers</Link>
            <Link href="/talent" className='px-4 py-2 text-[18px]'>Talent</Link>
            <Link href="/company" className='px-4 py-2 text-[18px]'>Company</Link>
            <Link href="/pricing" className='px-4 py-2 text-[18px]'>Pricing</Link>
        </div>
        <div className="grid ml-8 grid-flow-col gap-4">
            <div className="grid grid px-8 py-2 gap-4 justify-center grid-flow-col rounded-[60px] items-center">
                <span className='text-[18px] text-[#076ABE] font-medium'>Login</span>
            </div>
            <Link href="/employers/register" className="grid px-8 py-2 gap-4 justify-center grid-flow-col bg-[#076ABE] rounded-[60px] items-center">
                <span className='text-[18px] text-white'>Sign Up</span>
            </Link>
        </div>
    </div>
  )
}

export default NavigationBar