import React from 'react'
import { bioData } from '../LocalData'

const AboutMe = () => {

    const BioTable = bioData.map((data) => {
          const {title, content, id} = data
        return (
                <tr key={id} className="ml-5 mb-3 h-[40px]">
                    <th className='text-white w-[64px]'>{title}:</th>
                    <td className='text-white'>{content}</td>
                </tr>
        )
    })


  return (
    <div className='my-12'>
        {/* know me more content start from here */}
        <div className="flex flex-col mt-12 lg:flex-row">
            <div  className="text-center lg:text-left">
                <h1 className='text-white text-3xl mb-4 font-bold'>I'm  
                      <span className='text-[--dark-blue] ml-1'>Afaq</span>,
                     a Web Developer</h1>
                <p className='px-2 sm:px-0 mb-4 text-[--sm-text]'>Hi there! My name is Afaq, and I am a front-end developer. As a passionate developer, I specialize in creating visually appealing and user-friendly websites and applications that meet the needs of clients and end-users. My skillset includes proficiency in HTML, CSS, JavaScript, and various front-end frameworks, such as React.</p>
                <p className='px-2 sm:px-0 mb-4 text-[--sm-text]'>I believe in staying up-to-date with the latest technologies and trends in the industry to ensure that I am providing the best solutions possible.</p>
            </div>
            <div className="mt-[3.5rem] pl-5">
                {BioTable}
                <button className='bg-[--dark-blue] text-white py-3.5 px-11 rounded-[50rem]'>Download CV</button>
            </div>
        </div>
    </div>
  )
}

export default AboutMe