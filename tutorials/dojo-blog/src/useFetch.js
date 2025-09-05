import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortController.signal})
                .then(res => {
                    console.log('fetching json', res);

                    if (res.ok) {
                        return res.json();
                    } else {
                        throw Error("Something went wrong");
                    }
                })
                .then(data => {
                    console.log('fetching data', data);

                    setData(data)
                    setLoading(false);
                    setError(null);
                })
                .catch(err => {
                    console.log('Error fetching data', err);
                    if (err.name !== 'AbortError') {
                        setError(err.message)
                        setLoading(false);
                    }
                });
        }, 1000)

        return () => {
            abortController.abort();
        }
    }, [url])

    return {data, loading, error}
}

export default useFetch;