import React from 'react'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'

const Services = () => {
  return (
    <Layout>
        <div className="grid grid-flow-col justify-between max-w-screen-xl mx-auto w-full pt-4 px-4">
            <div className="grid items-start content-center">
                <span className='text-[#3A3A3C] text-[50px] font-medium'>Our Services</span>
                <span className='text-[#3A3A3C] mt-[30px] text-[24px] max-w-[522px]'>
                    Tailored Services for Effective Job Search and Workforce Management.
                </span>
                <div className="mt-[30px] grid w-fit px-20 py-2 gap-4 justify-center grid-flow-col bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600 rounded-[60px] items-center">
                    <span className='text-[22px] text-white'>Get Started</span>
                </div>
            </div>
            <Image 
                src="/images/services.svg"
                height={447}
                width={676}
                alt="Services"
                className='lg:h-[447px] h-[300px] lg:w-[676px]'
            />
        </div>

        <div className="grid py-[33px] justify-center text-center bg-[#F4E5F7]">
            <div className="grid">
                <span className='text-[#076ABE] text-[32px]'>Recruitment</span>
                <div className="grid w-fit px-12 py-1 gap-4 justify-center grid-flow-col bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600 rounded-[60px] items-center"></div>
            </div>
        </div>   

        <div className="grid mt-20 p-4 max-w-screen-xl mx-auto w-full items-start content-start lg:grid-cols-2 gap-[100px] justify-between">
            <div className="grid content-start gap-[40px]">
              <span className='text-[#4D4D4DCC] text-[24px] max-w-[600px]'>
                We provide personalised end-to-end recruitment assistance that combines both in- person and online methods. This includes everything from posting job ads to sourcing candidates, receiving candidates, profiling them, communicating with stakeholders, and collecting candidate feedback. We assist talent acquisition teams by providing a cost-effective, seamless recruitment experience, allowing organisations to scale their business quickly and efficiently.
              </span>
              <span className='bg-[#076ABE] rounded-full p-[20px] px-[86px] text-white text-[24px] w-fit'>Learn More</span>
            </div>
            <Image 
              src="/images/services2.svg"
              alt="Talents"
              height={572}
              width={633}
              className='h-[572px] w-[633px]'
            />
        </div>

        <div className="grid p-4 max-w-screen-xl mx-auto">
            <span className='text-[#4D4D4D]'>OFFERS</span>
            <div className="grid gap-4 mt-[20px] grid-cols-2">
                <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                    <Image 
                        src="/images/check.svg"
                        alt='Check'
                        height={25}
                        width={25}
                        className='h-[25px] w-[25px]'
                    />
                    <span>HR Strategy and Audit</span>
                </div>
                <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                    <Image 
                        src="/images/check.svg"
                        alt='Check'
                        height={25}
                        width={25}
                        className='h-[25px] w-[25px]'
                    />
                    <span>Job listings/ Open Vacancies</span>
                </div>
                <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                    <Image 
                        src="/images/check.svg"
                        alt='Check'
                        height={25}
                        width={25}
                        className='h-[25px] w-[25px]'
                    />
                    <span>End to End Recruitment</span>
                </div>
                <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                    <Image 
                        src="/images/check.svg"
                        alt='Check'
                        height={25}
                        width={25}
                        className='h-[25px] w-[25px]'
                    />
                    <span>Personnel Outsourcing</span>
                </div>
                <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                    <Image 
                        src="/images/check.svg"
                        alt='Check'
                        height={25}
                        width={25}
                        className='h-[25px] w-[25px]'
                    />
                    <span>Personnel Training</span>
                </div>
                <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                    <Image 
                        src="/images/check.svg"
                        alt='Check'
                        height={25}
                        width={25}
                        className='h-[25px] w-[25px]'
                    />
                    <span>HR Outsourcing</span>
                </div>
                <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                    <Image 
                        src="/images/check.svg"
                        alt='Check'
                        height={25}
                        width={25}
                        className='h-[25px] w-[25px]'
                    />
                    <span>Job Ads and Sourcing</span>
                </div>
                <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                    <Image 
                        src="/images/check.svg"
                        alt='Check'
                        height={25}
                        width={25}
                        className='h-[25px] w-[25px]'
                    />
                    <span>Niche recruitment like executive search and tech talents.</span>
                </div>
            </div>
        </div>

        <div className="grid mt-20 p-4 max-w-screen-xl mx-auto w-full items-start content-start lg:grid-cols-2 gap-[100px] justify-between">
            <Image 
              src="/images/services3.svg"
              alt="Talents"
              height={572}
              width={633}
              className='h-[572px] w-[633px]'
            />
            <div className="grid content-start gap-[40px]">
                <div className="grid">
                    <span className='text-[#076ABE] text-[32px]'>Consulting</span>
                    <div className="grid w-fit px-12 py-1 gap-4 justify-center grid-flow-col bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600 rounded-[60px] items-center"></div>
                </div>
              <span className='text-[#4D4D4DCC] text-[24px] max-w-[600px]'>
                We provide insights and advisory to assist businesses in structuring their operations in the future. We use tools to improve business development, trainings, and assessment that visually represent how these changes will affect your company.
              </span>
              <span className='bg-[#076ABE] rounded-full p-[20px] px-[86px] text-white text-[24px] w-fit'>Learn More</span>
              <div className="grid">
                <span className='text-[#4D4D4D]'>OFFERS</span>
                <div className="grid gap-4 mt-[20px]">
                    <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                        <Image 
                            src="/images/check.svg"
                            alt='Check'
                            height={25}
                            width={25}
                            className='h-[25px] w-[25px]'
                        />
                        <span>Business Process Improvement</span>
                    </div>
                    <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                        <Image 
                            src="/images/check.svg"
                            alt='Check'
                            height={25}
                            width={25}
                            className='h-[25px] w-[25px]'
                        />
                        <span>Business Structure and Advisory</span>
                    </div>
                    <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                        <Image 
                            src="/images/check.svg"
                            alt='Check'
                            height={25}
                            width={25}
                            className='h-[25px] w-[25px]'
                        />
                        <span>People and Change Management.</span>
                    </div>
                </div>
            </div>
            </div>
        </div>

        <div className="grid mt-20 p-4 max-w-screen-xl mx-auto w-full items-start content-start lg:grid-cols-2 gap-[100px] justify-between">
            <div className="grid content-start gap-[40px]">
                <div className="grid">
                    <span className='text-[#076ABE] text-[32px]'>CSR</span>
                    <div className="grid w-fit px-4 py-1 gap-4 justify-center grid-flow-col bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600 rounded-[60px] items-center"></div>
                </div>
              <span className='text-[#4D4D4DCC] text-[24px] max-w-[600px]'>
                We are committed to making a positive social impact by providing opportunities for women and girls to prepare them for employment that matches their specific skill sets. Through career fairs, workplace readiness initiatives, CV revamps, masterclasses, and others.
              </span>
              <span className='bg-[#076ABE] rounded-full p-[20px] px-[86px] text-white text-[24px] w-fit'>Learn More</span>
            </div>
            <Image 
              src="/images/services4.svg"
              alt="Talents"
              height={572}
              width={633}
              className='h-[572px] w-[633px]'
            />
        </div>

        <div className="grid mt-20 p-4 max-w-screen-xl mx-auto w-full items-start content-start lg:grid-cols-2 gap-[100px] justify-between">
            <Image 
              src="/images/services5.svg"
              alt="Talents"
              height={572}
              width={633}
              className='h-[572px] w-[633px]'
            />
            <div className="grid content-start gap-[40px]">
                <div className="grid">
                    <span className='text-[#076ABE] text-[32px]'>TCOC Initiative</span>
                    <div className="grid w-fit px-12 py-1 gap-4 justify-center grid-flow-col bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600 rounded-[60px] items-center"></div>
                </div>
              <span className='text-[#4D4D4DCC] text-[24px] max-w-[600px]'>
                Intuitive is an AI-enabled recruitment solution that helps employers hire the right-fit talent by using AI talent profiling and culture fit analytics to match talents to suitable roles. This solution help organizations improve their talent acquisition process and retention rate, as well as solve the problem of talent mismatch. Intuitive caters to two audiences: employers and the talent pool.
              </span>
              <span className='bg-[#076ABE] rounded-full p-[20px] px-[86px] text-white text-[24px] w-fit'>Learn More</span>
            </div>
        </div>

        <div className="grid mt-20 p-4 max-w-screen-xl mx-auto w-full items-center content-center lg:grid-cols-2 gap-[100px] justify-between">
            <Image 
              src="/images/services6.svg"
              alt="Talents"
              height={572}
              width={633}
              className='h-[572px] w-[633px]'
            />
            <div className="grid content-start gap-[20px]">
                <span className='text-transparent font-bold text-[48px] italic bg-clip-text bg-gradient-to-r from-fuchsia-700 via-purple-800 to-sky-600'>Coming Soon!</span>
                <div className="grid gap-4">
                    <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                        <Image 
                            src="/images/check.svg"
                            alt='Check'
                            height={25}
                            width={25}
                            className='h-[25px] w-[25px]'
                        />
                        <span>TCOC Structure</span>
                    </div>
                    <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                        <Image 
                            src="/images/check.svg"
                            alt='Check'
                            height={25}
                            width={25}
                            className='h-[25px] w-[25px]'
                        />
                        <span>TCOC Payroll</span>
                    </div>
                    <div className="grid grid-flow-col gap-[20px] items-center content-center justify-start">
                        <Image 
                            src="/images/check.svg"
                            alt='Check'
                            height={25}
                            width={25}
                            className='h-[25px] w-[25px]'
                        />
                        <span>TCOC Learning</span>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Services