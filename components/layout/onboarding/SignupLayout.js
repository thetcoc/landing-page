import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SignupLayout = ({children}) => {
    const router = useRouter()
  return (
    <div className="grid lg:grid-cols-2 h-[100vh]">
        <div className="grid justify-center items-end content-end bg-[#A2C2DE]">
            {/* <Image 
                src="/images/signin.svg"
                alt="SignIn"
                height={500}
                width={500}
                className='h-full object-cover w-full'
            /> */}
        </div>
        <div className="grid content-start items-start p-4">
            <div className="grid grid-flow-col content-start justify-between items-center">
                <Image 
                    src={router.pathname != "/" ? "/images/logo2.svg" : "/images/logo.png"}
                    height={100}
                    width={100}
                    alt='logo'
                />
                <Link href="/employers/login" className='border-2 border-[#113C80] w-fit rounded-full px-8 py-2 text-[#113C80]'>Login</Link>
            </div>
            <div className="grid items-center content-center h-full">
                {children}
            </div>
        </div>
    </div>
  )
}

export default SignupLayout