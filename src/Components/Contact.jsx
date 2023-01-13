import React from 'react'
import Title from './Title'

export default function Contact() {
	return (
		<div className="flex flex-col mb-10 mx-auto">
			<div className="flex flex-col justify-center items-center">
				<Title>Contact</Title>
				<form
					action="https://getform.io/f/9c257022-8633-47a1-8c5e-82d0b4ba8922"
					method="POST"
					className="flex flex-col w-full md:w-5/12">
					<input
						type="text"
						name="name"
						placeholder="Name"
						className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-myTeal-light dark:border-lightYellow-dark ease-in duration-300"
					/>
					<input
						type="text"
						name="email"
						placeholder="Email"
						className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none border-myTeal-light dark:border-lightYellow-dark ease-in duration-300"
					/>
					<textarea
						name="message"
						placeholder="Message"
						rows="10"
						className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none border-myTeal-light dark:border-lightYellow-dark ease-in duration-300"
					/>
					<button
						type="submit"
						className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-lightYellow dark:text-myTeal-dark bg-gradient-to-r from-myTeal-light to-myTeal-darkest dark:from-lightYellow-light dark:to-lightYellow-darkest drop-shadow-md hover:stroke-white ease-in duration-300">
						Work With Me
					</button>
				</form>
			</div>
		</div>
	)
}
