import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'

export default function Portfolio() {
  return (
    <>
      <div className='flex flex-col items-center justify-center text-myTeal dark:text-lightYellow'>
        <h1 className='text-xl md:text-7xl font-bold dark:bg-myTeal/50 bg-lightYellow-darkest/50 rounded-lg px-5 py-3 w-fit h-fit my-10'>Projects</h1>
        <div className='md:flex-row'>
          <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {portfolio.map(project => (
              <PortfolioItem 
                title={project.title}
                imgURL={project.imgURL}
                stack={project.stack}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}