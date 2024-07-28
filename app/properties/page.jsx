import React from 'react'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'
import connectDB from '@/config/db'
import { fetchProperties } from '@/utils/request'

const PropertiesPage = async () => {

  const properties = await fetchProperties()
  // console.log(properties)
  // console.log(properties)
  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4'>
        {properties.length === 0 ? (<div>No properties found</div>):
        (

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) =>(
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesPage