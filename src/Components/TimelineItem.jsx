import React from 'react'

export default function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-myTeal dark:border-lightYellow ease-in duration-300'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-myTeal dark:bg-lightYellow rounded-full mt-1.5 -left-1.5 border border-lightYellow dark:border-myTeal ease-in duration-300'/>
            <div className='ease-in duration-300 hover:bg-myTeal-light/50 hover:p-10 rounded-lg ease-in duration-300'>
                <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                    <span className='inline-block px-2 font-semibold text-lightYellow bg-myTeal dark:text-myTeal dark:bg-lightYellow rounded-md ease-in duration-300'>
                        {year}
                    </span>
                    <h3 className='text-lg font-semibold text-myTeal dark:text-lightYellow ease-in duration-300'>
                        {title}
                    </h3>
                    <div className='my-1 text-sm font-normal leading-none text-myTeal dark:text-lightYellow ease-in duration-300'>
                        {duration}
                    </div>
                </p>
                <p className='my-2 text-base font-normal text-myTeal dark:text-lightYellow ease-in duration-300'>
                    {details}
                </p>    
            </div>
            
        </li>
    </ol>
  )
}
