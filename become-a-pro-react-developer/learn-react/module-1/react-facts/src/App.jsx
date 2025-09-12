import reactLogo from './assets/react.svg'

function App() {

    return (
        <>
            <div>
                <img src={reactLogo} className="logo react" alt="React logo"/>
                <h1>React Facts</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walker</li>
                    <li>Has well over 200k stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </>
    )
}

export default App
