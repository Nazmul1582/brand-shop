import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Brands from "./Brands";
import HotDeals from "./HotDeals";
import Services from "./Services";

const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            <Banner />
            <Services />
            <Brands />
            <HotDeals products={products} />
        </div>
    );
};

export default Home;