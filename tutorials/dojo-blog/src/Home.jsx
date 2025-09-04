const Home = () => {
    const handleClick = () => {
        console.log("clicked");
    }

    const handleClickAgain = (name) => {
        console.log("clicked" + name);
    }

    return (
        <div className="home">
            <h2>Home</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => handleClickAgain('Mehmet')}>
                Click me again
            </button>
        </div>
    );
}

export default Home;