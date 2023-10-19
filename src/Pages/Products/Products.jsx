import Product from "./Product";
import Slider from "./Slider";

const Products = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div>
          <Slider />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </section>
  );
};

export default Products;
