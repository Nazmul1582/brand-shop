import PropTypes from 'prop-types'

const SlideContent = ({productName, price}) => {
    return (
          <div className="max-w-md absolute top-14 left-16">
            <p className="font-semibold">
              Sale Offer <span className="text-red-500">-10% Off</span> This
              Week
            </p>
            <h2 className="mt-5 mb-6 text-5xl font-bold">
              Top Trending {productName} 2023
            </h2>
            <h3 className="mb-5 font-semibold">
              Starting at{" "}
              <span className="text-red-500 font-bold text-5xl">${price}</span>
            </h3>
            <button className="btn btn-info">Shop Now</button>
          </div>
    );
};

SlideContent.propTypes = {
  productName: PropTypes.string,
  price: PropTypes.number
}

export default SlideContent;