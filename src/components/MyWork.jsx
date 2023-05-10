import React from 'react'
import { MyWorkData } from '../LocalData'

const MyWork = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12'>
        {
            MyWorkData.map(work => {
                return (
                  <div className="cursor-pointer">
                   <div className='w-[400px] h-[400px]'>
                     <img className='h-full object-cover w-full' src={work.img} alt={work.title} />
                   </div>
                    <h2 className='mt-3 font-bold'>{work.title}</h2>
                  </div>    
                )
            })
        }
    </div>
  )
}

export default MyWork