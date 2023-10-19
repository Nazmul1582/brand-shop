import { useLoaderData } from "react-router-dom";

const MyCart = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            My Cart
        </div>
    );
};

export default MyCart;