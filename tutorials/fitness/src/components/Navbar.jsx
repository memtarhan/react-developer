import {FaDumbbell, FaMoon, FaSun} from "react-icons/fa";
import {useState} from "react";

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <header>
            <div className="container flex items-center justify-between px-8- py-4">
                { /* Logo section */}
                <div className="flex items-center gap-2">
                    <FaDumbbell className="text-orange-400 text-2xl"/>
                    <h1 className="text-xl font-bold">Fitness</h1>
                </div>
                { /* Links section */}
                <nav className="hidden md:flex gap-8 font-medium">
                    <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300">
                        Home
                    </a>
                    <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300">
                        Features
                    </a>
                    <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300">
                        Pricing
                    </a>
                    <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300">
                        Testimonials
                    </a>
                    <a href="/" className="hover:text-orange-400 text-neutral-400 dark:text-neutral-300">
                        Home
                    </a>
                </nav>
                { /* Theme toggle section */}
                <button onClick={() => {
                    setDarkMode(!darkMode);
                }}>
                    {""}
                    {darkMode ?
                        (<FaMoon className="text-yellow-400 text-lg"></FaMoon>) :
                        (<FaSun className="text-gray-800 dark:text-gray-200 text-lg"></FaSun>)
                    }
                </button>

            </div>
        </header>
    );
}

export default Navbar;