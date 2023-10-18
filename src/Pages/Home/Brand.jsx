import { Link } from "react-router-dom";

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

export default Brand;
