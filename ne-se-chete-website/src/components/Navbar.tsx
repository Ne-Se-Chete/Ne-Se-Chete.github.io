import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full bg-black p-4 z-50">
                <ul className="flex justify-center space-x-4 md:space-x-10 text-base md:text-2xl text-orange-400">
                    <li>
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            className="hover:text-orange-300 cursor-pointer"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="hover:text-orange-300 cursor-pointer"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="achievements"
                            smooth={true}
                            duration={500}
                            className="hover:text-orange-300 cursor-pointer"
                        >
                            Achievements
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="hover:text-orange-300 cursor-pointer"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;