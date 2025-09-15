import reactLogo from "./assets/react.svg";

const Navbar = () => {
    return (
        <header>
            <nav>
                <img src={reactLogo} className="header-image" alt="React logo"/>
                <span>ReactFacts</span>
            </nav>
        </header>
    )
}

export default Navbar;