import {useEffect, useState} from "react";
import BlogList from "./BlogList.jsx";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw Error("Something went wrong");
                    }
                })
                .then(data => {
                    setBlogs(data)
                    setLoading(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message)
                    setLoading(false);
                });
        }, 1000)
    }, [])

    return (
        <div className="home">
            {error && <div> {error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;