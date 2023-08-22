import EmployersLayout from '@/components/layout/employers/EmployersLayout'
import React from 'react'
import Image from 'next/image'

const Employers = () => {
  return (
    <EmployersLayout>
        <div className="grid grid-flow-col items-center max-w-screen-lg mx-auto">
            <div className="grid">
                <div className="grid">
                    <span className='text-[32px] font-bold max-w-[250px] text-[#076ABE]'>Easily discover the right talent.</span>
                    <span className='mt-4 max-w-[300px] text-[#636363]'>Transform your team with our comprehensive HR Services - From recruitment to retention.</span>
                </div>
                <div className="grid mt-6 justify-start  grid-flow-col items-center">
                    <button className='bg-[#076ABE] w-fit text-white text-[18px] p-3 px-8 rounded-full'>
                        Post a job
                    </button>
                    <button className='px-8 text-[#076ABE] font-medium'>Apply for Jobs</button>
                </div>
            </div>
            <Image 
                src="/images/employers.png" 
                alt="Employers"
                width={400}
                height={400}
                className='h-[440px] object-contain object-right w-full'
            />
        </div>
        <div className="flex flex-wrap my-12 px-4 justify-center gap-6">
            <div className="grid justify-center shadow-md bg-white rounded-2xl w-fit py-[28px] px-4 content-center gap-[20px]">
                <Image 
                    src="/images/vision.svg"
                    height={48}
                    width={48}
                    className='h-[48px] w-[48px] mx-auto'
                    alt="feats"
                />
                <span className='text-[#113C80] text-[18px] text-center font-medium'>Wide reach of Talents</span>
                <span className='text-[16px] mx-auto text-center leading-[184%] text-[#4D4D4DCC] max-w-[200px]'>
                    Hire the talents tailored for your hiring needs.
                </span>
            </div>

            <div className="grid justify-center shadow-md bg-white rounded-2xl w-fit py-[28px] px-4 content-center gap-[20px]">
                <Image 
                    src="/images/vision.svg"
                    height={48}
                    width={48}
                    className='h-[48px] w-[48px] mx-auto'
                    alt="feats"
                />
                <span className='text-[#113C80] text-[18px] text-center font-medium'>Attractive Job Post</span>
                <span className='text-[16px] mx-auto text-center leading-[184%] text-[#4D4D4DCC] max-w-[200px]'>
                    TCOC helps you to create an attractive job description.
                </span>
            </div>

            <div className="grid justify-center shadow-md bg-white rounded-2xl w-fit py-[28px] px-4 content-center gap-[20px]">
                <Image 
                    src="/images/vision.svg"
                    height={48}
                    width={48}
                    className='h-[48px] w-[48px] mx-auto'
                    alt="feats"
                />
                <span className='text-[#113C80] text-[18px] text-center font-medium'>Communication</span>
                <span className='text-[16px] mx-auto text-center leading-[184%] text-[#4D4D4DCC] max-w-[200px]'>
                    Easily chat with and set up interviews with your desired talent.
                </span>
            </div>

            <div className="grid justify-center shadow-md bg-white rounded-2xl w-fit py-[28px] px-4 content-center gap-[20px]">
                <Image 
                    src="/images/vision.svg"
                    height={48}
                    width={48}
                    className='h-[48px] w-[48px] mx-auto'
                    alt="feats"
                />
                <span className='text-[#113C80] text-[18px] text-center font-medium'>Employee Advice</span>
                <span className='text-[16px] mx-auto text-center leading-[184%] text-[#4D4D4DCC] max-w-[200px]'>
                    We provide tips on how to find talents and retain them.
                </span>
            </div>
        </div>
        <div className="grid my-8 mt-[80px] max-w-screen-lg mx-auto">
            <span className='text-center uppercase font-medium text-[18px] text-[#113C80]'>What We Offer</span>
            <div className="grid lg:grid-flow-col gap-4">
                <div className="grid items-center content-center gap-4">
                    <span className='text-[18px] text-[#4D4D4D]'>Profile Talent</span>
                    <span className='text-[#4D4D4DCC] text-[16px] max-w-[300px]'>
                        Intuitive employee profiling system uses AI and Culture Fit Analytics to match talents to the right role in the right organization. Talents are profiled across skill, education and experience.
                    </span>
                    <button className='border-[#076ABE] border-2 rounded-full w-fit p-2 px-8 font-medium text-[#076ABE]'>Try for free</button>
                </div>
                <Image 
                    src="/images/emp1.png"
                    alt="emp1"
                    height={400}
                    width={400}
                    className='h-[400px] w-full object-contain object-right'
                />
            </div>

            <div className="grid mt-4 lg:grid-flow-col justify-between gap-4">
                <Image 
                    src="/images/emp2.png"
                    alt="emp2"
                    height={400}
                    width={400}
                    className='h-[400px] w-full object-contain object-right'
                />
                <div className="grid items-center content-center gap-4">
                    <span className='text-[18px] text-[#4D4D4D]'>Culture Fit Analytics</span>
                    <span className='text-[#4D4D4DCC] text-[16px] max-w-[300px]'>
                        To aid hiring decisions, we provide a culture assessment for talents at sign up. The report can be shared with potential employer upon request.    
                    </span>
                    <button className='bg-[#076ABE] text-white rounded-full w-fit p-2 px-8 font-medium'>Request a demo</button>
                </div>
            </div>
        </div>
        <div className="grid grid-flow-col items-center justify-between mt-[80px] max-w-screen-lg mx-auto">
            <div className="grid gap-4">
                <span className='text-[#4D4D4D] font-medium text-[18px]'>Build a <i>brilliant</i> team now</span>
                <span className='text-[#4D4D4DCC] max-w-[300px]'>We specialize in connecting right fit talents to leading companies.</span>
                <span className='text-[#076ABE]'>Hire Talent</span>
            </div>
            <div className="grid grid-flow-col justify-start content-start gap-1">
                <Image 
                    src="/images/empSteps.svg"
                    alt="Steps"
                    height={250}
                    width={80}
                    className='h-[250px]'
                />
                <div className="grid gap-8">
                    <div className="grid gap-1">
                        <span className="text-[18px] text-[#4D4D4DCC]">Create Job Description</span>
                        <span className="text-[#4D4D4DCC] max-w-[300px]">Our smart AI helps you create a job posting, employee benefit and so on.</span>
                    </div>

                    <div className="grid gap-1">
                        <span className="text-[18px] text-[#4D4D4DCC]">Create Job Description</span>
                        <span className="text-[#4D4D4DCC] max-w-[300px]">Our smart AI helps you create a job posting, employee benefit and so on.</span>
                    </div>

                    <div className="grid gap-1">
                        <span className="text-[18px] text-[#4D4D4DCC]">Create Job Description</span>
                        <span className="text-[#4D4D4DCC] max-w-[300px]">Our smart AI helps you create a job posting, employee benefit and so on.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-[80px] grid bg-[url('/images/empLast.png')] bg-cover bg-no-repeat">
            <div className="grid max-w-screen-lg mx-auto text-white text-center py-[100px]">
                <span className='text-[18px]'>Stay Updated</span>
                <span className='max-w-[410px] leading-[25px] font-[100]'>Stay updated with new features, product development and offers or to receive our newsletters on Recruitment.</span>
                <div className="grid mt-4 grid-flow-col relative border-2 rounded-full border-white">
                    <input type="text" className='px-4 rounded-full py-2 bg-transparent outline-none max-w-[300px]'/>
                    <button className='absolute right-0 text-white bg-[#113C80] px-8 py-2 rounded-r-full top-0'>Submit</button>
                </div>
            </div>
        </div>
    </EmployersLayout>
  )
}

export default Employers