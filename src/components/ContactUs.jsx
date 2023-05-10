import React from 'react'

const ContactUs = () => {
    // padding for input is 12 15px maring top is 24
    // bg for input & text area is 


  return (
    <div className='pt-12'>
           <h2 className='text-white font-bold text-4xl'>Lets talk :)</h2>
           <div className="flex flex-col">
            <div className="flex flex-col md:flex-row gap-3">
                <input className='py-3 px-4 sm:w-[40%] bg-[#232a31] mt-6 rounded-lg' type="text" placeholder='Name' />
                <input className='py-3 px-4 sm:w-[40%] bg-[#232a31] mt-6 rounded-lg' type="text" placeholder='Email' />
            </div>
            <textarea className='py-3 px-4 bg-[#232a31] mt-6 rounded-lg' name="msg-form" placeholder="Want to have a talk? Let's discuss" id="text-area" cols="20" rows="8"></textarea>
           </div>
           <button className='px-5 py-4 bg-[--dark-blue] rounded-[50rem] text-white font-bold mt-4'>Send Message</button>
    </div>
  )
}

export default ContactUs