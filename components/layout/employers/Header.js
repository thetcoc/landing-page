import React from 'react'
import Image from 'next/image'
import NavigationBar from './NavigationBar'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = () => {
  const router = useRouter()
  return (
    <div className="grid w-full shadow-lg">
        <span className='bg-[#6A9ECC] p-2 text-center w-full text-white font-medium'>Are you job searching? Come Here</span>
        <div className="grid z-10 content-center items-center grid-flow-col p-8 mx-auto max-w-screen-lg w-full justify-between">
            <div className="relative h-[39px] w-[130px]">
                <Link href="/">
                <Image 
                    src={router.pathname != "/" ? "/images/logo2.svg" : "/images/logo.png"}
                    layout='fill'
                    alt='logo'
                />
                </Link>
            </div>
            <NavigationBar 
            navBarStyle={router.pathname !== "/" && "!text-black"}
            />
        </div>
    </div>
  )
}

export default Header