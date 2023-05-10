import React from 'react'
import { MyServiesData } from '../LocalData'

const Services = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-12  sm:px-8'>
      {
        MyServiesData.map((service) => {
          return (
            
              <div key={service.id} className="flex gap-5 pb-24">
                <div className="bg-[--light-dark] h-16 w-16"></div>
                <div className="">
                  <h3 className='text-xl font-bold'>{service.title}</h3>
                  <p className='text-[--sm-text] lg:w-[70%] mt-3'>{service.content}</p>
                </div>
              </div>
            
          )
        })
      }
    </div>
  )
}

export default Services