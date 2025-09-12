import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const MainComponent = () => {
    return (
        <div>
            <h1>Reasons I am excited...</h1>
            <ol>
                <li>
                    React is a popular library, so I will be able to fit in with all the coolest devs otu there!
                </li>
                <li>
                    I am more likely to get this done!
                </li>
            </ol>
        </div>
    )
}
const HomePage = () => {
    return (
        <div>
            <Header/>
            <MainComponent/>
            <Footer/>
        </div>
    )
}

export default HomePage