import React from 'react'

const ContainerWrapper = ({backgroundTitle, content, bgColor, title}) => {
  return (
    <div className={`relative ${bgColor} px-5 md:px-12 py-16`}>
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
        <h1 className='relative text-4xl text-white font-semibold text-center py-5 after:absolute
                      after:content-[""]
                      after:bottom-0
                      after:left-[45%]
                      after:bg-[--dark-blue]
                      after:h-[3px]
                      after:w-[100px]
                      '
            >{title}
         </h1>
           {content}
        </div>
    </div>
  )
}

export default ContainerWrapper