// loader
import {useLoaderData} from "react-router-dom";

const DashboardPage = () => {
    const {username} = useLoaderData()

    return (
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default DashboardPage