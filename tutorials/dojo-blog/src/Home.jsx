import {useState} from "react";
import BlogList from "./BlogList.jsx";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'Blog #1', body: 'Lorem Ipsum', author: 'Mehmet', id: 1},
        {title: 'Blog #2', body: 'Lorem Ipsum', author: 'Lorem Ipsum', id: 2},
        {title: 'Blog #3', body: 'Lorem Ipsum', author: 'Mehmet', id: 3},
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs"/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'Mehmet')} title="Mehmet's Blogs"/>
        </div>
    );
}

export default Home;