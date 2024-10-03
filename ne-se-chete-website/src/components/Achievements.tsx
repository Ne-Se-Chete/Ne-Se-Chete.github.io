const achievements = [
	{
		title: "TUES Fest 2024",
		image: "src/assets/achievements/TUESFest.png",
	},
	{
		title: "HackTUES 2024",
		image: "src/assets/achievements/HackTUES.png",
	},
	{
		title: "Robo Days 2024",
		image: "src/assets/achievements/RoboDays.png",
	},
];

const Achievements = () => {
	return (
		<section id="achievements">
			{/* Projects Section */}
			<div className="mt-32">
				<h2 className="text-4xl md:text-5xl mb-10 text-center font-[Press Start 2P]">
					Achievements
				</h2>
				<div className="flex flex-wrap justify-center gap-10">
					{achievements.map((achievement, index) => (
						<div
							key={index}
							className="p-6 w-[280px] md:w-[300px] h-[470px] flex flex-col justify-between md:hover:scale-105 md:transition-transform duration-300">
							<div>
								<h3 className="text-3xl mb-2 font-[Press Start 2P]">
									{achievement.title}
								</h3>
								<img
									src={achievement.image}
									alt={achievement.title}
									className="h-[350px] w-full object-fill mb-4"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Achievements;
