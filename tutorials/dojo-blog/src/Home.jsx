import {useEffect, useState} from "react";
import BlogList from "./BlogList.jsx";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Blog #1', body: 'Lorem Ipsum', author: 'Mehmet', id: 1},
        {title: 'Blog #2', body: 'Lorem Ipsum', author: 'Lorem Ipsum', id: 2},
        {title: 'Blog #3', body: 'Lorem Ipsum', author: 'Mehmet', id: 3},
    ]);

    const [name, setName] = useState("Mehmet");

    useEffect(() => {
        console.log(name);
    }, [name])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <p>{name}</p>
            <button onClick={() => {
                setName("Tuba");
            }}>Change Name
            </button>
        </div>
    );
}

export default Home;