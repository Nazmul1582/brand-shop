import HotDeal from "./HotDeal";
import PropTypes from 'prop-types';


const HotDeals = ({products}) => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="mb-5">
          <h2 className="text-3xl border-b pb-3 font-bold">
            Hot <span className="text-sky-500">Deals</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {
              products.slice(0, 8).map(product => <HotDeal key={product._id} product={product} />)
            }
        </div>
      </div>
    </section>
  );
};

HotDeals.propTypes = {
  products: PropTypes.array
}

export default HotDeals;
