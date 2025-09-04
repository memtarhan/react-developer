import {useState} from "react";

const Home = () => {
    const handleClick = () => {
        console.log("clicked");
    }

    const handleClickAgain = (name) => {
        console.log("clicked" + name);
    }

    const [name, setName] = useState("Mehmet");

    const handleChangeName = () => {
        setName("Tuba");
    }

    return (
        <div className="home">
            <h2>Home</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('Mehmet')}>
                Click me again
            </button>
            <div>
                <h2>{name}</h2>
                <button onClick={handleChangeName}>Change Name</button>
            </div>
        </div>
    );
}

export default Home;