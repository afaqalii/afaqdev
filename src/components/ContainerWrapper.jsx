import { useInView } from 'framer-motion'
import React, { useRef } from 'react'

const ContainerWrapper = ({backgroundTitle, content, bgColor, title}) => {
   
  const ref = useRef()
  const isInView = useInView(ref)


  return (
    <div id={backgroundTitle} className={`relative ${bgColor} px-5 md:px-12 py-20 md:py-40`}>
        <h1 
           className='uppercase
                      text-center 
                      opacity-10 
                      left-0 w-full 
                      absolute top-8 
                      lg:text-8xl 
                      xl:text-9xl 
                      font-bold  
                      text-[--sm-text]'
                      >
                {backgroundTitle}
          </h1>
        <div className="max-w-7xl mx-auto">
        <h1 style={{
             opacity: isInView ? 1 : 0,
             transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
        }} className='relative text-4xl text-white font-semibold text-center py-5 after:absolute
                      after:content-[""]
                      after:bottom-0
                      after:left-[35%]
                      md:after:left-[45%]
                      after:bg-[--dark-blue]
                      after:h-[3px]
                      after:w-[100px]
                      '
            >{title}
         </h1>
            <div ref={ref} style={{
               transform: isInView ? "none" : "translatey(200px)",
               opacity: isInView ? 1 : 0,
               transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }}>
                 {content}
             </div>
        </div>
    </div>
  )
}

export default ContainerWrapper