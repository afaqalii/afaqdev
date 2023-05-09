import React, { useState } from 'react'
import MyPhoto from "../assets/afaq-photo.jpg"
import  "../App.css"
import { menuItems } from '../LocalData'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
const Sidebar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const MenuItems = menuItems.map((menuItem) => {
    const { item } = menuItem
      return (
        <li className='li relative lg:static list-none text-[--light-gray] capitalize p-2 hover:text-[--dark-blue] after:content-[""] after:absolute after:bottom-0 after:left-[8px] after:bg-[--light-gray] after:opacity-10 after:h-[1px] after:w-[100%]'>
          <a href="#" className='tracking-wide'>{item}</a>
        </li>
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
          <ul className='p-4'>
          {MenuItems}
          </ul>
       </div>
       {/* sidebar Social icons section */}
       <div className="social-icons gap-x-3 flex sm:gap-x-4 px-2">
          <FaGithub className=' lg:text-2xl hover:text-[--dark-blue] text-[--light-gray]'/>
          <FaTwitter className=' lg:text-2xl hover:text-[--dark-blue] text-[--light-gray]'/>
          <FaLinkedin className=' lg:text-2xl hover:text-[--dark-blue] text-[--light-gray]'/>
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