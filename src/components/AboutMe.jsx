import React from 'react'
import { bioData } from '../LocalData'

const AboutMe = () => {

    const BioTable = bioData.map((data) => {
          const {title, content, id} = data
        return (
                <div key={id} className="relative ml-5 flex items-center after:absolute after:contents-[''] after:w-full after:h-[.1px] after:bg-[--sm-text] after:left-0 after:bottom-0  ">
                    <h4 className='text-white font-bold py-2'>{title}:</h4>
                    <h4 className='text-white ml-2'>{content}</h4>
                </div>
        )
    })


  return (
    <div className='my-12'>
        {/* know me more content start from here */}
        <div className="flex flex-col gap-5 mt-12 lg:flex-row">
            <div  className="text-center lg:text-left lg:w-2/3">
                <h1 className='text-white text-3xl mb-4 font-bold'>I'm <span className='text-[--dark-blue]'>Afaq</span>, a Web Developer</h1>
                <p className='px-2 sm:px-0 mb-4 text-[--sm-text]'>Hi there! My name is Afaq, and I am a front-end developer. As a passionate developer, I specialize in creating visually appealing and user-friendly websites and applications that meet the needs of clients and end-users. My skillset includes proficiency in HTML, CSS, JavaScript, and various front-end frameworks, such as React.</p>
                <p className='px-2 sm:px-0 mb-4 text-[--sm-text]'>I believe in staying up-to-date with the latest technologies and trends in the industry to ensure that I am providing the best solutions possible.</p>
            </div>
            <div className="pl-2 flex flex-col gap-2 lg:w-2/5">
                {BioTable}
                <button className='bg-[--dark-blue] ml-5 mt-2 text-white py-3 px-9 rounded-[50rem] max-w-max'>Download CV</button>
            </div>
        </div>
    </div>
  )
}

export default AboutMe