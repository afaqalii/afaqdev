import React, { useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import "../App.css"
import { useInView } from 'framer-motion'
const Header = () => {
  
  const ref = useRef()
  const isInView = useInView(ref)

  return (
    <>
    <div id='home' ref={ref} 
       className="header relative bg-[--dark-black] after:content-[''] after:absolute after:top-0 after:left-0 after:h-[100%]  bg-cover bg-center bg-fixed h-screen">
        <div style={{
              //  transform: isInView ? "top-1/2" : "none",
               opacity: isInView ? 1 : 0,
               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}
         className={`absolute z-[1] ${isInView ? "top-1/2":""} left-1/2 translate-x-[-50%] translate-y-[-50%] w-[100%] text-center text-[--white]`}>
            <h2 className='text-[28px] font-medium mb-6'>Welcome</h2>
            <h1 className='text-4xl sm:text-5xl xl:text-[64px] font-semibold'>I'm a Front-end developer.</h1>
            <h4 className='text-[21px] font-extralight my-4'>based in Peshawar, Pakistan</h4>
            <Link to="/#contact">
              <button className='py-3.5 px-11 mt-2 font-semibold border-2 rounded-[50rem] border-[--dark-blue] text-[--dark-blue] hover:text-white  hover:bg-[--dark-blue]  duration-700 '>Hire me </button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default Header