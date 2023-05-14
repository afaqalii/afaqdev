import React, { useState } from 'react'
import { MyWorkData } from '../LocalData'
import { Link } from 'react-router-dom'

const MyWork = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-12'>
        {
            MyWorkData.map(work => {
                return (
                  <Link key={work.id} to={`/${work.id}`}>
                  <div  className="card grid place-content-center">
                   <div className='img relative cursor-pointer  w-full h-[300px] lg:w-[300px] md:h-[300px]'>
                    <div className="project-btns">
                        <button className='img-btn'>Project Details</button>
                        <a href={`https://${work.projectDetails[0].content}` target="_blank"}><p className="relative text-center text-white mt-3  after:contents-[''] after:absolute after:w-[0] after:ease-in after:duration-300 after:bottom-[-8px] after:left-[48px] after:h-1 after:rounded-md after:bg-white after:hover:bg-white after:hover:w-[55px]">Preview</p></a>
                   </div> 
                    <img className='h-full object-cover w-full rounded-[1rem]' src={work.img} alt={work.title} />
                  
                   </div>
                    <h2 className="cursor-pointer relative mt-3 font-bold after:contents-[''] after:absolute after:w-2/5 after:bottom-[-8px] after:left-0 after:h-1 after:bg-[--dark-blue] after:rounded-md ">{work.title}</h2>
                  </div>
                  </Link>    
                )
            })
        }   
    </div>
  )
}

export default MyWork
