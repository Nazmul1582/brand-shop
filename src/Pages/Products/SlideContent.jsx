import PropTypes from 'prop-types'

const SlideContent = ({image, productName, price}) => {
    return (
      <div
      className="hero min-h-[80vh] bg-cover"
      style={{
        backgroundImage:
          `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className="container mx-auto">
      <div className="hero-content justify-start">
        <div className="max-w-md">
          <p className="font-semibold">Sale Offer <span className="text-red-500">-10% Off</span> This Week</p>
          <h2 className="my-5 text-5xl font-bold text-info">Top Trending {productName} 2023</h2>
          <h3 className="mb-6 font-semibold">Starting at <span className="text-red-500 font-bold text-5xl">${price}</span></h3>
          <button className="btn btn-info">Shop Now</button>
        </div>
      </div>
      </div>
    </div>
    );
};

SlideContent.propTypes = {
  image: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number
}

export default SlideContent;