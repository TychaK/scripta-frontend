import Personalized from "./shared/Personalized";

const Home = () => {
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