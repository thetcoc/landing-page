import SignupLayout from '@/components/layout/onboarding/SignupLayout'
import React from 'react'

const Recruiters = () => {
  return (
    <SignupLayout>
        <div className="grid mt-12">
            <span className='text-[18px] text-[#4D4D4D]'>Create your employer account</span>
            <form className='grid mt-12 gap-6'>
              <div className="grid gap-[15px]">
                  <span className='pl-8 text-gray-500 text-[18px]'>Company Name<sup>*</sup></span>
                  <input type="text" className='border-2 rounded-full p-4' />
              </div>

              <div className="grid gap-[15px]">
                  <span className='pl-8 text-gray-500 text-[18px]'>Email<sup>*</sup></span>
                  <input type="email" className='border-2 rounded-full p-4' />
              </div>

              <div className="grid grid-flow-col gap-8">
                <div className="grid gap-[15px]">
                    <span className='pl-8 text-gray-500 text-[18px]'>Company Number<sup>*</sup></span>
                    <input type="number" className='border-2 rounded-full p-4' />
                </div>

                <div className="grid gap-[15px]">
                    <span className='pl-8 text-gray-500 text-[18px]'>Country<sup>*</sup></span>
                    <input type="text" className='border-2 rounded-full p-4' />
                </div>
              </div>

              <div className="grid gap-[15px]">
                  <span className='pl-8 text-gray-500 text-[18px]'>Password<sup>*</sup></span>
                  <input type="text" className='border-2 rounded-full p-4' />
              </div>

              <div className="grid gap-[15px]">
                  <span className='pl-8 text-gray-500 text-[18px]'>Confirm Password<sup>*</sup></span>
                  <input type="text" className='border-2 rounded-full p-4' />
              </div>
            </form>
        </div>
    </SignupLayout>
  )
}

export default Recruiters