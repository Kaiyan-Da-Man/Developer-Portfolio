import React from 'react'
import TimelineItem from './TimelineItem'
import timeline from '../data/timeline'
import Title from './Title'

export default function Timeline() {
  return (
    <div className='flex flex-col justify-center items-center my-20'>
      <Title>Timeline</Title>
      <div className='md:flex-row w-full md:w-7/12'>
        {timeline.map(item => (
          <TimelineItem
            year = {item.year}
            title = {item.title}
            duration = {item.duration}
            details = {item.details}
          />
        ))}  
      </div>
         
    </div>
  )
}
