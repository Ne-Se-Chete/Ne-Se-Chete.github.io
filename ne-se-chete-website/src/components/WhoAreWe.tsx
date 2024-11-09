const team = [
	{
		title: "Yasen",
		description: "Embedded",
		image: "src/assets/teamMembersPictures/Yasen.png",
	},
	{
		title: "Emil",
		description: "Backend",
		image: "src/assets/teamMembersPictures/Emo.png",
	},
	{
		title: "Borislav",
		description: "Backend and Frontend",
		image: "src/assets/teamMembersPictures/Bobi.png",
	},
	{
		title: "Valeri",
		description: "Frontend",
		image: "src/assets/teamMembersPictures/valeri.png",
	},
	{
		title: "Tomislav",
		description: "Frontend/Backend",
		image: "src/assets/teamMembersPictures/Tomi.jpg",
	},
	{
		title: "Simeon",
		description: "Frontend",
		image: "src/assets/teamMembersPictures/Moni.jpg",
	},
];

const WhoAreWe = () => {
	return (
		<>
			<div className="mt-24">
				<h1 className="text-4xl md:text-5xl mb-10 text-center font-[Press Start 2P]">
					Who are we?
				</h1>
				<div className="flex flex-wrap justify-center gap-10">
					{team.map((team, index) => (
						<div
							key={index}
							className="relative bg-stone-950 border-2 border-orange-500 h-[300px] w-[300px] rounded-full md:hover:scale-105 md:transition-transform duration-300 overflow-hidden group">
							<img
								src={team.image}
								alt={team.title}
								className="h-full w-full object-cover rounded-full transition-opacity duration-300 group-hover:opacity-50"
							/>
							<div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<h3 className="text-3xl mb-2 font-[Press Start 2P] text-center">
									{team.title}
								</h3>
								<p className="text-xl font-[Press Start 2P] text-center">
									{team.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default WhoAreWe;
