import {useEffect, useState} from "react";
import Personalized from "./shared/Personalized";

const Home = () => {
    const [articles, setArticles] = useState({})

    useEffect(() => {
        console.log("Loaded, getting articles ... ")
    }, [])
    return (
        <>
            <main>
                <div className="container">
                    <div className="loop-grid mb-30">
                        <div className="row">
                            <Personalized/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home