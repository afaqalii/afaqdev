import React from 'react'

const ContainerWrapper = ({backgroundTitle, content}) => {
  return (
    <div className='relative'>
        <h1>{backgroundTitle}</h1>
        <div className="max-w-7xl mx-auto border-2 border-black">
           {/* here goes all the content of different components */}
        </div>
    </div>
  )
}

export default ContainerWrapper