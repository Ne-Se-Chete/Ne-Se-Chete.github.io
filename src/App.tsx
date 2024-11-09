import "./App.css";
import Navbar from "./components/Navbar";
import LogoAndText from "./components/LogoAndText";
import Cards from "./components/Cards";
import WhoAreWe from "./components/WhoAreWe";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-black flex flex-col items-center md:w-full text-orange-500 font-mono">
			<Navbar />
			<div className="flex flex-col h-screen justify-center">
				<LogoAndText />
			</div>
			<Cards />
			<WhoAreWe />
			<Achievements />
			<Footer />
		</div>
	);
}

export default App;
