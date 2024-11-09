const achievements = [
	{
		title: "TUES Fest 2024",
		image: "src/assets/achievements/TUESFest.png",
		w: 0
	},
	{
		title: "Robo Days 2024",
		image: "src/assets/achievements/RoboDays.png",
		w: 0
	},
	{
		title: "Бъдещи инженери на България 2024",
		image: "src/assets/achievements/RobStratForum.jpg",
		w: 0
	},
	{
		title: "HackTUES 2024",
		image: "src/assets/achievements/HackTUES2.jpg",
		w: 1
	},
	{
		title: "Para Robotics Incubator 2024",
		image: "src/assets/achievements/PARAi.jpg",
		w: 1
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
				<div className="flex flex-wrap justify-center gap-10 xl:gap-12">
					{achievements.map((achievement, index) => (
						<div
							key={index}
							className={`p-6 ${achievement.w === 1 ? "w-[420px]" : "w-[290px] md:w-[320px] h-[470px]"} flex flex-col justify-between md:hover:scale-105 md:transition-transform duration-300`}>
							<div>
								<h3 className="text-2xl h-[64px] mb-2 font-[Press Start 2P]">
									{achievement.title}
								</h3>
								<img
									src={achievement.image}
									alt={achievement.title}
									className={achievement.w === 1 ? " w-full object-cover mb-4" : "h-[350px] w-full object-contain mb-4"}
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
