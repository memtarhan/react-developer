import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw Error("Something went wrong");
                    }
                })
                .then(data => {
                    setData(data)
                    setLoading(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message)
                    setLoading(false);
                });
        }, 1000)
    }, [url])

    return {data, loading, error}
}

export default useFetch;