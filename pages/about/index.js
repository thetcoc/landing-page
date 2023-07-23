import Layout from '@/components/layout/Layout'
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <Layout>
        <div className="mt-[-10%] grid lg:pt-[180px] text-center justify-center lg:pb-[90px] bg-[#F4E5F7]">
            <div className="grid">
                <span className='text-[50px] font-medium'>About Us</span>
                <span className='max-w-[270px] mx-auto text-center text-[#3A3A3C]'>
                    Know more about us, how we work and our team
                </span>
            </div>
        </div>
        
        <div className="grid bg-white">
            <div className="grid mt-20 lg:grid-cols-2 gap-[100px] justify-between">
                <Image 
                src="/images/about1.svg"
                alt="Talents"
                height={572}
                width={633}
                className='h-[572px] w-[633px]'
                />

                <div className="grid content-start gap-[40px]">
                    <span className='text-[30px] text-[#076ABE] mt-20'>TALENT| ROLE | ORGANISATION</span>
                    <span className='text-[#4D4D4DCC] text-[24px] max-w-[600px]'>
                        TCOC is a tech human capital organization building an enterprise HR System for workforce planning and providing employment solutions by leveraging technology. We specialize in business structure and human resource solutions for SMEs, Startups and large Corporations.
                    </span>
                </div>
            </div>
            
            <div className="grid justify-center grid-flow-col mt-[130px] p-4 gap-x-[150px]">
                <div className="grid justify-center shadow-2xl bg-white rounded-lg w-fit py-[28px] px-[43px] content-center gap-[20px]">
                    <Image 
                        src="/images/vision.svg"
                        height={48}
                        width={48}
                        className='h-[48px] w-[48px] mx-auto'
                        alt="feats"
                    />
                    <span className='text-[#113C80] text-[26px] text-center font-medium'>OUR VISION</span>
                    <span className='text-[24px] mx-auto text-center leading-[184%] text-[#4D4D4DCC] max-w-[354px]'>
                        To be the go-to brand for profiling the right fit talent in Corporate Africa while creating more room for women and girls to access opportunities that prepares them for employment and matches their specific skill set.
                    </span>
                </div>

                <div className="grid justify-center shadow-2xl bg-white rounded-lg w-fit py-[28px] px-[43px] content-baseline gap-[20px]">
                    <Image 
                        src="/images/vision2.svg"
                        height={48}
                        width={48}
                        className='h-[48px] w-[48px] mx-auto'
                        alt="feats"
                    />
                    <span className='text-[#113C80] text-[26px] text-center font-medium'>OUR MISSION</span>
                    <span className='text-[24px] mx-auto text-center leading-[184%] text-[#4D4D4DCC] max-w-[354px]'>
                        Talent, Role and Organization. We bridge the gap between employers and talented individuals, fostering inclusivity and diversity in the workforce.
                    </span>
                </div>
            </div>

            <div className="mt-32 grid justify-center gap-4 max-w-screen-2xl mx-auto p-4">
                <span className='uppercase text-[#076ABE] text-center mx-auto text-[30px]'>Our core values </span>
                <div className="flex justify-center flex-wrap gap-x-32 gap-y-4">
                    <div className="grid content-start gap-[30px]">
                        <span className='text-[26px] text-[#076ABE] mt-20'>Solution Driver</span>
                        <span className='text-[#4D4D4DCC] text-[22px] max-w-[338px]'>
                            As a forward-thinking technology and HR firm, we aim to solve workplace challenges and create an environment where businesses can thrive.
                        </span>
                    </div>

                    <div className="grid content-start gap-[30px]">
                        <span className='text-[26px] text-[#076ABE] mt-20'>Integrity</span>
                        <span className='text-[#4D4D4DCC] text-[22px] max-w-[338px]'>
                            We place the highest value on maintaining an impeccable reputation to build a sustainable brand.
                        </span>
                    </div>

                    <div className="grid content-start gap-[30px]">
                        <span className='text-[26px] text-[#076ABE] mt-20'>Excellence</span>
                        <span className='text-[#4D4D4DCC] text-[22px] max-w-[338px]'>
                            Be assured that every task we undertake is done following global industry standards to ensure a lasting relationship with our stakeholders.
                        </span>
                    </div>

                    <div className="grid content-start gap-[30px]">
                        <span className='text-[26px] text-[#076ABE] mt-20'>Corporate Responsibility</span>
                        <span className='text-[#4D4D4DCC] text-[22px] max-w-[338px]'>
                            We recognize the value of a community with equal opportunities, which is why we are committed to making a positive social impact by empowering women and girls.
                        </span>
                    </div>

                    <div className="grid content-start gap-[30px]">
                        <span className='text-[26px] text-[#076ABE] mt-20'>Pan African</span>
                        <span className='text-[#4D4D4DCC] text-[22px] max-w-[338px]'>
                            We hope to contribute to closing the racial wealth gap and strengthening local economies. When companies thrive, they grow and foster job creation.
                        </span>
                    </div>
                </div>
            </div>

            <div className="mt-32 grid gap-x-[100px] gap-y-[98px] p-4 max-w-screen-xl mx-auto grid-cols-3">
                <Image 
                    src="/images/team.png"
                    alt="Team"
                    height={440}
                    width={340}
                    className='object-cover object-top h-[440px] lg:w-[340px]'
                />

                <Image 
                    src="/images/team.png"
                    alt="Team"
                    height={440}
                    width={340}
                    className='object-cover object-top h-[440px] lg:w-[340px]'
                />
                <Image 
                    src="/images/team.png"
                    alt="Team"
                    height={440}
                    width={340}
                    className='object-cover object-top h-[440px] lg:w-[340px]'
                />
                <Image 
                    src="/images/team.png"
                    alt="Team"
                    height={440}
                    width={340}
                    className='object-cover object-top h-[440px] lg:w-[340px]'
                />
                <Image 
                    src="/images/team.png"
                    alt="Team"
                    height={440}
                    width={340}
                    className='object-cover object-top h-[440px] lg:w-[340px]'
                />
                
                <Image 
                    src="/images/team.png"
                    alt="Team"
                    height={440}
                    width={340}
                    className='object-cover object-top h-[440px] lg:w-[340px]'
                />      
            </div>

            <div className="grid my-8 lg:my-[130px] max-w-screen-xl mx-auto w-full">
          <span className='text-[36px] text-[#076ABE] uppercase text-center'>Our partners</span>
          <div className="grid grid-flow-col justify-between item-center">
            <div className="grid">
              <Image 
                src="/images/trust1.svg"
                width={250}
                height={250}
                alt="Trusts"
                className='h-[250px] w-[250px]'
              />
              <span className='mt-[57px] text-center text-[20px] text-[#4D4D4D]'>Collaborator</span>
            </div>

            <div className="grid">
              <Image 
                src="/images/trust2.svg"
                width={250}
                height={250}
                alt="Trusts"
                className='h-[250px] w-[250px]'
              />
              <span className='mt-[57px] text-center text-[20px] text-[#4D4D4D]'>Collaborator</span>
            </div>

            <div className="grid">
              <Image 
                src="/images/trust3.svg"
                width={250}
                height={250}
                alt="Trusts"
                className='h-[250px] w-[250px]'
              />
              <span className='mt-[57px] text-center text-[20px] text-[#4D4D4D]'>Client</span>
            </div>
          </div>
        </div>
        </div>
    </Layout>
  )
}

export default About