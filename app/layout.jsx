import React from 'react'
import '@/assets/styles/globals.css'

export const metadata ={
    title:'Property Management System',
    description:'Find your property here',
    keyword: ' Property, Management, System, Real Estate'
}

const MainLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div>{children}</div>
        </body>
    </html>
  )
}

export default MainLayout