import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import userImage from "../assets/user.png";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      {user && (
        <>
          <li>
            <Link to="/add-product">Add Product</Link>
          </li>
          <li>
            <Link to="/my-cart">My Cart</Link>
          </li>
        </>
      )}
      {!user && (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <header className="bg-base-200">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="font-Russo_One flex items-center gap-2">
            <span className="text-5xl text-sky-500">BS</span>
            <span className="font-bold uppercase text-lg">Brand Shop</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <>
              <h4 className="font-semibold hidden md:block">
                {user.displayName}
              </h4>
              <label tabIndex={0} className="btn btn-info btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user.photoURL ? user.photoURL : userImage}
                    alt="profle image"
                  />
                </div>
              </label>
              <Link onClick={logout} to="/login" className="btn btn-info">
                logout
              </Link>
            </>
          ) : (
            <Link to="/login" className="btn btn-info">
              login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
