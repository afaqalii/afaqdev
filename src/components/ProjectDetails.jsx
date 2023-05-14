import React, { useState } from 'react';
import { MyWorkData } from '../LocalData';
import {BsArrowLeftCircleFill} from "react-icons/bs";
import { useParams } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { HashLink as Link } from 'react-router-hash-link';
import { Carousel } from 'react-responsive-carousel';
export const ProjectDetails = () => {

   const [loading, setLoading] = useState(true)
   const [link, setLink] = useState(false)
   const {projectId}  = useParams()

   const projectDetail = MyWorkData.filter(project => {
         return  project.id == projectId 
     })

     

console.log(link)
return (
  <div className='bg-[--dark-black]'>
    <div className='relative md:w-4/5 md:mx-auto p-5 sm:p-10 bg-[--light-black]'>
       <Link to="/#portfolio">
        <BsArrowLeftCircleFill className=' absolute top-[30px] left-[20px] cursor-pointer text-2xl md:text-4xl text-white'/>
       </Link>
       <h1 className='text-center text-3xl font-bold'>{projectDetail[0]?.title}</h1>
       <div className="flex flex-col lg:flex-row py-10 gap-5">
            <div className="flex lg:justify-center w-full sm:w-4/5  md:w-3/5">
                <Carousel>
                    {
                      projectDetail[0]?.imageCarousel.map((img) => {
                            return (
                              <img src={img} className='' alt='images carousel' />
                            )   
                      })
                    }
                </Carousel>
                {/* <img className='h-[600px]' src={projectDetail[0]?.img} alt="" /> */}
            </div>
            <div className="lg:w-2/5 flex flex-col gap-5">
                <h2 className='text-2xl'>{projectDetail[0]?.projectInfoTitle}</h2>
                <p className='text-[--sm-text] lg:pr-3'>{projectDetail[0]?.projectInfo}</p>
                <h2 className='text-xl'>{projectDetail[0]?.projectDetailsTitle}</h2>
                {/* iterating over an array */}
              {
                projectDetail[0]?.projectDetails?.map((project, index) => {
                    const {title, content} = project
                  return (
                    <div key={index} className="flex gap-1 sm:gap-4">
                      <p className='text-[--sm-text]'>{title}:</p>
                      <p onClick={() => setLink(title === "Technologies" || title === "Industry" ? false : true )}  className={`text-[--sm-text] ${title === "Technologies" || title === "Industry" ? 'font-normal' : 'font-bold capitalize'} text-white`}><a href={link ? `https://${content}` : '#'} target={`${link ? '_blank' : ''}`}  >{content}</a></p>
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