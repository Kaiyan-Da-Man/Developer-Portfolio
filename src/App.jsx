import React, { useState, useEffect } from 'react'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Intro from './Components/Intro'
import Portfolio from './Components/Portfolio'
import Timeline from './Components/Timeline'

function App() {
	const [theme, setTheme] = useState(null)

	// onload
	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark')
		} else {
			setTheme('light')
		}
	}, [])

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	// onchange
	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme])

	const sun = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-8 h-8">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
			/>
		</svg>
	)

	const moon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={1.5}
			stroke="currentColor"
			className="w-8 h-8">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
			/>
		</svg>
	)

	return (
		<>
			<button
				type="button"
				onClick={handleThemeSwitch}
				className="fixed p-2 z-10 bottom-10 right-10 bg-myTeal dark:bg-lightYellow text-lg rounded-full">
				{theme === 'dark' ? sun : moon}
			</button>
			<div className="bg-[url('/Developer-Portfolio/assets/img/mountain_landscape9_generated_adobe_express.svg')] bg-cover text-stone-900 min-h-screen font-inter">
				<div className='bg-gradient-to-r from-lightYellow dark:from-myTeal-darkest'>
					<div className="max-w-full w-10/12 mx-auto">
						<Intro />
					</div>
				</div>
			</div>
			<div className="bg-lightYellow dark:bg-myTeal-darkest text-stone-900 min-h-screen font-inter">
				<div className="max-w-full w-10/12 mx-auto">
					<Portfolio />
					<Timeline />
					<Contact />
					<Footer />
				</div>
			</div>
		</>
	)
}

export default App
