import BlogList from "./BlogList.jsx";
import useFetch from "./useFetch.js";

const Home = () => {
    const {data: blogs, loading, error} = useFetch("http://localhost:8000/blogs")
    return (
        <div className="home">
            {error && <div> {error}</div>}
            {loading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;