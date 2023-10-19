import Banner from "./Banner";
import Brands from "./Brands";
import HotDeals from "./HotDeals";
import Services from "./Services";

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Brands />
            <HotDeals />
        </div>
    );
};

export default Home;