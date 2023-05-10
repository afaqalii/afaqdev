import React from 'react'
import { MyWorkData } from '../LocalData'

const MyWork = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12'>
        {
            MyWorkData.map(work => {
                return (
                  <div key={work.id} className="card grid place-content-center">
                   <div className='relative cursor-pointer img w-full h-[300px] lg:w-[300px] md:h-[300px]'>
                  
                    <div className="project-btns">
                        <button className='img-btn'>Project Details</button>
                        <p className='text-center text-white mt-3'>Preview</p>
                   </div> 
                    <img className='h-full object-cover w-full rounded-[1rem]' src={work.img} alt={work.title} />
                  
                   </div>
                    <h2 className='cursor-pointer mt-3 font-bold'>{work.title}</h2>
                  </div>    
                )
            })
        }
    </div>
  )
}

export default MyWork