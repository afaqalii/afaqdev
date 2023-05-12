import React from 'react'
import {} from "react-icons"
import { FaCross } from 'react-icons/fa'
import Movix from "../assets/Movix.png"
export const ProjectDetails = () => {
        
    return (
    <div className='relative w-4/5 mx-auto p-10 bg-[--light-black] border-2 border-white'>
       <h1 className='text-center text-3xl'>Project Title</h1>
       <FaCross className='absolute right-[30px] top-[20px] ' />
       <div className="flex flex-col lg:flex-row border-2 border-white">
            <div className="w-3/5">
                <img src={Movix} alt="" />
            </div>
            <div className="w-2/5 flex flex-col gap-5">
                <h2 className='text-2xl'>Project name</h2>
                <p className='text-[--sm-text] lg:pr-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eligendi at quod maxime hic, ipsum, labore soluta nulla quibusdam sunt, veniam dolore nemo voluptatem amet atque obcaecati illo iure repudiandae.</p>
                <h2 className='text-xl'>Project Details</h2>
                {/* iterating over an array */}
            <div className="flex gap-4">
                    <p className='text-[--sm-text]'>Name:</p>
                    <p className='text-[--sm-text]'>Blogging app</p>
            </div>
            </div>
       </div>
    </div>
  )
}
