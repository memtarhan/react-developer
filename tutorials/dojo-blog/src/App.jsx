import './App.css'

function App() {
    const title = 'Welcome to the new blog';
    const likes = 50;
    const link = 'https://www.google.com';

    return (
        <>
            <h1>{title}</h1>
            <p>Liked {likes} times</p>

            <p> {10} </p>
            <p> {"Hello!"} </p>
            <p> {[1, 2, 3]}</p>
            <p> {Math.random() * 10} </p>


            <a href={ link }>Google</a>
        </>
    )
}

export default App
