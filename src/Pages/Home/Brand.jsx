import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Brand = ({ brand }) => {
  const { name, logo } = brand;
  return (
    <Link to="/products" className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 flex-grow">
        <img src={logo} alt={`logo of ${name}`} className="rounded-xl" />
      </figure>
      <div className="p-3">
        <h2 className="card-title justify-center">{name}</h2>
      </div>
    </Link>
  );
};

Brand.propTypes = {
  brand: PropTypes.object
}

export default Brand;
