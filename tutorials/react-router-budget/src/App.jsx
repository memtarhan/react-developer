import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import {dashboardLoader} from "./pages/DashboardLoader.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardPage/>,
        loader: dashboardLoader,
        errorElement: <ErrorPage/>
    },
])

function App() {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
