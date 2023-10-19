import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import Slider from "./Slider";

const Products = () => {
  const loadedProducts = useLoaderData();
  return (
    <section>
      <div className="container mx-auto">
        <div>
          <Slider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          {
            loadedProducts.map(product => <Product key={product._id} product={product} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Products;
