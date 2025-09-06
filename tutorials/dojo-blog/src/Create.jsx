import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mehmet');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const blog = {title, body, author}

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
            .then(res => res.json())
            .then(data => {
                console.log("New blog post was created successfully.");
                console.log(data)
                setLoading(false);
                history.push('/');
            })
            .catch(err => {
                console.log(err)
                setLoading(false);
            });
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>

                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}/>

                <label>Blog author:</label>
                <select
                    required
                    value={author}
                    onChange={e => setAuthor(e.target.value)}>
                    <option value="Mehmet">Mehmet</option>
                    <option value="Tuba">Tuba</option>
                </select>

                {!loading && <button>Add Blog</button>}
                {loading && <button disabled>Adding Blog...</button>}

            </form>
        </div>
    );
}

export default Create;