import React from 'react'

export default function Intro() {
    return (
        <>
            <div className='flex flex-row'>
                <div className="flex flex-col text-myTeal dark:text-lightYellow w-fit h-screen justify-center">
                    <h1 className='text-xl md:text-3xl font-bold dark:bg-myTeal/50 bg-lightYellow-darkest/50 rounded-lg px-5 py-3 w-fit h-fit ease-in duration-300'>Hi there! I'm Bryan</h1>
                    <p className='text-base md:text-2xl font-bold mt-10 w-fit h-fit'>Software Engineer, Web Developer, and Technical Writer</p>
                    <p className='text-sm w-full md:text-2xl lg:w-1/2 font-medium mt-10'>I am a senior studying computer science at the University of North Texas.</p>
                </div>
                <div className='lg:w-1/2'>
                    <img src="/Developer-Portfolio/assets/img/selfie.png" alt="selfie" className='scale-75'/>
                </div>
                
            </div>
        </>
        
    )
}