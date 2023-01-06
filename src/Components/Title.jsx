import React from 'react'

export default function Title({ children, id}) {
  return (
    <h1 
        id={id && id}
        className='text-xl md:text-7xl font-bold dark:bg-myTeal/50 bg-lightYellow-darkest/50 text-myTeal dark:text-lightYellow rounded-lg px-5 py-3 w-fit h-fit my-10'
    >
        {children}    
    </h1>
  )
}
