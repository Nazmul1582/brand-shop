import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import Slider from "./Slider";

const Products = () => {
  const loadedProducts = useLoaderData();
  return (
    <section>
      <Slider />
      <div className="container mx-auto">
        {loadedProducts.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-20">
            {loadedProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20">
            <h2 className="text-3xl font-bold text-center">
              There is no product available of this brand, Now!
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
