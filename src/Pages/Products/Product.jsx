import { BiDollar } from "react-icons/bi";
import PropTypes from 'prop-types'

const Product = ({ product }) => {
  const { name, image, brandName, type, price, rating } = product;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Headphone" />
      </figure>
      <div className="card-body justify-center items-center">
        <h2 className="card-title">{name}!</h2>
        <p>Brand: {brandName}</p>
        <p>Category: {type}</p>
        <div className="flex items-center">Price: <BiDollar className="text-lg" /> {price}</div>
        <div className="rating my-2 mx-auto">
          {
            [...Array(parseInt(rating))].map((ele, index) => <input key={index} name="rating-2" className="mask mask-star-2 bg-orange-400" />)
          }
        </div>
        <div className="card-actions justify-center">
          <button className="btn btn-info">Details</button>
          <button className="btn btn-info btn-outline">Update</button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object
}

export default Product;
