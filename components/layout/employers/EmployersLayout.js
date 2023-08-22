import React from 'react'
import Header from './Header'
import Footer from './Footer'


const EmployersLayout = ({children}) => {
  return (
    <div className='relative'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default EmployersLayout