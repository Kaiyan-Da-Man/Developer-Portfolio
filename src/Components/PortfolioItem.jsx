import React from 'react'

export default function PortfolioItem({ title, imgURL, stack, link }) {
	return (
		// each individual Portfolio item
		<div className="bg-lightYellow-darkest/50 dark:bg-myTeal/50 rounded-md overflow-hidden hover:scale-110 ease-in duration-300">
			<a
				href={link}
				target="_blank">
				<img
					src={imgURL}
					alt="Project Image"
					className="w-full h-36 md:h-48 object-cover cursor-pointer scale-95 rounded-lg"
				/>

				{/* stack */}
				<div className="w-full p-4">
					<h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-myTeal dark:text-lightYellow ease-in duration-300">
						{title}
					</h3>
					<p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm text-myTeal dark:text-lightYellow ease-in duration-300">
						{/* iterate through stack and output each element */}
						{stack.map((item) => (
							<span className="inline-block px-2 py-1 font-semibold border-2 text-myTeal dark:text-lightYellow border-myTeal-dark dark:border-lightYellow rounded-md ease-in duration-300">
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
