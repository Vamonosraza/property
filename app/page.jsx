import React from 'react'
import Link from 'next/link'
import HeroPage from '@/components/Hero'
import InfoBoxes from '@/components/InfoBoxes'

const HomePage = () => {
  return (<>
  <HeroPage/>
  <InfoBoxes/>
    <div className='text-4xl'>
      <h1 className="">Welcome</h1>
      <Link href="/properties" className="btn">Show Properties</Link>
    </div>
    </>
  )
}

export default HomePage