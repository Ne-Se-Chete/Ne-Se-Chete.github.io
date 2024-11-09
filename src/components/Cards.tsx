const projects = [
	{
		title: "AquaSense",
		description:
			"AquaSense is a project helping people find pollutions in the oceans and seas.",
		image: "src/assets/projectPictures/AquaSense.jpg",
		link: "https://github.com/Ne-Se-Chete/AquaSense-Hacktues2024",
	},
	{
		title: "SmartFoosball",
		description: "SmartFoosball tracks the score of a foosball game by detecting goals.",
		image: "src/assets/projectPictures/SmartFoosball.jpg",
		link: "https://github.com/Ne-Se-Chete/SmartFoosball-AppolicaIntern",
	},
	{
		title: "SmartBBQ",
		description: "SmartBBQ is a project for detecting how much gas is left in a gas bottle of a BBQ.",
		image: "src/assets/projectPictures/SmartBBQ.jpg",
		link: "https://github.com/Ne-Se-Chete/SmartBBQ-AppolicaIntern",
	},
	{
		title: "Cable Undefined",
		description: "Cable Undeinfed revolutionalizes the way embedded systems are wired and tracked. ",
		image: "src/assets/projectPictures/CableUndefined.jpg",
		link: "https://github.com/Ne-Se-Chete/CableUndefined-AppolicaIntern",
	},
];

const Cards = () => {
	return (
		<section id="projects">
			{/* Projects Section */}
			<div className="mt-32">
				<h2 className="text-4xl md:text-5xl mb-10 text-center font-[Press Start 2P]">
					Our Projects
				</h2>
				<div className="flex flex-wrap justify-center gap-10">
					{projects.map((project, index) => (
						<div
							key={index}
							className="bg-stone-950 border-2 border-orange-500 p-6 w-[280px] md:w-[300px] h-[520px] flex flex-col justify-between md:hover:scale-105 md:transition-transform duration-300">
							<div>
								<img
									src={project.image}
									alt={project.title}
									className="h-[200px] w-full object-fill mb-4"
								/>
								<h3 className="text-3xl mb-2 font-[Press Start 2P]">
									{project.title}
								</h3>
								<p className="text-xl mb-4 font-[Press Start 2P]">
									{project.description}
								</p>
							</div>
							<a
								href={project.link}
								className="text-orange-400 underline hover:text-orange-300">
								View Project
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Cards;
