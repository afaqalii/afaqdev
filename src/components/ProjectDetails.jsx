import React, { useState } from 'react'
import { MyWorkData } from '../LocalData'
import {BsArrowLeftCircleFill} from "react-icons/bs"
import { useParams } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'
export const ProjectDetails = () => {

   const [loading, setLoading] = useState(true)
   const {projectId}  = useParams()
  const projectDetail = MyWorkData.filter(project => {
        return  project.id == projectId 
        
  })

return (
  <div className='bg-[--dark-black]'>
    <div className='relative w-4/5 mx-auto p-10 bg-[--light-black]'>
       <Link to="/#portfolio">
        <BsArrowLeftCircleFill className=' absolute top-[30px] left-[20px] cursor-pointer text-4xl text-white'/>
       </Link>
       <h1 className='text-center text-3xl font-bold'>{projectDetail[0]?.title}</h1>
       <div className="flex flex-col lg:flex-row py-10 gap-5">
            <div className="flex justify-center w-3/5">
                <img className='h-[600px]' src={projectDetail[0]?.img} alt="" />
            </div>
            <div className="w-2/5 flex flex-col gap-5">
                <h2 className='text-2xl'>{projectDetail[0]?.projectInfoTitle}</h2>
                <p className='text-[--sm-text] lg:pr-3'>{projectDetail[0]?.projectInfo}</p>
                <h2 className='text-xl'>{projectDetail[0]?.projectDetailsTitle}</h2>
                {/* iterating over an array */}
              {
                projectDetail[0]?.projectDetails?.map((project) => {
                    const {title, content} = project
                  return (
                    <div className="flex gap-4">
                      <p className='text-[--sm-text]'>{title}:</p>
                      <p className='text-[--sm-text]'>{content}</p>
                    </div>
                  )
                })
              }
            </div>
       </div>
    </div>
</div>
  )
}
