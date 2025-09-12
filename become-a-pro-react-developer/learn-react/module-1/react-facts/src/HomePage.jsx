import reactLogo from "./assets/react.svg";

const HomePage = () => {
    return (
        <div>
            <header>
                <img src={reactLogo} className="logo react" alt="React logo"/>
            </header>

            <div>
                <h1>Reasons I am excited...</h1>
            <ol>
                <li>
                    React is a popular library, so I will be able to fit in with all the coolest devs otu there!
                </li>
                <li>
                    I am more likely to get this done!
                </li>
            </ol>
            </div>
            <footer>
                <small>© 2025 Mehmet Tarhan. All rights reserved.</small>
            </footer>
        </div>
    )
}

export default HomePage