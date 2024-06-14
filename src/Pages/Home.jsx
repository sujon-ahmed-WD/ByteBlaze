import Hero from "../Components/Nav/Hero";
 
import wev from'../assets/wave.svg'
 
const Home = () => {
    return (
        <div className="flex relative flex-col items-center justify-center min-h-[calc(100vh-116px)]">
            
            <Hero/>
            <img className="absolute bottom-0  w-full" src={wev} alt="" />
             
        </div>
    );
};

export default Home;