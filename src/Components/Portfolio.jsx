import React from 'react'
import portfolio from '../data/portfolio'
import PortfolioItem from './PortfolioItem'
import Title from './Title'

export default function Portfolio() {
	return (
		<>
			<div className="flex flex-col items-center justify-center text-myTeal dark:text-lightYellow">
				<Title>Projects</Title>
				<div className="md:flex-row">
					<div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{portfolio.map((project) => (
							<PortfolioItem
								title={project.title}
								imgURL={project.imgURL}
								stack={project.stack}
								link={project.link}
								key={project.title}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	)
}
