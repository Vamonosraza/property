import React from 'react'
import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata ={
    title:'Property Management System',
    description:'Find your property here',
    keyword: ' Property, Management, System, Real Estate'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </body>
    </html>
  )
}

export default MainLayout