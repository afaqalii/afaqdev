import React, { useRef, useState } from 'react'
import MyPhoto from "../assets/afaq-photo.jpg"
import  "../App.css"
import { menuItems } from '../LocalData'
import { FaDesktop, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { HashLink as Link } from "react-router-hash-link"
const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  
  const MenuItems = menuItems.map((menuItem) => {
    const { item, id } = menuItem
      return (
        <Link to={`#${item}`}>
          <li key={id} className='li leading-7 relative lg:static list-none text-[--light-gray] capitalize p-2 hover:text-[--dark-blue] after:content-[""] after:absolute after:bottom-0 after:left-[8px] after:bg-[--light-gray] after:opacity-10 after:h-[1px] after:w-[100%]'>
            <a href="#" className='tracking-wide'>{item}</a>
          </li>
        </Link>
      )
    })
   
  return (
    <div className='fixed z-[2] lg:z-[0] w-[100%] flex bg-[--dark-black] items-center justify-between px-3 py-4 lg:flex-col  lg:min-h-full  lg:w-[260px]'>
       {/* sidebar Profile Photo section */}
       <div>
          <div className="hidden border-solid w-[160px] h-[170px] border-8 border-[#343A40] rounded-[50%]  lg:flex flex-col items-center  mt-6 ">
             <img src={MyPhoto} className='flex rounded-[50%] w-[100%] h-[100%] object-cover ' alt="My Photo" />
          </div>
          <h1 className="text-[21px] lg:mt-3 font-bold text-white text-center">Muhammad Afaq</h1>
       </div>
       {/* sidebar Menu Items section */}
       <div className={`${toggleMenu ? 'absolute' : 'hidden' }  lg:mt-[-4rem] bg-black  lg:bg-transparent lg:text-center w-[100%] left-0 top-16 lg:flex flex-col`}>
          <ul className='p-4 cursor-pointer'>
          {MenuItems}
          </ul>
       </div>
       {/* sidebar Social icons section */}
       <div className="social-icons gap-x-3 flex sm:gap-x-4 px-2">
          <a href="https://github.com/afaqalii" target='_blank'><FaGithub   href=''  className=' lg:text-2xl hover:text-[--dark-blue] text-[--light-gray]'/></a>
          <a href="https://twitter.com/AfaqAli11459079" target='_blank'><FaTwitter  href=''  className=' lg:text-2xl hover:text-[--dark-blue] text-[--light-gray]'/></a>
          <a href="https://www.linkedin.com/in/afaqalii/" target='_blank'><FaLinkedin   className=' lg:text-2xl hover:text-[--dark-blue] text-[--light-gray]'/></a>
       </div>
       {/* sidebar MENU BUTTON */}
        <div className='flex flex-col gap-1 navbar-toggler lg:hidden' onClick={() => setToggleMenu(prevState => !prevState)}>
          <span className={`${toggleMenu ? 'active': ""} `}></span>
          <span className={`${toggleMenu ? 'active': ""} `}></span>
          <span className={`${toggleMenu ? 'active': ""} `}></span>
        </div>
    </div>
  )
}

export default Sidebar