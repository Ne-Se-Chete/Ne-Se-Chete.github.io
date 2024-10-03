import { FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<footer
				id="contact"
				className="flex flex-wrap md:flex-row h-[100px] md:h-[130px] w-[90%] justify-center md:justify-between items-end text-white">
				<p className="h-8 text-center">
					© 2024 Ne Se Chete. All rights reserved.
				</p>
				<div className="flex flex-row space-x-8 h-8">
					<p className="h-8 text-center">
						Gmail: info@nesechete.com
					</p>
					<a href="https://github.com/Ne-Se-Chete">
						<FaGithub color="#f97316" size={25}></FaGithub>
					</a>
				</div>
			</footer>
			<div className="h-10"></div>
		</>
	);
};

export default Footer;
