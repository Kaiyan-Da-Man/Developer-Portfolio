import React from 'react'

export default function PortfolioItem({ title, imgURL, stack, link }) {
  return (
    // each individual Portfolio item
    <div className='border-2 border-stone-900 rounded-md overflow-hidden'>
        <a href={link} target='_blank'>
           <img 
                src={imgURL} 
                alt="Project Image"
                className='w-full h-36 md:h-48 object-cover cursor-pointer'
            />

            {/* stack */}
            <div className='w-full p-4'>
                <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                    {/* iterate through stack and output each element */}
                    {stack.map(item => (
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md'>
                            {item}
                        </span>
                    ))}
                </p>
            </div> 
        </a>
        {/* Image */}
        
    </div>
  )
}
