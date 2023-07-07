import React from 'react'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'

const Homepage = () => {
  return (
    <Layout>
        <div className="relative left-0 w-full z-[-1] -top-[150px] items-center content-start pt-60 grid bg-[url('/images/hero-bg.svg')] bg-cover bg-bottom bg-no-repeat lg:min-h-[1100px] w-full">
            <span className='max-w-[918px] leading-[70px] mx-auto text-center text-[50px] font-bold text-white'>
              We are your go-to brand for profiling the Right Fit talent in Corporate Africa
            </span>
            <span className='text-[24px] max-w-[528px] text-center mx-auto text-white leading-[150%]'>
              The way we work is evolving, the way we hire should too. Find the right job that match your skills. From Recruitment to Retention.
            </span>
            <div className="grid mx-auto w-fit mt-[40px] grid-flow-col gap-[30px]">
              <span className='text-[22px] bg-white rounded-full px-[84px] py-[18px] text-[#4D4D4D]'>Hire Talents</span>
              <span className='text-[22px] bg-[#9500AD] text-white rounded-full px-[84px] py-[18px]'>Apply for jobs</span>
            </div>
        </div>
        <div className="grid max-w-screen-xl -mt-[570px] mx-auto w-full items-start content-start gap-[30px]">
          <div className="grid p-4 lg:p-0 justify-center gap-[20px]">
            <Image 
              src="/images/featIcon.svg"
              height={140}
              width={140}
              alt="Features"
              className='h-[140px] w-[140px] mx-auto'
            />
            <span className='uppercase text-[32px] text-[#076ABE] text-center'>Features</span>
            <span className='max-w-[470px] text-[#4D4D4DCC] text-[22px] text-center mx-auto'>
              You found us! Boost your team&apos;s talent search and manage your employee.
            </span>
          </div>
          <div className="grid p-4 mt-24 lg:grid-cols-3 gap-32">
            <div className="grid gap-[20px]">
              <Image 
                src="/images/feat1.svg"
                height={48}
                width={48}
                className='h-[48px] w-[48px]'
                alt="feats"
              />
              <span className='text-[#113C80] text-[26px] font-medium'>Profile Talent</span>
              <span className='text-[24px] leading-[184%] text-[#4D4D4DCC] max-w-[367px]'>
                We use machine learning to profile talent, providing employers talents’ culture fit assessments for effective hiring decisions. With our innovative approach, employers understand candidates skills and potential, making informed and objective choices.
              </span>
            </div>

            <div className="grid gap-[20px]">
              <Image 
                src="/images/feat2.svg"
                height={48}
                width={48}
                className='h-[48px] w-[48px]'
                alt="feats"
              />
              <span className='text-[#113C80] text-[26px] font-medium'>Profile Talent</span>
              <span className='text-[24px] leading-[184%] text-[#4D4D4DCC] max-w-[367px]'>
                We use machine learning to profile talent, providing employers talents&apos; culture fit assessments for effective hiring decisions. With our innovative approach, employers understand candidates&apos; skills and potential, making informed and objective choices.
              </span>
            </div>

            <div className="grid gap-[20px]">
              <Image 
                src="/images/feat3.svg"
                height={48}
                width={48}
                className='h-[48px] w-[48px]'
                alt="feats"
              />
              <span className='text-[#113C80] text-[26px] font-medium'>Profile Talent</span>
              <span className='text-[24px] leading-[184%] text-[#4D4D4DCC] max-w-[367px]'>
                We use machine learning to profile talent, providing employers talents&apos; culture fit assessments for effective hiring decisions. With our innovative approach, employers understand candidates&apos; skills and potential, making informed and objective choices.
              </span>
            </div>
          </div>

          <div className="grid mt-20 lg:grid-cols-2 gap-[100px] justify-between">
            <Image 
              src="/images/talents.svg"
              alt="Talents"
              height={572}
              width={633}
              className='h-[572px] w-[633px]'
            />

            <div className="grid content-start gap-[40px]">
              <span className='text-[30px] text-[#076ABE] mt-20'>For Talents</span>
              <span className='text-[#4D4D4DCC] text-[24px] max-w-[600px]'>
                Tired of endless job listings? Look no further! Showcase your skills, qualifications, and potential to employers through our talent profiling. We understand you&apos;re more than a resume, so we give you an assessment to understand your preferences and you can create a standout profile with your talents and abilities. Connect with valued employers, land your perfect opportunity and you can review them.
              </span>
            </div>
          </div>

          <div className="grid">
            <span className='text-center text-[32px] text-[#4D4D4D]'>How it works</span>
            <div className="grid grid-cols-3 mt-8 items-start content-start">
              <div className="grid">
                <span className='text-[#076ABE] text-[26px] font-medium'> Sign Up and Fill an Assessment:</span>
                <div className='text-[24px] leading-[184%] text-[#3A3A3C] max-w-[352px]'>
                  Put up your email and password and fill our culture fit assessment form to help us understand your mode of working, work life preferences so we can rightly connect you to your right team.
                </div>
              </div>
              <div className="grid">
                <span className='text-[#076ABE] text-[26px] font-medium'>Create Your Talent Profile:</span>
                <div className='text-[24px] leading-[184%] text-[#3A3A3C] max-w-[352px]'>
                  Put up your background, education, experience and showcase your portfolio or work samples. Craft a compelling profile that showcases your strengths and heighlights your unique abilities.
                </div>
              </div>
              <div className="grid">
              <span className='text-[#076ABE] text-[26px] font-medium'>Access Exciting Opportunites</span>
                <div className='text-[24px] leading-[184%] text-[#3A3A3C] max-w-[352px]'>
                  Access a network of employers seeking talented individuals like you. Connect directly with companies in search of your specific skills. Enhance employer understanding of your potential, boosting interview and job prospects.
                </div>
              </div>
            </div>
          </div>

          <div className="grid mt-20 lg:grid-cols-2 gap-[100px] justify-between">
            <div className="grid content-start gap-[40px]">
              <span className='text-[30px] text-[#076ABE] mt-20'>For Employers</span>
              <span className='text-[#4D4D4DCC] text-[24px] max-w-[600px]'>
                Finding the right talent is crucial for building a successful team, but the traditional hiring process can be time-consuming and overwhelming. Our profile talent service simplifies and streamlines your search for the ideal candidates. We provide you with comprehensive talent profiles, enabling you to make informed decisions and find the perfect match for your organization.
              </span>
            </div>
            <Image 
              src="/images/talents2.svg"
              alt="Talents"
              height={572}
              width={633}
              className='h-[572px] w-[633px]'
            />
          </div>

          <div className="grid">
            <span className='text-center text-[32px] text-[#4D4D4D]'>How it works</span>
            <div className="grid grid-cols-2 mt-8 items-center content-center">
              <div className="grid gap-12">
                <div className="grid">
                  <span className='text-[#076ABE] text-[26px] font-medium'> Define Your Requirements</span>
                  <div className='text-[24px] leading-[184%] text-[#3A3A3C] max-w-[452px]'>
                    Tell us about the skills, experience, and qualifications you&apos;re looking for in a candidate. We&apos;ll use this information to identify potential matches from our pool of talented individuals.
                  </div>
                </div>
                <div className="grid">
                  <span className='text-[#076ABE] text-[26px] font-medium'>Review Talent Culture Fit Analytics</span>
                  <div className='text-[24px] leading-[184%] text-[#3A3A3C] max-w-[452px]'>
                    Gain access to detailed talent profiles that go beyond standard resumes. Get a comprehensive overview of candidates&apos; company culture fit, abilities, accomplishments, and potentials to determine the best fit for your team.
                  </div>
                </div>
              </div>
              <div className="grid">
                <span className='text-[#076ABE] text-[26px] font-medium'>Connect and Hire</span>
                <div className='text-[24px] leading-[184%] text-[#3A3A3C] max-w-[452px]'>
                  Connect and Hire Connect directly with the talents that align with your needs and invite them for interviews. By leveraging our profile talent service, you can streamline the hiring process and increase the likelihood of finding the perfect addition to your team.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-[30px] mt-4 py-[50px] pb-[171px] lg:mt-[130px] bg-[url('/images/selfOnboard.svg')] bg-no-repeat bg-cover">
          <span className='text-white max-w-[788px] mx-auto text-center text-[30px]'>
            A 360 SERVICE - FROM RECRUITMENT TO EMPLOYEE COMMUNICATION AND MANAGEMENT
          </span>
          <span className='max-w-[1036px] mx-auto text-center leading-[184%] text-[white] text-[22px]'>
            We not only help with recruiting the right talent. <br />s
            Our HR 360 service covers from recruitment to employee retention. We help you Self-Onboard talents and add them to your TCOC company channel; sending them files and technology sign up like Slack and so on. We also foster a culture of collaboration and engagement through seamless communication mode, from company-wide announcements to team updates. Our 360 service provides efficient tools like knowing the time an employer resumes work, setting up their leave days and holidays.
          </span>
        </div>

        <div className="grid -mt-[100px] max-screen-xl mx-auto lg:grid-flow-col justify-center gap-[100px]">
          <Image 
            src="/images/preview1.svg"
            height={330}
            width={330}
            alt="Preview"
            className='h-[330px] w-[330px]'
          />
          <Image 
            src="/images/preview2.svg"
            height={330}
            width={330}
            alt="Preview"
            className='h-[330px] w-[330px]'
          />
          <Image 
            src="/images/preview3.svg"
            height={330}
            width={330}
            alt="Preview"
            className='h-[330px] w-[330px]'
          />
        </div>

        <div className="grid my-8 lg:my-[130px] max-w-screen-xl mx-auto w-full">
          <span className='text-[36px] text-center text-[#4D4D4D]'>Trusted by</span>
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
    </Layout>
  )
}

export default Homepage