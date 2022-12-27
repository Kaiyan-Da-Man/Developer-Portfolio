import React from 'react'

export default function Footer() {
  return (
    <div className='py-5 text-center'>
      {/* social icons */}
      <p className='footerText text-sm mt-2 opacity-50'>
        &copy; {new Date().getFullYear()} Bryan Tang. All rights reserved.
      </p>
    </div>
  )
}