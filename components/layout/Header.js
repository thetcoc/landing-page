import React from 'react'
import Image from 'next/image'
import NavigationBar from './NavigationBar'

const Header = () => {
  return (
    <div className="grid z-10 content-center items-center grid-flow-col p-8 max-w-screen-xl mx-auto justify-between">
        <div className="relative h-[39px] w-[130px]">
            <Image 
                src="/images/logo.png"
                layout='fill'
                alt='logo'
            />
        </div>
        <NavigationBar />
    </div>
  )
}

export default Header