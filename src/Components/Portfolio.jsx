import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

export default function Portfolio() {
  return (
    <>
      <div className='flex flex-col items-start text-myTeal dark:text-lightYellow'>
        <h1 className='text-xl md:text-7xl font-bold dark:bg-myTeal/50 bg-lightYellow-darkest/50 rounded-lg px-5 py-3 w-fit h-fit my-10 self-center'>Projects</h1>
        {/* <div className='flex flex-row gap-10 justify-between w-full'>
          <div>picture</div>
          <div>something</div>
        </div>
        <div className='flex flex-row gap-10 justify-between w-full'>
          <div>something</div>
          <div>picture</div>
        </div>
        <div className='flex flex-row gap-10 justify-between w-full'>
          <div>picture</div>
          <div>something</div>
        </div>
        <div className='flex flex-row gap-10 justify-between w-full'>
          <div>something</div>
          <div>picture</div>
        </div>
        <div className='flex flex-row gap-10 justify-between w-full'>
          <div>picture</div>
          <div>something</div>
        </div>
        <div className='flex flex-row gap-10 justify-between w-full'>
          <div>something</div>
          <div>picture</div>
        </div> */}
        
        {portfolio.map(project => (
          <PortfolioItem 
            title={project.title}
            imgURL={project.imgURL}
            stack={project.stack}
            link={project.link}
          />
        ))}  
      </div>
    </>
  )
}